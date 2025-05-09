import React from 'react'
import Card from '../molecules/Card'
import ShinyText from '../atoms/ShinyText'

const CardGrid = () => {
  return (
    <div className='container p-3 mx-auto scroll-mt-[100px] font-poppins mt-7'>
        <h3 className='text-2xl mb-4'>Projects</h3>
        <div>
            <Card className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                <h3></h3>
                <span className=''>
                    <ShinyText text="Just some shiny text!" disabled={false} speed={3} className='custom-class' />
                </span>
            </Card>

        </div>
    </div>
  )
}

export default CardGrid