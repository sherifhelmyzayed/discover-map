import axios from "axios";
import React, { useEffect, useState } from "react";



const GetData = () => {
    const [geolocation, setGeolocation] = useState({
        longitude: null, latitude: null
    })
    const [trigger, setTriggered] = useState(false)

    useEffect(()=>{
        axios.get(URL).then(response => {
            const location = ({
                longitude: response.data.records[2].fields.geolocation[0],
                latitude: response.data.records[2].fields.geolocation[1]
            })
            setGeolocation(location)
            console.log("triggered")
        }).catch(error => {
            console.log(error)
        })
    }, [trigger])

    const handler= () =>{
        setTriggered(!trigger)
    }


    const URL = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&refine.country=United+Kingdom'


    return (
        <>
        <div>
            <button onClick={handler}>Get data </button>
        </div >
        <div>
                longitude: {geolocation.longitude}
                latitude: {geolocation.latitude}
        </div>
        </>
    )
}

export default GetData