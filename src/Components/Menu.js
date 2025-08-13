import React from 'react'
import './Menu.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    <div className='menu-holder'>
        <div className='professional-space space'>   
        <Link to="/professional" target="_top">
            <Button className='button' variant="primary">
                Professional
            </Button>
            </Link>
        </div>
        <div className='portfolio-space space'>
        <Link to="/modelling_portfolio" target="_top">
            <Button className='button' variant="warning">
                Portfolio
            </Button>
            </Link>
        </div>
    </div>
  )
}




export default Menu