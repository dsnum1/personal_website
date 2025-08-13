import { useState, useEffect } from "react";
import HomePageMR from "./Pages/HomePage";

import axios from "axios";

// import SelectionConfirmationPage from './Components/MixRidePhone/Pages/SelectionConfirmationPage';
// import PlaylistInspirationPage from "./Components/MixRidePhone/Pages/PlaylistInspirationPage"
// import FinishPage from './Components/MixRidePhone/Pages/FinishPage';

import PlaylistInspirationPage from './Pages/PlaylistInspirationPage';
import FinishPage from './Pages/FinishPage';
import SelectionConfirmationPage from './Pages/SelectionConfirmationPage'
import LocationSelectionPage from "./Pages/LocationSelectionPage";


function MRScreenController(){

    const [userinputplaylistname,  setuserinputplaylistName] = useState("Causeway Trends")
    const [userinputplaylistimage, setuserinputplaylistimage] = useState("	https://i.scdn.co/image/ab6765630000ba8abb4b7939d33a0b19533a17b0")
    const [userinpitplaylistitems, setuserinputplaylistitems] = useState([])
    const [userinputplaylistlink, setuserinputplaylistlink] = useState("")


    const [output_playlist, setOutputPlaylist] = useState([])
    const [mr_screenState, mr_setScreenState] = useState(0)
    const [token, setToken] = useState("")
    const [refresh_token, setRefreshToken] = useState("")


    const [nameOfPlaylist, setNameOfPlaylist] = useState("")
    const [duration, setDuration] = useState(0)
    const [playlistLink, setPlaylistLink] = useState("Playlist not created")



    useEffect(()=>{
        console.log('running once right');
    },[])


if(token==="" || token ==null || token==='null' ||  mr_screenState === -1){
    return(
        <>
            <HomePageMR setScreenState={mr_setScreenState} 
                        setToken ={setToken} 
                        token={token}
                        setRefreshToken={setRefreshToken}
                        />
            <p ace={token} style={{color:'black'}}>{token}</p>
        </>
    )
}

if(mr_screenState ===  0){

    return(
        <>
            <LocationSelectionPage setScreenState={mr_setScreenState} 
                                    setNameOfPlaylist={setNameOfPlaylist}
                                    setDuration = {setDuration}
                                    setToken={setToken}
                                    token={token}
            />
        </>
    )
}
if(mr_screenState ===  1){
    return(
        <>
            <h1 setScreenState={mr_setScreenState}>This is the map page</h1>
            <h1>Experimmental feature</h1>
        </>
    )
}
if(mr_screenState ===  2){
    return(
        <>
            <PlaylistInspirationPage setScreenState={mr_setScreenState}
                                     duration={duration}
                                     nameOfPlaylist={nameOfPlaylist}
                                     setToken={setToken}
                                     token={token}
                                     setuserinputplaylistName={setuserinputplaylistName}
                                     setuserinputplaylistimage={setuserinputplaylistimage}
                                     setuserinputplaylistitems={setuserinputplaylistitems}
                                     setuserinputplaylistlink={setuserinputplaylistlink}
                                     />
        </>
    )
}
if(mr_screenState ===  3){
    return(
        <>
            <SelectionConfirmationPage setScreenState={mr_setScreenState}
                                        // playlist={playlist}
                                        userinputplaylistname={userinputplaylistname}
                                        userinputplaylistimage={userinputplaylistimage}
                                        userinpitplaylistitems={userinpitplaylistitems}
                                        duration={duration}
                                        setOutputPlaylist={setOutputPlaylist}
                                        userinputplaylistlink={userinputplaylistlink}
            
            />
        </>
    )
}
if(mr_screenState ===  4){
    return(
        <>
            <FinishPage setScreenState={mr_setScreenState}
                        userinputplaylistname={userinputplaylistname}
                        userinputplaylistimage={userinputplaylistimage}
                        duration={duration}
                        nameOfPlaylist={nameOfPlaylist}
                        token={token}
                        output_playlist={output_playlist}
                        setPlaylistLink={setPlaylistLink}

            />
        </>
    )
}

// return(
//     <>
//         <HomePageMR setScreenState={mr_setScreenState} setToken ={setToken}/>
//     </>
// )




}



export default MRScreenController;



// var authOptions = {
//     url: 'https://accounts.spotify.com/api/token',
//     'Authorization': 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
//     form: {
//       grant_type: 'refresh_token',
//       refresh_token: refresh_token
//     },
//     json: true
// }


// axios(authOptions)
//   .then(response => {
//     // Handle the response from the server
//     console.log('not gorggetting')
//     console.log(response.data);
//     console.log('to breathe')
//   })
//   .catch(error => {
//     // Handle errors here
//     console.error(error);
//   });
