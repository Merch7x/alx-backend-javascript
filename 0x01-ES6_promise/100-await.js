import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  try {
    const userp = await createUser();
    const uploadp = await uploadPhoto();
    return {
      photo: { ...uploadp },
      user: { ...userp },
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
