import React from "react";

export default function SearchHeader() {
  return (
    <div className="search-header">
      <img
        className="user-img"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt=""
        width="50"
      ></img>
      <form>
        <input type="text" value={"🔎 Search or start new chat"}></input>
      </form>
    </div>
  );
}
