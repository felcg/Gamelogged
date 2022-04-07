import axios from 'axios'

const baseUrl = 'https://www.reddit.com/'

const getTopPosts = async () => {
  const response = await axios.get(`${baseUrl}/r/Games/top/.json?count=20`)
  const onlyVideo = response.data.data.children.filter(
    (children) =>
      children.data.secure_media !== null &&
      children.data.secure_media.oembed.type === 'video'
  )
  return onlyVideo
}

export default { getTopPosts }
