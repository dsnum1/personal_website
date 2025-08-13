import axios from "axios";

async function mixplaylist(playlist_items, duration, setOutputPlaylist) {


    await axios.post('https://evkxo1ol09.execute-api.ap-southeast-2.amazonaws.com/getPlaylist', {
      playlist_items: {
        "playlist_here": playlist_items
      },
      duration: duration
    })
      .then(function (response) {
        console.log(response.data);
        let arr = response.data["best_combination"]
        let ls = []
        for (var i = 0; i < arr.length; i++) {
          ls.push("spotify:track:" + arr[i][2])
        }
        setOutputPlaylist(ls)
      })
      .catch(function (error) {
        console.log(error);
      });
  
  }
  
export default mixplaylist;