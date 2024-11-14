type CharacterListProps = {
  children: React.ReactNode;
};

export function CharacterList({ children }: CharacterListProps) {
  return <ul className="grid gap-2 grid-cols-autofill-48">{children}</ul>;
}
