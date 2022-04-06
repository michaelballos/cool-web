import React from 'react'
import SceneOne from './SceneOne.tsx'

const ParallaxPlain: React.FC = () => {
  return (
    <>
      <div className='SceneOneContainer'>
        <SceneOne />
      </div>
      <div className={'ParallaxPlain'} />
    </>
  )
}

export default ParallaxPlain
