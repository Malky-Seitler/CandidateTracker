import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CandidateTable from '../Components/CandidateTable';

const ShowPending = () => {

    const [pendingCandidates, setPendingCandidates] = useState();


    useEffect(() => {
        const getPending = async () => {

            const { data } = await axios.get('/api/candidates/getpending');
            setPendingCandidates(data);
        }
        getPending();
   
        
    }, [])

    return (
       <div className='container'>
           {pendingCandidates != undefined && <CandidateTable candidates={pendingCandidates} showNotes={true} isPending={true}/>}
       </div>
    )
}
export default ShowPending;