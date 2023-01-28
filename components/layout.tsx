import Head from "next/head";
import { Cormorant_Garamond } from "@next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Layout({
  children,
  title,
  description,
}: {
  children: any;
  title?: string;
  description?: string;
}) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="mEbc5i8DaKKc9iqASfaLpWcEuVj3dF-5CfLJXMCKAl4"
        />
        <meta
          name="description"
          content={
            description ||
            "Software Consultant Rafael Ancheta's personal website and projects."
          }
        />
        <title>{title || "Rafael Ancheta"}</title>
      </Head>
      <div className={cormorant.className}>
        <div className="container" style={{ padding: "25px" }}>
          {children}
        </div>
      </div>
    </>
  );
}
