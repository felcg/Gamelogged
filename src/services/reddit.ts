import axios from 'axios'

const baseUrl = 'https://www.reddit.com/'

export const getTopPosts = async () => {
  const response = await axios.get(`${baseUrl}/r/Games/top/.json?count=20`)
  const onlyVideo = response.data.data.children.filter(
    (children) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      children.data.secure_media !== null &&
      children.data.secure_media.oembed.type === 'video'
  )
  return onlyVideo
}
