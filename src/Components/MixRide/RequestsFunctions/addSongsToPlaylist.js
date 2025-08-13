import axios from "axios"


async function addSongsToPlaylist(token, playlist_id, output_playlist) {
    console.log(output_playlist)
    await axios.post(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
      {
        uris: output_playlist
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    ).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.log(error)
    })
  }
  
export default addSongsToPlaylist;