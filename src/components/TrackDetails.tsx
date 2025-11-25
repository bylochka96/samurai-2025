import {apiKey, baseApiUrl, endpoints} from "../../constants.ts";
import {useEffect, useState} from "react";

export function TrackDetails() {

    const [selectedTrack, setSelectedTrack] = useState(null);

    //default header
    const headers = {'api-key': apiKey};
    const selectedTrackId = null;

    useEffect(() => {
        if (selectedTrackId) {
            const getLyricsUrl = `${baseApiUrl}` + `${endpoints.getLyrics(selectedTrackId)}`;
            fetch(getLyricsUrl, {headers})
                .then(res => res.json())
                .then(json => {
                    setSelectedTrack(json.data);
                });
        }
    }, [selectedTrackId]);

    return (
        <>
            <h3>Details</h3>



            <div>
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