import Input from '../StyledElements/Input'
import { SearchHeart } from '@styled-icons/bootstrap'
import classNames from 'classnames'
import styled from 'styled-components'

export default function Search(props) {
  return (
    <form className={classNames('flex', props.className)}>
      <label htmlFor="searchInput" className="inline-block">
        <Input
          type="search"
          name="searchInput"
          id="searchInput"
          placeholder="Що ви шукаєте"
          required
        />
      </label>
      <button
        type="submit"
        aria-label="Пошук"
        title="Пошук"
        className="inline-block ml-4"
      >
        <SearchHeart className="block w-6 h-6" />
      </button>
    </form>
  )
}
