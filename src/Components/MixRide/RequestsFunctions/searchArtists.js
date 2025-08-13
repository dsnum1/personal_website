import axiosGETwrapper from "../AxiosWrappers/axiosGETwrapper"

async function searchArtists(token) {

    function success_function(data) {
  
    }
  
    function failure_funcion(data) {
  
    }
    await axiosGETwrapper(
  
      "https://api.spotify.com/v1/search/",
      {
        type: "artist",
        q: "Drake"
      },
      {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${token}`
      },
      success_function,
      failure_funcion
    )
  }


export default searchArtists;