import experience from '@/utils/experience';
import Card from '../molecules/Card';

const XPGrid = () => {
  return (
    <div className='container p-3 mx-auto scroll-mt-[100px] font-poppins mt-7 text-white'>
      <h3 className='text-2xl mb-4'>Experience</h3>
      <div className='grid sm:grid-cols-2 lg:grid-cols-2 gap-4'>
        {experience.map((xp, index) => (
          <Card key={index} className='custom-spotlight-card'>
            <h3 className='text-xl'>{xp.role}</h3>
            <h3 className='text-base'>{xp.company}</h3>
            <h3 className='text-[#b5b5b5a4] text-sm mb-3'>{xp.time}</h3>
            <p className='text-[#b5b5b5a4] lg:text-base md:text-sm '>{xp.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default XPGrid;
