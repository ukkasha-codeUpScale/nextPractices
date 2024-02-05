import React, { useState } from 'react'
import MultiStepContext from '@/components/context/multistep-context'
import { ApplicantEntity } from '@/components/entity/applicant.entity';
import { WorkExperienceEntity } from '@/components/entity/work.experience.entity';
import { getAllPages } from '@/components/multistep/multiStep';

export default function MultiStep() {
    const [applicant, setAppliants] = useState<ApplicantEntity>(new ApplicantEntity());
    const [workExperience, setWorkExperience] = useState<WorkExperienceEntity>(new WorkExperienceEntity());
    const [step, setStep] = useState<number>(0);
    const stepPrev = (): void => setStep(step - 1);
    const stepNext = (): void => setStep(step + 1);
    


  return (
    <MultiStepContext.Provider value={{
        state : {
            applicant,
            workExperience,
            step
        },
        methods : {
            setAppliants,
            setWorkExperience,
            stepPrev,
            stepNext
        }
    }}>

    <div className='h-screen w-screen p-4'>
        {getAllPages(step)}
    </div>
    </MultiStepContext.Provider>
  )
}
