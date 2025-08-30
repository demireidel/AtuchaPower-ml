"use client"

import { useRef } from "react"
import type { Group } from "three"
import { OrbitControls } from "@react-three/drei"

export function AtuchaIIComplex() {
  const complexRef = useRef<Group>(null)

  return (
    <>
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={20}
        maxDistance={500}
        maxPolarAngle={Math.PI / 2}
      />

      <group ref={complexRef}>
        <ambientLight intensity={0.3} color="#f0f8ff" />
        <directionalLight position={[100, 200, 100]} intensity={1.2} castShadow color="#fff8dc" />

        {/* Simple terrain */}
        <mesh position={[0, -2, 0]} receiveShadow>
          <boxGeometry args={[800, 4, 600]} />
          <meshStandardMaterial color="#8B7355" />
        </mesh>

        {/* Simple reactor building */}
        <mesh position={[0, 35, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[25, 25, 70, 16]} />
          <meshStandardMaterial color="#E8E8E8" />
        </mesh>

        {/* Simple cooling tower */}
        <mesh position={[-80, 50, -40]} castShadow receiveShadow>
          <cylinderGeometry args={[15, 25, 100, 12]} />
          <meshStandardMaterial color="#F5F5F5" />
        </mesh>

        {/* Simple turbine hall */}
        <mesh position={[60, 15, 0]} castShadow receiveShadow>
          <boxGeometry args={[80, 30, 40]} />
          <meshStandardMaterial color="#B8B8B8" />
        </mesh>

        <fog attach="fog" args={["#e6f3ff", 200, 800]} />
      </group>

      <div className="absolute bottom-4 right-4 z-10">
        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg">
          <div className="text-xs space-y-1">
            <div>
              <strong>Mouse:</strong> Rotate view
            </div>
            <div>
              <strong>Scroll:</strong> Zoom in/out
            </div>
            <div>
              <strong>Right-click + drag:</strong> Pan
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
