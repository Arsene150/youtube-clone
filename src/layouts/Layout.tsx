import React, {FC} from 'react'

import Header from '../components/organisms/Header'

const Layout: FC = ({children}) => (
  <div>
    <Header />
    {children}
  </div>
)

export default Layout