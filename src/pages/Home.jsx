import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/island.jsx";
import Sky from "../models/Sky.jsx";
import Butterfly from "./Butterfly.jsx";
import Girl from "./Girl.jsx";
import { DirectionalLightHelper } from "three";
import { useHelper } from "@react-three/drei";

{
  /* <div className="absolute tocp-28 left-0 right-0 z-10 flex items-center justify-center">
        POPUP
      </div> */
}

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [CurrentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [-0.5, -1.5, 0.135];
    let rotation = [0, 3.2, 0.03];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [0.025, 0.025, 0.025];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustGirlForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [girlScale, girlPosition] = adjustGirlForScreenSize();

  // const LightWithHelper = () => {
  //   const lightRef = useRef();
  //   useHelper(lightRef, DirectionalLightHelper, 5, "red"); // Shows light direction

  //   return (
  //     <directionalLight
  //       ref={lightRef}
  //       castShadow
  //       intensity={4}
  //       position={[2.5, 3, 0.5]}
  //     />
  //   );
  // };

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        shadows
        camera={{ near: 0.1, far: 1000, fov: 100 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={<Loader />}>
          <hemisphereLight intensity={2} />
          <directionalLight castShadow intensity={2} position={[2.5, 3, 0.5]} />
          <ambientLight intensity={1} />
          <Butterfly />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Girl
            isRotating={isRotating}
            girlScale={girlScale}
            girlPosition={girlPosition}
            rotation={[0, 21, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
