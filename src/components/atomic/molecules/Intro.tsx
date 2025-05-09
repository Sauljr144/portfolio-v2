import Noise from '../atoms/Noise';

const Intro = () => {
  return (
    <div className='container p-3 mx-auto scroll-mt-[100px] font-poppins'>
      <div className='w-full h-[400px] relative overflow-hidden rounded-3xl'>
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
        <div className='ml-20 absolute top-0 left-0 w-full h-full flex flex-col justify-center'>
          <h1 className='font-bold text-6xl'>Saul Suazo</h1>
          <h2 className='my-2 text-2xl'>Software Engineer</h2>
          <p>Just a software engineer building cool things on the web.</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
