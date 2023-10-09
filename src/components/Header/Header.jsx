import Container from '../Container/Container'
import classNames from 'classnames'

export default function Header(props) {
  return (
    <header className={classNames('header py-8', props.className)}>
      <Container>Header</Container>
    </header>
  )
}
