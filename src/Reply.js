import React, { useState } from 'react';
import axios from 'axios';

const Reply = ({ threadId }) => {
  const [message, setMessage] = useState('');

  const handleReply = async () => {
    try {
      await axios.post(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`, {
        from: 'user@example.com',
        to: 'recipient@example.com',
        subject: 'Reply Subject',
        body: message,
      });
      // Handle reply success
    } catch (error) {
      console.error('Error replying to email:', error);
    }
  };

  return (
    <div>
      <h3>Reply to Email Thread {threadId}</h3>
      <textarea value={message} onChange={e => setMessage(e.target.value)} />
      <button onClick={handleReply}>Send Reply</button>
    </div>
  );
};

export default Reply;
