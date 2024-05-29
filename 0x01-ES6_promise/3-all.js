import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const promise1 = createUser();
  const promise2 = uploadPhoto();
  Promise.all([promise1, promise2]).then((values) => {
    console.log(values[1].body, values[0].firstName, values[0].lastName);
  })
    .catch(() => {
      console.error('Signup system offline');
    });
}
