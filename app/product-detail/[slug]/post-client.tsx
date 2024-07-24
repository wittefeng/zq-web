'use client'

import React, { useEffect, useState } from 'react'

const PostClient = (props: any) => {
  const [product, setProduct] = useState<any>(null)
  useEffect(() => {
    setProduct(props.post)
  }, [])
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
    <>
      {product === null ? (
        ''
      ) : (
        <div className="max-w-4xl mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

          <div className="flex justify-center mb-6">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-96 rounded-lg"
            />
          </div>

          <p className="text-lg mb-6">{product.description}</p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded my-6">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 px-5">项目</th>
                  <th className="text-left p-3 px-5">指标</th>
                  <th className="text-left p-3 px-5">备注</th>
                </tr>
              </thead>
              <tbody>
                {product.specifications.map((spec: any, index: number) => (
                  <tr key={index} className="border-b hover:bg-gray-100">
                    <td className="p-3 px-5">{spec.project}</td>
                    <td className="p-3 px-5">{spec.indicator}</td>
                    <td className="p-3 px-5">{spec.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {product.images?.map((image: string, index: number) => {
            return <img src={image} key={index} />
          })}
        </div>
      )}
    </>
  )
}

export default PostClient
