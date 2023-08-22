import classNames from 'classnames'

export default function Container(props) {
  return (
    <div
      className={classNames(
        'container max-w-full tablet-px-8 laptop-px-12 desctop-px-16',
        props.className
      )}
    >
      {props.children}
    </div>
  )
}
