// Utility to load pSEO data for each playbook type
import type { PlaybookType } from './pseo-data-types';
import { PLAYBOOK_ROUTES } from './pseo-data-types';

export function loadPseoData(type: PlaybookType): any[] {
  try {
    switch (type) {
      case 'templates': return require('../data/pseo-templates.json');
      case 'curation': return require('../data/pseo-curation.json');
      case 'conversions': return require('../data/pseo-conversions.json');
      case 'comparisons': return require('../data/pseo-comparisons.json');
      case 'examples': return require('../data/pseo-examples.json');
      case 'locations': return require('../data/pseo-locations.json');
      case 'personas': return require('../data/pseo-personas.json');
      case 'integrations': return require('../data/pseo-integrations.json');
      case 'glossary': return require('../data/pseo-glossary.json');
      case 'translations': return require('../data/pseo-translations.json');
      case 'directory': return require('../data/pseo-directory.json');
      case 'profiles': return require('../data/pseo-profiles.json');
      default: return [];
    }
  } catch (e) {
    console.warn(`pSEO data not found for ${type}`);
    return [];
  }
}

export function findPseoPage(type: PlaybookType, slug: string): any | null {
  const data = loadPseoData(type);
  return data.find((item: any) => item.slug === slug) || null;
}

export function getPlaybookLabel(type: PlaybookType): string {
  const labels: Record<PlaybookType, string> = {
    templates: 'Templates',
    curation: 'Best Of',
    conversions: 'Converters',
    comparisons: 'Comparisons',
    examples: 'Examples',
    locations: 'Locations',
    personas: 'Solutions',
    integrations: 'Integrations',
    glossary: 'Glossary',
    translations: 'Languages',
    directory: 'Directory',
    profiles: 'Profiles',
  };
  return labels[type];
}

export { PLAYBOOK_ROUTES };
