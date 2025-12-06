export function TrackItem({isSelected, setSelectedTrackId, track}) {

    const handleSetSelectedTrackId = () => {
        setSelectedTrackId?.(track.id);
    }

    return (
        <div className={'list-track-item'} key={track.id}
             onClick={handleSetSelectedTrackId}
             style={{border: isSelected ? '1px dashed orange' : 'none'}}
        >
            <div>
                {track.attributes.title}
            </div>
            <audio src={track.attributes.attachments[0].url}
                   controls
            ></audio>
        </div>
    )
}