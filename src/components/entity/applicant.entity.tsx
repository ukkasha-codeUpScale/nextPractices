import * as yup from "yup";

export class ApplicantEntity {
    name?: string;
    age?: number;
    phone?:number;
    stack?:string;

    static ApplicantYupSchema(){
        return yup.object({
            name : yup.string().required("Enter a valid name"),
            age: yup.number().required("Enter a valid age"),
            phone : yup.number().required("Enter a valid phone number"),
            stack : yup.string().required("Enter a valid stack"),
        })
    }
}
