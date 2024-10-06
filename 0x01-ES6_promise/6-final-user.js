import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const results = await Promise.allSettled([
    signUpUser(firstName, lastName), // Assuming this returns a Promise
    uploadPhoto(fileName) // Assuming this returns a Promise
  ]);
  return results.map(result => {
    return {
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason
    };
  });
}
