
type Props = {
  format: 'year';
}

export default function ServerSideDate({ format }: Props) {
  if( format === 'year' ) {
    return <>{new Date().getFullYear()}</>
  }
  return null;
}