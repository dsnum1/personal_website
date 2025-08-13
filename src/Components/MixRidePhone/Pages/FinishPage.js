import { Button } from "@mui/material";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import createPlaylist from "../../MixRide/RequestsFunctions/createPlaylist";
import './HomePage.css'
import logo from '../../Images/Logo_Updated_MixRide.png'
import mix_and_ride_group_photo from '../../Images/mix_ride.jpg'

function FinishPage(props) {
    return (
        <>
            <div style={{ color: 'white', backgroundColor: '#0E0F43', height: "200vh" }} className="back-background">
                <Container>
                    <div style={{ paddingTop: '2%' }}>
                        <AppTitle />
                        <hr style={{ border: 'solid 2px white' }}></hr>
                    </div>
                    <p style={{ color: 'white', textAlign: 'left', backgroundColor: 'black', padding: "0.5rem" }}>
                        Your playlist is here
                    </p>
                    <Row style={{ marginTop: '2rem' }}>
                        <Col sm={6}>
                            <Card style={{ backgroundColor: 'black', }}>
                                <Image style={{ width: '30%', marginLeft: 'auto', marginRight: 'auto' }} src={logo}></Image>
                                <Card.Title style={{ textAlign: 'center' }}>
                                    <Button style={{ width: '70%' }} variant="outlined" onClick={() => {
                                        createPlaylist(props.token, props.output_playlist, props.setPlaylistLink, props.nameOfPlaylist)
                                    }}><h4>View Spotify Playlist</h4></Button>
                                </Card.Title>
                                <Card.Body>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col sm={6}>

                            <Card style={{ width: '100%', height: '100%' }} className=" thankyou d-flex align-items-center justify-content-center">
                                <h3 style={{ textAlign: 'center', color: 'white' }}>Have a safe ride😁!</h3>
                                {/* <Image src={mix_and_ride_group_photo} style={{width:'15%', margin:'auto'}}> */}
                                {/* </Image> */}
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
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


export default FinishPage;