import axiosGETwrapper from "../AxiosWrappers/axiosGETwrapper";

  
async function getFeaturedPlaylists(token, country, success_function, failure_function) {  
  
    await axiosGETwrapper(
      'https://api.spotify.com/v1/browse/featured-playlists',
      {
        country: country,
        locale: "en",
        limit: 10,
        offset: 0,
      },
      {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${token}`
      },
      success_function,
      failure_function
    )
  
  
  }
  
export default getFeaturedPlaylists;