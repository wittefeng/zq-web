import { PRODUCT_LIST } from '@/app/product/page'
import PostClient from './post-client'

// 获取数据
async function getPost(params: { slug: any }) {
  console.log('params', params.slug)
  return PRODUCT_LIST.find((product) => product.id === params.slug)
}

export default async function ProductDetail({ params }: any) {
  const post = await getPost(params)
  console.log('post', post)
  return <PostClient post={post} />
}
