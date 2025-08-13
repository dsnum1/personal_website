import axios from "axios"


async function axiosGETwrapper(url, parameters, headers, onSuccess, onFailure) {
    await axios.get(
      url,
      {
        params: parameters,
        headers: headers
      }
    ).then(function (response) {
      console.log(response.data)
      if (onSuccess !== null) {
        onSuccess(response.data)
      }
    }
    ).catch(function (error) {
      console.log(error)
      if (onFailure != null) {
        onFailure(error)
      }
    })
  }


export default axiosGETwrapper;