import { Input } from '@/core/forms/components/input';
import { SubmitButton } from '@/core/forms/components/submit-button';
import Form from 'next/form';
import { RxMagnifyingGlass } from 'react-icons/rx';

export function CharacterSearchForm() {
  return (
    <search>
      <Form
        // If you pass an empty string "" to action, the form will navigate to the same route with updated search params.
        // https://nextjs.org/docs/app/api-reference/components/form#search-form-that-leads-to-a-search-result-page
        action=""
        className="flex justify-end gap-2"
      >
        <Input
          name="keyword"
          type="search"
          aria-label="Search keyword"
          placeholder="Search characters..."
          className="flex-1"
          autoComplete="off"
        />
        <SubmitButton aria-label="Search">
          <RxMagnifyingGlass className="text-xl" />
        </SubmitButton>
      </Form>
    </search>
  );
}
