import PRODUCT_LIST from '@/app/product/product.json'
import PostClient from './post-client'

// 获取数据
async function getPost(params: { slug: any }) {
  return PRODUCT_LIST.find((product) => product.id === params.slug)
}

export default async function ProductDetail({ params }: any) {
  const post = await getPost(params)
  return <PostClient post={post} />
}
