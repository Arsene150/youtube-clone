import _axios from 'axios'

const KEY = 'AIzaSyAf11TRaStMSidGWW4841VNat4w8Q6UwdA'
const axios = _axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
})

export const fetchPopularData = async() => {
  return await axios.get('/videos', {
    params: {
      part: 'snippet',
      maxResults: 40,
      key: KEY,
      regionCode: 'JP',
      type: 'video',
      chart: 'mostPopular',
    }
  })
}