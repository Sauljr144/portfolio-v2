import React from 'react';
import Card from '../molecules/Card';
import ShinyText from '../atoms/ShinyText';
import Button from '../atoms/Button';
import projects from '@/utils/projects';

const CardGrid = () => {
  return (
    <div id='projects' className='container p-3 mx-auto scroll-mt-[100px] font-poppins mt-7'>
      <h3 className='text-2xl mb-4'>Projects</h3>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {projects.map((project, index) => (
          <Card
            className='custom-spotlight-card flex flex-col'
            spotlightColor='rgba(225, 225, 255, 0.2)'
            key={index}
          >
            <div className='flex flex-col flex-grow'>
              <h3 className='text-xl mb-4'>{project.title}</h3>
              <p className='text-sm mb-6 text-[#b5b5b5a4]'>{project.description}</p>
              <div className='mb-10'>
                {project.techStack.map((item, index) => (
                  <button
                    key={index}
                    className='border-[#b5b5b5a4] border-1 rounded-3xl px-3 py-1 my-1 mx-1'
                  >
                    <ShinyText
                      text={item}
                      disabled={false}
                      speed={3}
                      className='custom-class text-shadow-md text-xs'
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className='flex justify-end align-bottom'>
              <Button
                url={project.url}
                className='bg-white text-black w-[90px] text-center'
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
