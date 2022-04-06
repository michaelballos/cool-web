import React, { useRef } from 'react'
import { Canvas, useFrame } from "@react-three/fiber"
import { Stars, OrbitControls } from '@react-three/drei'

const RotateStars: React.FC = () => {
  const mesh = useRef<any>(null)
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.001
  })

  return (
    <mesh ref={mesh}>
      <Stars />
    </mesh>
  )
}
const SceneOne: React.FC = () => {
  return (
    <Canvas
      camera={{
        fov: 60,
        position: [0, 3, 5],
      }}>
      <ambientLight intensity={0.2} />
      <pointLight
        position={[5, 3, 10]}
        intensity={0.6} />
      <RotateStars />
    </Canvas>
  )
}

export default SceneOne