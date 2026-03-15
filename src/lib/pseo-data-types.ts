// =============================================
// Programmatic SEO — Data Types for 12 Playbooks
// =============================================

// ---- Base Types ----

export interface SeoMeta {
  title: string;
  meta_description: string;
  primary_keyword: string;
  secondary_keywords: string[];
  search_intent: "informational" | "transactional" | "navigational" | "commercial";
}

export interface ContentSection {
  heading: string;
  body: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SchemaData {
  type: string;
  structured_data: Record<string, unknown>;
}

export interface InternalLink {
  url: string;
  anchor_text: string;
  playbook_type: PlaybookType;
}

export type PlaybookType =
  | "templates"
  | "curation"
  | "conversions"
  | "comparisons"
  | "examples"
  | "locations"
  | "personas"
  | "integrations"
  | "glossary"
  | "translations"
  | "directory"
  | "profiles";

// ---- Base Page ----

export interface PseoPageBase {
  slug: string;
  playbook_type: PlaybookType;
  seo: SeoMeta;
  content: {
    h1: string;
    introduction: string;
    sections: ContentSection[];
    faq: FaqItem[];
    call_to_action: string;
  };
  schema: SchemaData;
  internal_links: InternalLink[];
  related_pages: string[]; // slugs
  data_requirements_used: string[];
}

// ---- Playbook-Specific Types ----

export interface TemplatesPage extends PseoPageBase {
  playbook_type: "templates";
  download_instructions: string;
  variations: { name: string; description: string }[];
  implementation_guidance: string;
}

export interface CurationPage extends PseoPageBase {
  playbook_type: "curation";
  ranking_criteria: string[];
  items: {
    name: string;
    rank: number;
    pros: string[];
    cons: string[];
    summary: string;
  }[];
  comparison_summary: string;
}

export interface ConversionsPage extends PseoPageBase {
  playbook_type: "conversions";
  conversion_logic: string;
  example_conversions: { input: string; output: string; explanation: string }[];
  related_converters: string[];
}

export interface ComparisonsPage extends PseoPageBase {
  playbook_type: "comparisons";
  feature_matrix: {
    feature: string;
    option_a: string;
    option_b: string;
  }[];
  use_case_recommendations: { use_case: string; recommendation: string }[];
  verdict: string;
  option_a_name: string;
  option_b_name: string;
}

export interface ExamplesPage extends PseoPageBase {
  playbook_type: "examples";
  examples: {
    title: string;
    image_src?: string;
    analysis: string;
    category: string;
  }[];
  category_filters: string[];
}

export interface LocationsPage extends PseoPageBase {
  playbook_type: "locations";
  city: string;
  country: string;
  local_insights: string;
  local_pricing_notes: string;
  local_recommendations: string[];
}

export interface PersonasPage extends PseoPageBase {
  playbook_type: "personas";
  persona_name: string;
  pain_points: string[];
  solutions: { pain_point: string; solution: string }[];
  persona_benefits: string[];
}

export interface IntegrationsPage extends PseoPageBase {
  playbook_type: "integrations";
  platform_name: string;
  setup_steps: { step: number; title: string; description: string }[];
  use_cases: string[];
  workflow_examples: { title: string; description: string }[];
}

export interface GlossaryPage extends PseoPageBase {
  playbook_type: "glossary";
  term: string;
  beginner_explanation: string;
  technical_depth: string;
  related_terms: { term: string; slug: string }[];
}

export interface TranslationsPage extends PseoPageBase {
  playbook_type: "translations";
  language_code: string;
  language_name: string;
  hreflang_mapping: { lang: string; url: string }[];
  cultural_notes: string;
}

export interface DirectoryPage extends PseoPageBase {
  playbook_type: "directory";
  listing_attributes: Record<string, string>;
  categorization_tags: string[];
  filter_metadata: { filter_name: string; filter_value: string }[];
}

export interface ProfilesPage extends PseoPageBase {
  playbook_type: "profiles";
  profile_name: string;
  verified_facts: { label: string; value: string }[];
  timeline: { year: string; milestone: string }[];
  unique_insight: string;
}

// ---- Union Type ----

export type PseoPage =
  | TemplatesPage
  | CurationPage
  | ConversionsPage
  | ComparisonsPage
  | ExamplesPage
  | LocationsPage
  | PersonasPage
  | IntegrationsPage
  | GlossaryPage
  | TranslationsPage
  | DirectoryPage
  | ProfilesPage;

// ---- Route Config ----

export const PLAYBOOK_ROUTES: Record<PlaybookType, string> = {
  templates: "/templates",
  curation: "/best",
  conversions: "/convert",
  comparisons: "/vs",
  examples: "/examples",
  locations: "/locations",
  personas: "/for",
  integrations: "/integrations",
  glossary: "/glossary",
  translations: "/lang",
  directory: "/directory",
  profiles: "/profiles",
};

export function getPageUrl(page: PseoPageBase): string {
  const base = PLAYBOOK_ROUTES[page.playbook_type];
  return `${base}/${page.slug}`;
}

export function getFullUrl(page: PseoPageBase): string {
  return `https://jewelryai.app${getPageUrl(page)}`;
}
