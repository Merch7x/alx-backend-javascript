import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstname, lastname, filename) {
  const signpromise = signUpUser(firstname, lastname);
  const uploadpromise = uploadPhoto(filename);

  const results = await Promise.allSettled([signpromise, uploadpromise]);
  return results.map((result) => (
    [
      {
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason,
      },
    ]
  ));
}
