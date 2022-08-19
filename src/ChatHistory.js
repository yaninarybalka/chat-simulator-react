import React from "react";

export default function ChatHistory() {
  return (
    <div className="list-of-contacts">
      <div className="chat-headline">Chats</div>
      <div className="contact-description">
        <div className="contact-info">
          <strong>
            <span className="name">MArina</span>
          </strong>
          <span className="date">Aug 18, 2022</span>
        </div>
        <img
          className="user-img"
          src="https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?w=2000"
          alt=""
          width="50"
        />{" "}
        <div className="message">Hey it's Marin</div>
      </div>
    </div>
  );
}
