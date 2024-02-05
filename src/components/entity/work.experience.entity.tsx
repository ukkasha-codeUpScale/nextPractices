import * as yup from "yup";

export class WorkExperienceEntity{
    company?: string;
    position?: string;
    duration?: number;
    location?: string;

    static WorkExperienceSchema(){
        return yup.object({
            company : yup.string().required("Enter a valid company name"),
            position : yup.string().required("Enter a valid position"),
            duration : yup.number().required("Time Period is required"),
            location : yup.string().required("Enter a Location ")
        })
    }
}
