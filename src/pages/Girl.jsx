import React, { useRef, useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import girlScene from "../assets/3d/low_poly_running_girl_model..glb";

const Girl = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(girlScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (!actions || !actions["mixamo.com"]) return;

    actions["mixamo.com"].play(); // Ensure animation is available
    actions["mixamo.com"].paused = true; // Pause it immediately on load
  }, [actions]);

  useEffect(() => {
    if (!actions || !actions["mixamo.com"]) return;

    actions["mixamo.com"].paused = !isRotating;
  }, [actions, isRotating]);

  useEffect(() => {
    if (!scene) return;
    scene.traverse((object) => {
      if (object.isMesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });
  }, [scene]);

  useEffect(() => {
    if (!scene) return;

    scene.traverse((object) => {
      if (object.isMesh) {
        if (object.material.name === "hair") {
          object.material.color.set("black");
        } else if (object.material.name === "skin") {
          object.material.color.set("#E6C192");
        } else if (object.material.name === "dress") {
          object.material.color.set("#DF8282");
        } else if (object.material.name === "skirt") {
          object.material.color.set("#8180D5");
        } else if (object.material.name === "skirt2") {
          object.material.color.set("#FFC36D");
        } else if (object.material.name === "material") {
          object.material.color.set("#CF4C4C");
        } else if (object.material.name === "dressdark") {
          object.material.color.set("#FFC36D");
        } else if (object.material.name === "shoes") {
          object.material.color.set("#8A6139");
        }
      }
    });
  }, []);

  return (
    <mesh {...props} ref={ref} castShadow receiveShadow>
      <primitive object={scene} />
    </mesh>
  );
};

export default Girl;
