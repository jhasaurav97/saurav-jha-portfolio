import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";

function SystemCore() {
  const coreRef = useRef(null);
  const orbitRef = useRef(null);
  const secondaryOrbitRef = useRef(null);

  useFrame((_, delta) => {
    if (coreRef.current) coreRef.current.rotation.y += delta * 0.12;
    if (orbitRef.current) orbitRef.current.rotation.z += delta * 0.08;
    if (secondaryOrbitRef.current) secondaryOrbitRef.current.rotation.x -= delta * 0.045;
  });

  return (
    <group>
      <group ref={coreRef}>
        <mesh>
          <icosahedronGeometry args={[0.92, 4]} />
          <MeshDistortMaterial
            color="#b8f27d"
            roughness={0.17}
            metalness={0.56}
            distort={0.23}
            speed={1.15}
            clearcoat={1}
            clearcoatRoughness={0.12}
          />
        </mesh>
        <mesh scale={1.13}>
          <icosahedronGeometry args={[0.92, 2]} />
          <meshBasicMaterial color="#d6ffad" wireframe transparent opacity={0.18} />
        </mesh>
      </group>

      <group ref={orbitRef}>
        <mesh rotation={[0.9, 0.15, 0.25]}>
          <torusGeometry args={[1.48, 0.012, 12, 180]} />
          <meshStandardMaterial color="#a4ef79" emissive="#4b9a45" emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[1.48, 0, 0]} scale={0.105}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial color="#e0ffb8" metalness={0.5} roughness={0.18} emissive="#8ecf67" emissiveIntensity={0.3} />
        </mesh>
      </group>

      <group ref={secondaryOrbitRef}>
        <mesh rotation={[1.25, 0.65, -0.5]}>
          <torusGeometry args={[1.9, 0.008, 10, 180]} />
          <meshBasicMaterial color="#7db9b1" transparent opacity={0.52} />
        </mesh>
        <mesh position={[-1.82, 0.36, 0]} scale={0.09}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#9ed6ca" emissive="#4a887e" emissiveIntensity={0.5} />
        </mesh>
      </group>

      <mesh position={[-1.18, -0.9, 0.42]} rotation={[0.35, 0.8, 0.2]} scale={0.13}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#a9c9ff" metalness={0.65} roughness={0.24} />
      </mesh>
      <mesh position={[1.05, 0.96, -0.25]} scale={0.1}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#b8e8d3" metalness={0.4} roughness={0.2} />
      </mesh>
      <mesh position={[0.2, -1.55, 0.35]} scale={0.055}>
        <sphereGeometry args={[1, 20, 20]} />
        <meshBasicMaterial color="#c9f69a" />
      </mesh>
    </group>
  );
}

export default function SystemScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5.3], fov: 38 }}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      onCreated={({ gl }) => {
        gl.setClearColor("#07110f", 0);
      }}
    >
      <ambientLight intensity={1.05} />
      <directionalLight position={[3, 4, 5]} intensity={2.1} color="#efffe4" />
      <pointLight position={[-3, -2, 2]} intensity={1.4} color="#5fb7a0" />
      <pointLight position={[2, 1, -3]} intensity={1.1} color="#96b6ff" />
      <Float speed={1.1} rotationIntensity={0.12} floatIntensity={0.24}>
        <SystemCore />
      </Float>
      <Sparkles count={72} scale={4.8} size={1.7} speed={0.24} opacity={0.5} color="#c8f5a6" />
    </Canvas>
  );
}
