import Carousel from '@/components/Carousel'
import Timeline from '@/components/Timeline'

export default function Home() {
  const items = [
    {
      href: '',
      image: '/banner.png'
    },
    {
      href: '',
      image: '/banner-1.png'
    },
    {
      href: '',
      image: '/banner-3.png'
    },
    {
      href: '',
      image: '/banner-1.jpeg'
    },
    {
      href: '',
      image: '/banner-2.jpeg'
    }
  ] // 可以根据实际情况传入不同的数据
  const events = [
    {
      date: '2018年12月8日',
      title: '第一代产品（麒麟2号，代号Kyrin-2）发布。',
      description:
        'Kyrin-2采用全新构架设计，在结构、性能、可靠性方面具有大幅提升。'
    },
    {
      date: '2018年11月',
      title: '完成天使轮融资。',
      description: ''
    },
    {
      date: '2018年10月',
      title: `<Image
            src="/brand.png"
            alt="brand"
            style="height: 30px;"
          />  公司成立并入住新场地——TCL科学城G4座9层。`,
      description: '办公场地1600余平方米，员工增长至37人，研发加速。'
    },
    {
      date: '2018年6月',
      title: '第二代样机（麒麟1号，代号Kyrin-1）调试完成并通过测试。',
      description: ''
    },
    {
      date: '2018年07月',
      title: '科技成果转化方案通过清华大学深圳研究生院审批。',
      description: ''
    },
    {
      date: '2017年12月',
      title: '第一代样机（凤凰1号，代号phoenix）装配完成，并移交目标客户测试。',
      description: ''
    },
    {
      date: '2016年5月',
      title: '第三代小型质谱原型机研制成功。',
      description: ''
    },
    {
      date: '2015年6月',
      title: '第二代小型质谱原型机研制成功。',
      description: ''
    },
    {
      date: '2014年12月',
      title: '第一代小型质谱原型机研制成功。',
      description: ''
    },
    {
      date: '2012年07月',
      title: '清华大学深圳研究生院分析仪器技术研究中心成立。',
      description: ''
    },
    {
      date: '2011年09月',
      title: '搭建第一套小质谱研究平台。',
      description: ''
    },
    {
      date: '2009年06月',
      title: '清华大学质谱仪器研究中心成立。',
      description: ''
    },
    {
      date: '',
      title: `<Image
            src="/tsinghua-logo.png"
            alt="tsinghua-logo"
            style="height: 30px;"
          />
            源于清华。`,
      description: ''
    }
  ]
  return (
    <main className="">
      <Carousel items={items} />
      <div className="flex justify-center text-cyan-700">
        <div style={{ width: '58.8rem' }}>
          <div>
            <div className="mt-8 text-2xl">关于至秦仪器</div>
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
          <div>
            <div className="mt-8 text-2xl">新闻</div>
            <div className="mt-4 text-sm">
              <div className="mt-2">
                麒麟系列质谱仪遵循模块化设计，针对不同应用领域可灵活配置，以满足不同应用需求。已经在如下领域成功应用（或试用）。
              </div>
              <div className="flex justify-between text-center">
                <div>
                  <p>
                    <img
                      src="/icon-application-food.png"
                      style={{
                        height: '120px'
                      }}
                      className="object-contain"
                      title="食品安全"
                    />
                  </p>
                  <h3>食品安全</h3>
                </div>
                <div>
                  <p>
                    <img
                      src="/icon-application-crudedrug-2.png"
                      style={{
                        height: '120px'
                      }}
                      className="object-contain"
                      title="药材鉴定"
                    />
                  </p>
                  <h3>药材检测</h3>
                </div>
                <div>
                  <p>
                    <img
                      src="/icon-application-medicine-1.png"
                      style={{
                        height: '120px'
                      }}
                      className="object-contain"
                      title="药品检测"
                    />
                  </p>
                  <h3>药品检测</h3>
                </div>
                <div>
                  <p>
                    <img
                      src="/icon-application-polution.png"
                      style={{
                        height: '120px'
                      }}
                      className="object-contain"
                      title="环境监测"
                    />
                  </p>
                  <h3>环境监测</h3>
                </div>
                <div>
                  <p>
                    <img
                      src="/icon-application-publicsafe.png"
                      style={{
                        height: '120px'
                      }}
                      className="object-contain"
                      title="公共安全"
                    />
                  </p>
                  <h3>公共安全</h3>
                </div>
                <div>
                  <p>
                    <img
                      src="/icon-application-research.png"
                      style={{
                        height: '120px'
                      }}
                      className="object-contain"
                      title="实验研究"
                    />
                  </p>
                  <h3>实验研究</h3>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-8 text-2xl">发展历程</div>
            <div className="mt-4 text-sm"></div>
          </div>
          <Timeline events={events} />
        </div>
      </div>
    </main>
  )
}
