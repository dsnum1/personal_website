import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './BlogEntry.css'
import image1 from './Images/Draft2/Rizz-space-Cover.png'
import Badge from 'react-bootstrap/Badge';
import { Row, Col, Container } from 'react-bootstrap';

function BlogEntry(props) {
    const TagsMapping = {
        "AI":{color:"danger", textColor:'light'},
        "RL":{color:"dark", textColor:'light'},
        "Health":{color:"success", textColor:'light'},
        "Fitness":{color:"warning", textColor:'dark'},
        "Poem":{color: "info", textColor:'light'}
    }

    return (
        <div>
            <Card style={{margin:'5rem'}}>
                <Card.Img variant="top" width={100} src={props.Img} />
                <Card.Body>
                    <Card.Title>
                        <Container fluid>
                            <Row>
                                <Col md={11}>
                                    <h3>
                                        {props.Title}
                                    </h3>
                                </Col>
                                <Col md={1}>
                                    <p style={{fontSize:'0.8rem'}}>
                                        {props.Date}
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Title>   
                    <Card.Text>
                        {props.Content?.map((section, index)=>(
                            <div style={{textAlign:'justify', textEmphasis:'none'}}>
                                <div key={index} dangerouslySetInnerHTML={{ __html: section.subheading }} />
                                <div key={index} dangerouslySetInnerHTML={{ __html: section.body }} />
                            </div>
                        ))}

                    </Card.Text>
                    <Card.Footer>
                        {props.Tags?.map((tag)=>(
                            <>
                            <Badge bg={TagsMapping[tag].color}
                                text = {TagsMapping[tag].textColor}
                            >{tag}
                            </Badge>
                            
                            {' '}
                            </>
                        ))}                        
                    </Card.Footer>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    );
}

export default BlogEntry;