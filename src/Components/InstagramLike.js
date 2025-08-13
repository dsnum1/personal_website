import React, { useState } from 'react'
import './InstagramLike.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import image1 from './Images/Draft2/Rizz-space-Cover.png'
import image2 from './Images/Divyansh 2-20230115T142008Z-001/Divyansh 2/DSC_0657.JPG'
import image16 from './Images/Divyansh 2-20230115T142008Z-001/Divyansh 2/DSC_0672.JPG'


import profPhoto from './Images/Divyansh-20230115T142006Z-001/Divyansh/DSC_0545.JPG'
import profPhotoSmiling from './Images/Divyansh-20230115T142006Z-001/Divyansh/DSC_0547.JPG'
import profCandid from './Images/Divyansh-20230115T142006Z-001/Divyansh/DSC_0549.JPG'
import profAppleWatch from './Images/Divyansh-20230115T142006Z-001/Divyansh/DSC_0552.JPG'
import profWalking from './Images/Divyansh-20230115T142006Z-001/Divyansh/DSC_0575.JPG'
import profSunglasses from './Images/Divyansh-20230115T142006Z-001/Divyansh/DSC_0548.JPG'
import profSitting from './Images/Divyansh-20230115T142006Z-001/Divyansh/DSC_0595.JPG'


import topOfGym from './Images/Divyansh-20230115T142006Z-001/Divyansh/DSC_0609.JPG' 
import lookingUpIntheSky from './Images/Divyansh-20230115T142006Z-001/Divyansh/DSC_0626.JPG'  
import ForestLookingUp from './Images/Divyansh 2-20230115T142008Z-001/Divyansh 2/DSC_0670.JPG'  
import smilingPortrait from './Images/Divyansh 2-20230115T142008Z-001/Divyansh 2/DSC_0673.JPG'
import treeLeanSmile from './Images/Divyansh 2-20230115T142008Z-001/Divyansh 2/DSC_0666.JPG'

import gateLeanSmile from  './Images/Divyansh 2-20230115T142008Z-001/Divyansh 2/DSC_0668.JPG' 

import topOfGymStanding from './Images/Divyansh-20230115T142006Z-001/Divyansh/DSC_0607.JPG'
import topOfGymWalking from './Images/Divyansh-20230115T142006Z-001/Divyansh/DSC_0609.JPG'
import silhouetteZyzz from './Images/Divyansh-20230115T142006Z-001/Divyansh/DSC_0619.JPG'

import forestFocus from './Images/Divyansh 2-20230115T142008Z-001/Divyansh 2/DSC_0657.JPG' 
import forestFocus1 from './Images/Divyansh 2-20230115T142008Z-001/Divyansh 2/DSC_0658.JPG' 
import forestFocus2 from './Images/Divyansh 2-20230115T142008Z-001/Divyansh 2/DSC_0659.JPG' 


import greenKurta from './Images/Divyansh 2-20230115T142008Z-001/Divyansh 2/DSC_3098.JPG'
import greenKurta2 from './Images/Divyansh 2-20230115T142008Z-001/Divyansh 2/DSC_3093.JPG'
import greenKurta3 from './Images/Divyansh 2-20230115T142008Z-001/Divyansh 2/DSC_3090.JPG'
import greenKurta4 from './Images/Divyansh 2-20230115T142008Z-001/Divyansh 2/DSC_3087.JPG'
import greenKurta5 from './Images/Divyansh 2-20230115T142008Z-001/Divyansh 2/DSC_3086.JPG'

import axios from 'axios'

import { useEffect} from 'react'



function HollywoodQuote(){
    const [hollyQuote, setHollyQuote] = useState([])
    const [image, setImage] = useState([])
    const [movie, setMovie] = useState([])
    const [year, setYear] = useState([])

    const forbidden_advice_list =  [33, 34, 46, 80, 114, 203, 181]

    useEffect(() => {
        fetchHollywoodQuote();
    }, []);
    
    async function fetchHollywoodQuote(){

        const options = {
            method: 'GET',
            url: 'https://api.adviceslip.com/advice'
        }
        axios.request(options).then(function (response) {
            var id = response.data["slip"]["id"]
            if(forbidden_advice_list.includes(id)){
                var x = "Forgive and let go."
            }
            else{
            var x = response.data["slip"]["advice"]
            }
            setHollyQuote(x)
        }).catch(function (error) {
            console.error(error);
        });
    
    }
    return (
        <>
            <h1>{hollyQuote}</h1>
        </>
    )
}



const InstagramLike = () => {
    return (
        <>

<br></br>            <br></br>            <br></br>            <br></br>            <br></br>            
            <h1 className="photoshoot-title">
                <HollywoodQuote/>
            </h1>
<br></br>           
               <br></br>            <br></br>            <br></br>         
<h1 className="">
        
            </h1>
                <Container fluid>
                    <Row className='row1'>
                        <Col className="pic-holder">
                            <img className="modelling-photo-instance" src={profPhoto}
                                width={350}
                                id="p1"
                            ></img>
                        </Col>
                        <Col className="pic-holder">
                            <img className="modelling-photo-instance" src={profPhotoSmiling}
                                width={350}
                                id="p1"
                            ></img>
                        </Col>
                        <Col className="pic-holder">
                            <img className="modelling-photo-instance" src={profCandid}
                                width={350}
                                id="p1"
                            ></img>
                        </Col>                        
                    </Row>
                    <Row>
                    <Col className="pic-holder">
                            <img className="modelling-photo-instance" src={profSunglasses}
                                width={350}
                                id="p1"
                            ></img>
                        </Col>
                        <Col className="pic-holder">
                            <img className="modelling-photo-instance" src={profAppleWatch}
                                width={350}
                                id="p1"
                            ></img>
                        </Col>
                        <Col className="pic-holder">
                            <img className="modelling-photo-instance" src={profWalking}
                                width={350}
                                id="p1"
                            ></img>
                        </Col>                
                    </Row>
                    <Row>
                        <Col className="pic-holder">
                            <img className="modelling-photo-instance" src={profSitting}
                                width={350}
                                id="p1"
                            ></img>
                        </Col>
                        <Col className="pic-holder">
                            <img className="modelling-photo-instance" src={ForestLookingUp}
                                width={350}
                                id="p1"
                            ></img>
                        </Col>                        
                        <Col className="pic-holder">
                            <img className="modelling-photo-instance" src={treeLeanSmile}
                                width={350}
                                id="p1"
                            ></img>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pic-holder">
                            <img className="modelling-photo-instance" src={forestFocus}
                                width={350}
                                id="p1"
                            ></img>
                        </Col>
                        <Col className="pic-holder">
                            <img className="modelling-photo-instance" src={forestFocus1}
                                width={350}
                                id="p1"
                            ></img>
                        </Col>                        
                        <Col className="pic-holder">
                            <img className="modelling-photo-instance" src={forestFocus2}
                                width={350}
                                id="p1"
                            ></img>
                        </Col>
                    </Row>

                    <Row>
                    <Col className="pic-holder">
                            <img className="modelling-photo-instance" src={smilingPortrait}
                                width={350}
                                id="p1"
                            ></img>
                        </Col>
                        <Col className="pic-holder">
                            <img className="modelling-photo-instance" src={topOfGym}
                                width={350}
                                id="p1"
                            ></img>
                        </Col>
                        <Col className="pic-holder">
                            <img className="modelling-photo-instance" src={lookingUpIntheSky}
                                width={350}
                                id="p1"
                            ></img>
                        </Col>                        
                    </Row>
                    <Row>
                        <Col className="pic-holder">
                            <img className="modelling-photo-instance" src={topOfGymStanding}
                                width={350}
                                id="p1"
                            ></img>
                        </Col>
                        <Col className="pic-holder">
                            <img className="modelling-photo-instance" src={topOfGymWalking}
                                width={350}
                                id="p1"
                            ></img>
                        </Col>                        
                        <Col className="pic-holder">
                            <img className="modelling-photo-instance" src={silhouetteZyzz}
                                width={350}
                                id="p1"
                            ></img>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pic-holder">
                            <img className="modelling-photo-instance" src={greenKurta4}
                                width={350}
                                id="p1"
                            ></img>
                        </Col>
                        <Col className="pic-holder">
                            <img className="modelling-photo-instance" src={greenKurta5}
                                width={350}
                                id="p1"
                            ></img>
                        </Col>                        
                        <Col className="pic-holder">
                            <img className="modelling-photo-instance" src={gateLeanSmile}
                                width={350}
                                id="p1"
                            ></img>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pic-holder">
                            <img className="modelling-photo-instance" src={greenKurta}
                                width={350}
                                id="p1"
                            ></img>
                        </Col>
                        <Col className="pic-holder">
                            <img className="modelling-photo-instance" src={greenKurta2}
                                width={350}
                                id="p1"
                            ></img>
                        </Col>                        
                        <Col className="pic-holder">
                            <img className="modelling-photo-instance" src={image2}
                                width={350}
                                id="p1"
                            ></img>
                        </Col>
                    </Row>
                </Container>
        </>
    )
}

export default InstagramLike;