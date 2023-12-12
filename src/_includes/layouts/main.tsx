import { Children } from "lume/plugins/jsx_preact.ts";
import { Footer } from "~/components/Footer.tsx";
import { Header } from "~/components/Header.tsx";
import { SITE_TITLE } from "~/_data.ts";

interface LayoutProps {
  /** レポートのタイトル */
  title?: string;
  /** TOPページやレポートの説明 */
  description: string;
  /** OGPタイプ。ref: https://ogp.me/ */
  type: "website" | "article";
  children: Children;
}

export default ({ title, description, type, children }: LayoutProps) => {
  const reportTitle = title ? `${title} | ${SITE_TITLE}` : SITE_TITLE;

  return (
    <html>
      <head>
        <link rel="stylesheet" href="/style.css" />
        <title>{reportTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={SITE_TITLE} />
        <meta property="og:title" content={reportTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:locale" content="ja_JP" />
        {
          /* <meta property="og:url" content={url?.toString()} />
        <meta property="og:image" content={`${url.origin}/ogp.png`} /> */
        }
        <meta name="twitter:card" content="summary" />
      </head>
      <body>
        <div
          class="min-h-screen dark:bg-gray-800 dark:text-white"
          style={{
            display: "grid",
            gridTemplateRows: "auto 1fr auto",
          }}
        >
          <Header />
          <main class="px-4 mx-auto w-full max-w-screen-md">{children}</main>
          {}
          <Footer />
        </div>
      </body>
    </html>
  );
};
