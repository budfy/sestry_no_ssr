import classNames from 'classnames'

export default function Footer(props) {
  return (
    <footer className={classNames('footer py-8 bg-gray-300', props.className)}>
      Footer
    </footer>
  )
}
