import React from 'react'
const JobListing: React.FC<{
  title: string
  number: string
  nature: string
  education: string
  experience: string
  location: string
  responsibilities: string[]
  requirements: string[]
}> = ({
  title,
  number,
  nature,
  education,
  experience,
  location,
  responsibilities,
  requirements
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-4">
      <div className="p-4">
        <h2 className="text-lg font-semibold">
          {title} (编号：{number})
        </h2>
        <p className="text-gray-600 mb-2">{nature}</p>
        <div className="mb-2">
          <strong>学历要求:</strong> {education}
        </div>
        <div className="mb-2">
          <strong>工作经验:</strong> {experience}
        </div>
        <div className="mb-2">
          <strong>工作地点:</strong> {location}
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">岗位职责:</h3>
          <ul className="list-disc pl-5">
            {responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">任职要求:</h3>
          <ul className="list-disc pl-5">
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
const Jobs = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-xl font-bold mb-4">至秦仪器</h1>
        <p className="text-gray-700 mb-4">
          “至秦仪器”源于清华，是由清华大学精仪系教师为主投资成立的产业技术创新、转化和孵化的创业实体，专注于便携式快检用质谱仪系列产品的研发和销售，公司拥有强大的专家顾问团队和技术储备，诚邀有志之士加入这个奋斗的创业团队。
        </p>
        <p className="text-gray-700 mb-4">有才者尽显其能，有志者尽展其志。</p>
        <p className="text-gray-700 mb-4">志趣相投、贤才者聚！</p>
        <div className="border-t pt-4">
          <p className="text-gray-700 mb-1">联系人：车小姐</p>
          <p className="text-gray-700 mb-1">电话：0755-86520452</p>
          <p className="text-gray-700 mb-1">简历投递邮箱：jobs@chinst.com.cn</p>
        </div>
      </div>
      <div className="p-4">
        <JobListing
          title="单片机软件工程师"
          number="218"
          nature="职位性质：合同制全职"
          education="本科及以上学历"
          experience="2年以上"
          location="深圳市南山区中山园路TCL国际E城G4栋9楼"
          responsibilities={[
            '负责单片机软件架构设计、代码编写、软硬件联调工作；',
            '根据产品定义提出单片机软件部分的解决方案，协助项目经理完成技术方案制定；',
            '技术文档撰写。'
          ]}
          requirements={[
            '测控技术与仪器、计算机、电子信息、自动化等相关专业毕业；',
            '熟悉Cortex-M0/M3/M4、STM8、8051单片机开发，至少有两款完整的产品开发经历；',
            '精通C语言，熟悉基于API库（如STM32的HAL库、dsp库）的开发流程；',
            '熟练使用逻辑分析仪、示波器等测试设备进行调试和测试；',
            '具有数据采集、数字PID控制、物联网产品开发经验优先；',
            '熟悉TCP/IP协议、USB协议，具备以太网、USB开发能力者优先。'
          ]}
        />

        <JobListing
          title="FPGA工程师"
          number="201"
          nature="职位性质：合同制全职"
          education="本科及以上学历"
          experience="3年以上"
          location="深圳市南山区中山园路TCL国际E城G4栋9楼"
          responsibilities={[
            '负责产品的FPGA逻辑架构设计、逻辑开发、代码实现、软硬件联调工作；',
            '根据产品需求提出解决方案、组织算法研发和策略实施；',
            '同软件、硬件设计人员一起完成相关方面项目规划。'
          ]}
          requirements={[
            '计算机、电子、信息、自动化等相关专业毕业，3年以上相关工作经验；',
            '熟悉FPGA的开发流程，从事过Xilinx等主流FPGA的开发；',
            '精通Verilog或VHDL语言，熟练使用ISE、VIVADO、ModelSim等开发环境进行仿真、综合、优化；',
            '熟练使用逻辑分析仪、示波器、频谱仪等测试设备进行调试和测试；',
            '有Xilinx ZYNQ 7000系列开发经验优先；',
            '具有高速数据采集、信号处理和算法实现等某一方面实践经验优先。'
          ]}
        />

        <JobListing
          title="硬件电路高级工程师"
          number="202"
          nature="职位性质：合同制全职"
          education="本科及以上学历"
          experience="3年以上"
          location="深圳市南山区中山园路TCL国际E城G4栋9楼"
          responsibilities={[
            '负责产品中测控系统的硬件设计和实现；',
            '负责从传感器获取的微弱信号的调理、放大、滤波、A/D转换和数字采集工作，以及相关的电路设计。'
          ]}
          requirements={[
            '3年以上相关工作，有2个完整全流程产品开发经历；',
            '熟练掌握模拟/数字混合电路设计，熟悉电信号的放大、滤波、调理原理和电路实现；',
            '熟悉基于运算放大器的电路设计；',
            '了解MCU/DSP/FPGA的工作原理；',
            '熟练进行PCB设计，对电路调试中的问题能够熟练定位并解决；',
            '熟悉EMC设计规范，具备一定的EMI/EMC/ESD经验，对产品安规认证有了解。'
          ]}
        />
      </div>
    </div>
  )
}

export default Jobs
