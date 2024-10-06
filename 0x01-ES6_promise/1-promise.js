export default function getFullResponseFromAPI(SUCCESS) {
  return new Promise((resolve, reject) => {
    if (SUCCESS === true) {
      resolve({
        status: 200,
        body: 'success',
      });
    } else {
      reject({
        Error: 'The fake API is not working currently',
      });
    }
  });
}
