import Head from "next/head";

export default function SchemaArticle({ page }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: page?.attributes?.Title,
    image: [process.env.NEXT_PUBLIC_TENANT_API + page?.attributes?.Image?.url],
    datePublished: page?.attributes?.createdAt,
    dateModified: page?.attributes?.publishedAt,
    author: [
      {
        "@type": "Person",
        name: "Diome Nike Potot",
        url: "https://avatars.githubusercontent.com/u/15809239?v=4",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
