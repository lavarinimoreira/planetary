import axios from "axios";
import React, { useEffect, useState } from "react";
import Content from "./components/Content";
import { TApod } from "./model";
import {
  Text,
  Float,
  Environment,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./sky.css";
import "./styles.css";

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
      <div className="aeroship">
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [-3, 1.5, 4],
          }}
        >
          <Environment preset="night" />
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
            <Text
              font="./codystar-v15-latin-regular.woff"
              key={undefined}
              material={undefined}
              position={[0, 1, 0]}
              children={"Astronomy Picture\rof the Day"}
              fontSize={0.5}
              attach={undefined}
              args={undefined}
              onUpdate={undefined}
              visible={undefined}
              type={undefined}
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
              geometry={undefined}
              morphTargetInfluences={undefined}
              morphTargetDictionary={undefined}
              isMesh={undefined}
              updateMorphTargets={undefined}
            ></Text>
            <primitive object={spaceShip.scene} />
          </Float>
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
      <div className="hills"></div>
    </div>
  );
}

export default App;
