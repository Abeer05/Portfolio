import { Suspense, useRef, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/island.jsx";
import Sky from "../models/Sky.jsx";

{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        POPUP
      </div> */
}

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [-10, -2, -42];
    let rotation = [0.1, 3, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [0.25, 0.25, 0.25];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000, fov: 100 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={<Loader />}>
          <hemisphereLight intensity={1} />
          <directionalLight
            intensity={3}
            position={[1, 1, 1]}
            color="rgb(233, 193, 100)"
          />
          <ambientLight intensity={2} />
          illumination
          <Sky />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
