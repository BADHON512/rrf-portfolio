import Link from 'next/link'
import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="flex flex-col w-[1440px] mx-auto items-center justify-end gap-8 pt-10 bg-[#ffd3d0]">
    <div className="flex items-center justify-between px-[124px] w-full relative">
      <div className="absolute w-[146px] h-[146px] top-[-98px] left-[438px] bg-[#fc3314] rounded-full" />
      <img
        className="relative cursor-pointer"
        alt="Logo"
        src="https://res.cloudinary.com/dfng3w9jm/image/upload/v1743092445/logo_dmfpzs.png"
      />
      <div className="flex items-end gap-8 relative">
        {['About', 'Services', 'Portfolio', 'Blog'].map((item) => (
          <Link href={`#${item}`} key={item} className="font-bold text-lg text-dark cursor-pointer">
            {item}
          </Link>
        ))}
      </div>
      <button className="px-6 py-3 bg-[#1f1f1f] text-white cursor-pointer">Let’s Talk</button>
    </div>

    <div className="flex items-end justify-center gap-12 px-[124px] w-full">
      <div className="flex flex-col items-start gap-12 pt-16 pb-20 flex-1">
        <div className="flex flex-col gap-4 w-full text-left">
          <div className="text-xl text-[#1f1f1f]">UX Designer</div>
          <p className="text-5xl font-bold text-[#1f1f1f] leading-[150%]">
            Hi There, I’m <br />
            <span className="text-[#fc3314]">John Smith</span>
          </p>
          <p className="text-[16px] text-[#1F1F1F] font-normal leading-[150%] montserrat">
            Welcome to my portfolio of captivating digital experiences. Explore my work and let's create something extraordinary together.
          </p>
        </div>
        <div className="flex items-center gap-5 w-full">
          <button className="cursor-pointer px-14 py-3 bg-[#1f1f1f] text-white">Hire Me</button>
          <button className="w-[177px] cursor-pointer px-9 py-3 border border-[#1f1f1f]">Portfolio</button>
        </div>
      </div>
      <img className="w-[687px] h-[487px]" alt="Image" src="https://res.cloudinary.com/dfng3w9jm/image/upload/v1743092886/image_zvp1r0.png" />
    </div>
  </div>
  )
}

export default Hero