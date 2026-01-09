import ImageKit from 'imagekit';
import { GalleryItem } from './gallery-data';

export interface ImageKitFile {
  fileId: string;
  name: string;
  url: string;
  thumbnail: string;
  createdAt: string;
  size: number;
  type: string;
}

// Hardcoded fallback values for Vercel deployment testing
const FALLBACK_CONFIG = {
  publicKey: 'public_Ift3BlJRgqe5MxxejHbttUHoXA0=',
  privateKey: 'private_FvgX9HwCHJ/srhmiMzpwmbdfZ1Q=',
  urlEndpoint: 'https://ik.imagekit.io/soumya3301',
};

// Hardcoded fallback folders
const FALLBACK_FOLDERS = ['January', 'November'];

/**
 * Get ImageKit client (lazy initialization)
 */
function getImageKitClient() {
  let publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;
  let privateKey = process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY;
  let urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

  // Use fallback values if env vars are not available
  if (!publicKey || !privateKey || !urlEndpoint) {
    console.warn('[Gallery API] Env vars missing, using fallback values');
    publicKey = FALLBACK_CONFIG.publicKey;
    privateKey = FALLBACK_CONFIG.privateKey;
    urlEndpoint = FALLBACK_CONFIG.urlEndpoint;
  }

  console.log('[Gallery API] ImageKit config:', {
    hasPublicKey: !!publicKey,
    hasPrivateKey: !!privateKey,
    hasUrlEndpoint: !!urlEndpoint,
    urlEndpoint: urlEndpoint
  });

  return new ImageKit({
    publicKey,
    privateKey,
    urlEndpoint,
  });
}

/**
 * Fetch all images from a specific folder in ImageKit
 */
async function fetchFromFolder(folderPath: string): Promise<GalleryItem[]> {
  const imagekit = getImageKitClient();
  const normalizedPath = folderPath.startsWith('/') ? folderPath : '/' + folderPath;
  const finalPath = normalizedPath.endsWith('/') ? normalizedPath : normalizedPath + '/';

  const response = await imagekit.listFiles({
    path: finalPath,
    limit: 200,
    fileType: 'image',
  });

  // Sort by createdAt descending (newest first)
  const sortedFiles = response.sort((a: any, b: any) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  // Transform ImageKit files to GalleryItem format
  return sortedFiles.map((file: any, index: number) => {
    const hasFeaturedTag = Array.isArray(file.tags) && file.tags.includes('featured');
    if (hasFeaturedTag) {
      console.log(`[Gallery API] Featured image: ${file.name} (tags: ${file.tags})`);
    }
    return {
      id: parseInt(file.fileId.replace(/[^0-9]/g, '').slice(-8)) + 10000 + index,
      category: 'photos' as const,
      type: 'image' as const,
      src: file.url,
      alt: `AI-generated jewelry design ${file.name}. Professional jewelry photography showcasing unique design.`,
      selected: hasFeaturedTag,
      seoTitle: `${file.name} - AI Jewelry Design`,
      seoDescription: `Explore this stunning AI-generated jewelry design. High-quality photography perfect for showcasing jewelry pieces. Created with advanced AI technology for professional jewelry visualization.`,
      keywords: ['AI jewelry design', 'jewelry photography', 'other', 'custom jewelry', 'jewelry visualization'],
      jewelryType: 'other',
      style: 'modern',
      occasion: 'everyday',
      targetAudience: 'unisex',
    };
  });
}

/**
 * Fetch all images from configured folders in ImageKit
 */
export async function fetchImagesFromFolders(): Promise<GalleryItem[]> {
  try {
    let foldersEnv = process.env.NEXT_PUBLIC_IMAGEKIT_FOLDERS || '';
    let folders = foldersEnv.split(',').map(f => f.trim()).filter(Boolean);

    if (folders.length === 0) {
      console.warn('[Gallery API] No folders env var, using fallback folders');
      folders = FALLBACK_FOLDERS;
    }

    console.log('Fetching from folders:', folders);

    // Fetch from all folders in parallel
    const results = await Promise.all(folders.map(folder => fetchFromFolder(folder)));

    // Combine all results
    const allImages = results.flat();

    console.log(`Total images fetched: ${allImages.length}`);
    const featuredCount = allImages.filter(img => img.selected).length;
    console.log(`Featured images: ${featuredCount}`);
    
    return allImages;
  } catch (error) {
    console.error('Error fetching images from ImageKit:', error);
    return [];
  }
}

/**
 * Generate thumbnail URL with transformations
 */
export function getThumbnailUrl(url: string, width: number = 300): string {
  if (!url) return '';
  
  // ImageKit supports URL transformations
  if (url.includes('ik.imagekit.io')) {
    const urlObj = new URL(url);
    urlObj.searchParams.set('tr', `w-${width},h-auto,q-auto,f_auto`);
    return urlObj.toString();
  }
  
  return url;
}
