import React from "react";
import butterflyScene from "../assets/3d/cartoon_butterfly.glb";
import { useGLTF } from "@react-three/drei";

const Butterfly = () => {
  const { scene, animations } = useGLTF(butterflyScene);
  return (
    <mesh position={[-5, 2, 1]} scale={[0.5, 0.5, 0.5]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Butterfly;
