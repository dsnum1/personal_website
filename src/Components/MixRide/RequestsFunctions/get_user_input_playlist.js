import axiosGETwrapper from "../AxiosWrappers/axiosGETwrapper"

function get_user_input_playlist(playlist_id, name, image, token, setuserinputplaylistName, setuserinputplaylistimage, setuserinputplaylistitems, setScreenState) {
    setuserinputplaylistName(name)
    setuserinputplaylistimage(image)

    function success_function(data) {
      setuserinputplaylistitems(data["items"])
      console.log(1)
    }

    function failure_funcion() {
      console.log(2)
    }

    axiosGETwrapper(
      `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
      {
        fields: 'items(track(name,id,duration_ms))'
      },
      {
        'Authorization': `Bearer ${token}`
      },
      success_function,
      failure_funcion
    )
    setScreenState(2)
  }


export default get_user_input_playlist;