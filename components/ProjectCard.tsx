import React from 'react'

interface Props {
    image: string;
    title: string;
    text: string;
    link?: string;
}

const ProjectCard = ({ image, title, text, link }: Props) => {
  return (
    <div className='flip-card w-[450px] h-[280px] rounded-md cursor-pointer'>
      <div className='flip-card-inner w-full h-full relative'>

        {/* Front */}
        <div
          style={{ backgroundImage: `url(${image})` }}
          className='flip-card-front w-full h-full bg-cover bg-center text-white rounded-lg'
        >
          <div className='absolute inset-0 rounded-lg bg-black opacity-0 hover:opacity-30 transition-opacity duration-200' />
          <div className='absolute inset-0 flex items-end justify-center pb-5 text-lg font-semibold text-white opacity-0 hover:opacity-100 transition-opacity duration-200'>
            Hover to see more
          </div>
        </div>

        {/* Back */}
        <div
          style={{ backgroundImage: `url(${image})` }}
          className='flip-card-back w-full h-full bg-cover bg-center text-white rounded-lg'
        >
          <div className='absolute inset-0 rounded-lg bg-black opacity-60' />
          <div className='relative z-10 flex flex-col gap-3 p-5 h-full justify-center'>
            <h2 className='text-white text-2xl font-bold'>{title}</h2>
            <p className='text-gray-200 text-sm leading-relaxed'>{text}</p>
            {link && (
              <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-1 inline-block bg-white text-black text-sm font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition-colors w-fit'
              >
                View on GitHub →
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectCard