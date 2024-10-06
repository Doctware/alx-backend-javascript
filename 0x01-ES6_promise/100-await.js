import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const response = {
    photo: null,
    user: null,
  };
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    response.photo = photo;
    response.user = user;
  } catch (error) {
    return response;
  }
  return response;
}
