import * as THREE from 'three';
import {Canvas} from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import styles from './App.module.css';

function App() {    

  return (
    <div className={styles.App}>
     <Canvas className={styles.canvas}> 
      <Sky sunPosition={[100, 100, 20]} ></Sky>
     </Canvas>
    </div>
  )
}

export default App
