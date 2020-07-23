import React, {
  FC,
  useEffect,
  useContext,
} from 'react'
import Layout from '../layouts/Layout'

import { fetchPopularData } from '../api/apiClient'
import { Store } from '../store/index'

const Top: FC = () => {
  const { globalState, setGlobalState } = useContext(Store)

  useEffect(() => {
    fetchPopularData().then((res) => {
      console.log('data', res)
      setGlobalState({
        type: 'SET_POPULAR',
        payload: {popular: res.data.items}
      })
    })
  }, [])

  return (
    <Layout>
      トップページだお
    </Layout>
  )
}

export default Top