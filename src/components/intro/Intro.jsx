import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";
const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ["Developer", "Desinger", "Content Creater"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="public/assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there,I'm </h2>
          <h1>Vipin Kumar</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="public/assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
