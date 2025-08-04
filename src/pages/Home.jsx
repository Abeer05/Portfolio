import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/island.jsx";
import Sky from "../models/Sky.jsx";
import Butterfly from "../models/Butterfly.jsx";
import Girl from "../models/Girl.jsx";
import { DirectionalLightHelper } from "three";
import { useHelper } from "@react-three/drei";
import HomeInfo from "../components/HomeInfo.jsx";
import { weatherConditions } from "../constants/index.js";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

console.log(import.meta.env.VITE_WEATHER_API_URL);

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = null;
    let rotation = [0, 2.9, 0];
    // let rotation = [0, -3.9, 0.03];

    if (window.innerWidth < 768) {
      screenScale = [0.02, 0.02, 0.02];
      screenPosition = [-0.5, -1.5, 0.2];
    } else {
      screenScale = [0.025, 0.025, 0.025];
      screenPosition = [-0.5, -1.5, 0.2];
    }
    console.log("screenScale", screenScale);

    return [screenScale, screenPosition, rotation];
  };

  const adjustGirlForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.0015, 0.0015, 0.0015];
      screenPosition = [-0.1, -0.82, 3];
    } else {
      screenScale = [0.0015, 0.0015, 0.0015];
      screenPosition = [-0.1, -0.82, 3.45];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [girlScale, girlPosition] = adjustGirlForScreenSize();

  useEffect(() => {
    async function fetchWeather() {
      try {
        const baseUrl =
          import.meta.env.VITE_WEATHER_API_URL?.trim() ||
          "http://localhost:3001";
        const res = await fetch(`${baseUrl}/weather?city=Toronto`);
        const data = await res.json();

        const weatherCondition =
          data?.weather?.[0]?.main?.toLowerCase?.() || "clear";

        console.log("Weather condition:", weatherCondition);
        setWeather(weatherCondition);
      } catch (error) {
        console.error("Failed to fetch weather", error);
      }
    }

    fetchWeather();
  }, []);

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

  const weathers = {
    rainy: weatherConditions[0],
    clear: weatherConditions[1],
    cloudy: weatherConditions[2],
  };

  const weatherConfig = weathers[weather] ?? weatherConditions[1];

  console.log(weatherConfig);

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-full ${weatherConfig.color} ${
          weatherConfig.opacity
        } mix-blend-overlay absolute w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        shadows
        camera={{ near: 0.1, far: 1000, fov: 100 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={<Loader />}>
          <hemisphereLight
            intensity={weatherConfig.hemisphereLight.intensity}
            color={weatherConfig.hemisphereLight.color}
            groundColor={weatherConfig.hemisphereLight.groundColor}
          />

          <directionalLight
            castShadow
            intensity={weatherConfig.directionalLight.intensity}
            color={weatherConfig.directionalLight.color}
            position={weatherConfig.directionalLight.position}
          />
          <ambientLight intensity={weatherConfig.ambientLight.intensity} />
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
            scale={girlScale}
            position={girlPosition}
            rotation={[0, 21, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
