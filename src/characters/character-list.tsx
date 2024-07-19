type CharacterListProps = React.PropsWithChildren;

export function CharacterList({ children }: CharacterListProps) {
  return (
    <ul className="xs:grid-cols-2 grid md:grid-cols-3 lg:grid-cols-4">
      {children}
    </ul>
  );
}
