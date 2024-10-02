import { uploadPhoto, createUser } from './utils.js';

/**
 * Asynchronously uploads a photo and creates a user.
 * @returns {Promise<{ photo: Object | null, user: Object | null }>}
 *          An object containing the responses from uploadPhoto and createUser,
 *          or null values if any operation fails.
 */
const asyncUploadUser = async () => {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
};

export default asyncUploadUser;

