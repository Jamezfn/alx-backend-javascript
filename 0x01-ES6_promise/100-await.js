import { uploadPhoto, createUser } from "./utils";

export default async function asyncUploadUser() {
    try {
        const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
        return { photo, user };
    }
    catch (error) {
        console.error("Failed to upload photo or create user:", error);
        return { photo: null, user: null };
    }
}
