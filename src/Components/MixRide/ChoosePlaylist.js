import { useState } from "react"
import { useEffect } from "react"
import axiosGETwrapper from "./MixAndRideContainer"
import { Card } from "react-bootstrap"
import Button from "react-bootstrap"

function ChoosePlaylist(props){
    const [playlists, setPlaylists] = useState([])
    function success_function(data){
      var playlists = data["playlists"]["items"]
  
      var playlist_ids = []
      var playlist_images = []
      var play_list_names = []
  
      for(let i = 0 ; i < playlists.length; i++){
        playlist_ids.push(playlists[i]["id"])
        playlist_images.push(playlists[i]["images"][0])
        play_list_names.push(playlists[i]["name"])
      }
      
      setPlaylists(playlists)
      console.log(playlists[0]["images"][0])
  
    }
  
  
    function failure_funcion(){
  
    }
  
    useEffect(()=>{  
  
      axiosGETwrapper(
        'https://api.spotify.com/v1/browse/featured-playlists',
        {
          country:"SG",
          locale: "en",
          timestamp:"2014-10-23T09:00:00",
          limit:20,
          offset:0,
        },
        {
          'Content-Type' : "application/json",
          'Authorization': `Bearer ${props.token}`
        },
        success_function,
        failure_funcion
      )
    
  
  
    },[])
    return(
      <>
        <h1>Recommended Playlists</h1>
        {
          playlists.map((p)=>(
            <>
              <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
  
            </Card>
            </>
          ))
        }
      </>
    )
  }
  


  export default ChoosePlaylist;