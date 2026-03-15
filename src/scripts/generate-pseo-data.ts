#!/usr/bin/env npx tsx
// =============================================
// pSEO Data Generation Script
// Generates JSON data files for all 12 playbooks
// Run: npx tsx src/scripts/generate-pseo-data.ts
// =============================================

import * as fs from 'fs';
import * as path from 'path';
import { generateAllPseoData } from '../lib/pseo-content-engine';
import {
  generateCurationData,
  generateConversionsData,
  generateExamplesData,
  generateTranslationsData,
  generateDirectoryData,
  generateProfilesData,
} from '../lib/pseo-content-engine-2';

const DATA_DIR = path.join(__dirname, '..', 'data');

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function writeJsonFile(filename: string, data: any[]) {
  const filepath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
  console.log(`  ✅ ${filename}: ${data.length} pages`);
}

function validatePages(allPages: any[]): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  const slugSet = new Set<string>();
  const keywordSet = new Set<string>();

  for (const page of allPages) {
    // Slug uniqueness
    const fullSlug = `${page.playbook_type}/${page.slug}`;
    if (slugSet.has(fullSlug)) {
      errors.push(`DUPLICATE SLUG: ${fullSlug}`);
    }
    slugSet.add(fullSlug);

    // Primary keyword uniqueness
    const pk = page.seo?.primary_keyword;
    if (pk && keywordSet.has(pk)) {
      errors.push(`DUPLICATE KEYWORD: "${pk}" in ${fullSlug}`);
    }
    if (pk) keywordSet.add(pk);

    // Content length check
    const contentLength = [
      page.content?.introduction || '',
      ...(page.content?.sections || []).map((s: any) => s.body),
    ].join(' ').split(/\s+/).length;

    if (page.playbook_type === 'conversions' && contentLength < 300) {
      errors.push(`THIN PAGE (utility): ${fullSlug} — ${contentLength} words (min 300)`);
    } else if (page.playbook_type !== 'conversions' && contentLength < 400) {
      errors.push(`THIN PAGE: ${fullSlug} — ${contentLength} words (min 400)`);
    }

    // FAQ count
    const faqCount = page.content?.faq?.length || 0;
    if (faqCount < 3) {
      errors.push(`LOW FAQS: ${fullSlug} — ${faqCount} FAQs (min 3)`);
    }

    // Internal links
    const linkCount = page.internal_links?.length || 0;
    if (linkCount < 3) {
      errors.push(`LOW LINKS: ${fullSlug} — ${linkCount} links (min 3)`);
    }
  }

  return { valid: errors.length === 0, errors };
}

async function main() {
  const isValidateOnly = process.argv.includes('--validate');

  console.log('🚀 JewelryAI pSEO Data Generator');
  console.log('================================\n');

  ensureDir(DATA_DIR);

  // Generate data from engine 1
  console.log('📦 Generating playbook data (Engine 1)...');
  const engine1 = generateAllPseoData();

  // Generate data from engine 2
  console.log('📦 Generating playbook data (Engine 2)...');
  const curation = generateCurationData();
  const conversions = generateConversionsData();
  const examples = generateExamplesData();
  const translations = generateTranslationsData();
  const directory = generateDirectoryData();
  const profiles = generateProfilesData();

  const allData = {
    'pseo-templates.json': engine1.templates,
    'pseo-comparisons.json': engine1.comparisons,
    'pseo-locations.json': engine1.locations,
    'pseo-personas.json': engine1.personas,
    'pseo-glossary.json': engine1.glossary,
    'pseo-integrations.json': engine1.integrations,
    'pseo-curation.json': curation,
    'pseo-conversions.json': conversions,
    'pseo-examples.json': examples,
    'pseo-translations.json': translations,
    'pseo-directory.json': directory,
    'pseo-profiles.json': profiles,
  };

  // Validate
  const allPages = Object.values(allData).flat();
  console.log(`\n📊 Total pages generated: ${allPages.length}`);
  console.log('\n🔍 Validating...');

  const { valid, errors } = validatePages(allPages);

  if (errors.length > 0) {
    console.log(`\n⚠️  ${errors.length} validation issues:`);
    for (const err of errors.slice(0, 20)) {
      console.log(`   ${err}`);
    }
    if (errors.length > 20) {
      console.log(`   ... and ${errors.length - 20} more`);
    }
  } else {
    console.log('   ✅ All validations passed!');
  }

  if (isValidateOnly) {
    console.log('\n🏁 Validation complete (dry run, no files written).');
    process.exit(valid ? 0 : 1);
  }

  // Write files
  console.log('\n📝 Writing data files...');
  for (const [filename, data] of Object.entries(allData)) {
    writeJsonFile(filename, data);
  }

  // Summary
  console.log('\n📊 Summary by Playbook:');
  for (const [filename, data] of Object.entries(allData)) {
    const type = filename.replace('pseo-', '').replace('.json', '');
    console.log(`   ${type.padEnd(15)} ${data.length} pages`);
  }

  console.log(`\n🎉 Total: ${allPages.length} pages across 12 playbooks`);
  console.log('✅ Done! Data files written to src/data/');
}

main().catch(console.error);
