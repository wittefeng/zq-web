import Link from 'next/link'
import React from 'react'

const items = [
  {
    id: 1,
    image: '/phoenix-instrument.png',
    description: '凤凰系列小型质谱仪'
  },
  {
    id: 2,
    image:
      'https://chinst.com.cn/static/themes/i.love.summer/images/kyrin2-instrument.png',
    description: '麒麟系列小型质谱仪'
  },
  {
    id: 3,
    image:
      'https://chinst.com.cn/static/themes/i.love.summer/images/kyrin2-instrument.png',
    description: '质谱仪器配件和周边设备'
  }
]
const Product = () => {
  return (
    <div style={{ width: '58.8rem' }} className="text-cyan-700">
      <div>
        <div className="mt-8 text-2xl">产品优势介绍</div>
        <div className="mt-4 text-sm">
          <p className="mt-2">
            至秦仪器是以自主研发的快速检测用质谱仪为基础，向重点行业提供分析测试全方位解决方案的仪器供应商。公司源于清华大学在仪器科学与精密测控领域多年的科研积累与技术储备，拥有一支由教授、博士、硕士组成的专职研发团队，其中博士9人，硕士及以上比例占研发团队的63%。多年来与国内外科研院所、行业知名企业合作开展项目研究，建立了多元化深度交叉的产学研一体化研发体系。至秦仪器将持续秉承“延续清华基因，弘扬精仪精神”理念，专注于专业分析仪器研发和服务，致力于创造世界一流仪器品牌。
          </p>
          <p className="mt-2">
            至秦仪器核心管理人员和技术骨干来源于清华大学仪器科学与技术科研团队。团队围绕小型质谱仪已经申请发明专利50余项（其中授权34项），包括样品前处理、离子化、进样接口、分析方法、数据处理以及仪器化等方面，这些技术是公司的核心竞争力，为公司仪器产品布局、迭代奠定良好基础与保障。
          </p>
          <p className="mt-2">
            公司专注小型质谱在食品安全、公共安全和环境检测领域的应用，与中国食品药品检定研究院、中国检验检疫科学研究院、中国农业大学、中国医学科学院药物研究所、中国生态环境部环境发展中心、深圳市计量质量检测研究院、深圳易瑞生物技术有限公司、深圳凯吉星农产品检测认证有限公司、深圳高科新农技术有限公司等产品开发应用单位建立了紧密的合作关系，为产品的应用方向把控和用户解决方案制定提供支撑与指导。
          </p>
        </div>
      </div>
      <div className="container mx-auto pt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item) => (
            <Link
              href={'/product-detail/1'}
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4"
            >
              <img
                src={item.image}
                className="text-xl font-semibold mb-2 h-64 object-contain"
              ></img>
              <p className="text-gray-700">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product
