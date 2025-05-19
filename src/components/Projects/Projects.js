import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/art.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/trip.jpg";
import suicide from "../../Assets/Projects/dj.jpg";
import bitsOfCode from "../../Assets/Projects/email.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Trip Margdarshak"
              description="Trip Margadarshak is a user-friendly tourism management website that helps travelers explore, select, and book tour packages with ease. It offers features like user registration, secure login, booking history, and admin management of packages. Designed with simplicity and functionality in mind, it aims to make trip planning hassle-free for all users."
              //ghLink="https://github.com/soumyajit4419/Chatify"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Email Spam Detection using Machine Learning"
              description="Email Spam Detection using Machine Learning is a Jupyter Notebook-based project that classifies emails as spam or not using natural language processing techniques. It leverages content-based features and applies machine learning algorithms for accurate prediction. The project includes data preprocessing, model training, and performance evaluation using Python and scikit-learn.

"
              //ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AI ADTECH PORTAL"
              description="The AI AdTech Gemini Prompt is designed to generate multiple ad copy variations using AI based on consumer trends and brand tone. It helps advertisers quickly produce personalized, trend-aware marketing content. This showcases how generative AI enhances creativity and efficiency in digital advertising."
              //ghLink="https://github.com/soumyajit4419/Editor.io"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Art Gallery Management System"
              description="Art Gallery Management System is a web-based application designed to manage artworks, artists, and customer interactions efficiently. It provides functionalities for showcasing art, handling sales, and organizing exhibitions. The project streamlines gallery operations with a user-friendly interface and database integration.."
              //ghLink="https://github.com/soumyajit4419/Plant_AI"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="DJ Management System"
              description="DJ Management System helps manage DJ profiles, client bookings, event schedules, and payments. Clients can request bookings, DJs confirm them, and the system tracks event details and payment status. It streamlines booking workflows for smooth event management."
              //ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              //ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
