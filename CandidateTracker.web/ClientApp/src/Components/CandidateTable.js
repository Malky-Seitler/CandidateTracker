import React from 'react';
import CandidateRow from './CandidateRow';

export default function CandidateTable({candidates, isPending, showNotes}) {
   
    return (<table className="table table-hover table-striped table-bordered table-hover">
        <thead>
            <tr>
                {isPending && <th>View Details</th>}
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Email</th>
                {showNotes && <th>Notes</th>}
              
            </tr>
        </thead>
        <tbody>
       
            {candidates.map((candid) => <CandidateRow key={candid.id} candidate={candid} isPending={isPending} showNotes={showNotes} />)}
        </tbody>
    </table>)
}
