import React from "react";

export function CardBody() {
  return (
    <div className="card-body">
      <div className="card-name">
        <h4>Murtaza Khachrodwala</h4>
      </div>
      <p className="card-role">Frontend Developer</p>
      <p className="card-link">
        <a href="https://murtaza-k.web.app" target="_blank" rel="noreferrer">
          murtaza-k.web.app
        </a>
      </p>
      <div className="card-button">
        <a className="card-email" href="mailto:er.murtazakhachrod@gmail.com">
          <i class="fa-solid fa-envelope"></i> Email
        </a>
        <a
          className="card-linkedin"
          href="https://linkedin.com/in/murtaza-khachrodwala"
        >
          <i class="fa-brands fa-linkedin"></i> LinkedIn
        </a>
      </div>
      <div className="card-title">
        <h3>About</h3>
        <p className="card-text1">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>
      <div className="card-title">
        <h3>Interests</h3>
        <p className="card-text1">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}
