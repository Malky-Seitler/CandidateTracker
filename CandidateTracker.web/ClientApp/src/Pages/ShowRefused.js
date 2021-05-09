import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CandidateTable from '../Components/CandidateTable';

const ShowRefused = () => {

    const [refusedCandidates, setRefusedCandidates] = useState();

    useEffect(() => {
        const getRefused = async () => {

            const { data } = await axios.get('/api/candidates/getrefused');
            setRefusedCandidates(data);
        }
        getRefused();
        
    }, [])

    return (
       <div className='container'>
           
           {refusedCandidates != undefined && <CandidateTable candidates={refusedCandidates}/>}
       </div>
    )
}
export default ShowRefused;