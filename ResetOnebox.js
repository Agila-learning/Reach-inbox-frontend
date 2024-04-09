import React, { useState } from 'react';
import axios from 'axios';

function ResetOnebox() {
    const [message, setMessage] = useState('');

    const handleReset = () => {
        axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/reset', {
            headers: {
                Authorization: 'Bearer Token'
            }
        })
        .then(response => {
            setMessage(response.data.data);
        })
        .catch(error => {
            setMessage('Error resetting Onebox');
        });
    };

    return (
        <div>
            <button onClick={handleReset}>Reset Onebox</button>
            <p>{message}</p>
        </div>
    );
}

export default ResetOnebox;
