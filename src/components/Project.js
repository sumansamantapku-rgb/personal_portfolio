import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import project from "../assets/img/project-img5.png";
import projImg2 from "../assets/img/project-img4.png";
import projImg3 from "../assets/img/project-img6.png";
import projImg4 from "../assets/img/project-img7.png";
import projImg5 from "../assets/img/project-img8.png";
import projImg6 from "../assets/img/project-img10.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Project = () => {

  const projects = [
    {
      title: "Ecommerce Website",
      description: "Home Page & Product Listing",
      imgUrl: project,
      link: "https://sumansamantapku-rgb-react-project.vercel.app/"
    },
    {
      title: "Ecommerce Website",
      description: "Product Listing & Shopping Cart",
      imgUrl: projImg2,
      link: "https://sumansamantapku-rgb-react-project.vercel.app/"
    },
    {
      title: "Ecommerce Website",
      description: "Admin Dashboard",
      imgUrl: projImg3,
      link: "https://sumansamantapku-rgb-react-project-e.vercel.app/"
    },
    {
      title: "Personal Portfolio",
      description: "Home Page",
      imgUrl: projImg4,
      link: "https://your-portfolio-link.com"
    },
    {
      title: "Personal Portfolio",
      description: "Project Showcase",
      imgUrl: projImg5,
      link: "https://your-portfolio-link.com"
    },
    {
      title: "Personal Portfolio",
      description: "Mail to Contact Form",
      imgUrl: projImg6,
      link: "https://your-portfolio-link.com"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <h1>1. Ecommerce Website</h1>
                <p>• Built a full-stack E-Commerce application using MERN stack </p>
                <p>• Developed and integrated RESTful APIs for seamless frontend-backend communication</p>
                <p>• Implemented authentication, product management, and shopping cart functionality </p>
                <h1>2. Personal Portfolio</h1>
                <p>• Built a responsive portfolio website to showcase projects and technical skills  </p>
                <p>• Designed clean UI with modern frontend technologies </p>
                <p>• Ensured performance optimization and cross-device compatibility </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}