import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Backend Developer",
          "Web developer",
          "Frontend Developer",
          "UI/UX Designer",
          "Product Designer",
          "Video Editor with Motion Design",



        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
