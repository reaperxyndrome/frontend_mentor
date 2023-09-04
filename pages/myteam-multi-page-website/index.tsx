import Image from "next/image"
import Link from "next/link"
import Logo from "./starter-code/assets/logo.svg"
import { Livvic } from "next/font/google"
import { twMerge } from "tailwind-merge"
import BGPatternHome1 from "./starter-code/assets/bg-pattern-home-1.svg"
import BGPatternHome2 from "./starter-code/assets/bg-pattern-home-2.svg"
import BGPatternHome3 from "./starter-code/assets/bg-pattern-home-3.svg"
import IconPerson from "./starter-code/assets/icon-person.svg"
import IconCog from "./starter-code/assets/icon-cog.svg"
import IconChart from "./starter-code/assets/icon-chart.svg"
import AvatarKady from "./starter-code/assets/avatar-kady.jpg"
import AvatarAiysha from "./starter-code/assets/avatar-aiysha.jpg"
import AvatarArthur from "./starter-code/assets/avatar-arthur.jpg"
import { StaticImageData } from "next/image"

const livvic= Livvic({
    subsets: ['latin'],
    weight: ['600', '700']
})

const typography = {
    h1_L: "font-bold text-[100px] leading-[100px]",
    h1_S: "font-bold text-[64px] leading-[56px]",
    h2:"font-bold text-[48px] leading-[48px]",
    h3: "font-bold text-[18px] leading-[28px]",
    body_1:"font-semibold text-[18px] leading-[28px]",
    body_2:"font-semibold text-[15px] leading-[25px]"
}

export default function HomePage(){
    interface ExtendableProp{
        className?: string;
    }
    interface ButtonProp extends ExtendableProp {
        title?:string;
    }
    const Button : React.FC<ButtonProp> = ({className, title}) => {
        return(
            <div className={twMerge(`flex items-center justify-center text-[white] rounded-full w-[153px] h-[48px] px-[30px] py-[10px] border-2`, className)}>
                <p>{title}</p>
            </div>
        )
    }
    const Navbar: React.FC<ExtendableProp> = ({className}) => {
        return(
            <nav className={twMerge(`${typography.body_1} flex gap-x-3 justify-between`, className)}>
                <div className="flex items-center ">
                    <Image className="mr-20" src={Logo} alt="my team"></Image>
                    <Link className="mr-10" href={""}>home</Link>
                    <Link href={""}>about</Link>
                </div>
                <Button title="contact us"></Button>
            </nav>
        )
    }
    const Section1 = () => {
        return(
            <section className="relative bg-myteam_multi_page_website-primary-midnight_green text-[white] px-[165px] pt-[73px] pb-[250px]">
                <Navbar className="mb-[130px]"></Navbar>
                <div className="flex gap-x-[32px]">
                    <h1 className={`${typography.h1_L} w-[635px]`}>Find the <br></br> best <span className=" text-myteam_multi_page_website-primary-light_coral">talent</span></h1>
                    <div className="flex flex-col justify-between ">
                        <div className="w-[50px] h-1 bg-myteam_multi_page_website-secondary-rapture_blue"></div>
                        <p className={`${typography.body_1} w-[445px]`}>Finding the right people and building high performing teams can 
                            be hard. Most companies aren’t tapping into the abundance of global 
                            talent. We’re about to change that.
                        </p>
                    </div>    
                </div>
                <Image src={BGPatternHome1} alt="hello" className="absolute top-1/2 -translate-y-1/2 left-[-100px]"></Image>
                <Image src={BGPatternHome2} alt="hello" className="absolute bottom-0 right-[165px]"></Image>
                
            </section>
        )
    }
    const Section2 = () => {
        interface FeatureProps{
            icon: StaticImageData | string;
            icon_name: string;
            title:string;
            description:string;
        }
        const Feature : React.FC<FeatureProps> = ({icon, icon_name, title, description}) => {
            return(
                <div className="flex gap-x-6 items-center">
                    <Image className="grow-0" src={icon} alt={icon_name}></Image>
                    <div>
                        <h2 className={`${typography.body_1} text-myteam_multi_page_website-primary-light_coral mb-4`}>{title}</h2>
                        <p className={`${typography.body_2} text-[white]`}>{description}</p>
                    </div>
                </div>
            )
        }

        const featureList = [
            {
                icon: IconPerson,
                icon_name: "Person Icon",
                title: "Experienced Individuals",
                description: "Our network is made up of highly experienced professionals who are passionate about what they do."
            },
            {
                icon: IconCog,
                icon_name: "Cog Icon",
                title: "Easy to Implement",
                description: "Our processes have been refined over years of implementation meaning our teams always deliver."
            },
            {
                icon: IconChart,
                icon_name: "Chart Icon",
                title: "Enhanced Productivity",
                description: "Our customized platform with in-built analytics helps you manage your distributed teams."
            }
        ]
        return(
            <section className="relative flex justify-between px-[165px] py-[140px] bg-myteam_multi_page_website-secondary-sacramento_state_green">
                <div>
                    <div className="w-[50px] h-1 bg-myteam_multi_page_website-primary-light_coral mb-14"></div>
                    <h1 className={`${typography.h2} w-[445px] text-[white]`}>
                        Build & manage distributed teams like no one else.
                    </h1>
                </div>
                <div className="flex flex-col gap-y-8 mt-12 w-[540px]">
                    {featureList.map((feature, index) => (
                        <Feature key={`feature ${index}`} {...feature}></Feature>
                    ))}
                </div>
                <Image className="absolute bottom-0 right-[-100px]" src={BGPatternHome3} alt="Pattern Home 3"></Image>
                    
            </section>
        )
    }

    const Section3 = () => {
        interface SuccessProps{
            name: string;
            position: string;
            avatar: StaticImageData | string;
            testimony: string;
        }
        const SuccessStory:React.FC<SuccessProps> = ({name, position, avatar, testimony}) => {
            return(
                <div className="flex flex-col items-center">
                    <p className={`${typography.body_2} w-[350px] mb-6`}>{testimony}</p>
                    <h2 className=" text-myteam_multi_page_website-secondary-rapture_blue">{name}</h2>
                    <h3 className="mb-8">{position}</h3>
                    <Image className=" rounded-full border-2 border-myteam_multi_page_website-secondary-teal" src={avatar} alt={`avatar ${name}`} width={62}></Image>
                </div>
            )
        }

        const successList = [
            {
                name: "Kady Baker",
                position: "Product Manager at Bookmark",
                avatar: AvatarKady,
                testimony: "“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”"
            },
            {
                name: "Aiysha Reese",
                position: "Founder of Manage",
                avatar: AvatarAiysha,
                testimony: "“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”"
            },
            {
                name: "Arthur Clarke",
                position: "Co-founder of MyPhysio",
                avatar: AvatarArthur,
                testimony: "“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”"
            }
        ]
        return(
            <section className="flex flex-col py-[140px] px-[165px] gap-y-14 bg-myteam_multi_page_website-secondary-deep_jungle_green items-center text-center text-[white]">
                <h1 className={`${typography.h2} w-[932px] `}>Delivering real results for top companies. Some of our <span className=" text-myteam_multi_page_website-secondary-rapture_blue">success stories.</span></h1>
                <div className="flex gap-x-[30px]">
                    {successList.map((success, index) => ((
                        <SuccessStory key={`success ${index}`} {...success}></SuccessStory>
                    )))}
                </div>
                
            </section>
        )
    }
    return(<div className={`${livvic.className}`}>
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
        
        
      
        Ready to get started?
      
        contact us
      
      
      
        home
        about
      
        987  Hillcrest Lane
        Irvine, CA
        California 92714
        Call Us : 949-833-7432
      
        Copyright 2020. All Rights Reserved</div>)
}