import Noise from '../atoms/Noise';

const Intro = () => {
  return (
    <div id='home' className='container p-3 mx-auto scroll-mt-[100px] font-poppins'>
      <div className='w-full h-[400px] relative overflow-hidden rounded-3xl'>
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
        <div className='lg:ml-20 md:ml-10 absolute top-0 left-0 w-full h-full flex flex-col justify-center p-8'>
          <h1 className='font-bold lg:text-6xl text-4xl'>Saul Suazo</h1>
          <h2 className='my-2 lg:text-2xl text-xl' >Software Engineer</h2>
          <p className='lg:text-base md:text-base text-sm'>Just a software engineer building cool things on the web.</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
