import { useFrame } from '@react-three/fiber';
import { useKeyboardControls } from '@react-three/drei';
import { RigidBody, CapsuleCollider } from '@react-three/rapier';
import { useRef } from 'react';
import * as THREE from 'three';

export const Player = () => {
  const bodyRef = useRef<any>(null);
  const [, get] = useKeyboardControls();

  useFrame((state) => {
    if (!bodyRef.current) return;
    const { forward, backward, left, right, jump } = get();

    const velocity = bodyRef.current.linvel();
    const position = bodyRef.current.translation();

    // Lógica de Movimentação do Mundo (WASD)
    const speed = 12;
    const direction = new THREE.Vector3();
    
    if (forward) direction.z -= 1;
    if (backward) direction.z += 1;
    if (left) direction.x -= 1;
    if (right) direction.x += 1;

    if (direction.length() > 0) {
      direction.normalize().multiplyScalar(speed);
      // Faz o personagem "olhar" para a direção que anda
      const targetAngle = Math.atan2(direction.x, direction.z);
      bodyRef.current.setRotation(
        new THREE.Quaternion().setFromEuler(new THREE.Euler(0, targetAngle, 0)),
        true
      );
    }

    // Mantém a gravidade (y) e aplica o vetor X/Z calculado
    bodyRef.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z }, true);

    // Pulo Simples
    if (jump && Math.abs(velocity.y) < 0.1) {
      bodyRef.current.setLinvel({ x: velocity.x, y: 15, z: velocity.z }, true);
    }

    // Câmera em Terceira Pessoa (Segue o Player por trás e por cima)
    const cameraTarget = new THREE.Vector3(position.x, position.y + 7, position.z + 12);
    state.camera.position.lerp(cameraTarget, 0.1);
    
    // Câmera olha para a frente do player
    const lookAtTarget = new THREE.Vector3(position.x, position.y + 2, position.z);
    state.camera.lookAt(lookAtTarget);
  });

  return (
    <RigidBody 
      ref={bodyRef} 
      colliders={false} 
      mass={1} 
      type="dynamic" 
      position={[0, 5, 0]} 
      lockRotations={true}
    >
      {/* Colisor do personagem */}
      <CapsuleCollider args={[0.7, 0.5]} />
      
      {/* Placeholder da "Skin do Anime" */}
      <group>
        <mesh castShadow position={[0, -0.2, 0]}>
          <capsuleGeometry args={[0.5, 1.2, 4, 16]} />
          <meshStandardMaterial color="#ffb7b2" roughness={0.4} />
        </mesh>
        {/* Detalhe para sabermos para onde o personagem está olhando (Rosto) */}
        <mesh castShadow position={[0, 0.5, -0.4]}>
          <boxGeometry args={[0.6, 0.3, 0.4]} />
          <meshStandardMaterial color="#e2b4bd" />
        </mesh>
      </group>
    </RigidBody>
  );
};