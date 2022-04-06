import './App.css'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import ParallaxPlain from './components/ParallaxPlain.tsx'
import ParallaxTechVaporwave from './components/ParallaxTechVaporwave.tsx'
import './css/parallax.css'
import './css/SceneOne.css'
import SceneOne from './components/SceneOne.tsx'
import { Stars } from '@react-three/drei'

function App() {
  return (
    <>
      <ParallaxPlain />
      <div className="NoSky" />
      <div className="SceneOneContainer">
      </div>
      <ParallaxTechVaporwave />
    </>

  )
}

export default App;