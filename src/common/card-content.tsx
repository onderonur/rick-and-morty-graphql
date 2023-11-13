type CardContentProps = React.PropsWithChildren;

export default function CardContent(props: CardContentProps) {
  return <div className="flex flex-col gap-3" {...props} />;
}
