import {uploadPhoto, createUser} from "./utils"

export default async function asyncUploadUser() {
    let result = {};

    try {
        const uphoto = await uploadPhoto();
        const cuser = await createUser();
        result = {
            photo: uphoto,
            user: cuser
        }
    }
    catch {
        result = {
            photo: null,
            user: null
        }
    }

    return result;
}
