import React from "react";

export default function ChatHistory() {
  return (
    <div className="list-of-contacts">
      <div>Chats</div>
      <div className="contact-description">
        <div>
          <img
            className="user-img"
            src="https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?w=2000"
            alt=""
            width="50"
          />{" "}
          <strong>
            <span>MArina</span>
          </strong>
          <span>Aug 18, 2022</span>
        </div>
        <div className="message">Hey it's Marin</div>
      </div>
      <hr></hr>
    </div>
  );
}
