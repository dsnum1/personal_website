import { Container, Row } from "react-bootstrap";
import Button from '@mui/material/Button';
import { Form } from "react-bootstrap";
import logo from '../../Images/Logo_Updated_MixRide.png'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { useEffect, useState } from "react";
import axiosGETwrapper from "../../MixRide/AxiosWrappers/axiosGETwrapper";
import axios from "axios";
import './HomePage.css'
import getFeaturedPlaylists from "../../MixRide/RequestsFunctions/getFeaturedPlaylists";


async function run_function(starting, ending, props) {
    var google = window.google;
    var starting = starting['label']
    var ending = ending['label']



    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
        {
            origins: [starting],
            destinations: [ending],
            travelMode: 'DRIVING',
        }, (response, status) => {
            if (status !== 'OK') {
                alert('Error was: ' + status);
            } else {
                props.setDuration(response["rows"][0]["elements"][0]["duration"]["value"])
            }
        });
}
function AppTitle(props) {

    function failure_function(error) {
        props.setToken("")
        window.localStorage.removeItem("token");
        // window.alert("Sorry, please login again. Your session has expired!.")
        // window.location.reload()
    }

    // useEffect(()=>{
    //     getFeaturedPlaylists(props.token, null, failure_function)
    // },[])
    return (
        <>
            <h1 className="app-title">
                Mix & Ride
            </h1>

        </>)
}

function LocationSelectionPage(props) {
    const [starting, setStarting] = useState("")
    const [ending, setEnding] = useState("")

    function onFormSubmit(e, props) {
        e.preventDefault(e)
        run_function(starting, ending, props)
        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries())
        props.setNameOfPlaylist(formDataObj["playlist_name"])
        props.setScreenState(2)

    }


    return (
        <>
            <div className="back-background">
                <Container>
                    <Row style={{ paddingTop: '2%' }}>
                        <AppTitle token={props.token} setToken={props.setToken} />
                        <hr style={{ border: 'solid 2px white' }}></hr>

                    </Row>
                </Container>
                <div style={{ height: '120vh', paddingTop: '3rem', width: '250px', marginLeft: 'auto', marginRight: 'auto', color: 'white', }} >
                    <div style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <img src={logo} style={{
                            height: '17rem'
                        }}></img>
                    </div>

                    <Form
                        style={{
                        }}
                        onSubmit={(event) => {
                            onFormSubmit(event, props)
                        }}>
                        <h6 style={{ textAlign: "left" }}>Step 1: Enter name of playlist</h6>
                        <Form.Control type="text" name="playlist_name" placeholder='Bubbles, Drive Home...' required />
                        <div className='dot-design'>
                            <br></br>
                        </div>

                        <h6 style={{ textAlign: "left" }}>Step 2: Enter starting point</h6>
                        <div style={{ color: 'black' }}>
                            <GooglePlacesAutocomplete
                                apiKey={process.env.GOOGLE_MAPS_API_KEY}
                                debounce={1000}
                                minLengthAutocomplete={5}
                                style={{ color: 'black' }}
                                selectProps={{
                                    starting,
                                    onChange: setStarting
                                }}
                            />
                        </div>
                        <br></br>


                        <h6 style={{ textAlign: "left" }}>Step 3: Enter destination</h6>
                        <div style={{ color: 'black' }}>
                            <GooglePlacesAutocomplete
                                apiKey={process.env.GOOGLE_MAPS_API_KEY}
                                debounce={1000}
                                minLengthAutocomplete={5}
                                style={{ color: 'black' }}
                                selectProps={{
                                    ending,
                                    onChange: setEnding
                                }}

                            />
                        </div>
                        <br></br>
                        {
                            starting === "" || ending === "" ? <><Button variant="outlined" disabled style={{ backgroundColor: 'black', fontSize: '12px', color: 'white', borderRadius: 15, width: '100%' }} type="submit" >Submit</Button></> : <>                <Button variant="outlined" style={{ backgroundColor: 'rgba(0,0,0,0.4)', width: '100%', fontSize: '12px', color: 'white', borderRadius: 15 }} type="submit" >Submit</Button> </>
                        }
                        <br></br>

                    </Form>


                </div>





            </div>
        </>
    )
}


export default LocationSelectionPage;