import { VuesaxLinearArrowRight1 } from '@/lib/hellper'
import React from 'react'

type Props = {}

const Blog = (props: Props) => {
  return (
    <div className="flex flex-col w-[1440px] mx-auto items-center gap-12 px-[124px] py-[90px] bg-gray-100">
      <div className="w-[799px] flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Design Insights and Inspiration</h1>
        <p className="text-base text-gray-700">
          Discover industry insights, expert tips, and design inspiration. Stay
          updated with the latest trends in web design and user experience.
        </p>
      </div>

      <div className="w-full flex justify-between">
        {/* Card 1 */}
        <div className="flex flex-col items-center gap-8 bg-white  w-[336px] h-[426px]">
          <div className="w-[336px] h-[202px] flex items-center justify-center bg-red-200">
            <img className="w-[191px] h-[142px]" src="https://c.animaapp.com/m8oppxsffd4w9o/img/object.svg" alt="Object" />
          </div>
          <div className="p-4 text-left">
            <p className="text-xs text-gray-600">August 15, 2023 / UX</p>
            <h2 className="text-base my-2 leading-[150%] font-bold text-gray-900">Typography Tips for Design Success</h2>
            <p className="text-sm text-gray-700">
              Dive into the world of web typography and discover how to choose, pair, and optimize fonts for compelling and readable digital designs.
            </p>
            <div className="inline-flex items-center gap-2 relative  mt-5">
              <div className="inline-flex items-center gap-8 relative ">
                <div className="font-bold text-[12px] leading-[150%]">
                  Read More
                </div>
              </div>

              <VuesaxLinearArrowRight1 className="!relative !w-4 !h-4" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center gap-8 bg-white  w-[336px] h-[426px]">
          <img className="w-[336px] h-[197px] object-cover" src="https://c.animaapp.com/m8oppxsffd4w9o/img/image-6.png" alt="Image" />
          <div className="p-4 text-left">
            <p className="text-xs text-gray-600">August 15, 2023 / UX</p>
            <h2 className="text-base my-2 leading-[150%] font-bold text-gray-900">Color Psychology in UX</h2>
            <p className="text-sm text-gray-700">
              Explore how color choices impact user emotions and decision-making in UX design.
            </p>
            <div className="inline-flex items-center gap-2 relative  mt-7">
              <div className="inline-flex items-center gap-8 relative  ">
                <p className=" font-bold text-[12px] leading-[150%]">
                  Read More
                </p>
              </div>

              <VuesaxLinearArrowRight1 className="!relative !w-4 !h-4" />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center gap-8 bg-white w-[336px] h-[426px]">
          <img className="w-[336px] h-[197px] object-cover" src="https://c.animaapp.com/m8oppxsffd4w9o/img/image-7.png" alt="Image" />
          <div className="p-4 text-left">
            <p className="text-xs text-gray-600">August 15, 2023 / UX</p>
            <h2 className="text-base leading-[150%] my-2 font-bold text-gray-900 ">Boosting UX with Microinteractions</h2>
            <p className="text-sm text-gray-700">
              Discover the power of microinteractions in enhancing user experience and engagement.
            </p>
            <div className="inline-flex items-center gap-2 relative  mt-7">
              <div className="inline-flex items-center gap-8 relative ">
                <div className="font-bold text-[12px] leading-[150%]">
                  Read More
                </div>
              </div>

              <VuesaxLinearArrowRight1 className="!relative !w-4 !h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog