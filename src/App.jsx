import * as THREE from 'three';
import { Physics } from '@react-three/cannon';
import {Canvas} from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { Ground } from './components/Ground';

import styles from './App.module.css';

function App() {    

  return (
    <div className={styles.App}>
     <Canvas className={styles.canvas}> 
      <Sky sunPosition={[100, 100, 20]} ></Sky>
      <ambientLight intensity={0.5} />
      <Physics>
        <Ground />
      </Physics>
      
      

     </Canvas>
    </div>
  )
}

export default App
