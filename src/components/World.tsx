import { RigidBody } from '@react-three/rapier';

export const World = () => {
  return (
    <group>
      {/* Chão Principal / Mapa Base */}
      <RigidBody type="fixed" friction={1}>
        <mesh receiveShadow position={[0, -1, 0]}>
          <boxGeometry args={[300, 2, 300]} />
          <meshStandardMaterial color="#4a4e69" roughness={0.8} />
        </mesh>
      </RigidBody>

      {/* Prédios e Obstáculos (Mundo Aberto Placeholder) */}
      <RigidBody type="fixed">
        <mesh receiveShadow castShadow position={[15, 10, -25]}>
          <boxGeometry args={[12, 22, 12]} />
          <meshStandardMaterial color="#2b2d42" />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed">
        <mesh receiveShadow castShadow position={[-20, 15, -40]}>
          <boxGeometry args={[15, 32, 15]} />
          <meshStandardMaterial color="#8d99ae" />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed">
        <mesh receiveShadow castShadow position={[30, 8, -10]}>
          <boxGeometry args={[10, 18, 20]} />
          <meshStandardMaterial color="#edf2f4" />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed">
        <mesh receiveShadow castShadow position={[-10, 2, -15]}>
          <boxGeometry args={[8, 6, 8]} />
          <meshStandardMaterial color="#ef233c" />
        </mesh>
      </RigidBody>
    </group>
  );
};