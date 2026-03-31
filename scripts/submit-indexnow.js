#!/usr/bin/env node
/**
 * IndexNow URL Submission Script
 * Submits all site URLs to Bing/Yandex via the IndexNow protocol
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const KEY = '4fdcc5bad87e4cc4bdef6858f453e170';
const HOST = 'jewelryai.app';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const DATA_DIR = path.join(__dirname, 'src/data');

// Collect all URLs
const urls = [
  // Static pages
  `https://${HOST}`,
  `https://${HOST}/gallery`,
  `https://${HOST}/pricing`,
  `https://${HOST}/explore`,
  `https://${HOST}/recent`,
  // Hub pages
  `https://${HOST}/templates`,
  `https://${HOST}/best`,
  `https://${HOST}/convert`,
  `https://${HOST}/vs`,
  `https://${HOST}/examples`,
  `https://${HOST}/locations`,
  `https://${HOST}/for`,
  `https://${HOST}/integrations`,
  `https://${HOST}/glossary`,
  `https://${HOST}/lang`,
  `https://${HOST}/directory`,
  `https://${HOST}/profiles`,
  // Guide pages
  `https://${HOST}/guides`,
  `https://${HOST}/guides/ai-models-jewelry-photography`,
  `https://${HOST}/guides/ai-jewelry-marketing`,
  `https://${HOST}/guides/realistic-ai-jewelry-photos`,
  `https://${HOST}/guides/virtual-models-jewellery`,
  `https://${HOST}/guides/ai-jewelry-shopify`,
  `https://${HOST}/guides/best-ai-jewelry-tools`,
  `https://${HOST}/guides/ai-jewelry-video`,
  `https://${HOST}/guides/ai-jewellery-marketing-guide`,
  // French page
  `https://${HOST}/fr/photographie-bijoux-ia`,
];

// Add pSEO pages from data files
const ROUTE_MAP = {
  'pseo-templates': '/templates',
  'pseo-curation': '/best',
  'pseo-conversions': '/convert',
  'pseo-comparisons': '/vs',
  'pseo-examples': '/examples',
  'pseo-locations': '/locations',
  'pseo-personas': '/for',
  'pseo-integrations': '/integrations',
  'pseo-glossary': '/glossary',
  'pseo-translations': '/lang',
  'pseo-directory': '/directory',
  'pseo-profiles': '/profiles',
};

try {
  const files = fs.readdirSync(DATA_DIR).filter(f => f.startsWith('pseo-') && f.endsWith('.json'));
  for (const file of files) {
    const type = file.replace('.json', '');
    const prefix = ROUTE_MAP[type];
    if (!prefix) continue;
    const data = JSON.parse(fs.readFileSync(path.join(DATA_DIR, file), 'utf8'));
    for (const page of data) {
      urls.push(`https://${HOST}${prefix}/${page.slug}`);
    }
  }
} catch (e) {
  console.log('Warning: Could not load pSEO data, submitting static URLs only');
}

// Add gallery design pages
try {
  const gallerySEO = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'gallery-seo.json'), 'utf8'));
  for (const item of gallerySEO) {
    urls.push(`https://${HOST}/design/${item.slug}`);
  }
} catch (e) {}

console.log(`\n📊 Total URLs to submit: ${urls.length}`);

// IndexNow allows max 10,000 URLs per request
// Submit in batches of 10,000
const BATCH_SIZE = 10000;
const batches = [];
for (let i = 0; i < urls.length; i += BATCH_SIZE) {
  batches.push(urls.slice(i, i + BATCH_SIZE));
}

async function submitBatch(batchUrls, batchNum) {
  const payload = JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: batchUrls,
  });

  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: 'api.indexnow.org',
      port: 443,
      path: '/IndexNow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload),
      },
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 202) {
          console.log(`   ✅ Batch ${batchNum}: ${batchUrls.length} URLs accepted (HTTP ${res.statusCode})`);
        } else {
          console.log(`   ⚠️ Batch ${batchNum}: HTTP ${res.statusCode} — ${data}`);
        }
        resolve(res.statusCode);
      });
    });

    req.on('error', (e) => {
      console.log(`   ❌ Batch ${batchNum}: Error — ${e.message}`);
      reject(e);
    });

    req.write(payload);
    req.end();
  });
}

async function main() {
  console.log(`\n🚀 Submitting ${urls.length} URLs to IndexNow (${batches.length} batch${batches.length > 1 ? 'es' : ''})...\n`);
  
  for (let i = 0; i < batches.length; i++) {
    await submitBatch(batches[i], i + 1);
  }
  
  console.log(`\n✅ Done! ${urls.length} URLs submitted to Bing, Yandex, and other IndexNow partners.`);
  console.log(`   Key file: https://${HOST}/${KEY}.txt`);
  console.log(`   Bing will index these pages within hours, not weeks.\n`);
}

main().catch(console.error);
