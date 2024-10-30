type CharacterListProps = {
  children: React.ReactNode;
};

export function CharacterList({ children }: CharacterListProps) {
  return (
    <ul className="xs:grid-cols-2 grid gap-6 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </ul>
  );
}
