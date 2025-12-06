import './App.css'
import {TrackList} from "./components/TrackList.tsx";
import {PageTitle} from "./components/PageTitle.tsx";
import {TrackDetails} from "./components/TrackDetails.tsx";
import {ResetTrackSelection} from "./components/ResetTrackSelection.tsx";
import {useState} from "react";


function App() {

    const [selectedTrackId, setSelectedTrackId] = useState(null);

    return (
        <>
            {/*<Header/>*/}
            <PageTitle/>
            <ResetTrackSelection setSelectedTrackId={setSelectedTrackId}/>
            <div className={"audio-container"}>
                <div className={'audio-item'}><TrackList selectedTrackId={selectedTrackId} setSelectedTrackId={setSelectedTrackId}/></div>
                <div className={'audio-item'}><TrackDetails selectedTrackId={selectedTrackId}/></div>
            </div>

            {/*<Footer/>*/}
        </>
    )
}

export default App