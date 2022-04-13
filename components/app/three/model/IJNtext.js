/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef } from 'react'
import { useGLTF } from 'drei/useGLTF'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/three/home/ijntext.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        material={materials.Gray01}
        geometry={nodes.NINLAPUN.geometry}
        position={[-3, -0.39, -0.07]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        material={materials.WhiteSolid}
        geometry={nodes.JIRAYU.geometry}
        position={[-2.55, 0.23, 0.08]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        material={materials.Gray02}
        geometry={nodes.Welcome.geometry}
        position={[1.75, 0.53, 0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.27, 0.27, 0.27]}
      />
      <mesh
        material={materials.Gray03}
        geometry={nodes.Website.geometry}
        position={[2.29, -0.21, -0.02]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.27, 0.27, 0.27]}
      />
    </group>
  )
}

useGLTF.preload('/three/home/ijntext.glb')