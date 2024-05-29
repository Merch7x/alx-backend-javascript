import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const promise1 = createUser();
  const promise2 = uploadPhoto();
  Promise.all([promise1, promise2]).then((values) => {
    console.log(values);
  })
    .catch(() => {
      console.error('Signup system offline');
    });
}
