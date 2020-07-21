import React, {FC} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import Style from '../../assets/scss/components/Header.module.scss'

const Header: FC = () => (
  <header className={Style.header}>
    <div className={Style.item}>
      <Link to="/">Youtube-clone</Link>
    </div>
    <div className={Style.item}>
      <form>
        <input type="text" placeholder="search"/>
        <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
      </form>
    </div>
  </header>
)

export default Header