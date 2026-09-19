import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { Sky, KeyboardControls } from '@react-three/drei';
import { Player } from './components/Player';
import { World } from './components/World';
import { UI } from './components/UI';

export default function App() {
  return (
    <KeyboardControls
      map={[
        { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
        { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
        { name: 'left', keys: ['ArrowLeft', 'KeyA'] },
        { name: 'right', keys: ['ArrowRight', 'KeyD'] },
        { name: 'jump', keys: ['Space'] },
      ]}
    >
      <div className="h-screen w-screen relative bg-black">
        <UI />
        <Canvas shadows camera={{ position: [0, 5, 10], fov: 65 }}>
          <Sky sunPosition={[100, 20, 100]} turbidity={0.1} rayleigh={0.5} />
          <ambientLight intensity={0.4} />
          <directionalLight
            castShadow
            position={[50, 50, 50]}
            intensity={1.5}
            shadow-mapSize={[2048, 2048]}
            shadow-camera-left={-50}
            shadow-camera-right={50}
            shadow-camera-top={50}
            shadow-camera-bottom={-50}
          />
          <Physics gravity={[0, -20, 0]}>
            <Player />
            <World />
          </Physics>
        </Canvas>
      </div>
    </KeyboardControls>
  );
}