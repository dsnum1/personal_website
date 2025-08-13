import './Resume.css'
import profile_photo from '../Images/Divyansh 2-20230115T142008Z-001/Divyansh 2/ProfilePhoto.jpg'
// import profile_photo from  '../Images/Divyansh 2-20230115T142008Z-001/Divyansh 2/ProfilePhoto.JPG"'
import FYP_Photo from '../Images/FYP_conversion.gif'
import RLWorkshop from "../Images/RLWorkshop.png"
import MDP from "../Images/MDP.png"
import SpotifyPlaylist from "../Images/SpotifyPlaylist.png"
import MixRidePlaylist from "../Images/MixRidePlaylist.png"
import SemiSupervisedResults from "../Images/SemiSupervisedResults.png"
import SiameseNetResult from "../Images/SiameseNetResult.png"
import SiameseNetTripletLoss from "../Images/SiameseNetTripletLoss.png"
import SiameseNet from "../Images/SiameseNet.png"
import { Container } from 'semantic-ui-react'
import { Col, Row } from 'react-bootstrap'
import React, { useEffect } from 'react';
import { ProjectEntry } from '../ProjectEntry'



const Project = ({ project }) => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '20px', marginBottom: '10px', borderRadius: '5px' }}>
      <h2 style={{ color: '#333', fontSize: '24px', fontWeight: 'bold' }}>
        <a href={project.githubLink} style={{ textDecoration: 'none', color: 'blue' }}>{project.title}</a>
      </h2>
      <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.5' }}>
        {project.description}
      </p>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (

      <div style={{ background: 'white', color: 'black', margin: '20px', marginTop:'5rem', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>
              <a href={project.githubLink} style={{ color: 'black', textDecoration: 'underline' }}>{project.title}⬈</a>
          </h2>
          <p style={{ fontSize: '16px', lineHeight: '1.5' }}>{project.date}</p>
          <p style={{ fontSize: '16px', lineHeight: '1.5' }}>{project.project_description}</p>
          <div style={{ marginTop: '10px' }}>
              <span style={{ fontWeight: 'bold' }}>Technologies: </span>
              {project.tech_stack.map(tech => <span key={tech} style={{ marginRight: '10px', fontSize: '14px' }}>{tech}</span>)}
          </div>
          <div style={{ marginTop: '10px' }}>
              <span style={{ fontWeight: 'bold' }}>Tags: </span>
              {project.tag_list.map(tag => <span key={tag} style={{ marginRight: '10px', fontSize: '14px', display: 'inline-block', background: 'lightgray', padding: '3px 6px', borderRadius: '4px' }}>{tag}</span>)}
          </div>
      </div>
  );
};

const ProjectsDisplay = ({ projects }) => {
  return (
    <>
      <div style={{ maxWidth: '1200px', margin: 'auto', marginTop:'50vh'}}>
          <h1 style={{ textAlign: 'center', fontSize: '30px', color: 'black', margin: '20px 0', minHeight:'50vh' }}>Academic Projects</h1>
          {ProjectsData2?.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
      </div>
      <div style={{ maxWidth: '1200px', margin: 'auto', marginTop:'50vh'}}>
          <h1 style={{ textAlign: 'center', fontSize: '30px', color: 'black', margin: '20px 0', minHeight:'50vh' }}>Personal Projects</h1>
          {PersonalProjects?.map((project, index) => (
              <ProjectCard key={index} project={project} />
          ))}
      </div>

          </>
  );
};


const PersonalProjects = [
  {
    title: "Mix&Ride - Curated Spotify Playlists for Car Rides",
    date: "Feb 2023 - Dec 2023",
    project_description: "Developed 'Mix&Ride', a web application that enhances car ride experiences by dynamically curating Spotify playlists based on journey duration and user preferences. Integrated Google Cloud Maps API for real-time traffic data and AWS Lambda for backend services. The application efficiently curates playlists using an optimized 0/1 Knapsack algorithm, demonstrating a blend of technical skill and user-centric design.",
    tech_stack: ["ReactJS", "Node.js", "Spotify API", "Google Cloud API", "AWS Lambda", "Python"],
    tag_list: ["Web Development", "API Integration", "User Experience", "Music Streaming", "Cloud Computing"],
    images: [],
    githubLink: "https://github.com/dsnum1/mixride-project"
  },
  {
    title: "Automatic Safe Entry Gate - Escendo Hackathon",
    date: "Jan 2022 - Jan 2022",
    project_description: "Engineered an innovative real-time gateway system for the Escendo Hackathon, designed to detect vaccination statuses from users' phones during safe entry, effectively minimizing crowd gathering at checkpoints. I led a multidisciplinary team to prototype this system, integrating hardware components like Stepper Motors, Buzzers, and LED displays with modular programming techniques to enhance code reusability and maintenance. Our team's ability to successfully interface these components and program comprehensive functionalities resulted in a seamless operation and user interaction, propelling our project into the Top 10 final round among 35 competing teams. This recognition highlighted our project's technical sophistication and its potential impact on public health safety.",
    tech_stack: ["Python", "Arduino", "Embedded Systems", "Stepper Motor", "LED Displays", "Buzzers"],
    tag_list: ["Hardware Integration", "Public Health", "Hackathon", "Embedded Systems", "Team Leadership"],
    images: [],
    githubLink: "https://github.com/dsnum1/automatic-safe-entry-gate"
}
]

const WorkData = [
  {
    title: "Embedded Firmware Engineering Intern at HP Inc. R&D, Singapore",
    date: "Jan 2023 - Jul 2023",
    project_description: "During my internship at HP Inc. from January to July 2023, I led the development of two significant full-stack web tools designed to automate testing and bug reporting processes for HP printers. This involved crafting a Django-based backend that handled multi-threaded scripts on Ubuntu, paired with a ReactJS frontend, creating a comprehensive and user-friendly application. This project was critical, as it allowed firmware integrators and various teams within HP to use the application simultaneously, significantly enhancing productivity. The tools I developed led to an 80% increase in team productivity and have been integrated into the development processes of four different HP printer models. This role not only honed my software development skills but also underscored the importance of my contributions to the operational efficiency of global technology products.",
    tech_stack: ["Django", "ReactJS", "JavaScript", "Python", "Ubuntu", "Git"],
    tag_list: ["Full-Stack Development", "Web Development", "Automation Tools", "Productivity Improvement", "Firmware", "Tech Industry"],
    images: [],
    githubLink: "https://github.com/dsnum1/hp-internship",
    identity:"hp_internship",
},
{
    title: "Front-End Developer at EMASS.AI, Singapore",
    date: "Aug 2022 - Dec 2022",
    project_description: "At EMASS.AI, from August to December 2022, I was entrusted with the task of enhancing the company's online presence through innovative web design. My role involved performing a detailed market analysis and researching competitor strategies to inform our approach. I then spearheaded the design and development of a responsive landing page using ReactJS, completing this project within a challenging two-month timeline. This experience was particularly formative, as it not only sharpened my front-end development skills but also deepened my understanding of how strategic web design can influence customer engagement and business success.",
    tech_stack: ["ReactJS", "JavaScript", "CSS", "HTML", "Git"],
    tag_list: ["Web Design", "Front-End Development", "UI/UX Design", "Market Analysis", "Competitive Strategy", "Tech Industry"],
    images: [],
    githubLink: "https://github.com/dsnum1/emass-ai-project",
    identity:"emass_website_photo",
},
{
    title: "Machine Learning Student Intern at Senserbot, Singapore",
    date: "May 2021 - Aug 2021",
    project_description: "My internship at Senserbot from May to August 2021 provided me with a foundational experience in the practical applications of machine learning. Here, I was tasked with integrating a Wi-Fi localization feature into the Aurora Flagship Robot, which involved containerizing the feature to create a local-positioning system. My role extended to researching existing literature and implementing machine learning algorithms to enhance this localization system. The collaborative nature of this role, working alongside the CTO and project managers, was instrumental in developing my skills in data analysis and model visualization, significantly contributing to the project's success in creating a more efficient and autonomous robotic system.",
    tech_stack: ["Python", "Machine Learning", "Docker", "Git"],
    tag_list: ["Machine Learning", "Robotics", "Data Analysis", "Localization", "Automation", "Tech Industry"],
    images: [],
    githubLink: "https://github.com/dsnum1/senserbot-internship",
    identity:"senserbot_internship",
},
]




const ProjectsData2 = [
  {
    title: "Final Year Project - Goal Conditioned Reinforcement Learning",
    date: "Aug 2023 - May 2024",
    project_description: "In the final year of my engineering studies, I embarked on an ambitious project aimed at solving complex problems within virtual environments that offer limited clues or 'sparse rewards'. Under the guidance of Professor Arvind Easwaran, I developed specialized algorithms using Generative Adversarial Networks and various sequence-to-sequence models, like RNNs and LSTMs. This technology, akin to training a robot to navigate mazes with minimal guidance, was not only a significant academic challenge but also a venture into the cutting-edge realm of AI, enhancing our ability to teach machines to learn from minimal inputs. This project was pivotal in sharpening my problem-solving and analytical skills in machine learning.",
    tech_stack: ["Python", "PyTorch", "TensorBoard", "OpenAI Gym", "Git"],
    tag_list: ["AI", "Deep Learning", "Reinforcement Learning", "Multi-Goal RL", "RL"],
    images: [],
    githubLink: "https://github.com/dsnum1/fyp-gcrl-public"
  },
  {
    title: "Tiny ML Project IoT: Emulate Web Based Games with Arduino",
    date: "Jan 2024 - April 2024",
    project_description: "During a three-month endeavor, I created a machine learning model that turned the Arduino, a small yet powerful computer, into a sophisticated tool capable of recognizing cricket shots with an astonishing 97% accuracy. By deploying this model on an Arduino Nano using TensorFlow Lite, I achieved a seamless interaction between real-world movements and a web-based cricket game. The model recognized different shots and translated them into in-game actions, providing a dynamic gaming experience. This project not only demonstrated my technical proficiency in integrating hardware with software but also my creative approach to making technology interactive and fun.",
    tech_stack: ["C++", "TensorFlow Lite", "Python", "Embedded Programming"],
    tag_list: ["ML", "Machine Learning", "IoT", "TinyML", "Deep Learning", "Sensors", "Neural Networks"],
    images: [],
    githubLink: "https://github.com/dsnum1/super-duper-tiny"
  },
  {
    title: "Kinship Detection Kaggle Competition (Nanyang Technological University, Machine Learning Group Project)",
    date: "Jan 2023 - Jul 2023",
    project_description: "Led a team at Nanyang Technological University in a Kaggle competition to develop an ensemble model for detecting kinship from facial portraits, achieving a 90% accuracy using advanced machine learning models including Vision Transformers, Convolutional Neural Networks, and Siamese networks.",
    tech_stack: ["Python", "PyTorch", "Hugging Face", "Git"],
    tag_list: ["Machine Learning", "Siamese Networks", "Vision Transformers", "Deep Learning", "Kaggle", "Computer Vision"],
    images: [],
    githubLink: "https://github.com/dsnum1/kinship-detection"
  },
  {
    title: "Semi-Supervised Learning in Text Sentiment Analysis",
    date: "Nov 2022 - Dec 2022",
    project_description: "Directed a team project to investigate the effects of domain-specific pre-training on the performance of sentiment analysis models using transformers such as BERT and RoBERTa across various data sizes and imbalances.",
    tech_stack: ["Python", "PyTorch", "Hugging Face", "CUDA"],
    tag_list: ["NLP", "BERT", "RoBERTa", "Machine Learning", "Deep Learning"],
    images: [],
    githubLink: "https://github.com/dsnum1/semi-supervised-sentiment"
  },
  {
    title: "STM32 Autonomous Robot Car",
    date: "Aug 2022 - Dec 2022",
    project_description: "Led a multidisciplinary team in the development of a smart autonomous robot car using STM32 microcontrollers. The project involved designing an interface library to bridge communication between the Raspberry Pi and the STM32 microcontroller, enabling dynamic calibration and enhanced operational efficiency. This endeavor showcased our ability to integrate complex electronic systems and develop real-time control algorithms for autonomous navigation.",
    tech_stack: ["C", "Python", "STM32", "Raspberry Pi", "Embedded Systems"],
    tag_list: ["Embedded Systems", "Robotics", "Microcontroller", "Real-Time Systems", "Autonomous Vehicles"],
    images: [],
    githubLink: "https://github.com/dsnum1/stm32-robot-car"
  },
  {
    title: "Database Development and Business Analysis Project",
    date: "Nov 2022 - Dec 2022",
    project_description: "Conducted research and developed a database to analyze the impact of energy consumption on GDP across different countries using SQL and MongoDB. This project involved complex data analysis and visualization to support business decision-making.",
    tech_stack: ["SQL", "MongoDB"],
    tag_list: ["Database", "SQL", "MongoDB", "Data Analysis", "Business Intelligence"],
    images: [],
    githubLink: "https://github.com/dsnum1/BC2402GroupP"
  },
  {
    title: "AI Student Research Conference - Organizing Director",
    date: "Feb 2022 - May 2022",
    project_description: "Led the development of a new Reinforcement Learning environment and organized a conference that included a workshop and a Bomberman tournament with AI agents trained by participants, promoting AI education and research.",
    tech_stack: ["Python", "PyTorch", "Git"],
    tag_list: ["AI", "Reinforcement Learning", "Education", "Event Management"],
    images: [],
    githubLink: "https://github.com/dsnum1/ai-conference"
  }
];


const ProjectsData = [
    {
        "title":"Final Year Project - Goal Conditioned Reinforcement Learning",
        "date":"Aug 2023 - May 2024",
        "project_description":"In the final year of my engineering studies, I embarked on an ambitious project aimed at solving complex problems within virtual environments that offer limited clues or 'sparse rewards'. Under the guidance of Professor Arvind Easwaran, I developed specialized algorithms using Generative Adversarial Networks and various sequence-to-sequence models, like RNNs and LSTMs. This technology, akin to training a robot to navigate mazes with minimal guidance, was not only a significant academic challenge but also a venture into the cutting-edge realm of AI, enhancing our ability to teach machines to learn from minimal inputs. This project was pivotal in sharpening my problem-solving and analytical skills in machine learning.",
        "tech_stack":[
            "Python",
            "PyTorch",
            "TensorBoard",
            "OpenAI Gym",
            "Git"
        ],
        "tag_list":[
            "AI",
            "Deep Learning",
            "Reinforcement Learning",
            "Multi-Goal RL",
            "RL"
        ],
        "images":[
          FYP_Photo
        ],
    },
    {
      "title": "Embedded Firmware Engineering Intern at HP Inc. R&D, Singapore",
      "date": "Jan 2023 - Jul 2023",
      "project_description": "During my internship at HP Inc. from January to July 2023, I led the development of two significant full-stack web tools designed to automate testing and bug reporting processes for HP printers. This involved crafting a Django-based backend that handled multi-threaded scripts on Ubuntu, paired with a ReactJS frontend, creating a comprehensive and user-friendly application. This project was critical, as it allowed firmware integrators and various teams within HP to use the application simultaneously, significantly enhancing productivity. The tools I developed led to an 80% increase in team productivity and have been integrated into the development processes of four different HP printer models. This role not only honed my software development skills but also underscored the importance of my contributions to the operational efficiency of global technology products.",
      "tech_stack": [
          "Django",
          "ReactJS",
          "JavaScript",
          "Python",
          "Ubuntu",
          "Git"
      ],
      "tag_list": [
          "Full-Stack Development",
          "Web Development",
          "Automation Tools",
          "Productivity Improvement",
          "Firmware",
          "Tech Industry"
      ],
      "images": [
      ]
    },
    {
      "title": "Front-End Developer at EMASS.AI, Singapore",
      "date": "Aug 2022 - Dec 2022",
      "project_description": "At EMASS.AI, from August to December 2022, I was entrusted with the task of enhancing the company's online presence through innovative web design. My role involved performing a detailed market analysis and researching competitor strategies to inform our approach. I then spearheaded the design and development of a responsive landing page using ReactJS, completing this project within a challenging two-month timeline. This experience was particularly formative, as it not only sharpened my front-end development skills but also deepened my understanding of how strategic web design can influence customer engagement and business success.",
      "tech_stack": [
          "ReactJS",
          "JavaScript",
          "CSS",
          "HTML",
          "Git"
      ],
      "tag_list": [
          "Web Design",
          "Front-End Development",
          "UI/UX Design",
          "Market Analysis",
          "Competitive Strategy",
          "Tech Industry"
      ],
      "images": [
      ]
    },
    {
      "title": "Machine Learning Student Intern at Senserbot, Singapore",
      "date": "May 2021 - Aug 2021",
      "project_description": "My internship at Senserbot from May to August 2021 provided me with a foundational experience in the practical applications of machine learning. Here, I was tasked with integrating a Wi-Fi localization feature into the Aurora Flagship Robot, which involved containerizing the feature to create a local-positioning system. My role extended to researching existing literature and implementing machine learning algorithms to enhance this localization system. The collaborative nature of this role, working alongside the CTO and project managers, was instrumental in developing my skills in data analysis and model visualization, significantly contributing to the project's success in creating a more efficient and autonomous robotic system.",
      "tech_stack": [
          "Python",
          "Machine Learning",
          "Docker",
          "Git"
      ],
      "tag_list": [
          "Machine Learning",
          "Robotics",
          "Data Analysis",
          "Localization",
          "Automation",
          "Tech Industry"
      ],
      "images": [
      ]
  },
    {
      "title":"Tiny ML Project IoT: Emulate Web Based Games with Arduino",
      "date":"Aug 2023 - Dec 2023",
      "project_description":"During a three-month endeavor, I created a machine learning model that turned the Arduino, a small yet powerful computer, into a sophisticated tool capable of recognizing cricket shots with an astonishing 97% accuracy. By deploying this model on an Arduino Nano using TensorFlow Lite, I achieved a seamless interaction between real-world movements and a web-based cricket game. The model recognized different shots and translated them into in-game actions, providing a dynamic gaming experience. This project not only demonstrated my technical proficiency in integrating hardware with software but also my creative approach to making technology interactive and fun.",
      "tech_stack":[
          "C++",
          "TensorFlow Lite",
          "Python",
          "Embedded Programming"
      ],
      "tag_list":[
          "ML",
          "Machine Learning",
          "IoT",
          "TinyML",
          "Deep Learning",
          "Sensors",
          "Neural Networks",
      ],
      "images":[
      ],

  },

    {
        "title":"Kinship Detection Kaggle Competition (Nanyang Technological University, Machine Learning Group Project)",
        "date":"Aug 2023 - Dec 2023",
        "project_description":"From January to July 2023, I led a team at Nanyang Technological University in a cutting-edge project for a Kaggle competition aimed at detecting kinship through facial recognition. Our group developed an ensemble model that blended modern deep learning technologies such as Vision Transformers, Convolutional Neural Networks, and Siamese networks. This model achieved a remarkable 90% accuracy in recognizing blood relations from portraits. A key innovation was our approach to training the model with 'hard negatives', which are challenging data pairs that greatly improve the model's learning efficiency. This technique not only propelled our project to success but also contributed significantly to the Kaggle community, offering a novel method to enhance the accuracy of kinship detection models globally.",
        "tech_stack":[
            "Git",
            "Hugging Face",
            "PyTorch",
            "Python"
        ],
        "tag_list":[
            "ML",
            "Machine Learning",
            "Siamese Networks",
            "Vision Transformers",
            "Deep Learning",
            "Computer Vision",
            "Neural Networks",
            "Kaggle"
        ],
        "images":[
          SiameseNetResult,
          SiameseNetTripletLoss,
          SiameseNet,
        ],

    },
    {
        "title":"Semi-Supervised Learning in Text Sentiment-Analysis",
        "date":"Aug 2023 - Dec 2023",
        "project_description":"In November and December 2022, I guided a group project focused on the advanced application of Large Language Models (LLMs) like BERT and RoBERTa for sentiment analysis. Our research centered on the effectiveness of training these models with in-domain data versus a broader dataset. By experimenting with different sizes and compositions of training data, we explored how these factors influence the performance of LLMs in understanding and analyzing sentiments. This project highlighted my leadership in navigating complex AI concepts and my strategic thinking in experimental design to refine the predictive capabilities of neural networks in real-world applications.",        
        "tech_stack":[
            "CUDA",
            "Hugging Face",
            "PyTorch",
            "Python"
        ],
        "tag_list":[
            "ML",
            "Machine Learning",
            "Siamese Networks",
            "Vision Transformers",
            "Deep Learning",
            "Computer Vision",
            "Neural Networks",
            "Kaggle"
        ],
        "images":[
          SemiSupervisedResults
        ]
    },
    {
        "title":"Mix & Ride",
        "date":"Feb 2023 - Dec 2023",
        "project_description":"From February to December 2023, I developed 'Mix&Ride', a web application that curates Spotify playlists based on the journey's duration and user preferences. Integrating real-time traffic data via the Google Cloud Maps API and leveraging AWS lambda for backend services, I crafted a solution that dynamically adapts music to the travel conditions and personal tastes of its users. This blend of technology and user experience design illustrates my capability to create applications that resonate on a personal level, enhancing everyday activities such as car rides with technology that anticipates and caters to user needs.",
        "tech_stack":[
            "Bootstrap",
            "Spotify API",
            "GitHub Pages", 
            "Google Cloud API",
            "AWS Lambda",
            "Django",
            "ReactJS",
        ],
        "tag_list":[
            "Frontend",
            "API",
            "AWS",
            "Web App",
            "0/1 Knapsack Algorithms",
            "Full  Stack Web Dev",
            "Backend",
            "Hackathon",
        ],
        "images":[
          MixRidePlaylist,
          SpotifyPlaylist
        ]
    },
    {
        "title":"STM32 Programmer",
        "date":"Aug 2022 - Dec 2022",
        "project_description":"In a collaboration with a multidisciplinary team, I spearheaded the development of a smart autonomous robot car using a STM microcontroller, a project that blended electrical engineering with software development. By designing an interface library that bridged the Raspberry Pi and the STM32 microcontroller, we enabled dynamic calibration and significantly enhanced the operational efficiency of the robot car. This project was a testament to my leadership in navigating complex, cross-functional projects and my technical acumen in creating systems that are both intelligent and efficient.",
        "tech_stack":[
            "RPi",
            "STM32",
            "Python",
            "STM32Cube",
            "C"
        ],
        "tag_list":[
            "STM32",
            "Gyroscope",
            "PID",
            "Ultrasonic",
            "Motor Control", 
            "Neutral Steering",
            "No Sleep",
            "Autonomous Robot",
        ],
        "images":[
          MDP
        ]
    },
    {
        "title":"Organizing Director of AI Student Research Conference",
        "date":"Jan 2022 - May 2022",
        "project_description":"As the Organizing Director at the AI Student Research Conference from February to May 2022, I led a dynamic team in developing a new Reinforcement Learning environment tailored for the game Bomberman. This endeavor involved coding in Python and setting up a platform where AI agents could be trained to play the game effectively. In addition to the technical development, I conducted an introductory workshop on Reinforcement Learning to empower beginners with the knowledge to engage in this field. The culmination of this project was organizing a successful tournament featuring Bomberman-playing AI agents developed by participants, demonstrating my leadership in fostering both educational and competitive AI events.",
        "tech_stack":[
            "Git",
            "PyTorch",
            "PyGame",
            "Python",
        ],
        "tag_list":[
            "QLearning",
            "SARSA",
            "RL",
            "Bomberman",
            "Leadership",
            "Project Management",
            "Backend",
            "Hackathon",
        ],
        "images":[
          RLWorkshop
        ]
    },
]



const BotpressChatbot = () => {
  useEffect(() => {
    const injectScript = (src, defer = false) => {
      const script = document.createElement('script');
      script.src = src;
      script.defer = defer;
      document.body.appendChild(script);
    };

    // Ensure the DOM element is mounted by introducing a delay
    setTimeout(() => {
      injectScript('https://cdn.botpress.cloud/webchat/v1/inject.js');
      injectScript('https://mediafiles.botpress.cloud/d8c9a210-efc0-4fc6-a130-537e250682f5/webchat/config.js', true);
    }, 100); // A delay of 100ms

    return () => {
      // Cleanup scripts to prevent duplicates or errors when the component unmounts and mounts again
      document.querySelectorAll('script[src*="botpress"]').forEach(script => {
        document.body.removeChild(script);
      });
    };
  }, []);

  return <div id="bp-web-widget"></div>; // Ensure this ID matches what the Botpress script expects
};





function ResumeTitle(){
    return (
        <div className="home-page">
          <main className="main-content">
            <div className="greeting" style={{width:'100%', height:'85vh'}}>
              <div className="profile-container">
                <img src={profile_photo} alt="Profile" className="profile-pic" />
              </div>
              <div className="text-container">
                <h1 className='greetings-text'>Hi. Nice to meet you. I'm <br></br><span className="name">Divyansh<br></br>Sharma</span></h1>
                <p className='main-statement'>Fresh Grad B.Eng. Computer Engineering student at Nanyang Technological University(NTU). Found a job!</p>
                <div className="buttons">
                  {/* <button className="btn contact">Contact</button>
                  <button className="btn resume">Resume</button> */}
                </div>
              </div>
            </div>
          </main>
        </div>
      );
    }


function Resume(){
    return(
    <>
        <ResumeTitle/>
        {/* <h1 className='project-section-heading'>Professional Internship</h1> */}
        <div className="home-page">
          <main className="main-content">
            <div className="greeting" style={{width:'100%', height:'85vh'}}>
              <div className="text-container">
                <h1 className='greetings-text'><span className="name of-page">Have anything to ask?</span></h1>
                <p className='main-statement'>If you are too bored to read, you can directly prompt this chatbot to ask questions about me.  </p>
                <BotpressChatbot/>
                <div className="buttons">
                  <button className="btn resume" onClick = {()=>{
                    window.open("https://mediafiles.botpress.cloud/d8c9a210-efc0-4fc6-a130-537e250682f5/webchat/bot.html", '_blank')
                  }}>Open Chatbot⬈</button>
                </div>
              </div>
            </div>
          </main>
        </div>
        <h1 style={{ textAlign: 'center', fontSize: '30px', color: 'black', margin: '20px 0' }}>Work Experience</h1>

        {WorkData?.map((proj)=>(
          <ProjectEntry project={proj}
                        identity = {proj.identity}
          />
      ))}

                {/* <ProjectEntry title="Embedded Firmware Engineering Intern at HP Inc. Inkjet Printers"
                    summary="During my internship at HP Inc. from January to July 2023, I led the development of two significant full-stack web tools designed to automate testing and bug reporting processes for HP printers. This involved crafting a Django-based backend that handled multi-threaded scripts on Ubuntu, paired with a ReactJS frontend, creating a comprehensive and user-friendly application. This project was critical, as it allowed firmware integrators and various teams within HP to use the application simultaneously, significantly enhancing productivity. The tools I developed led to an 80% increase in team productivity and have been integrated into the development processes of four different HP printer models. This role not only honed my software development skills but also underscored the importance of my contributions to the operational efficiency of global technology products."
                    evidence=""
                    identity="hp_internship"
        />


                <ProjectEntry title="2. Front-End Developer at EMASS.AI, Singapore"
                    summary="At EMASS.AI, from August to December 2022, I was entrusted with the task of enhancing the company's online presence through innovative web design. My role involved performing a detailed market analysis and researching competitor strategies to inform our approach. I then spearheaded the design and development of a responsive landing page using ReactJS, completing this project within a challenging two-month timeline. This experience was particularly formative, as it not only sharpened my front-end development skills but also deepened my understanding of how strategic web design can influence customer engagement and business success."
                    evidence=""
                    identity="emass_website_photo"
        />

                <ProjectEntry title="3. Machine Learning Student Intern at Senserbot, Singapore"
                    summary="My internship at Senserbot from May to August 2021 provided me with a foundational experience in the practical applications of machine learning. Here, I was tasked with integrating a Wi-Fi localization feature into the Aurora Flagship Robot, which involved containerizing the feature to create a local-positioning system. My role extended to researching existing literature and implementing machine learning algorithms to enhance this localization system. The collaborative nature of this role, working alongside the CTO and project managers, was instrumental in developing my skills in data analysis and model visualization, significantly contributing to the project's success in creating a more efficient and autonomous robotic system."
                    evidence=""
                    identity="senserbot_internship"
        /> */}


        <ProjectsDisplay/>
        
        {/* <div style={{marginTop:'100px'}}>
        {ProjectsData && ProjectsData.map((item, index) => (
    item ? <ProjectPage key={index} item={item} /> : null
  ))}
        </div> */}

        {/* <ProjectPage/> */}
    </>
    
    )
}

function ProjectPage(props){
    if (props == null || props.item == null){
        return <></>
    }


    return(
        <>
     <div className="project-page" style={{minHeight:'150vh'}}>
      <main className="project-main">
        <h1 className="project-title">{props.item.title}</h1>
        <p className="project-date">{props.item.date}</p>
        <article className="project-content">
          {/* Project content goes here */}
          <p style={{textAlign:'justify'}}>
            {props.item.project_description}
          </p>
          {/* ... */}
        </article>
        <Container>
          <Row style={{marginTop:"30px", marginBottom:"30px", display:'flex', justifyContent:'center', alignItems:'center'}}>
          {
                props.item.images && props.item.images.map((image_name, index)=>(
                  <Col style={{display:'flex', justifyContent:'center'}}>
                    <div>
                      <img src={image_name}style={{  display: "block", marginLleft:" auto", marginRight: "auto", width: "200px"}}></img>
                    </div>
                  </Col>
                ))
            }

        </Row>
        </Container>
        <footer className="project-footer">
        <Container className='meta-details'>
          <Row style={{display:'flex', justifyContent:'center', alignItems:'center'}} >
            <Col style={{display:'flex', justifyContent:'center', alignItems:'center'}}>            
              <TechStackElement item={props.item}/>
            </Col>
            <Col style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <Tags item={props.item}/>          
            </Col>
          </Row>
        </Container>
          {/* Tags and buttons go here */}
          {/* ... */}
        </footer>
      </main>
      <hr></hr>
    </div>       

        </>
    )
}

function TechStackElement(props){
    return(
    <>
    <div style={{maxWidth:'200px'}}>
            <h6 style={{textAlign:'center'}}>Tech Stack</h6>
            {
                props.item.tech_stack && props.item.tech_stack.map((skill, index)=>(
                            <div style={{backgroundColor:'#fc8608', marginTop:"4px", marginLeft:'auto', marginRight:'auto', textAlign:'center', width:'100px', borderRadius:'20px', fontSize:'10px'}}>{skill}</div>
                ))
            }
    </div>
    </>)
}

function Tags(props){
    return(
    <>
    <div style={{maxWidth:'200px'}}>
            <h6 style={{textAlign:'center'}}>Tags</h6>
            <p>
            {
                props.item.tag_list && props.item.tag_list.map((tag, index)=>(
                            <span style={{margin:'5px', textAlign:'center', borderRadius:'20px', fontSize:'10px'}}>#{tag}</span>
                ))
            }
            </p>
    </div>  
    </>)
}

export default Resume;