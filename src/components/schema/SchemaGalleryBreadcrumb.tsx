import Script from 'next/script';

export const SchemaGalleryBreadcrumb: React.FC = () => {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://jewelryai.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Gallery',
        item: 'https://jewelryai.app/gallery',
      },
    ],
  };

  return (
    <Script
      id="schema-gallery-breadcrumb"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
};
