import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from '@mui/material/Button';
import Image from "react-bootstrap/Image"
import bubbles_image from './Bubbles.png'
import './HomePage.css'
import Grid from '@mui/material/Grid';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { useEffect, useState } from "react";
import logo from '../../Images/Logo_Updated_MixRide.png'
import axios from "axios";
import spotify_white_logo from '../../Images/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_White.png'
import spotify_white_icon from '../../Images/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_White.png'


const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET
const REDIRECT_URI = "https://dsnum1.github.io" + "/personal_website/mix_and_ride"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "code"
const SCOPE = "playlist-modify-public"


function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
  
    return randomString;
  }


function handleLogout(){
    window.localStorage.removeItem("code");
    window.localStorage.removeItem("token")
}
  
function handleLogin(){
    const state = generateRandomString(16);     // state provides protection against cross-site request forgery
    // setLoginButtonToggle(!loginButtonToggle);
    const queryParams = new URLSearchParams(
        {
            response_type:RESPONSE_TYPE,
            client_id:CLIENT_ID,
            scope:SCOPE,
            redirect_uri:REDIRECT_URI,
            state:state
        })

    const spotifyAuthorizationUrl = `https://accounts.spotify.com/authorize?${queryParams}`
    window.location.href = spotifyAuthorizationUrl;
}


function HomePageMR(props) {
        const [loginButtonToggle, setLoginButtonToggle] = useState(true)

        useEffect(() => {
            // const hash = window.location.hash
            // let token = window.localStorage.getItem("token")
            // if (!token && hash) {

            //     token = hash.substring(1)
            //                 .split("&")
            //                 .find(elem => elem.startsWith("access_token"))
            //                 .split("=")[1]

            // window.location.hash = ""
            // window.localStorage.setItem("token", token)
            // }
            let url = window.location.href;

            // let token = null;
            // let code = null;

            let token = window.localStorage.getItem("token")
            let code  = window.localStorage.getItem("code")



            setLoginButtonToggle(!loginButtonToggle)
            if(code === null || code === "null"){
                const searchParams = new URLSearchParams(new URL(url).search);
                let error = searchParams.get('error')
                if(error !== null){
                    window.alert('access denied to spotify. Here is the error:', error);
                    return;
                }
                code = searchParams.get('code');
                window.localStorage.setItem("code", code);
            }


            if((token === null || token === 'null') && (code!==null || code!=='null')){
                // retrieve access token from authorization code

                const authOptions = {
                    url: 'https://accounts.spotify.com/api/token',
                    method: 'POST',
                    data: {
                      code: code,
                      redirect_uri: REDIRECT_URI,
                      grant_type: 'authorization_code'
                    },
                    headers: {
                      'Authorization': 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
                      'Content-Type': 'application/x-www-form-urlencoded',
                    }
                  };

                axios(authOptions)
                  .then(response => {
                    // Handle the response from the server
                    props.setToken(response.data["access_token"])
                    props.setRefreshToken(response.data["refresh_token"])
                    token = response.data["access_token"]
                  })
                  .catch(error => {
                    // Handle errors here
                    console.error(error);
                  });
                
                
                window.localStorage.setItem("code", null);
                window.localStorage.setItem("token", token);
                window.location.hash = "";

            }

            // props.setToken(token)
        }, [])
    
    return (
        <>
            {
                props.token === null || props.token === 'null' && <hr />
            }
            <Container fluid className='back-background-parentContainer'>
                <Row style={{ marginLeft: '4%', height:'25%', paddingTop:'2%', position:'relative' }}>
                    <Col>
                        <AppTitle></AppTitle>
                    </Col>
                </Row>
                <Row style={{ marginLeft: '4%', position:'absolute', bottom:'7rem' }}>
                    <Col>
                        <AppDescription />
                    </Col>
                </Row>
                    {loginButtonToggle}

                <Row style={{backgroundColor:'black', position:'fixed', bottom:'0px', width:'99%', borderTopLeftRadius:15, marginTop:10}} className=''bottomDiv>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    height={100}
                    style={{backgroundColor:'black', borderTopLeftRadius:15}}
                    rowSpacing={1}
                >
                    <Grid item xs style={{display:'flex', alignItems:'flex-end'}}>
                        <Button
                        variant="outlined" 
                        onClick={handleLogin}                         
                        style={{fontSize:'12px', color: 'white', borderRadius:15}}>
                            Login with Spotify {` `}
                                <Image style={{marginLeft:1}}width={15} src={spotify_white_icon}></Image>
                            {loginButtonToggle}
                        </Button>               
                    </Grid>
                    {/* <Grid item xs style={{display:'flex', alignItems:'flex-start'}}>
                        <Button variant="outlined" style={{fontSize:'12px', color: 'white', borderRadius:15}}>About</Button>
                    </Grid> */}
                    <Grid item xs style={{display:'flex', alignItems:'flex-start'}}>
                        <Button variant="outlined" 
                                onClick={handleLogout}
                                style={{fontSize:'12px', color: 'white', borderRadius:15}}>
                            Sign out
                        </Button>
                    </Grid>

                </Grid>

                </Row>

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

function Bubbles() {
    return (
        <>
            <Image className="bubbles" src={bubbles_image}>

            </Image>
        </>)
}

function AppMenu() {
    return (
        <>
        </>)
}


function AppDescription() {
    return (
        <>
            <div style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'flex', 
                justifyContent: 'start', 
                alignItems: 'center',
            }}>
                <img src={logo} 
                    height={200}
                    style={{
                        margin:'20px',
                }}></img>
            </div>

            <h2 className='highlight-word'>
                Curate
            </h2>
            <h4 className="rest-of-description">playlist for your next ride🚗.</h4>
        </>
    )
}

export default HomePageMR;