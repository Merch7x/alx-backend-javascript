export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve('this worked');
    } else {
      reject(new Error('error'));
    }
  });
}
