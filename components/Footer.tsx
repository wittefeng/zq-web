import React from 'react'

const Footer = () => {
  return (
    <div className="flex justify-center text-xs mt-4 text-center bg-cyan-950 text-slate-300 pt-2 pb-2">
      <div>
        <p>
          Copyright (C) 2008~2024 至秦仪器（合肥）有限公司 All Rights Reserved.
          <a
            href="https://beian.miit.gov.cn"
            className="text-blue-500"
            target="_blank"
          >
            皖ICP备2024045151号
          </a>
        </p>
        <p>
          公司地址：安徽省合肥市肥西县经济开发区苏岗路合肥创新科技园B13西座
          &nbsp;&nbsp; E-mail: info@chinst.com.cn &nbsp;&nbsp;
          电话：0755-86520452
        </p>
        <p>Lastupdate: October 18, 2023</p>
      </div>
    </div>
  )
}

export default Footer
