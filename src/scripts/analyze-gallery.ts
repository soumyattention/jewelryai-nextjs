
import fs from 'fs';
import path from 'path';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { photoItems } from '../lib/gallery-data';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// Load env vars
dotenv.config();

// Determine current directory for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
// User requested newer model
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

const OUTPUT_FILE = path.join(process.cwd(), 'src/data/gallery-seo.json');

// Interface for content
interface SEOContent {
    id: number;
    originalSrc: string;
    title: string;
    description: string;
    tags: string[];
    attributes: {
        material: string;
        gemstone: string;
        style: string;
        occasion: string;
    };
    alt_text: string;
    slug: string;
}

// Load existing data
let existingData: Record<number, SEOContent> = {};
if (fs.existsSync(OUTPUT_FILE)) {
    const fileContent = fs.readFileSync(OUTPUT_FILE, 'utf-8');
    try {
        const json = JSON.parse(fileContent);
        // Convert array to map or keep as array
        if (Array.isArray(json)) {
            json.forEach((item: SEOContent) => {
                existingData[item.id] = item;
            });
        }
    } catch (e) {
        console.error("Error reading existing data", e);
    }
}

async function downloadImage(url: string): Promise<Buffer> {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
}

async function analyzeImage(item: typeof photoItems[0]) {
    console.log(`Analyzing item ${item.id}: ${item.src}`);

    try {
        const imageBuffer = await downloadImage(item.src);

        const prompt = `
    Analyze this jewelry image for an "AI Jewelry Photography" portfolio website. 
    The goal is to rank for keywords related to **AI Jewelry, AI Photography, AI Editorial, and Virtual Fashion**.

    **Mandatory Keyword Strategy**:
    - **Primary**: "AI Jewelry Photography", "AI Generated Jewelry", "High-End AI Editorial", "Virtual Jewelry Studio", "Generative Fashion", "AI Model for Jewelry", "AI Jewelry Model".
    - **Secondary**: "Virtual Try-On", "Jewelry CGI", "Generative CAD", "AI Product Photography", "Automated Jewelry Photography", "Virtual Prototyping".
    
    **Instructions**:
    1. **Title**: Create a compelling title that searches well for "AI Jewelry" (e.g., "AI Model Wearing Gold Necklace - Virtual Studio" or "Generative AI Jewelry Photography: Diamond Ring").
    2. **Description**: Write a 100-150 word description. Explicitly mention that this image is an example of "AI Jewelry Photography" or features an "AI Jewelry Model" (if applicable). Explain the benefits: cost reduction, perfect lighting, infinite variations.
    3. **Tags**: Include at least 8-10 tags. Mix the specific item tags (e.g., "gold ring") with the AI strategy tags (e.g., "AI Jewelry Model", "Virtual Photography", "Jewelry CGI").

    Return ONLY a valid JSON object with:
    {
      "title": "Title string",
      "description": "Description string",
      "tags": [
        "AI Jewelry Photography",
        "AI Jewelry Model",
        "Virtual Jewelry Studio",
        "Jewelry CGI",
        "Generative Fashion",
        "AI Product Photography",
        "Virtual Try-On",
        // ... plus specific item tags
      ],
      "attributes": {
        "material": "e.g. Gold, Silver",
        "gemstone": "e.g. Diamond, Emerald",
        "style": "e.g. Vintage, Modern",
        "occasion": "e.g. Editorial, Campaign"
      },
      "alt_text": "Photorealistic AI generated image of [details], highlighting the [specific feature], AI jewelry photography style.",
      "slug": "ai-jewelry-[model/photography]-[brief-desc]-${item.id}"
    }

    IMPORTANT: The slug MUST start with 'ai-jewelry-' and include 'model' if a person is visible, otherwise 'photography', and MUST include ID ${item.id}.
    `;

        const result = await model.generateContent([
            prompt,
            {
                inlineData: {
                    data: imageBuffer.toString('base64'),
                    mimeType: "image/jpeg" // Generic mime type, API handles it well
                }
            }
        ]);

        const responseText = result.response.text();
        // Clean markdown code blocks if present
        const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
        const data = JSON.parse(cleanJson);

        return {
            id: item.id,
            originalSrc: item.src,
            ...data
        };

    } catch (error) {
        console.error(`Error analyzing ${item.id}:`, error);
        return null;
    }
}

async function main() {
    const results: SEOContent[] = Object.values(existingData);
    const processedIds = new Set(results.map(r => r.id));

    // Process sequentially to respect strict rate limits (15 RPM / 10s delay)
    // We'll use 10s delay to be safe
    const DELAY_MS = 10000;

    // Filter items that need processing
    const todoItems = photoItems.filter(item => !processedIds.has(item.id));

    console.log(`Found ${todoItems.length} items to analyze out of ${photoItems.length} total.`);

    for (let i = 0; i < todoItems.length; i++) {
        const item = todoItems[i];

        try {
            const result = await analyzeImage(item);
            if (result) {
                results.push(result);
                // Save after every successful item
                fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2));
                console.log(`Saved progress: ${results.length}/${photoItems.length} - ${item.id}`);
            }
        } catch (e) {
            console.error(`Failed to process ${item.id}`, e);
        }

        // Delay between requests to avoid 429
        if (i < todoItems.length - 1) {
            console.log(`Waiting ${DELAY_MS}ms...`);
            await new Promise(r => setTimeout(r, DELAY_MS));
        }
    }
}

main().catch(console.error);
