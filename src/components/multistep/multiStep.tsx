import {NameAge, PhoneAndStack} from '../multistep/applicant-details'
import {LocationandDuration, CompanyPosition} from '../multistep/work-experience'
 
export const getAllPages = (step : number) :  any=> 
({
    0: <NameAge />,
    1: <PhoneAndStack />,
    2: <LocationandDuration />,
    3: <CompanyPosition />,
}[step]);