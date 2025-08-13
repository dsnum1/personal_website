import { Button } from "@mui/material";
    import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import mixplaylist from "../../MixRide/RequestsFunctions/mixplaylist";
import './PlaylistInspiration.css'
import './HomePage.css'

function SelectionConfirmationPage(props){
    return(
        <div style={{color:'white', backgroundColor:'#0E0F43', height:"100vh", position:'relative'}} className="back-background">
            <Container>
                <h1 style={{fontSize:'4rem', width:'30%'}} >
                    You<br/> Chose
                </h1>
            </Container>

            <Container>
                <Row className="justify-content-end">
                    <Col sm={5}  style={{textAlign:'center'}}>
                        <div className="card-hover">
                            <Card 
                                onClick={() => {
                                }} 
                                style={{
                                    border: "none",
                                    backgroundColor: "black",
                                    width:"50%"
                                }}
                            >
                                <Card.Img  variant="top" src={props.userinputplaylistimage} />
                                <Card.Body
                                style={{ backgroundColor: "black" }}
                                >
                                <Card.Title>{props.userinputplaylistname}</Card.Title>
                                </Card.Body>
                            </Card>
                            <div className="hover-buttons confirmation">
                                        <Button
                                            className="btn-sm selectionButton onSpotify"
                                            onClick={() => {
                                                window.open("https://open.spotify.com/playlist/"+props.userinputplaylistlink, '_blank')
                                            }}
                                            variant="dark"
                                        >
                                                View on Spotify 
                                        </Button>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>



            <div style={{position:'relative', bottom:'0px', backgroundColor:'black'}}>
                <Row>
                    <p style={{textAlign:'center'}}> {Math.round(props.duration/60)} minutes to your destination.</p>
                    <h3 style={{textAlign:'center'}}>
                        Do you want to continue mixing?
                    </h3>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-end">
                        <Button variant="contained" color="warning" onClick={()=>{props.setScreenState(2)}}>  
                            No, Go Back
                        </Button>
                    </Col>
                    <Col ckassName="d-flex justify-content-left">
                        <Button variant="contained" color="success" onClick={()=>{
                            mixplaylist(props.userinpitplaylistitems, props.duration, props. setOutputPlaylist)
                            props.setScreenState(4)}}>
                            Yes, Confirm
                        </Button>
                    </Col>

                </Row>
            </div>
        </div>
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



export default SelectionConfirmationPage;   
