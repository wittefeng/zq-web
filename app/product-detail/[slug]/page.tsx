import PRODUCT_LIST from '../../product/product.json'
import PostClient from './post-client'

// 获取数据
async function getPost(params: { slug: any }) {
  console.log('params', params.slug)
  return PRODUCT_LIST.find((product: any) => product.id === params.slug)
}

export default async function ProductDetail({ params }: any) {
  const post = await getPost(params)
  console.log('post', post)
  return <PostClient post={post} />
}
