import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';

export const ProjectEntry = (props) => {
    if (props.project === null){

        return (<></>)
    }
  return (
    <Container fluid>
    <Row>
        <Col className='project-container'>
            <div className="professional-title-space" >
            <div style={{ background: 'white', color: 'black', margin: '20px', marginTop:'5rem', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>
                {props.project.title}
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.5' }}>{props.project.project_description}</p>

            <div style={{ marginTop: '10px' }}>
                <span style={{ fontWeight: 'bold' }}>Technologies: </span>
                {props.project.tech_stack?.map(tech => <span key={tech} style={{ marginRight: '10px', fontSize: '14px' }}>{tech}</span>)}
            </div>
            <div style={{ marginTop: '10px' }}>
                <span style={{ fontWeight: 'bold' }}>Tags: </span>
                {props.project.tag_list?.map(tag => <span key={tag} style={{ marginRight: '10px', fontSize: '14px', display: 'inline-block', background: 'lightgray', padding: '3px 6px', borderRadius: '4px' }}>{tag}</span>)}
            </div>
            </div>
            
            </div>
        </Col>
        <Col md={6} className="professional-profile-photo-space" id={props.identity}>
            <>
                
            </>
        </Col>
    </Row>
</Container>
)
};
