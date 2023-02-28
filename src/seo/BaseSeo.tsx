import React from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';
import { Omit } from '@/common/CommonTypes';
import { Maybe } from 'graphql/jsutils/Maybe';

type BaseSeoProps = Omit<NextSeoProps, 'title'> & {
  title: Maybe<string>;
};

function BaseSeo({ title, description, openGraph, ...rest }: BaseSeoProps) {
  return (
    <NextSeo
      title={title ?? undefined}
      description={description}
      openGraph={{ title: title ?? undefined, description, ...openGraph }}
      {...rest}
    />
  );
}

export default BaseSeo;
