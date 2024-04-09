import React, { useState } from 'react';
import axios from 'axios';

function EmailReply() {
    const [message, setMessage] = useState('');

    const handleReply = () => {
        const payload = {
            toName: "Mitrajit",
            to: "chandra.rupam@gmail.com",
            from: "mitrajit2022@gmail.com",
            fromName: "Mitrajit",
            subject: "Optimize Your Recruitment Efforts with Expert Support",
            body: "<p>Hello how are you</p>",
            references: [
                "<dea5a0c2-336f-1dc3-4994-191a0ad3891a@gmail.com>",
                "<CAN5Dvwu24av80BmEg9ZVDWaP2+hTOrBQn9KhjfFkZZX_Do88FA@mail.gmail.com>",
                "<CAN5DvwuzPAhoBEpQGRUOFqZF5erXc=B98Ew_5zbHF5dmeKWZMQ@mail.gmail.com>",
                "<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>"
            ],
            inReplyTo: "<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>"
        };

        axios.post('https://hiring.reachinbox.xyz/api/v1/onebox/reply/2', payload, {
            headers: {
                Authorization: 'Bearer Token'
            }
        })
        .then(response => {
            setMessage(response.data.data);
        })
        .catch(error => {
            setMessage('Error replying to email thread');
        });
    };

    return (
        <div>
            <button onClick={handleReply}>Reply to Email Thread</button>
            <p>{message}</p>
        </div>
    );
}

export default EmailReply;
