import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { CandidatesCountContext } from '../CandidatesCountContext';

const AddCandidate = () => {
    const [candidate, setCandidate] = useState({ firstName: '', lastName: '', email: '', phone: '', status: 0, notes: '' });
    let { firstName, lastName, email, phone, notes } = candidate;
    const context = useContext(CandidatesCountContext);
    const history = useHistory();

    const onSubmitClick = async () => {
        await axios.post('/api/Candidates/AddCandidate', { ...candidate });
        context.updateCounts();
        history.push('/');

    }
    const onTextChange = e => {
        let candidateCopy = { ...candidate };
        candidateCopy[e.target.name] = e.target.value;
        setCandidate(candidateCopy);

    }

    return (
        <div className="container" >
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <h4>Add Candidate</h4>
                        <input onChange={onTextChange} type="text" name="firstName" placeholder="First Name" className="form-control" value={firstName} />
                        <br />
                        <input onChange={onTextChange} type="text" name="lastName" placeholder="Last Name" className="form-control" value={lastName} />
                        <br />
                        <input onChange={onTextChange} type="text" name="email" placeholder="Email" className="form-control" value={email} />
                        <br />
                        <input onChange={onTextChange} type="text" name="phone" placeholder="Phone Number" className="form-control" value={phone} />
                        <br />
                        <textarea onChange={onTextChange} rows="5" className="form-control" name="notes" value={notes}></textarea>
                        <br />
                        <button className="btn btn-primary" onClick={onSubmitClick}>Submit</button>

                    </div>
                </div>
            </div>
        </div>
    )

}
export default AddCandidate;