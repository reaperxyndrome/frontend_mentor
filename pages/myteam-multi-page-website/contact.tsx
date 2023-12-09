import { Footer, Navbar, livvic, typography} from "./reusable_component";
import Image, { StaticImageData } from "next/image";
import IconPerson from "./starter-code/assets/icon-person.svg"
import IconCog from "./starter-code/assets/icon-cog.svg"
import IconChart from "./starter-code/assets/icon-chart.svg"
import BGPatternContact1 from "./starter-code/assets/bg-pattern-about-2-contact-1.svg"
import BGPatternContact2 from "./starter-code/assets/bg-pattern-contact-2.svg"
import { useState } from "react";

interface FieldProps{
    label: string,
    required?: boolean,
    isSubmitted?: boolean
}
const Field: React.FC<FieldProps> = ({ label, required, isSubmitted }) => {
    const [isFilled, setIsFilled] = useState(false);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsFilled(event.target.value !== '');
    };
    return (
        <div className="flex flex-col text-[white] w-full">
            <input 
                className={`border-b pb-4 bg-[white] bg-opacity-0 mb-2 focus:outline-none indent-3.5
                    ${required && !isFilled && isSubmitted?
                     `text-myteam_multi_page_website-primary-light_coral
                      placeholder:text-myteam_multi_page_website-primary-light_coral` : ''
                    }`
                }
                required={required}
                onChange={handleInputChange}
                placeholder={label}>
            </input>
            {required && !isFilled && isSubmitted &&
            <span className=" text-[10px] text-myteam_multi_page_website-primary-light_coral indent-3.5 italic">
                This field is required
            </span>}
        </div>
    );
};

interface QualityProps{
    icon: StaticImageData
    description: string
}
const Quality:React.FC<QualityProps> = ({icon, description}) => {
    return(
        <div className="flex items-center gap-x-6 text-[white]">
            <Image src={icon} alt=""></Image>
            <h3 className={`${typography.h3}`}>{description}</h3>
        </div>
    )
}

const qualityList = [
    {
        icon: IconPerson,
        description: "The quality of our talent network"
    },
    {
        icon: IconCog,
        description: "Usage & implementation of our software"
    },
    {
        icon: IconChart,
        description: "How we help drive innovation"
    }
]

const MainSection = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitted(true);
    };
    return(
        <section className="relative flex flex-col gap-y-[120px] bg-myteam_multi_page_website-primary-midnight_green px-[clamp(40px,11vw,165px)] max-md:px-10 pt-[73px] max-md:pt-16 pb-[120px] max-md:pb-[112px]">
            <Navbar/>
            <div className="flex max-lg:flex-col lg:justify-between max-lg:items-center max-lg:text-center gap-x-10">
                <div className="flex flex-col w-[540px] max-lg:mb-16">
                    <h1 className={`${typography.h1_S} text-[white] mb-4 h-[100px]`}>Contact</h1>
                    <h2 className={`${typography.h2_S} text-myteam_multi_page_website-primary-light_coral mb-8`}>Ask us about</h2>
                    <div className="flex flex-col gap-y-2">
                        {qualityList.map((quality, index) => 
                            <Quality key={index} {...quality} ></Quality>
                        )}
                    </div>
                </div>
                <form className="flex items-start flex-col gap-y-4 w-[540px]" onSubmit={handleSubmit} noValidate>
                    <Field required label="Name" isSubmitted={isSubmitted}></Field>
                    <Field required label="Email Address" isSubmitted={isSubmitted}></Field>
                    <Field label="Company Name"></Field>
                    <Field label="Title"></Field>
                    <Field required label="Message" isSubmitted={isSubmitted}></Field>
                    <input className="bg-[white] rounded-full px-8 py-[10px] cursor-pointer" type="submit"/>
                </form>    
            </div>
            <Image className="absolute top-[245px] left-[-100px]" src={BGPatternContact1} alt=""></Image>
            <Image className="absolute bottom-0 right-[-100px]" src={BGPatternContact2} alt=""></Image>
        </section>
    )
}
export default function ContactPage(){
    
    return(
        <div className={`${livvic.className}`}>
            <MainSection></MainSection>
            <Footer/>
        </div>
    )
}