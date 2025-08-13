import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";
// // import { Card } from "react-bootstrap";
// // import Button from "react-bootstrap/Button";
// import { Card, Button, Carousel} from 'react-bootstrap';
// import 'react-multi-carousel/lib/styles.css';
import './PlaylistInspiration.css'
import getFeaturedPlaylists from "../../MixRide/RequestsFunctions/getFeaturedPlaylists";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./PlaylistInspiration.css";
import get_user_input_playlist from "../../MixRide/RequestsFunctions/get_user_input_playlist";
import shrikar_dance from "../../Images/shrikar_dance.gif";
import singapore_skyline from "../../Images/singapore_skyline.jpg"
import Image from "react-bootstrap/Image"
import spotify_white_icon from '../../Images/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_White.png'

// const responsive = {
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 4,
//         slidesToSlide: 4 // optional, default to 1.
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 768 },
//         items: 3,
//         slidesToSlide: 3 // optional, default to 1.
//     },
//     mobile: {
//         breakpoint: { max: 767, min: 464 },
//         items: 2,
//         slidesToSlide: 1 // optional, default to 1.
//     }
// };


const recommendedPlaylists = [
    {
        "id": "59P0mbydaMYgbkV7EH4TD2",
        "name": "Sufi Night Rides",
        "images": [
            {
                "url": "https://i.scdn.co/image/ab67706c0000da84a0abd90bd8441403be771c8f"
            }
        ],
        "description": "South Asian Music. Ghazals, Qawwalis and some cute Bollywood attempts "
    },
    {
        "id": "08r7VGRmbYrSp6IaVYxOtD",
        "name": "Rebellious Punk",
        "images": [
            {
                "url": "https://i.scdn.co/image/ab67706c0000da8448de4dd5e1c108ca493c3bcb"
            }
        ],
        "description": "Green Day, Fall Out Boy, Reptillia, Red Hot Chili Peppers"
    },
    {
        "id": "7AbXLHkKlc0ZsCWKMqNz3K",
        "name": "Gym Pre-Workout",
        "images": [
            {
                "url": "https://i.scdn.co/image/ab67706c0000da84dac5896240f2fbee1fed6ab0"
            }
        ],
        "description": "Real Red-Pill from Matrix. "
    },
    {
        "id": "6vYhsH88Smrg9Je7hFKAHE",
        "name": "Balam Pichkari, Hindi Pop Songs!",
        "images": [
            {
                "url": "https://i.scdn.co/image/ab67706c0000da84d482bc60c692ece77fd6bcf7"
            }
        ],
        "description": "Party Bollywood Songs. Can be played at weddings also"
    }
]


function Slider(props) {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
        },
    };


    return (
        <div className="parent" >
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                infinite={true}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
            >
                {
                    props.featuredPlaylists.map((p, index) => {
                        return (
                            <div className="slider" key={index}>
                                <div className="card-hover">
                                    <Card
                                        onClick={() => {
                                            props.setuserinputplaylistlink(p.id)
                                            console.log("lmao", p.id)
                                            get_user_input_playlist(p.id, p.name, p.images[0]["url"], props.token, props.setuserinputplaylistName, props.setuserinputplaylistimage, props.setuserinputplaylistitems, props.setScreenState)
                                            props.setScreenState(3)
                                        }}
                                        style={{
                                            border: "none",
                                            backgroundColor: "black",
                                            color: 'white'
                                        }}
                                        className="playlist-card"
                                    >
                                        <Card.Img variant="top" src={p.images[0]["url"]} className="img-fluid" />
                                        <Card.Body
                                            style={{ backgroundColor: "black" }}
                                        >
                                            {/* <Card.Title>{p.name}</Card.Title> */}
                                            <p>{p.description}</p>
                                        </Card.Body>
                                    </Card>
                                    <div className="hover-buttons" style={{ width:'100%'}}>
                                        <Container fluid style={{ display:'block'}} >
                                            <Row>
                                            <Col style={{display:"flex", alignItems:'center', justifyContent:'center'}}>
                                                    <Button
                                                        className="btn-sm selectionButton selectPlaylist"
                                                        variant="outlined"
                                                        style={{ fontSize: '12px', color: 'white', borderRadius: 15, backgroundColor:"#1DB954", fontSize: 15}}
                                                        onClick={() => {
                                                            props.setuserinputplaylistlink(p.id)
                                                            get_user_input_playlist(p.id, p.name, p.images[0]["url"], props.token, props.setuserinputplaylistName, props.setuserinputplaylistimage, props.setuserinputplaylistitems, props.setScreenState)
                                                            props.setScreenState(3)
                                                        }}
                                                    >
                                                        Select Playlist
                                                    </Button>

                                                </Col>
                                            </Row>
                                            <Row style={{marginTop:5}}>
                                                <Col style={{display:"flex", alignItems:'center', justifyContent:'center'}}>
                                                    <Button
                                                        className="btn-sm selectionButton onSpotify"
                                                        onClick={
                                                            () => {window.open("https://open.spotify.com/playlist/" + p.id, '_blank')
                                                        }}
                                                        variant="outlined"
                                                        style={{ fontSize: '12px', color: 'white', borderRadius: 15,  fontSize: 15, backgroundColor:"black", }}
                                                    >
                                                        View on Spotify
                                                        <Image style={{ marginLeft: 1, width: 15 }} src={spotify_white_icon}></Image>

                                                    </Button>

                                                </Col>
                                            </Row>
                                        </Container>
                                        <div style={{ height: 40 }}>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </Carousel>
        </div>
    );
}






function PlaylistInspirationPage(props) {
    const [sg_playlists, setsg_Playlists] = useState([])
    const [in_playlists, setin_Playlists] = useState([])
    const [us_playlists, setus_Playlists] = useState([])

    //   You need to provide structure like this, with amount of items you want to show initially:
    function sg_success_function(data) {
        var playlists = data["playlists"]["items"]
        setsg_Playlists(playlists);
    }


    function sg_failure_function() {
        props.setToken("");
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("code");

        // window.alert("Sorry, please login again. Your session has expired!.")
        // window.location.reload()
    }


    function in_success_function(data) {
        var playlists = data["playlists"]["items"]
        setin_Playlists(playlists);
    }


    function in_failure_function() {
        props.setToken("");
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("code");

        // window.alert("Sorry, please login again. Your session has expired!.")
        // window.location.reload()
    }

    function us_success_function(data) {
        var playlists = data["playlists"]["items"]
        setus_Playlists(playlists);
    }



    function us_failure_function() {
        props.setToken("");
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("code");

        // window.alert("Sorry, please login again. Your session has expired!.")
        // window.location.reload()
    }




    useEffect(() => {

        getFeaturedPlaylists(
            props.token,
            "SG",
            sg_success_function,
            sg_failure_function
        )

        getFeaturedPlaylists(
            props.token,
            "IN",
            in_success_function,
            in_failure_function
        )

        getFeaturedPlaylists(
            props.token,
            "US",
            us_success_function,
            us_failure_function
        )

    }, [])




    return (
        <>
            <Container style={{
                backgroundColor: '#0E0F43'
            }} className="back-background">
                <AppTitle />
                <hr style={{ backgroundColor: 'white', border: 'solid 2px white' }}></hr>
                <Row>
                    <Col sm={8} className="d-flex align-items-center justify-content-center">
                        <div>
                            <h2 className="text-white text-left fw-bold display-3">
                                What kinda playlist?
                            </h2>
                            <p style={{ color: 'white', textAlign: 'left', backgroundColor: 'black', padding: "0.5rem" }}>
                                Please select the kind of playlist you want from the options below.
                            </p>
                        </div>
                    </Col>
                    <Col sm={4} className="d-flex align-items-center justify-content-center">
                        <Image style={{ margin: 'auto' }} width={200} src={shrikar_dance}>

                        </Image>
                    </Col>
                </Row>
                {/* <Row style={{ marginTop: 50 }}>
                    <Col className="personal-favourite" style={{ backgroundColor: 'gray', margin:'1rem' ,width:'80%'}}>
                    <h3 className="text-white text-center fw-bold display-6">
                    Personal Favourite
                    </h3>
                    </Col>
                </Row> */}
                <Row style={{ marginTop: 20 }}>

                    <Row className="sg-space space-playlist">
                        <Col sm={8} className="d-flex align-items-center justify-content-center">
                            <h3 style={{
                                color: 'white'
                            }}
                                className="text-white text-left fw-bold display-4">

                                Featured playlists in Singapore</h3>
                        </Col>
                        <Slider setScreenState={props.setScreenState}
                            featuredPlaylists={sg_playlists}
                            token={props.token}
                            setuserinputplaylistName={props.setuserinputplaylistName}
                            setuserinputplaylistimage={props.setuserinputplaylistimage}
                            setuserinputplaylistitems={props.setuserinputplaylistitems}
                            setuserinputplaylistlink={props.setuserinputplaylistlink}
                        />

                    </Row>



                    {/* <Col>
                        <div style={{}}>
                            <h3 style={{
                                color: 'white'
                            }}>
                                Featured playlists from Singapore</h3>
                            <p style={{ color: 'white', textAlign: 'left' }}>
                                These are recent playlist curated by spotify. They will feature latest songs most popular in India.
                            </p>
                        </div>
                        <Slider setScreenState={props.setScreenState}
                            featuredPlaylists={sg_playlists}
                            token={props.token}
                            setuserinputplaylistName={props.setuserinputplaylistName}
                            setuserinputplaylistimage={props.setuserinputplaylistimage}
                            setuserinputplaylistitems={props.setuserinputplaylistitems}
                        />
                    </Col>; */}
                </Row>

                <Row style={{ marginTop: 20 }}>
                    <Row className="in-space space-playlist">
                        <Col sm={8} className="d-flex align-items-center justify-content-center">
                            <h3 style={{
                                color: 'white'
                            }}
                                className="text-white text-left fw-bold display-4">

                                Featured playlists in India</h3>
                        </Col>
                        <Slider setScreenState={props.setScreenState}
                            featuredPlaylists={in_playlists}
                            token={props.token}
                            setuserinputplaylistName={props.setuserinputplaylistName}
                            setuserinputplaylistimage={props.setuserinputplaylistimage}
                            setuserinputplaylistitems={props.setuserinputplaylistitems}
                            setuserinputplaylistlink={props.setuserinputplaylistlink}
                        />

                    </Row>

                    {/* <Col>
                        <div style={{}}>
                            <h3 style={{
                                color: 'white'
                            }}>
                                Featured playlists in India</h3>
                            <p style={{ color: 'white', textAlign: 'left' }}>
                                These are recent playlist curated by spotify. They will feature latest songs most popular in India.
                            </p>
                        </div>
                        <Slider setScreenState={props.setScreenState}
                            featuredPlaylists={in_playlists}
                            token={props.token}
                            setuserinputplaylistName={props.setuserinputplaylistName}
                            setuserinputplaylistimage={props.setuserinputplaylistimage}
                            setuserinputplaylistitems={props.setuserinputplaylistitems}
                        />
                    </Col>; */}
                </Row>


                <Row style={{ marginTop: 20 }}>
                    <Row className="us-space space-playlist">
                        <Col sm={8} className="d-flex align-items-center justify-content-center">
                            <h3 style={{
                                color: 'white'
                            }}
                                className="text-white text-left fw-bold display-4">

                                Featured playlists in United States</h3>
                        </Col>
                        <Slider setScreenState={props.setScreenState}
                            featuredPlaylists={us_playlists}
                            token={props.token}
                            setuserinputplaylistName={props.setuserinputplaylistName}
                            setuserinputplaylistimage={props.setuserinputplaylistimage}
                            setuserinputplaylistitems={props.setuserinputplaylistitems}
                            setuserinputplaylistlink={props.setuserinputplaylistlink}

                        />

                    </Row>
                    {/* 
                    <Col>
                        <div style={{}}>
                            <h3 style={{
                                color: 'white'
                            }}>
                                Featured playlists in United States</h3>
                        </div>
                        <Slider setScreenState={props.setScreenState}
                            featuredPlaylists={us_playlists}
                            token={props.token}
                            setuserinputplaylistName={props.setuserinputplaylistName}
                            setuserinputplaylistimage={props.setuserinputplaylistimage}
                            setuserinputplaylistitems={props.setuserinputplaylistitems}
                        />
                    </Col>; */}
                </Row>

                <Row style={{ marginTop: 20 }}>

                    <Row className="my-space space-playlist">
                        <Col sm={8} className="d-flex align-items-center justify-content-center">
                            <h3 style={{
                                color: 'white'
                            }}
                                className="text-white text-left fw-bold display-4">
                                Developer's favourites
                            </h3>
                        </Col>
                        <Slider setScreenState={props.setScreenState}
                            featuredPlaylists={recommendedPlaylists}
                            token={props.token}
                            setuserinputplaylistName={props.setuserinputplaylistName}
                            setuserinputplaylistimage={props.setuserinputplaylistimage}
                            setuserinputplaylistitems={props.setuserinputplaylistitems}
                            setuserinputplaylistlink={props.setuserinputplaylistlink}

                        />

                    </Row>

                    {/* <Col>
                        <h3 style={{
                            color: 'white'
                        }}>
                            Recommended Playlists from me and <i class="fas fa-user-friends    "></i></h3>
                        <Slider setScreenState={props.setScreenState} featuredPlaylists={recommendedPlaylists}
                            token={props.token}
                            setuserinputplaylistName={props.setuserinputplaylistName}
                            setuserinputplaylistimage={props.setuserinputplaylistimage}
                            setuserinputplaylistitems={props.setuserinputplaylistitems}
                        />
                    </Col>; */}
                </Row>
                {/* <Slider cards={cards}/> */}
            </Container>

        </>
    )
}

function AppTitle() {
    return (
        <>
            <h1 className="app-title">
                Mix & Ride
            </h1>

        </>)
}

export default PlaylistInspirationPage;