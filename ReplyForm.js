import React, { useState } from 'react';
import axios from 'axios';

const ReplyForm = ({ threadId }) => {
  const [replyData, setReplyData] = useState({
    from: '',
    to: '',
    subject: '',
    body: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReplyData({ ...replyData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/reply/${threadId}`, replyData);
      // Optionally, you can add logic to handle success
      console.log('Reply sent successfully!');
    } catch (error) {
      console.error('Error sending reply:', error);
    }
  };

  return (
    <div>
      <h2>Reply Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="from">From:</label>
          <input
            type="email"
            id="from"
            name="from"
            value={replyData.from}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="to">To:</label>
          <input
            type="email"
            id="to"
            name="to"
            value={replyData.to}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={replyData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            name="body"
            value={replyData.body}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Reply</button>
      </form>
    </div>
  );
};

export default ReplyForm;
