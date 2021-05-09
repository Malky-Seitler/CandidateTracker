import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { CandidatesCountContext } from '../CandidatesCountContext';

const ShowDetails = () => {

    let { id } = useParams();
    let context = useContext(CandidatesCountContext);
    const history = useHistory();
    const [candidate, setCandidate] = useState({ firstName: '', lastName: '', email: '', phone: '', notes: '', status: '' });
    let {firstName, lastName, email, phone, notes} = candidate;
    useEffect(() => {
        const getCandidate = async () => {
            let { data } = await axios.get(`/api/candidates/getbyid?id=${id}`);
            setCandidate(data);
        }
        getCandidate();
    }, [])
    const onButtonClick = async e => {
        let candidateCopy = {...candidate};
        candidateCopy.status = e.target.name;
        await axios.post('/api/candidates/UpdateCandidate', candidateCopy);
        context.updateCounts();
        history.push('/');
    }
    return (
        <div className="card card-body bg-light">
            <h4>Name: {firstName} {lastName}</h4>
            <h4>Email: {email}</h4>
            <h4>Phone: {phone}</h4>
            <h4>Status: Pending</h4>
            <h4>Notes:</h4>
            <p>{notes}</p>
            <div>
                <button onClick={onButtonClick} name='confirmed' className="btn btn-success">Confirm</button>
                
                <button onClick={onButtonClick} name='refused' className="btn btn-danger">Refuse</button>
            </div>
        </div>
    )
}
export default ShowDetails;