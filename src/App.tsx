import './App.css'
import {useEffect, useState} from "react";

//bookmarks urls
const apiHub = "https://apihub.it-incubator.io/"

//baseUrlForApi
const baseApiUrl = 'https://musicfun.it-incubator.app/api/1.0';

//endpoints
const getAllTracksEndpoint = '/playlists/tracks';
const getLyricsEndpoint = (trackId: number): string => `/playlists/tracks/${trackId}`;

//api key for api requests
const apiKey = 'find at apiHub';

//default header
const headers = {
    'api-key': apiKey,
};

function App() {

    const [selectedTrackId, setSelectedTrackId] = useState(null);
    const [selectedTrack, setSelectedTrack] = useState(null);
    const [tracks, setTracks] = useState(null);

    useEffect(() => {
        const getAllTracksUrl = `${baseApiUrl}` + `${getAllTracksEndpoint}`;
        fetch(getAllTracksUrl, {headers})
            .then(res => res.json())
            .then(json => setTracks(json.data))
    }, []);

    useEffect(() => {
        if (selectedTrackId) {
            const getLyricsUrl = `${baseApiUrl}` + `${getLyricsEndpoint(selectedTrackId)}`;
            fetch(getLyricsUrl, {headers})
                .then(res => res.json())
                .then(json => {
                    setSelectedTrack(json.data);
                });
        }
    }, [selectedTrackId]);

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
                // setSelectedTrack(null);
            }}>Reset selection
            </button>
            <div className={"audio-container"}>
                {tracks.map((track: object) => {
                    return (
                        <div className={'audio-item'} key={track.id}
                             onClick={() => {
                                 setSelectedTrackId(track.id);
                             }}
                             style={{border: track.id === selectedTrackId ? '1px dashed orange' : 'none',}}>
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
            <div>
                <h3>Details</h3>
                {/*{!selectedTrackId && <div>Track is not selected</div>}*/}
                {/*{selectedTrackId && (selectedTrack?.id !== selectedTrackId) && <div>Loading...</div>}*/}
                {/*{selectedTrackId && (selectedTrack?.id === selectedTrackId) && <div></div>*/}
                {/*    && <div>*/}
                {/*        <div>*/}
                {/*            {`Title: ${selectedTrack.attributes.title === null*/}
                {/*                ? 'No title'*/}
                {/*                : `${selectedTrack.attributes.title}`}`}*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            {`Lyrics: ${selectedTrack.attributes.lyrics === null*/}
                {/*                ? 'No Lyrics'*/}
                {/*                : `${selectedTrack.attributes.lyrics}`}`}*/}
                {/*        </div>*/}
                {/*    </div>}*/}

                {selectedTrackId === null
                    ? <div>Track is not selected</div>
                    : selectedTrack?.id !== selectedTrackId
                        ? <div>Loading...</div>
                        : <div>
                            <div>
                                {`Title: ${selectedTrack.attributes.title === null
                                    ? 'No title'
                                    : `${selectedTrack.attributes.title}`}`}
                            </div>
                            <div>
                                {`Lyrics: ${selectedTrack.attributes.lyrics === null
                                    ? 'No Lyrics'
                                    : `${selectedTrack.attributes.lyrics}`}`}
                            </div>
                        </div>}
            </div>
        </>
    )
}

export default App