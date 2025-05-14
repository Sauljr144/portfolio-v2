'use client';
import experience from '@/utils/experience';
import Card from '../molecules/Card';
import SplitText from '../atoms/SplitText';

const XPGrid = () => {
  return (
    <div id='about' className='container p-3 mx-auto scroll-mt-[100px] font-poppins text-white'>
      <div className='flex justify-center my-20'>
        <SplitText
          text='Writing code and occasionally witty comments.'
          className='lg:text-6xl text-4xl font-semibold text-center'
          delay={75}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          threshold={0.2}
          rootMargin='-50px'
          onLetterAnimationComplete={() => {}}
        />
      </div>
      <h3 className='text-2xl mb-4'>Experience</h3>
      <div className='grid sm:grid-cols-2 lg:grid-cols-2 gap-4'>
        {experience.map((xp, index) => (
          <Card key={index} className='custom-spotlight-card'>
            <h3 className='text-xl'>{xp.role}</h3>
            <h3 className='text-base'>{xp.company}</h3>
            <h3 className='text-[#b5b5b5a4] text-sm mb-3'>{xp.time}</h3>
            <p className='text-[#b5b5b5a4] lg:text-base md:text-sm '>
              {xp.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default XPGrid;
