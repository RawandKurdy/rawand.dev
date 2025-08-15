"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"
import { useRef, Suspense } from "react"
import { useFrame } from "@react-three/fiber"
import type { Mesh } from "three"
import { useTheme } from "@/lib/theme-context"

function AnimatedSphere({
  position,
  color,
  speed = 1,
}: { position: [number, number, number]; color: string; speed?: number }) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5
    }
  })

  return (
    <Sphere ref={meshRef} position={position} args={[1.5, 32, 32]}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.6}
        speed={3}
        roughness={0.2}
        metalness={0.9}
        transparent
        opacity={0.8}
      />
    </Sphere>
  )
}

function FloatingGeometry() {
  const { theme } = useTheme()

  const getThemeColors = () => {
    switch (theme) {
      case "dark":
        return {
          sphere1: "#6366f1",
          sphere2: "#06b6d4",
          sphere3: "#a855f7",
        }
      case "classic":
        return {
          sphere1: "#f59e0b",
          sphere2: "#ef4444",
          sphere3: "#10b981",
        }
      default:
        return {
          sphere1: "#3b82f6",
          sphere2: "#10b981",
          sphere3: "#f59e0b",
        }
    }
  }

  const colors = getThemeColors()

  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ffffff" />

      <AnimatedSphere position={[-3, 1, -4]} color={colors.sphere1} speed={0.8} />
      <AnimatedSphere position={[3, -1, -6]} color={colors.sphere2} speed={1.2} />
      <AnimatedSphere position={[0, 2, -5]} color={colors.sphere3} speed={1.0} />
      <AnimatedSphere position={[-2, -2, -7]} color={colors.sphere1} speed={0.6} />
      <AnimatedSphere position={[2, 3, -8]} color={colors.sphere2} speed={1.4} />

      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate autoRotateSpeed={0.3} />
    </>
  )
}

export function ThreeDBackground() {
  return (
    <div className="fixed inset-0 -z-10 opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }} gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <FloatingGeometry />
        </Suspense>
      </Canvas>
    </div>
  )
}
