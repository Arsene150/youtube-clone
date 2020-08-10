import React, {
  FC,
  useEffect,
  useContext,
} from 'react'
import Layout from '../layouts/Layout'

import { fetchPopularData } from '../api/apiClient'
import { Store } from '../store/index'
import VideoGrid from '../layouts/VideoGrid'
import VideoGridItem from '../layouts/VideoGridItem'

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
      <VideoGrid>
        {
          globalState.popular && globalState.popular.map((popular) => (
            <VideoGridItem
              id={popular.id}
              key={popular.id}
              src={popular.snippet.thumbnails.standard.url}
              title={popular.snippet.title}
            />
          ))
        }
      </VideoGrid>
    </Layout>
  )
}

export default Top