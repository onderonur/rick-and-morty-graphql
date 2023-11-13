type ListItemTitleProps = React.PropsWithChildren;

export default function ListItemTitle(props: ListItemTitleProps) {
  return <div className="font-semibold" {...props} />;
}
