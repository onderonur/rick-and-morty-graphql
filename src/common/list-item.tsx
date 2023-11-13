type ListItemProps = React.PropsWithChildren;

export default function ListItem({ children }: ListItemProps) {
  return (
    <li className="[&>*]:block [&>*]:py-3">
      {children}
    </li>
  );
}
