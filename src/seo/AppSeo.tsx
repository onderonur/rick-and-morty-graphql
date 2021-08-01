import React from "react";
import { DefaultSeo, DefaultSeoProps } from "next-seo";
import { useRouter } from "next/router";
import { APP_TITLE } from "@/common/CommonUtils";

// https://nextjs.org/docs/api-reference/next.config.js/environment-variables
// Trying to destructure process.env variables won't work due to the nature of webpack DefinePlugin.
const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const getDefaultSeoConfig = (pathname: string): DefaultSeoProps => {
  const url = `${NEXT_PUBLIC_BASE_URL}${pathname}`;
  const description = `${APP_TITLE} is a client application for Rick and Morty GraphQL API. It's created with Next.js, Apollo-Client and TypeScript.`;
  return {
    titleTemplate: `%s | ${APP_TITLE}`,
    description,
    canonical: url,
    openGraph: {
      title: "Rick and Morty GraphQL Application",
      description,
      type: "website",
      locale: "en_IE",
      url,
      site_name: APP_TITLE,
      images: [
        {
          width: 600,
          height: 600,
          url: `${NEXT_PUBLIC_BASE_URL}/images/logo.png`,
          alt: `${APP_TITLE} Log`,
        },
        {
          width: 600,
          height: 334,
          url: `${NEXT_PUBLIC_BASE_URL}/images/locations.jpg`,
          alt: "Rick and Morty Locations",
        },
        {
          width: 600,
          height: 337,
          url: `${NEXT_PUBLIC_BASE_URL}/images/episodes.jpg`,
          alt: "Rick and Morty Episodes",
        },
        {
          width: 600,
          height: 341,
          url: `${NEXT_PUBLIC_BASE_URL}/images/characters.jpg`,
          alt: "Rick and Morty Characters",
        },
      ],
    },
    additionalMetaTags: [
      {
        property: "dc:creator",
        content: "Onur ÖNDER",
      },
      {
        name: "application-name",
        content: APP_TITLE,
      },
    ],
  };
};

function AppSeo() {
  const router = useRouter();
  return <DefaultSeo {...getDefaultSeoConfig(router.asPath)} />;
}

export default AppSeo;
