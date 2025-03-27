import React from 'react'

type Props = {}

const About = (props: Props) => {
    return (
        <div className="flex flex-col w-[1440px] relative mx-auto items-center gap-8 pt-16 pb-20 px-[188px] bg-[#1f1f1f] overflow-hidden">
        <div className="flex flex-col w-[810px] items-center gap-6">
          <div className="font-bold text-[36px] leading-[150%] text-[#FFFFFF] montserrat">About Me</div>
          <p className="text-[#FFFFFF] text-base tracking-[0%] font-normal leading-[150%] text-center montserrat">
            I'm John Smith, a UI/UX designer dedicated to crafting intuitive and visually stunning digital experiences. With a passion for
            user-centric design, I transform ideas into functional and beautiful interfaces. Let's collaborate and shape the future of design together.
          </p>
        </div>
  
        <div className="flex items-start justify-center gap-16 w-full">
          {[{ count: '502', label: 'Projects Done' }, { count: '10+', label: 'Years of Experience' }, { count: '273+', label: 'Clients Served' }].map((item, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="font-bold text-[#ffd3d0d9] text-[64px] leading-[96px] text-center">{item.count}</div>
              <div className="text-[#ffffff] text-lg font-bold text-center">{item.label}</div>
            </div>
          ))}
        </div>
  
        <div className="absolute w-[234px] h-[234px] top-[397px] left-[603px] bg-[red] rounded-[117px] " />
      </div>
    )
}

export default About