import * as yup from "yup";

export class UserProfileEntity{

    name?: string;
    phone?: string;
    email?: string;
    city?: string;
    education?: string;
    position?: string;

    static creatUserProfileSchema(){
        return yup.object({
            name: yup.string().required('Name is required'),
            phone: yup.string().required('phone is required'),
            email: yup.string().required('email is required'),
            city: yup.string().required('city is required'),
            education: yup.string().required('education is required'),
            position: yup.string().required('position is required'),
        })
    }
}