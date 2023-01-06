import { useEffect } from 'react';
import * as THREE from 'three';

import SceneInit from './lib/SceneInit';

import styles from './App.module.css';

function App() {
  useEffect(() => {
    const test = new SceneInit('threeJsCanvas');
    test.initialize();
    test.animate();

    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

    test.scene.add(boxMesh);
  }, []);

  return (
    <div className={styles.App}>
      <canvas id='threeJsCanvas' />
    </div>
  )
}

export default App;
