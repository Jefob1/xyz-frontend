import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const submitMessage = async (message) => {
  try {
    await axios.post(`${API_BASE_URL}/submit-message`, { message });
    console.log('Message submitted successfully');
  } catch (error) {
    console.error('Error submitting message:', error);
  }
};

export const retrieveMessages = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/retrieve-messages`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving messages:', error);
    return [];
  }
};
