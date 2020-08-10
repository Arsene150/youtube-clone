import React, {FC} from 'react'

import Header from '../components/organisms/Header'
import Style from '../assets/scss/layouts/Layout.module.scss'

const Layout: FC = ({children}) => (
  <div className={Style.wrapper}>
    <Header />
    <div className={Style.main}>
      {children}
    </div>
  </div>
)

export default Layout