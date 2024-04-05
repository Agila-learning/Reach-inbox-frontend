import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = 'https://api.reachinbox.com/v1'; // Provided base URL from the documentation

const Onebox = () => {
  const [oneboxData, setOneboxData] = useState([]);

  useEffect(() => {
    fetchData();
    addKeyboardShortcuts(); // Add keyboard shortcuts when component mounts
    return removeKeyboardShortcuts; // Remove keyboard shortcuts when component unmounts
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseURL}/onebox/list`);
      setOneboxData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (threadId) => {
    try {
      await axios.delete(`${baseURL}/onebox/${threadId}`);
      fetchData(); // Refresh data after deletion
    } catch (error) {
      console.error('Error deleting Onebox:', error);
    }
  };

  const handleOpenReply = (threadId) => {
    console.log('Opening reply box for thread ID:', threadId);
  };

  const addKeyboardShortcuts = () => {
    const handleKeyPress = (event) => {
      if (event.key === 'd' || event.key === 'D') {
        if (oneboxData.length > 0) {
          handleDelete(oneboxData[0].thread_id);
        }
      } else if (event.key === 'r' || event.key === 'R') {
        if (oneboxData.length > 0) {
          handleOpenReply(oneboxData[0].thread_id);
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
  };

  const removeKeyboardShortcuts = () => {
    document.removeEventListener('keydown', handleKeyPress);
  };

  return (
    <div>
      {oneboxData.map((item) => (
        <div key={item.thread_id}>
          <p>{item.content}</p>
          <button onClick={() => handleDelete(item.thread_id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Onebox;
