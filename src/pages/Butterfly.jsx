import React from "react";
import butterflyScene from "../assets/3d/cartoon_butterfly.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

const Butterfly = ({ ...props }) => {
  const { scene, animations } = useGLTF(butterflyScene);
  const butterflyRef = useRef();
  const { actions } = useAnimations(animations, butterflyRef);

  useEffect(() => {
    actions["Animation"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    // Simulate a slight up-and-down motion
    butterflyRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 1.5;

    // Move the butterfly left and right instead of toward the camera
    if (butterflyRef.current.position.x > camera.position.x + 5) {
      butterflyRef.current.rotation.y = 0; // Turn around (move right)
    } else if (butterflyRef.current.position.x < camera.position.x - 5) {
      butterflyRef.current.rotation.y = Math.PI; // Turn around (move left)
    }

    // Move the butterfly in the x direction based on rotation
    const speed = 0.02;
    if (butterflyRef.current.rotation.y === 0) {
      butterflyRef.current.position.x -= speed; // Move right
    } else {
      butterflyRef.current.position.x += speed; // Move left
    }
  });

  return (
    <mesh
      position={[-4, 1, 2]}
      scale={[0.25, 0.25, 0.25]}
      ref={butterflyRef}
      rotation={[0, 10, 0]}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Butterfly;
