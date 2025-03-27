import { VuesaxLinearArrowRight, VuesaxLinearArrowRight2 } from '@/lib/hellper'
import React from 'react'

type Props = {}

const Testemonials = (props: Props) => {
  return (
    <div className="flex w-[1440px] mx-auto items-center justify-center gap-2.5 pt-[90px] pb-16 px-[124px] relative flex-[0_0_auto] bg-[#ffd3d0] overflow-hidden">
    <div className="flex flex-col items-center gap-8 relative flex-1 grow">
      <div className="font-bold text-4xl leading-[150%] tracking-[0%]">
        Testemonials
      </div>

      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <VuesaxLinearArrowRight2 className="!relative !w-10 !h-10" />
        <p className="relative w-[768px] font-normal text-base leading-[150%] text-center">
          Sara Jones&#39;s designs are both visually captivating and highly
          effective. She transformed our website, enhancing user engagement
          and conversions. Her attention to detail and creative approach are
          top-notch. Highly recommended!
        </p>

        <VuesaxLinearArrowRight className="!relative !w-10 !h-10" />
      </div>

      <div className="inline-flex items-center justify-center gap-4 relative flex-[0_0_auto]">
        <img
          className="relative w-[70px] h-[70px]"
          alt="Image"
          src="https://c.animaapp.com/m8oppxsffd4w9o/img/image-5.png"
        />

        <p className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-dark text-base text-center tracking-[0] leading-4">
          <span className="font-bold text-base leading-[150%] tracking-[0%]">
            John Smith
          </span>

          <span className="leading-6"> / CEO of XYZ Company</span>
        </p>
      </div>
    </div>

    <img
      className="absolute w-[122px] h-[122px] top-[-61px] left-[659px]"
      alt="Background"
      src="https://c.animaapp.com/m8oppxsffd4w9o/img/background.svg"
    />
  </div>
  )
}

export default Testemonials