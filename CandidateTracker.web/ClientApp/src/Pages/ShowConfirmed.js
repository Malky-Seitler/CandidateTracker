import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CandidateTable from '../Components/CandidateTable';


const ShowConfirmed = () => {

    const [confirmedCandidates, setConfirmedCandidates] = useState();
    const [showNotes, setShowNotes] = useState(true);
    useEffect(() => {
        const getConfirmed = async () => {

            const { data } = await axios.get('/api/candidates/getconfirmed');
            setConfirmedCandidates(data);
        }
        getConfirmed();

    }, [])
    const onToggleClick = () => {
        let showNotesCopy = {...showNotes};
        showNotesCopy = !showNotes;
        setShowNotes(showNotesCopy);
    
    }
    return (
        <div className='container'>
            <button onClick={onToggleClick} className='btn btn-info'>
                Toggle Notes
            </button>
            {confirmedCandidates != undefined && <CandidateTable candidates={confirmedCandidates} showNotes={showNotes} />}
        </div>
    )
}
export default ShowConfirmed;