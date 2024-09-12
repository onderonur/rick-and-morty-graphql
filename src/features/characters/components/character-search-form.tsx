'use client';

import { Input } from '@/core/forms/components/input';
import { createUrl } from '@/core/routing/routing.utils';
import { Button } from '@/core/ui/components/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { RxMagnifyingGlass } from 'react-icons/rx';

export function CharacterSearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get('keyword') ?? '');

  return (
    <search>
      <form
        className="flex justify-end gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          router.push(
            createUrl('/characters', new URLSearchParams({ keyword })),
          );
        }}
      >
        <Input
          name="keyword"
          type="search"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          aria-label="Search keyword"
          placeholder="Search characters..."
          className="flex-1"
          autoComplete="off"
        />
        <Button aria-label="Search" type="submit">
          <RxMagnifyingGlass className="text-xl" />
        </Button>
      </form>
    </search>
  );
}
