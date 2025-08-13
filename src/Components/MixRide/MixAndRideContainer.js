import logo from '../Images/mrf.png';
import mix_and_ride_group_photo from '../Images/mix_ride.jpg'
import './Apper.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from "react-bootstrap"
import { Button } from "react-bootstrap"
import axios from 'axios'
import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';

import { Buffer } from "buffer";


import axiosGETwrapper from './AxiosWrappers/axiosGETwrapper';
import createPlaylist from './RequestsFunctions/createPlaylist';
import get_user_input_playlist from './RequestsFunctions/get_user_input_playlist';
import mixplaylist from './RequestsFunctions/mixplaylist';


const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const REDIRECT_URI = "https://dsnum1.github.io" + "/personal_website/mix_and_ride"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"
const SCOPE = "playlist-modify-public"


function MixAndRideContainer() {
  return (
    <div style={{
      backgroundColor: "#0e0f43",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "whitesmoke",
    }}>
      <MixAndRideComponent />
    </div>
  )
}


const MixAndRideComponent = () => {


  const [token, setToken] = useState("")
  const [duration, setDuration] = useState("")


  const [userinputplaylistname, setuserinputplaylistName] = useState("")
  const [userinputplaylistimage, setuserinputplaylistimage] = useState("")
  const [userinpitplaylistitems, setuserinputplaylistitems] = useState([])

  const [nameOfPlaylist, setNameOfPlaylist] = useState("")
  const [screenState, setScreenState] = useState(0)
  const [playlistLink, setPlaylistLink] = useState("Playlist not created")
  const [output_playlist, setOutputPlaylist] = useState([])

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]


      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }

    setToken(token)
  }, [])

  const onFormSubmit = e => {
    e.preventDefault()

    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries())

    setNameOfPlaylist(formDataObj["playlist_name"])
    // mixRideRequest(formDataObj)


    function success_function(data) {
      setDuration(data["duration"])
      setScreenState(1)
    }

    function failure_function(error) {
      
    }


    axiosGETwrapper(

      "https://evkxo1ol09.execute-api.ap-southeast-2.amazonaws.com/getDuration",
      {
        origin: formDataObj["start"],
        destination: formDataObj["end"],
      },
      {

      },
      success_function,
      failure_function
    )


  }




  if (token === null) {
    return (
      <LoginScreen />
    )
  }



  if (screenState === 0) {
    return (
      <>
        {/* <InputScreen /> */}
        <GetZipCodes onFormSubmit={onFormSubmit} />
      </>
    )
  }



  if (screenState === 1) {
    return (
      <>
      <p>
        Please select one of the following playlists to choose your songs from.
        It will take <u>{Math.floor(duration/60)} minutes</u> for you to reach your destination. 
      </p>
        <ChooseFeaturedPlaylist token={token} get_user_input_playlist={get_user_input_playlist} 
                                                            setToken = {setToken} 
                                                            setScreenState = {setScreenState}
                                                            setuserinputplaylistName = {setuserinputplaylistName}
                                                            setuserinputplaylistimage = {setuserinputplaylistimage}
                                                            setuserinputplaylistitems = {setuserinputplaylistitems}
                                                            
                                                      
                                                            />
      </>
    )
  }

  else if (screenState === 2) {

    return (
      <>
        <Container fluid style={{
        }}>
          <Row style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
            <Col sm={6}>
              <Card
                style={{
                  backgroundColor: '#212529',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  width: '100%'
                }}
              >
                <Card.Body>
                  <div >
                    <h1 style={{
                      fontSize: '2.5rem',
                      fontFamily: 'Roboto Mono',
                      fontWeight: '500px',
                      textAlign: 'center',
                    }}>
                      Almost there...
                    </h1>
                    <hr></hr>
                    <p
                      style={{
                        fontFamily: 'Roboto Mono',
                        fontSize: '1.4rem'
                      }}
                    >     You have entered the following playlist. Do you want to continue?.</p>
                    <p
                      style={{
                        fontFamily: 'Roboto Mono',
                      }}
                    >
                      <Button onClick={() => {
                        mixplaylist(userinpitplaylistitems, duration, setOutputPlaylist)
                        setScreenState(3)
                      }} variant='success'>Continue Mixing</Button>
                      {' '}
                      {' '}
                      {' '}
                      <Button onClick={() => {
                        setScreenState(1)
                      }
                      } variant='warning'>Go Back</Button>
                    </p>
                  </div>
                </Card.Body>
              </Card>

            </Col>
            <Col sm={6}>
              <Card onClick={() => {
                console.log("we are falling")
              }} style={{
                border: "none",
                backgroundColor: "black",
              }}
              >
                <Card.Img variant="top" src={userinputplaylistimage} />
                <Card.Body
                  style={{ backgroundColor: "black" }}
                >
                  <Card.Title>{userinputplaylistname}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>


      </>
    )
  }
  else if (screenState === 3) {

    return (
      <>
        <Container fluid style={{height:'80vh'}}>
          <Row style={{display:'flex', alignItems:'center', height:'80vh' }}> 
            <Col sm={6} >
              <Card style={{ backgroundColor: 'black' }}>
                <Card.Header>
                  <h1>Here is your playlist</h1>
                </Card.Header>
                <Card.Body>
                  <Button onClick={() => createPlaylist(token, output_playlist, setPlaylistLink, nameOfPlaylist)}>View your spotify playlist</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{backgroundImage: `url(${mix_and_ride_group_photo})`, backgroundSize:'cover', height:'100%'}}>
              {
                playlistLink === "Playlist not created" ?  <></> : <Button href={playlistLink}> Go to spotify</Button> 
              }
            </Col>
          </Row>
        </Container>
      </>
    )
  }
  else if (screenState ===4){
    return(
      <>
        <LoginScreen/>
      </>
    )
  }

}

function LoginScreen() {
  return (
    <>
      <Container fluid style={{
        height: '90vh'
      }}>
        <Row>
          <Col sm={12} md={6} style={{ display: 'flex', alignItems:'center' }}>
            <img style={{
              marginLeft: 'auto',
              marginRight: 'auto'
            }} src={logo}></img>
          </Col>
          <Col sm={12} md={6} style={{ display: 'flex', alignItems:'center' }}>
            <Card
              style={{
                backgroundColor: '#212529',
                width: "100%",
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <Card.Body>
                <div >
                  <h1 style={{
                    fontSize: '2.5rem',
                    fontFamily: 'Roboto Mono',
                    fontWeight: '500px',
                    textAlign: 'center',
                  }}>MIX 'N' RIDE</h1>
                  <hr></hr>
                  <p
                    style={{
                      fontFamily: 'Roboto Mono',
                      fontSize: '1.4rem'
                    }}
                  >Create a music playlist in spotify that lasts exactly the same amount of time of your car journey.</p>
                  <p
                    style={{
                      fontFamily: 'Roboto Mono',
                    }}>The inconvenience 😞 of having to leave your car/cab🚗 in the middle of the song🎵 can be one of most recurring frustrations😡.</p>
                  <p>Please connect your spotify account to begin</p>
                  <p><Button href={`
                    ${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}>Login</Button></p>
                </div>
              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>
    </>
  )
}


function GetZipCodes(props) {
  return (
    <>
      <div style={{ height: '120vh', marginTop: '3rem' }}>
        <img src={logo} style={{
          marginLeft: 'auto',
          marginRight: 'auto'
        }}></img>

        <Form onSubmit={props.onFormSubmit}>


          <h6 style={{ textAlign: "left" }}>Playlist name</h6>
          <Form.Control type="text" name="playlist_name" placeholder='Name of Playlist' required />
          <div className='dot-design'>
            <br></br>
          </div>

          <h6 style={{ textAlign: "left" }}>Starting Zipcode (eg. 543123)</h6>
          <Form.Control type="text" name="start" placeholder='Starting Pincode' required />
          <div className='dot-design'>
            <br></br>
          </div>
          <h6 style={{ textAlign: "left" }}>Ending Zipcode (eg. 541262)</h6>
          <Form.Control type="text" name="end" placeholder='Ending Pincode' required />

          <br></br>
          <Button style={{ width: '100%' }} type="submit" >
            Submit
          </Button>

        </Form>

      </div>

    </>
  )
}






function ChooseFeaturedPlaylist(props) {

  // recommended playlists
  const [playlists, setPlaylists] = useState([])
  const [genre_playlists, setGenrePlaylists] = useState([])

  function success_function(data) {
    var playlists = data["playlists"]["items"]

    var playlist_ids = []
    var playlist_images = []
    var play_list_names = []

    for (let i = 0; i < playlists.length; i++) {
      playlist_ids.push(playlists[i]["id"])
      playlist_images.push(playlists[i]["images"][0])
      play_list_names.push(playlists[i]["name"])
    }

    setPlaylists(playlists)
    console.log(playlists[0]["images"][0])

  }


  function failure_funcion() {
    props.setToken("");
    window.localStorage.removeItem("token");
    window.alert("Sorry, please login again. Your session has expired.")
    window.XMLHttpRequestUpload.reload()
  }

  useEffect(() => {

    axiosGETwrapper(
      'https://api.spotify.com/v1/browse/featured-playlists',
      {
        country: "SG",
        locale: "en",
        limit: 20,
        offset: 0,
      },
      {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${props.token}`
      },
      success_function,
      failure_funcion
    )




  }, [])
  return (
    <>
    <hr></hr>
      <h3>Recommeneded Playlists </h3>
      <hr style={{width:'80%'}}></hr>
      <Container >
        <Row>
          {
            playlists.map((p) => (
              <>
                <Col sm={3} style={{
                  marginBottom: "4rem"
                }}>
                  <Card onClick={() => {
                    // props.record_user_selection()
                    console.log("we are falling")
                    props.get_user_input_playlist(p.id, p.name, p.images[0]["url"], props.token, props.setuserinputplaylistName, props.setuserinputplaylistimage, props.setuserinputplaylistitems, props.setScreenState)

                  }} style={{
                    border: "none",
                    backgroundColor: "black"
                  }}
                  >
                    <Card.Img variant="top" src={p.images[0]["url"]} />
                    <Card.Body
                      style={{ backgroundColor: "black" }}
                    >
                      <Card.Title>{p.name}</Card.Title>
                    </Card.Body>
                  </Card>

                </Col>
              </>
            ))
          }
        </Row>
      </Container>

    </>
  )
}




export default MixAndRideContainer;