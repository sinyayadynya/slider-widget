import React from 'react'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

import Tours from '../tours.json'

export function Carousel() {
  const [width, setWidth] = useState(0)
  const carousel = useRef()

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <div className="Carousel absolute inset-x-0 top-[150px] z-20 grid grid-cols-12 gap-x-8 lg:gap-x-16 xl:gap-x-24">
      <motion.div
        ref={carousel}
        className="carousel col-span-7 col-start-6 cursor-grab overflow-hidden"
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel flex"
        >
          {Tours.map((tour) => {
            return (
              <motion.div
                className="item h-[488px] min-h-[488px] w-[284px] min-w-[284px] p-4"
                whileHover={{ scale: 1.09 }}
                key={tour.id}
              >
                <motion.div className="h-14 pt-1">
                  <motion.div className="truncate text-lg font-semibold leading-5 text-white">
                    {tour.title}
                  </motion.div>
                  <motion.div className="flex space-x-2">
                    <span className="text-sm font-normal text-white">{tour.type}</span>
                    <span className="inline-flex items-center rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-medium text-orange-500">
                      {tour.duration}
                    </span>
                  </motion.div>
                </motion.div>
                <motion.img
                  className="pointer-events-none h-[392px] w-[284px] rounded-xl object-cover shadow"
                  src={tour.image}
                  alt=""
                />
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}
