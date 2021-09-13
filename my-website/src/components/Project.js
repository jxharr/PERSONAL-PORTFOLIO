import React from "react";

function Project({ title, techStack, link, desc }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{techStack}</h2>
      <h3>{link}</h3>
      <p>{desc}</p>
    </div>
  );
}
export default Project;
