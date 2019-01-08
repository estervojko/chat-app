import axios from 'axios';

async function login(credentials){
    const token = await axios.post('/api/user_token',
        {
          "auth": credentials
        });
    return token.data
}

export {
  login,
}
