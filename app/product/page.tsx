'use client'
import Link from 'next/link'
import React from 'react'

export const PRODUCT_LIST = [
  {
    id: 'phoenix',
    image: '/phoenix-instrument.png',
    title: '凤凰系列小型质谱仪',
    description: `
    phoenix系列桌面式小型质谱仪以可移动和高性能为设计目标，采用单个离子阱（LIT）质量分析器+真空电喷雾离子源+选配紫外光电离源双源方案，使用脉冲载气辅助进样接口实现耦合，可以配置任何敞开式离子源实现气相、液相、固相分析。

仪器可以全面实现离子阱的FullScan、MS/MS、SIM、MRM工作模式。结合软件算法可以同时实现双源分析，增强仪器的定性分析和定量分析能力。技术指标如下表：
`,
    specifications: [
      {
        project: '单离子阱控制模式',
        indicator: 'FullScan、MS/MS、SIM、MRM',
        note: ''
      },
      {
        project: '内置离子源',
        indicator: '真空电喷雾、紫外光电离',
        note: ''
      },
      {
        project: '外置离子源',
        indicator: '可配置任何敞开式离子源',
        note: ''
      },
      {
        project: '离子极性',
        indicator: '正负离子',
        note: '负离子检测需要更换测控系统'
      },
      {
        project: '外置离子源',
        indicator: '可配置任何敞开式离子源',
        note: ''
      },
      {
        project: '离子极性',
        indicator: '正负离子',
        note: ''
      },
      {
        project: '质量范围',
        indicator: '32~2000 a.m.u',
        note: ''
      },
      {
        project: '分辨率',
        indicator: '全质量范围内单位分辨率',
        note: ''
      },
      {
        project: '检出限',
        indicator: '亚ppb级',
        note: '以罗红霉素测试'
      },
      {
        project: '分析速度',
        indicator: '单张谱图出图时间小于5秒',
        note: '全扫描'
      },
      {
        project: '人机交互接口',
        indicator: '10.1吋2650×1920dpi高清电容触摸屏',
        note: ''
      },
      {
        project: '外部接口',
        indicator: '以太网、USB',
        note: ''
      },
      {
        project: '电源及功耗',
        indicator: '220V AC，平均功耗50Wa',
        note: '峰值功率80Wa'
      },
      {
        project: '重量和体积',
        indicator: '20Kg，46×46×27 cm',
        note: ''
      }
    ]
  },
  {
    id: 'kyrin',
    image:
      'https://chinst.com.cn/static/themes/i.love.summer/images/kyrin2-instrument.png',
    title: '麒麟系列小型质谱仪',
    description: `Kyrin2系列小型质谱仪以便携为设计目标，采用单个离子阱（LIT）质量分析器+真空电喷雾离子源（选配紫外光电离源）方案，使用脉冲载气辅助进样接口实现耦合，可以配置任何敞开式离子源实现气相、液相、固相分析。仪器体积小、重量轻，可以徒手搬运部署到应用位置。

仪器可以全面实现离子阱的FullScan、MS/MS、SIM、MRM工作模式。技术指标如下表：`,
    specifications: [
      {
        project: '单离子阱控制模式',
        indicator: 'FullScan、MS/MS、SIM、MRM',
        note: ''
      },
      {
        project: '内置离子源',
        indicator: '真空电喷雾、紫外光电离',
        note: ''
      },
      {
        project: '外置离子源',
        indicator: '可配置任何敞开式离子源',
        note: ''
      },
      {
        project: '离子极性',
        indicator: '正负离子',
        note: '负离子检测需要更换测控系统'
      },
      {
        project: '外置离子源',
        indicator: '可配置任何敞开式离子源',
        note: ''
      },
      {
        project: '离子极性',
        indicator: '正负离子',
        note: '负离子检测需要更换测控系统'
      },
      {
        project: '质量范围',
        indicator: '32~1500 a.m.u',
        note: '负离子检测需要更换测控系统'
      },
      {
        project: '检出限',
        indicator: '2ppb',
        note: '以罗红霉素测试'
      },
      {
        project: '分析速度',
        indicator: '单张谱图出图时间小于3秒',
        note: ''
      },
      {
        project: '人机交互接口',
        indicator: '7吋1024×600dpi高清电容触摸屏',
        note: ''
      },
      {
        project: '外部接口',
        indicator: '以太网、USB、Wifi',
        note: ''
      },
      {
        project: '电源及功耗',
        indicator: '220V AC，平均功耗30Wa',
        note: '峰值功率60Wa'
      },
      {
        project: '重量和体积',
        indicator: '13Kg，46×37×20 cm',
        note: ''
      }
    ],
    images: [
      'https://chinst.com.cn/static/themes/i.love.summer/images/kyrin2-intro-002.png',
      'https://chinst.com.cn/static/themes/i.love.summer/images/kyrin2-intro-003.png'
    ]
  },
  {
    id: 'device',
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
          {PRODUCT_LIST.map((item: any) => (
            <Link
              href={'/product-detail/' + item.id}
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
