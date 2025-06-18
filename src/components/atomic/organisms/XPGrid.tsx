'use client';
import experience from '@/utils/experience';
import SplitText from '../atoms/SplitText';
import { useState } from 'react';
import Button from '../atoms/Button';
import ShinyText from '../atoms/ShinyText';

const XPGrid = () => {
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(0);
  const [openCard, setOpenCard] = useState(true);

  const handleCardClick = (index: number) => {
    if (openCardIndex === index) {
      // If clicking the same card, close it
      setOpenCard(false);
      setOpenCardIndex(null);
    } else {
      // If clicking a different card, open it
      setOpenCard(true);
      setOpenCardIndex(index);
    }
  };

  return (
    <div
      id='about'
      className='container p-3 mx-auto scroll-mt-[100px] font-poppins text-white'
    >
      <div className='flex justify-center my-20'>
        <SplitText
          text={`Writing code and occasionally witty comments.`}
          className='lg:text-6xl text-4xl font-semibold text-center lg:px-20'
          delay={75}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          threshold={0.2}
          rootMargin='-50px'
          onLetterAnimationComplete={() => {}}
        />
      </div>
      <h3 className='text-2xl mb-4'>Experience_</h3>
      <div className='flex lg:flex-row flex-col gap-8 lg:px-20'>
        <div className='relative flex-1'>
          <div className='flex flex-col gap-4 h-[525px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#0a0a0a] [&::-webkit-scrollbar-thumb]:bg-[#464646] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#666] pr-2'>
            {experience.map((xp, index) => (
              <div key={index}>
                <div
                  className='bg-[#111] border-[#222] hover:bg-[#46464666] border-1 rounded-3xl p-6 cursor-pointer'
                  onClick={() => handleCardClick(index)}
                >
                  <h3 className='text-xl'>{xp.role}</h3>
                  <h3 className='text-base'>{xp.company}</h3>
                  <h3 className='text-[#b5b5b5a4] text-sm'>{xp.time}</h3>
                </div>

                {/* Mobile View */}
                {openCard && openCardIndex === index && (
                  <div className='lg:hidden p-6 bg-[#111] border-[#222] border-1 rounded-3xl mt-4'>
                    <h3 className='text-3xl'>{xp.role}</h3>
                    <h3 className='text-lg'>{xp.company}</h3>
                    <h3 className='text-lg'>{xp.time}</h3>
                    <p className='text-[#b5b5b5a4] lg:text-base md:text-sm my-4'>
                      {xp.description}
                    </p>
                    <h3 className='mb-3'>Technologies_</h3>
                    {xp.techStack.map((x, index) => (
                      <button
                        key={index}
                        className='border-[#b5b5b5a4] border-1 rounded-3xl px-3 py-1 my-1 mx-1 '
                      >
                        <ShinyText
                          text={x}
                          disabled={false}
                          speed={3}
                          className='custom-class text-shadow-md text-xs'
                        />
                      </button>
                    ))}

                    <div className='flex justify-end align-bottom mt-4'>
                      <Button
                        url={xp.url}
                        className='bg-white text-black w-[90px] text-center'
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none'></div>
        </div>

        <div className='flex-1'>
          {/* Desktop View */}
          {openCardIndex != null && (
            <div className='hidden lg:flex'>
              <div className=' sticky top-4 p-6 bg-[#111] border-[#222] border-1 rounded-3xl'>
                <h3 className='text-3xl'>{experience[openCardIndex].role}</h3>
                <h3 className='text-lg'>{experience[openCardIndex].company}</h3>
                <h3 className='text-lg'>{experience[openCardIndex].time}</h3>
                <p className='text-[#b5b5b5a4] lg:text-base md:text-sm my-4'>
                  {experience[openCardIndex].description}
                </p>
                <h3 className='mb-3'>Technologies_</h3>
                {experience[openCardIndex].techStack.map((x, index) => (
                  <button
                    key={index}
                    className='border-[#b5b5b5a4] border-1 rounded-3xl px-3 py-1 my-1 mx-1 '
                  >
                    <ShinyText
                      text={x}
                      disabled={false}
                      speed={3}
                      className='custom-class text-shadow-md text-xs'
                    />
                  </button>
                ))}

                <div className='flex justify-end align-bottom mt-4'>
                  <Button
                    url={experience[openCardIndex].url}
                    className='bg-white text-black w-[90px] text-center'
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default XPGrid;
