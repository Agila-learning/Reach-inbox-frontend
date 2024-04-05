// OneboxScreen.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OneboxScreen = () => {
  const [oneboxData, setOneboxData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/onebox/list');
      setOneboxData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      {/* Display fetched data */}
    </div>
  );
};

export default OneboxScreen;
