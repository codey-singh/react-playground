import React from "react";

export default function FunctionClick() {
  function clickHandler() {
    console.log("button clicked");
  }

  return (
    <div>
      <button onClick={clickHandler}> </button>
    </div>
  );
}
