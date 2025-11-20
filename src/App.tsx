import './App.css'
import {useEffect, useState} from "react";

//bookmarks urls
const apihub = "https://apihub.it-incubator.io/"
const swagger = "https://musicfun.it-incubator.app/api"

//baseUrlForApi
const baseApiUrl = 'https://musicfun.it-incubator.app/api/1.0';

//endpoints
const getAllTracksEndpoint = '/playlists/tracks';

//api key for api requests
const apiKey = 'find at apiHub';


function App() {

    const [selectedTrackId, setSelectedTrackId] = useState(null);
    const [tracks, setTracks] = useState(null);

    const getUrl = `${baseApiUrl}` + `${getAllTracksEndpoint}`;
    const headers = {
        'api-key': apiKey,
    };

    useEffect(() => {
        fetch(getUrl, {headers})
            .then(res => res.json())
            .then(json => setTracks(json.data))
    }, []);

    if (tracks === null) {
        return (
            <div>Loading...</div>
        );
    }

    if (tracks.length === 0) {
        return (
            <div>No tracks in DB</div>
        );
    }
    return (
        <>
            <h1>Samurai Player</h1>
            <button onClick={() => {
                setSelectedTrackId(null);
            }}>Reset selection
            </button>
            <div>
                {
                    tracks.map((track: object) => {
                        return (
                            <div
                                onClick={() => {
                                    if (selectedTrackId !== track.id) {
                                        setSelectedTrackId(track.id)
                                    }
                                }}
                                key={track.id}
                                style={{border: track.id === selectedTrackId ? '1px dashed orange' : 'none',}}
                            >
                                <div>
                                    {track.attributes.title}
                                </div>
                                <audio src={track.attributes.attachments[0].url}
                                       controls
                                ></audio>
                            </div>
                        )
                    })}
            </div>
        </>
    )
}

export default App
