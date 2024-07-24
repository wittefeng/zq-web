'use client'
import React, { useState } from 'react'
const imageUrl =
  'https://chinst.com.cn/static/themes/i.love.summer/images/kyrin2-instrument.png'
const description = `XZ-2000 是一款高性能无线耳机，设计精美，音质卓越。具备先进的噪音取消技术和长续航时间，适合各种场景的使用。无论是日常通勤还是体育锻炼，XZ-2000 都能为您提供卓越的听觉体验。`
const specifications = [
  { name: '连接方式', value: '蓝牙 5.0' },
  { name: '电池容量', value: '3000mAh' },
  { name: '充电时间', value: '2小时' },
  { name: '续航时间', value: '30小时' },
  { name: '耳机重量', value: '50克' }
  // 可以继续添加更多参数
]

const ProductDetail = () => {
  const [product, setProduct] = useState<any>({
    imageUrl,
    description,
    specifications
  })
  // useEffect(() => {
  //   // 假设产品详情数据从接口获取
  //   axios.get('https://api.example.com/product-detail')
  //     .then(response => {
  //       setProduct(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching product detail:', error);
  //     });
  // }, []);

  // if (!product) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

      <div className="flex justify-center mb-6">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="max-h-96 rounded-lg"
        />
      </div>

      <p className="text-lg mb-6">{product.description}</p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded my-6">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3 px-5">参数</th>
              <th className="text-left p-3 px-5">数值</th>
            </tr>
          </thead>
          <tbody>
            {product.specifications.map((spec: any) => (
              <tr key={spec.name} className="border-b hover:bg-gray-100">
                <td className="p-3 px-5">{spec.name}</td>
                <td className="p-3 px-5">{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductDetail
