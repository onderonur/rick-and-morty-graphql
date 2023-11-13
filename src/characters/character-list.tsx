type CharacterListProps = React.PropsWithChildren;

export default function CharacterList({ children }: CharacterListProps) {
  return (
    <ul className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </ul>
  );
}
