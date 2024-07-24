'use client'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

const Carousel = ({ items }: any) => {
  const swiperRef = useRef<any>(null)

  useEffect(() => {
    if (swiperRef.current !== null) {
      console.log('1')
      swiperRef.current.destroy(true, true)
    }

    swiperRef.current = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 20,
      // loop: items.length > 1,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })

    // 添加事件委托
    document
      .querySelector('.swiper-button-next')
      ?.addEventListener('click', () => {
        swiperRef.current.slideNext()
      })

    document
      .querySelector('.swiper-button-prev')
      ?.addEventListener('click', () => {
        swiperRef.current.slidePrev()
      })
    return () => {
      if (swiperRef.current) {
        console.log('2')
        swiperRef.current.destroy(true, true)
      }
      // 移除事件委托
      document
        .querySelector('.swiper-button-next')
        ?.removeEventListener('click', () => {
          swiperRef.current.slideNext()
        })

      document
        .querySelector('.swiper-button-prev')
        ?.removeEventListener('click', () => {
          swiperRef.current.slidePrev()
        })
    }
  }, [items])

  return (
    <div className="relative">
      <div className="swiper-container w-screen h-96 overflow-hidden">
        <div className="swiper-wrapper">
          {items.map((item: any, index: any) => (
            <Link href={item.href} key={index} className="swiper-slide">
              <img
                src={item.image}
                alt=""
                className="dark:invert mt-3 w-full h-full object-cover"
              />
            </Link>
          ))}
        </div>
        <div
          className="swiper-button-next swiper-button-white"
          style={{
            color: 'white!important'
          }}
        ></div>
        <div
          className="swiper-button-prev swiper-button-white"
          style={{
            color: 'white!important'
          }}
        ></div>
      </div>
    </div>
  )
}

export default Carousel
