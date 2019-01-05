import axios from 'axios';

async function getMyMessages() {
  console.log('I should fetch msgs');
  const response = await axios({
    url: '/api/messages/mine',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  console.log(response);
  return response.data;
}

export {
  getMyMessages
}
