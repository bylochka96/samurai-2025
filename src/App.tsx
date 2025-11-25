import './App.css'
import {TrackList} from "./components/TrackList.tsx";
import {PageTitle} from "./components/PageTitle.tsx";
import {TrackDetails} from "./components/TrackDetails.tsx";
import {ResetTrackSelection} from "./components/ResetTrackSelection.tsx";


function App() {

    return (
        <>
            {/*<Header/>*/}
            <PageTitle/>
            <ResetTrackSelection/>
            <div className={"audio-container"}>
                <div className={'audio-item'}><TrackList/></div>
                <div className={'audio-item'}><TrackDetails/></div>

            </div>

            {/*<Footer/>*/}
        </>
    )
}

export default App