import Header from "./components/header";
import Head from "./components/Header2";
import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, useGLTF, OrbitControls } from "@react-three/drei";
import { Section } from "./components/section";
import { useRef, useState } from "react";
import { useSpring, a } from "@react-spring/three";
import { Route } from "react-router-dom";
import Gal from './EventGallay/Gal'

const Model = () => {
  const gltf = useGLTF("/scene.gltf", true);
  return <primitive object={gltf.scene} dispose={null} />;
};
const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[0, 10, 0]} intensity={1.5} />
      <spotLight intensity={1} position={[1000, 0, 0]} />
    </>
  );
};

const HtmlContent = () => {
  const ref = useRef();
  const [expand, setExpand] = useState(false);
  const props = useSpring({ scale: expand ? [35, 35, 35] : [30, 30, 30] });
  useFrame(() => (ref.current.rotation.y += 0.005));

  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, 0, 0]}>
        <a.mesh
          ref={ref}
          position={[0, 10, 20]}
          onClick={() => setExpand(!expand)}
          scale={props.scale}
        >
          <Model />
        </a.mesh>

        {<Html>
          <div className="lg:hidden block -ml-20 bg-black rounded-md">
            <h1 className="font-bold text-white mt-44   text-6xl ">SHIBA.</h1>
          </div>
        </Html>}
      </group>
    </Section>
  );
};

function App() {
  return (
    <div>
      <Head />
      <div className="w-full h-screen bg-yellow-500 overflow-hidden ">
        <div className="lg:grid h-screen lg:grid-cols-2  ">
          <div className="hidden lg:block lg:col-start-1">
            <div className="p-10 my-24 mx-20">
              <h1 className="font-bold text-white  text-8xl px-10">Now In</h1>
              <h1 className="font-bold  text-8xl px-10">3D</h1>
              <p className="p-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="px-10">
            <button className="border-2 border-yellow-600 bg-white hover:border-gray-500 px-5 py-2 rounded-full">
              Get Started
            </button>
          </div>
            </div>
          </div>
          <div className="row-start-1 lg:col-start-2 h-screen">
            <Canvas colorMangement camera={{ position: [0, 0, 120], fov: 70 }}>
              <Lights />
              <Suspense fallback={null}>
                <HtmlContent />
              </Suspense>
              <OrbitControls />
            </Canvas>
          </div>
        </div>
      </div>     
    </div>
  );
}

export default App;
