import { createContext, useEffect, useContext } from "react";
import { ApplicantEntity } from "../entity/applicant.entity";
import { WorkExperienceEntity } from "../entity/work.experience.entity";

export type MutliStepContextType = {
    state :{
        applicant?: ApplicantEntity | null;
        workExperience?: WorkExperienceEntity | null;
        step? : number;
    };
    methods : {
        setAppliants? : (e?:any) => void;
        setWorkExperience? : (e?:any) => void;
        stepNext? : () => void;
        stepPrev? : () => void;
    };
}


const MultiStepContext = createContext<MutliStepContextType>({
    state : {
        applicant : null,
        workExperience :  null,
        step: 0
    },
    methods : {
        setAppliants : (e?:any) => { },
        setWorkExperience : (e?:any) => { },
        stepNext: () => { },
        stepPrev: () => { },
    }
})
export default MultiStepContext
