import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstname, lastname, filename) {
  const signpromise = signUpUser(firstname, lastname);
  const uploadpromise = uploadPhoto(filename);

  return Promise.allSettled([signpromise, uploadpromise])
    .then((results) => {
      results.forEach((result) => {
        console.log(
          [
            {
              status: result.status,
              value: [result.value || result.reason],
            },
          ],
        );
      });
    });
}
