import { uploadPhoto, createUser } from './utils';

function handuleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photoResp, userResp] = results;
      console.log(`${photoResp.body} ${userResp.firstName} ${userResp.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handuleProfileSignup;
