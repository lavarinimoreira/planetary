import axios from "axios";
import React, { useEffect, useState } from "react";
import Content from "./components/Content";
import { TApod } from "./model";
import {
  PresentationControls,
  Float,
  Environment,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./sky.css";
import "./styles.css";
import Footer from "./components/Footer";

function App() {
  const spaceShip = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-spaceship/model.gltf"
  );
  const [dataPhoto, setDataPhoto] = useState<TApod>({
    copyright: "",
    date: "",
    explanation: "",
    hdurl: "",
    media_type: "",
    service_version: "",
    title: "",
    url: "",
  });
  const [options, setOptions] = useState({
    url: "http://localhost:8000/apod",
  });
  const [titleClicked, setTitleClicked] = useState(false);

  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        // console.log(response.data);
        setDataPhoto(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1
        onClick={() => setTitleClicked(!titleClicked)}
        className={titleClicked === true ? "title-clicked title" : "title"}
      >
        Astronomy Picture
        <br /> of the Day
      </h1>

      <div className="spaceship">
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [-7, 2, 8],
          }}
        >
          <Environment preset="night" />
          <PresentationControls
            rotation={[0.13, 0.1, 0]}
            polar={[-0.4, 0.2]}
            azimuth={[0, 0.5]}
            config={{ mass: 2, tension: 200 }}
            snap={{ mass: 4, tension: 100 }}
          >
            <Float
              key={undefined}
              attach={undefined}
              args={undefined}
              onUpdate={undefined}
              visible={undefined}
              type={undefined}
              isGroup={undefined}
              id={undefined}
              uuid={undefined}
              name={undefined}
              parent={undefined}
              modelViewMatrix={undefined}
              normalMatrix={undefined}
              matrixWorld={undefined}
              matrixAutoUpdate={undefined}
              matrixWorldNeedsUpdate={undefined}
              castShadow={undefined}
              receiveShadow={undefined}
              frustumCulled={undefined}
              renderOrder={undefined}
              animations={undefined}
              userData={undefined}
              customDepthMaterial={undefined}
              customDistanceMaterial={undefined}
              isObject3D={undefined}
              onBeforeRender={undefined}
              onAfterRender={undefined}
              applyMatrix4={undefined}
              applyQuaternion={undefined}
              setRotationFromAxisAngle={undefined}
              setRotationFromEuler={undefined}
              setRotationFromMatrix={undefined}
              setRotationFromQuaternion={undefined}
              rotateOnAxis={undefined}
              rotateOnWorldAxis={undefined}
              rotateX={undefined}
              rotateY={undefined}
              rotateZ={undefined}
              translateOnAxis={undefined}
              translateX={undefined}
              translateY={undefined}
              translateZ={undefined}
              localToWorld={undefined}
              worldToLocal={undefined}
              lookAt={undefined}
              add={undefined}
              remove={undefined}
              removeFromParent={undefined}
              clear={undefined}
              getObjectById={undefined}
              getObjectByName={undefined}
              getObjectByProperty={undefined}
              getWorldPosition={undefined}
              getWorldQuaternion={undefined}
              getWorldScale={undefined}
              getWorldDirection={undefined}
              raycast={undefined}
              traverse={undefined}
              traverseVisible={undefined}
              traverseAncestors={undefined}
              updateMatrix={undefined}
              updateMatrixWorld={undefined}
              updateWorldMatrix={undefined}
              toJSON={undefined}
              clone={undefined}
              copy={undefined}
              addEventListener={undefined}
              hasEventListener={undefined}
              removeEventListener={undefined}
              dispatchEvent={undefined}
            >
              <primitive
                object={spaceShip.scene}
                position-y={1.1}
                position-x={4}
                position-z={-2}
              />
            </Float>
          </PresentationControls>
        </Canvas>
      </div>
      <div className="content">
        <Content
          copyright={dataPhoto.copyright}
          image={dataPhoto.hdurl}
          title={dataPhoto.title}
          date={dataPhoto.date}
          explanation={dataPhoto.explanation}
        />
      </div>
      {/* <div className="hills"></div> */}
      <Footer />
    </div>
  );
}

export default App;
