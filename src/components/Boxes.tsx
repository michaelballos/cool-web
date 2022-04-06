import React from 'react'
import { Box } from '@react-three/flex'

const Boxes: React.FC<{
  args: any,
  position: number[],
}> = ({
  args,
  position
}) => {
    return (
      <Box centerAnchor>
        <mesh position={position}>
          <boxBufferGeometry
            attach="geometry"
            args={args} />
          <meshLambertMaterial attach="material" color="hotpink" />
        </mesh>
      </Box>
    )
  }

export default Boxes