import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OneboxThread() {
    const [threadData, setThreadData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/thread', {
            headers: {
                Authorization: 'Bearer Token'
            }
        })
        .then(response => {
            setThreadData(response.data.data);
        })
        .catch(error => {
            setError('Error fetching Onebox thread');
        });
    }, []);

    return (
        <div>
            {error && <p>{error}</p>}
            {threadData && (
                <div>
                    <h2>Onebox Thread Data</h2>
                    <pre>{JSON.stringify(threadData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default OneboxThread;
