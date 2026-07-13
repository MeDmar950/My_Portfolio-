import { useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useMousePosition } from '@/hooks/useMousePosition'

const AbstractGeometry = () => {
  const meshRef = useRef()
  const mouse = useMousePosition()

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating rotation
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15

      // Subtle reaction to mouse movement - Optimized interpolation
      const targetX = (mouse.current.x / window.innerWidth) * 2 - 1
      const targetY = -(mouse.current.y / window.innerHeight) * 2 + 1
      
      meshRef.current.position.x += (targetX * 0.5 - meshRef.current.position.x) * 0.05
      meshRef.current.position.y += (targetY * 0.5 - meshRef.current.position.y) * 0.05
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={2.5}>
        {/* Optimized geometry to prevent GPU crashes */}
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial 
          color="#be123c" 
          emissive="#0a0a0a"
          distort={0.4} 
          speed={2} 
          roughness={0.3} 
          metalness={0.5}
        />
      </mesh>
    </Float>
  )
}

const Scene = () => {
  const { scene } = useThree()

  useEffect(() => {
    scene.background = new THREE.Color('#0a0a0a')
  }, [scene])

  return (
    <>
    <ambientLight intensity={0.8} color="#1c1917" />
    <directionalLight position={[5, 10, 5]} intensity={2} color="#f43f5e" />
    <directionalLight position={[-5, -10, -5]} intensity={1} color="#0a0a0a" />
    <pointLight position={[0, 0, 5]} intensity={1.5} color="#fbbf24" />
    
    <AbstractGeometry />
  </>
  )
}

const HeroScene = () => (
  <Canvas
    camera={{ position: [0, 0, 8], fov: 45 }}
    gl={{ antialias: true, alpha: false }}
    // Capped DPR to 1.5 max for better performance
    dpr={[1, 1.5]}
    style={{ position: 'absolute', inset: 0 }}
  >
    <Scene />
  </Canvas>
)

export default HeroScene
