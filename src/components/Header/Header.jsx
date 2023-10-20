import { BagHeart } from '@styled-icons/bootstrap'
import Container from '../Container/Container'
import { ReactComponent as HorisontalLogo } from '../../assets/icons/logo_h.svg'
import { NavLink } from 'react-router-dom'
import Search from '../Search/Search'
import classNames from 'classnames'

export default function Header(props) {
  return (
    <header className={classNames('header py-8 ', props.className)}>
      <Container className="grid grid-cols-3 items-end">
        <Search className="header__search justify-self-start" />
        <NavLink
          to="./"
          title="На головну"
          aria-label="На головну"
          className="justify-self-center"
        >
          <HorisontalLogo className="h-16 object-contain" />
        </NavLink>
        <button
          type="button"
          className="justify-self-end"
          title="Корзина"
          aria-label="Корзина"
        >
          <BagHeart className="block w-6 h-6" />
        </button>
      </Container>
    </header>
  )
}
