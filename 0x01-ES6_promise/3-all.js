import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const userpromise = createUser();
  const photopromise = uploadPhoto();
  Promise.all([userpromise, photopromise])
    .then(([user, photo]) => {
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
