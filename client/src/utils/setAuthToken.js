import Axios from 'axios';

const setAuthtoken = (token) => {
  if (token) {
    Axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete Axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthtoken;
