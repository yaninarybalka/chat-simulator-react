import React from "react";
import "./App.css";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

export default function App() {
  return (
    <div className="wrap">
      <LeftPart />
      <RightPart />
    </div>
  );
}
