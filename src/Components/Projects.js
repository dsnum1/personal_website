import Accordion from 'react-bootstrap/Accordion'
import React from 'react';
import './Projects.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProjectEntry } from './ProjectEntry';
import Footer from './Footer';
import PropTypes from "prop-types";
import Badge from 'react-bootstrap/Badge';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



const GitHubLink = ({ GLink }) => (
    <>
        <strong>GitHub Link</strong> :
        <Badge bg="dark" className='glink-container'>
            <a className="glink" href={GLink} target="_blank">
                GitHub
            </a>
        </Badge>

    </>
);



const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
        <iframe
            width="600"
            height="150"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
);


YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

// I established a Wi-Fi-localization system using signal processing techniques on signal strength and implementing Wi-Fi-fingerprinting machine learning models to approximate Flagship Aurora Robot's position in a library. During this I 
// Implemented a special K-nearest neighbour algorithm with k = 3, and accuracy of 96%.


function Projects() {
    return (
        <>
            <ProfessionalHeader />
            <SummaryPage />
            <div className='projects-section'>
                <h1 className='project-section-heading'>Final year Project</h1>
                <ProjectEntry title="Goal Conditioned Reinforcement Learning"
                    summary="
                        Investigating conditions for an agent algorithm to optimally navigate in an environment with diverse goals. 

                        As computational power increases, the solutions to problems previously written off as impractical are becoming the core elements of AI, for example, ChatGPT. 
                        Reinforcement learning is one such solution that allows an agent(computer program) to learn an environment through self-exploration and finally produce a set actions and strategies that optimize some function. 
                        Such agents can be applied to stock trading, gaming, self-driving cars, robotics, etc. However, real-life problems can be more complexed. One such complicated class of AI requires the satisfaction of multiple goals. 
                        How do you achieve satisfy multiple objective functions? 
                        The objective of this project is to demonstrate that retrieving an optimum solution is possible even in such an environment setting.
                        "

                    evidence={
                        <>
                            <GitHubLink GLink="https://github.com/dsnum1/OpenAIGymLapmanNotes" />
                        </>
                    }
                    identity="gcrl_fyp"
                />
                <h1 className='project-section-heading'>Professional Internship</h1>
                <ProjectEntry title="Embedded Firmware Engineering Intern at HP Inc. Inkjet Printers"
                    summary="
                        (Jan 2023 - Jul 2023) With the objective to improve productivity, I worked on creating and managing various automation tools and dashboard for firmware integrators. 
                        This involved full-stack development of a web app which automates many processes involved in the creation of release notes. 
                        A release note is a document that summarizes details of firmware releases of a product. To do this they had to find all the open and closed bugs which is clearly
                        not utilizing their firmware skills. After collecting requirements of integrators and understanding the process myself, I created a website which allows multiple users at the same time to find bugs, classify them and automatically send out emails to the deired recipents. 


                    "
                    evidence=""
                    identity="hp_internship"
                />


                <h1 className='project-section-heading'>Work Experiences</h1>
                <ProjectEntry title="Internship at Senserbot"
                    summary="
                        I secured my first internship in freshmen year to explore machine learning. 
                        I collaborated in a group to explore machine learning models that can learn to discover a robot's position in a library from
                        detected WiFi signal strengths of different routers. This project helped me build a strong foundation in the area of data science, 
                        statistics, pytorch, and model evaluation and visualization. Towards the end of the internship, I was able to introduce a knn model that was tuned to give an accuracy of 96%.   
                    "
                    evidence={
                        <>
                            <GitHubLink GLink="https://github.com/dsnum1/Radio-Map-Simulator" />
                        </>
                    }
                    identity="senserbot_internship"
                />


                {/* // I was hired by Professor Mohamed M. Sabry Aly   at NTU to develop a landing page for EMASS.AI. I worked on this project part-time during my academic semester and finally implemented the website using Figma, React, Bootstrap, NodeJS
                    // This experience helped me understand the latest web development standards and practices.       */}



                <ProjectEntry title="Part time Frontend developer at EMASS"
                    summary="
                    A company or individual must always work to build a brand. Therefore, I chose to work at the part at an AI chip accelerator start up to develop deliverable front-end skills. 
                    I worked as a front-end web developer and UI/UX designer at EMASS.AI where I produced a responsive website using React, Bootstrap, Figma and NodeJS. 
                    With self-learning, I became proficient in the latest frontend frameworks.  
                    "

                    identity="emass_website_photo"
                />

                <h1 className='project-section-heading'>Academic Experiences</h1>

                <ProjectEntry title="Hardware STM Team 47"
                    summary="

                    Collaborated in a multidisciplinary group of 7 other members to develop a smart autonomous robot car. 
                    Wrote code(in C) for STM32 which controlled sensors, actuators and RPi.
                    Implemented RPi to STM32 library which allowed run time callibration.
                    Experimented and perfected Neutral Steering with gyroscope.
                        "
                    evidence={
                        <>
                            <YoutubeEmbed embedId="2fFRqC1J7ao" />
                            <GitHubLink GLink="https://github.com/dsnum1/MDP_STM_GROUP47" />
                        </>

                    }
                    identity="mpd_group_video"
                />

                <ProjectEntry title="Advancing Sustainability with Adaptive Visualization"
                    summary="
                        Generated SQL queries on world energy bank dataset and obtained valuable insights and visualizations into fuel consumption and  
                    "
                    evidence={
                        <>
                            <GitHubLink GLink="https://github.com/dsnum1/BC2402SingleP" />
                        </>

                    } identity="bc2402_project_database"
                />
                <ProjectEntry title="Development of Databases Group Project"
                    summary="
                        Collaborated in a group project to investigate energy usage patterns such as decoupling of GDP and energy consumption, 
                        Compared Singapore's energy consumption in comparison to Luxembourg, and Ireland, 
                        , and Singapore's need for nuclear energy. However, this project required intensive operations on data in mySQL and mongoDB.

                        "
                    evidence={
                        <>
                            <YoutubeEmbed embedId="R2ze5P1ejxw" />
                            <GitHubLink GLink="https://github.com/dsnum1/BC2402GroupP" />
                        </>

                    }
                    identity="bc2402_gp"
                />


                <h1 className='project-section-heading'>Personal Projects</h1>


                <ProjectEntry title="Successful Reinforcement Learning on Bomberman"
                    summary="
                        I successfully implemented AI Algorithms(Q-Learning, SARSA, Deep Q) to play Bomberman. 
                        I devloped this during my position as Organizing Director of AI Student Research Conference Mini Conference(MLDA).
                        Not only did I develop the game, but I used it as a medium to teach beginners about reinforcement learning and host a 
                        fun competition. The event received 50 participants and 24 successfuly submissions.
                        "
                    evidence={
                        <>
                            <YoutubeEmbed embedId="eNoa6K0gdKY" />
                            <GitHubLink GLink="https://github.com/dsnum1/Battle-Of-Yunnan-" />
                        </>

                    }
                    identity="yunnan_gardens_ai"
                />

                <ProjectEntry title="Upgraded Safe Entry (Escendo Hackathon)"
                    summary="
                        I worked on a weekend build as a program manager which prototyped a real-time system gateway that detects vaccination status from a passing user’s phones. This was to avoid the grouping of 
                    people during safe entry check. To establish this, I Interfaced and programmed various actuators like Stepper Motor, Buzzer, LED display screen using modular programming practices for code reusability.
                        My team entered Top 10 final round out of 35 teams.
                        "
                    evidence={
                        <>
                            <YoutubeEmbed embedId="7kMvRXBh4PQ" />
                        </>

                    }
                    identity="escendo"
                />


            </div>
        </>
    )

}



function ProfessionalHeader() {
    return (
        <div className='professional-section'>
            <Container fluid>
                <Row>
                    <Col>
                        <div className="professional-title-space">
                            <h1 className='header-professional-title'>Divyansh Sharma <br></br>21</h1>
                            <p className='header-experience-subheading'>4th year Computer Engineer at NTU |
                                Researching on Goal Conditioned Reinforcement Learning
                                Ex-Embedded Firmware Intern R&D HP Singapore |
                                Ex-Freelance Front End Developer |
                                Ex-Senserbot Machine Learning Intern |
                                <br></br>
                            </p>
                            <p className='motto-quote'>
                                Over 4 years of coding, I have acquired experience in full-stack web development and automation. I'm currently building foundation in reinforcement learning and deep learning. Please feel free to contact me if you would like to discuss more.
                                {/* I aim to deliver on my commitments and constantly improve my skills and problem solving abilities. I aspire to become a full stack developer and therefore, I’m actively searching for projects. */}
                            </p>
                        </div>
                    </Col>
                    <Col md={6} className="professional-profile-photo-space">
                        <>
                        </>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}


function SummaryPage() {
    return (
        <>
            <Container fluid>
                <Row className='summary-container'>
                    <Col sm={3}>
                        <p className='numerical-evidence'><span className='number'>135</span> LeetCode Questions</p>
                    </Col>
                    <Col sm={3}>
                        <p className='numerical-evidence'><span className='number'>3</span> Work Experiences</p>
                    </Col>
                    <Col sm={3}>
                        <p className='numerical-evidence'><span className='number'>8</span> Projects</p>
                    </Col>
                    <Col sm={3}>
                        <p className='numerical-evidence'><span className='number'>2</span> Hackathon won</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}



export default Projects;