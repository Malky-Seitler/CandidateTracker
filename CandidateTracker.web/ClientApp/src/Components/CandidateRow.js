import React from 'react';
import { Link } from 'react-router-dom';

export default function CandidateRow({ candidate, isPending, showNotes }) {
    let { firstName, lastName, phone, email, notes, id } = candidate;

    return (
        <tr>
            {isPending &&
                <button className='page-link'>
                    <Link to={`/ShowDetails/${id}`} className='nav-link text-light'>
                        Show Details
                 </Link>
                </button>
            }
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{phone}</td>
            <td>{email}</td>
            {showNotes && <td>{notes}</td>}

        </tr>
    )
}
