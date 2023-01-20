import React from "react";

function Menu(props) {
  function handleSelectVideo(e) {
    props.onSelectVideo(e.target.value);
  }

  return (
    <form onClick={handleSelectVideo}>
      {props.videoValues.map((value) => (
        <div className="video-inputs" key={value}>
          <input type="radio" value={value} name="src" defaultChecked />
          {value}
        </div>
      ))}
    </form>
  );
}

export default Menu;
