import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListAllMails() {
    const [mails, setMails] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://hiring.reachinbox.xyz/api/v1/mails', {
            headers: {
                Authorization: 'Bearer Token'
            }
        })
        .then(response => {
            setMails(response.data.data);
        })
        .catch(error => {
            setError('Error fetching mails');
        });
    }, []);

    return (
        <div>
            {error && <p>{error}</p>}
            {mails.length > 0 ? (
                <div>
                    <h2>List of Mails</h2>
                    <ul>
                        {mails.map(mail => (
                            <li key={mail.id}>
                                <strong>From:</strong> {mail.from}<br />
                                <strong>Subject:</strong> {mail.subject}<br />
                                <strong>Date:</strong> {mail.date}<br />
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No mails found</p>
            )}
        </div>
    );
}

export default ListAllMails;
