import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'
import about from './../../images/aboutimg.jpg'


const About = () => {
    return (
        <div>

            {/* team detail  */}
            <Container className="story">

                <Row>
                    <Col className="sideImg" sm={6}>


                        <img className="mt-5 w-75 h-auto" src={about} alt="" />

                    </Col>


                    <Col sm={6}>

                        <div className="about-info">
                            <h2 className="h2">verydrone <span>Story</span></h2> <br /> <hr />
                            <h5>Creativity is at the heart of every dream. Every idea, every groundbreaking leap that changes our world starts with the vision of talented creators. At DJI, we give these creators the tools they need to bring their ideas to life.</h5>
                            <hr />
                            <h6>
                                Our platforms empower them to capture images that were once out of reach. Our flying and camera stabilization systems redefine camera placement and motion. Amazing photos and video, treasured personal memories, and high-end professional imagery are captured every day, in every corner of the world using DJI products.
                            </h6>

                            <h6>
                                We do this through an unparalleled commitment to R&D, a culture of constant innovation and curiosity, and a focus on transforming complex technology into easy-to-use devices. Building on the ethos of “form follows function,” our products combine advanced technology with dynamic designs.
                            </h6>
                        </div>

                    </Col>
                </Row>



            </Container>
        </div>


    );
};

export default About;