import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const CandidatesCountContext = createContext();

const CandidatesCountContextComponent = ({ children }) => {
    const [pendingCount, setPendingCount] = useState();
    const [confirmedCount, setConfirmedCount] = useState();
    const [refusedCount, setRefusedCount] = useState();
    const [isPending, setIsPending] = useState(false);
    const updateCounts = async () => {
        const { data } = await axios.get('/api/candidates/getstatuses');
        setPendingCount(data.pendingCount);
        setConfirmedCount(data.confirmedCount);
        setRefusedCount(data.refusedCount);
    }
    useEffect(() => {
        updateCounts();
    }, [])
    return (
        <CandidatesCountContext.Provider value={{ pendingCount, setPendingCount, 
                                                confirmedCount, setConfirmedCount, 
                                                refusedCount, setRefusedCount,
                                                 updateCounts,
                                                 isPending, setIsPending }}>
            {children}
            
        </CandidatesCountContext.Provider>
    )
}
export { CandidatesCountContext, CandidatesCountContextComponent };