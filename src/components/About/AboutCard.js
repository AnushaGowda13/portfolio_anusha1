import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anusha Gowda </span>
            from <span className="purple">Bangalore, Karnataka.</span>
            <br />
            I am currently pursuing my Master's in Computer Applications (MCA)
            at AIMIT, Mangalore and have completed my BCA at SDM Degree College,
            Honnavar.
            <br />
            I have worked on various academic and technical projects including an
            AI-based AdTech portal and a real-time tourism guide system called
            <strong> Trip Margadarshak</strong>. I also implemented a research project
            on NLP-based digital forensics for email spam detection.
            <br />
            <br />
            Apart from programming, here are a few activities I enjoy!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Drawing and Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing and Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Sports Events
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build with passion, code with purpose!"{" "}
          </p>
          <footer className="blockquote-footer">Anusha Gowda</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
