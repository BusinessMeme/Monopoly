import { usePlane } from "@react-three/cannon";

export const Ground = () => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 4, 0, 0],
        position: [0, 0, 0]
    }));
    
    return (
        <mesh ref={ref}>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <meshStandardMaterial attach='material' color='hotpink' />
        </mesh>
    )
}