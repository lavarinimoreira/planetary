import React from "react";
import "./Content.css";

interface Props {
  copyright?: string;
  image: string;
  title: string;
  date: string;
  explanation: string;
}

const Content: React.FC<Props> = ({
  copyright,
  image,
  title,
  date,
  explanation,
}) => {
  return (
    <div className="Content">
      <img className="img" src={image} />
      <div className="h1h2">
        <h1 className="title-component">"{title}"</h1>
        <h2 className="date">{date}.</h2>
      </div>
      {copyright ? (
        <h2 className="copyright">
          <span className="span-copyright">copyright</span> {copyright}.
        </h2>
      ) : null}
      <p className="explanation">{explanation}</p>
    </div>
  );
};

export default Content;
