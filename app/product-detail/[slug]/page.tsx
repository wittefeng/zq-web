'use client'
import PostClient from './post-client'

// 获取数据
async function getPost(params: { slug: any }) {
  console.log('params', params.slug)
  const product_list = [
    {
      id: 'phoenix',
      image: '/phoenix-instrument.png',
      title: '凤凰系列小型质谱仪',
      description:
        'phoenix系列桌面式小型质谱仪以可移动和高性能为设计目标，采用单个离子阱（LIT）质量分析器+真空电喷雾离子源+选配紫外光电离源双源方案，使用脉冲载气辅助进样接口实现耦合，可以配置任何敞开式离子源实现气相、液相、固相分析。\n\n仪器可以全面实现离子阱的FullScan、MS/MS、SIM、MRM工作模式。结合软件算法可以同时实现双源分析，增强仪器的定性分析和定量分析能力。技术指标如下表：',
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
      description:
        'Kyrin2系列小型质谱仪以便携为设计目标，采用单个离子阱（LIT）质量分析器+真空电喷雾离子源（选配紫外光电离源）方案，使用脉冲载气辅助进样接口实现耦合，可以配置任何敞开式离子源实现气相、液相、固相分析。仪器体积小、重量轻，可以徒手搬运部署到应用位置。\n\n仪器可以全面实现离子阱的FullScan、MS/MS、SIM、MRM工作模式。技术指标如下表：',
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
  return product_list.find((product: any) => product.id === params.slug)
}

export default async function ProductDetail({ params }: any) {
  const post = await getPost(params)
  console.log('post', post)
  return <PostClient post={post} />
}
