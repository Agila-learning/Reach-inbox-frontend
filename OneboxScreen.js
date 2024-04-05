// OneboxScreen.js

import React, { useEffect } from 'react'; // Removed useState import as it's not needed
import axios from 'axios';

const OneboxScreen = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/onebox/list');
      console.log(response.data); // Log the fetched data
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
