import axios from "axios";
import React, { useEffect, useState } from "react";
import Content from "./components/Content";
import { TApod } from "./model";
import "./sky.css";
import "./styles.css";

function App() {
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
      <Content
        copyright={dataPhoto.copyright}
        image={dataPhoto.hdurl}
        title={dataPhoto.title}
        date={dataPhoto.date}
        explanation={dataPhoto.explanation}
      />

      <div className="aeroship"></div>
      <div className="hills"></div>
    </div>
  );
}

export default App;
