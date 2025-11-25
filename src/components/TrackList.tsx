import {useEffect, useState} from "react";
import {apiKey, baseApiUrl, endpoints} from "../../constants.ts";


export function TrackList() {

    const [tracks, setTracks] = useState(null);
    const [selectedTrackId, setSelectedTrackId] = useState(null);

    //default header
    const headers = {'api-key': apiKey};

    useEffect(() => {
        const getAllTracksUrl = `${baseApiUrl}` + `${endpoints.getAllTracks}`;
        fetch(getAllTracksUrl, {headers})
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
            <h3>Tracks</h3>
            <div className={"list-track-container"}>
                {tracks.map((track: object) => {
                    return (
                        <div className={'list-track-item'} key={track.id}
                             onClick={() => {
                                 setSelectedTrackId(track.id);
                             }}
                             style={{border: track.id === selectedTrackId ? '1px dashed orange' : 'none'}}
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