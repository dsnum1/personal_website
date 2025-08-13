import GoogleMapReact from 'google-map-react';
import GoogleMapsAPIWrapper from 'google-map-react'

function AnyReactComponent(props){
    return(
        <>
            {props.text}
        </>
    )
}






function Map() {
    const defaultProps = {
        center: {
            lat: 29.215407343848412,
            lng:  73.49707359780733
        },
        zoom: 11
    };
const handleApiLoaded = (map, maps) => {
        // use map and maps objects
        console.log(map)
        console.log(maps)
      };
      



      

    return (
        <>
            {/* <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key:'AIzaSyCjTTQBJ07b09AXcptHytrHqEKXTOfpF9w' }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    onGoogleApiLoaded={({map, maps})=> handleApiLoaded(map, maps)}
                    hoverDistance={50}
                >
                    <AnyReactComponent
                        lat={29.215407343848412}
                        lng={73.49707359780733}
                        text="My Marker"

                    />
                </GoogleMapReact>
            </div> */}
        </>
    )
}

export default Map;