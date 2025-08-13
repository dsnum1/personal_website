import axios from "axios";
import axiosGETwrapper from "../AxiosWrappers/axiosGETwrapper";
import addSongsToPlaylist from "./addSongsToPlaylist";


async function createPlaylist(token, output_playlist, setPlaylistLink, nameOfPlaylist) {
    const userID = ""
    async function success_function(data) {
      const userID = data["id"]
      await axios.post(`https://api.spotify.com/v1/users/${userID}/playlists`, {
        "name": nameOfPlaylist,
        "description": "With love ❤️, Divyansh",
        "public": true
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
        .then(function (response) {
          console.log(response.data);
          setPlaylistLink(response.data.id)
          console.log(output_playlist)
          addSongsToPlaylist(token, response.data["id"], output_playlist)
          setTimeout(()=>{
          }, 7000)
          window.alert("Your playlist is ready. By clicking okay you will be taken to your spotify playlist")
          window.location = "https://open.spotify.com/playlist/" + response.data["id"]
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  
    function failure_funcion() {
  
    }
  
    await axiosGETwrapper('https://api.spotify.com/v1/me',
      {}, {
      'Authorization': `Bearer ${token}`
    }, success_function, failure_funcion)
  
  
  

  }
  

export default createPlaylist;
  