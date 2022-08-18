import React from "react";
import ChatHistory from "./ChatHistory";
import SearchHeader from "./SearchHeader";

export default function LeftPart() {
  return (
    <div className="left-part">
      <SearchHeader />
      <ChatHistory />
    </div>
  );
}
