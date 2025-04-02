import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
import * as THREE from "three";

import islandScene from "../assets/3d/lowpoly_island.glb";

const Island = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const islandRef = useRef();
  const pivotRef = useRef(); // Create a ref for the pivot group

  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;

      pivotRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      pivotRef.current.rotation.y += 0.01 * Math.PI;
    } else if (e.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      pivotRef.current.rotation.y -= 0.01 * Math.PI;
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      pivotRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = pivotRef.current.rotation.y;

      //   Normalize the rotation value to be between 0 and 2 * Math.PI
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      switch (true) {
        case normalizedRotation >= 2.41 && normalizedRotation <= 3.03:
          setCurrentStage(1);
          break;
        case normalizedRotation >= 4.72 && normalizedRotation <= 5.12:
          setCurrentStage(3);
          break;
        case normalizedRotation <= 0.73 || normalizedRotation >= 6.21:
          setCurrentStage(2);
          break;
        default:
          setCurrentStage(null);
      }

      // You can update your stages here based on the normalized rotation value
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  // Set material properties for the island mesh
  const customMaterial = materials["Scene_-_Root"];
  customMaterial.roughness = 0.9;
  customMaterial.metalness = 0.3;

  useEffect(() => {
    // Set pivot position and offset model accordingly
    const pivot = pivotRef.current;
    const model = islandRef.current;

    // Set the pivot's position to your desired pivot point
    if (props.position) {
      pivot.position.set(...props.position);
    }

    // Offset the model so its intended pivot aligns with the pivot group's origin (0, 0, 0)
    model.position.sub(new THREE.Vector3(-16.02, -28.95, 20.84));
  }, []);

  return (
    <a.group ref={pivotRef} {...props} dispose={null}>
      <mesh
        ref={islandRef}
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={customMaterial}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </a.group>
  );
};

export default Island;
