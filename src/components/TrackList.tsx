import {useEffect, useState} from "react";
import {apiKey, baseApiUrl, endpoints} from "../../constants.ts";
import {TrackItem} from "./TrackItem.tsx";


export function TrackList({selectedTrackId, setSelectedTrackId}) {

    const [tracks, setTracks] = useState(null);

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
                        <TrackItem isSelected={track.id === selectedTrackId}
                                   setSelectedTrackId={setSelectedTrackId}
                                   track={track} key={track.id}/>
                    )
                })}
            </div>
        </>
    )
}

