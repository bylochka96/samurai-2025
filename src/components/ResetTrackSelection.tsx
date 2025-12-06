export function ResetTrackSelection({setSelectedTrackId}) {

    const handleResetTrackSelection = () => {
        setSelectedTrackId(null);
    }

    return (
        <>
            <button onClick={handleResetTrackSelection}>Reset selection
            </button>
        </>
    )
}