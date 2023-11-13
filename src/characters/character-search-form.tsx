'use client';

import Button from '@/common/button';
import Input from '@/form-items/input';
import { createUrl } from '@/routing/routing-utils';
import { useRouter, useSearchParams } from 'next/navigation';

export default function CharacterSearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') ?? '';

  return (
    <form
      className="flex flex-wrap justify-end"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const keyword = formData.get('keyword') as string;
        router.push(createUrl('/characters', new URLSearchParams({ keyword })));
      }}
    >
      <Input
        // To reset the `defaultValue` when value from `searchParams` change.
        key={keyword}
        id="search"
        name="keyword"
        defaultValue={keyword}
        aria-label="Search keyword"
        placeholder="Type to search..."
        className="flex-1 basis-[30rem]"
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
