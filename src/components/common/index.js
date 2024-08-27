import Link from 'next/link';

export const ConditionalLink = (props) => {
  const { item, ...newProps } = props
  return item.href ?
    <Link href={item.href} {...newProps}>
      {props.children}
    </Link> :
    <div {...newProps}>
      {props.children}
    </div>
}