import Image from "next/image"
import Link from "next/link"
import Logo from "./starter-code/assets/logo.svg"
import { Livvic } from "next/font/google"
import { twMerge } from "tailwind-merge"
import BGPatternHome1 from "./starter-code/assets/bg-pattern-home-1.svg"
import BGPatternHome2 from "./starter-code/assets/bg-pattern-home-2.svg"

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
        return(
            <section>
                <h1>
                    Build & manage distributed teams like no one else.
                </h1>
                <div>
                    <h2>
                        Experienced Individuals
                    </h2>
                    <p>
                        Our network is made up of highly experienced professionals who are 
                        passionate about what they do.
                    </p>
                    <h2>
                        Easy to Implement
                    </h2>
                    <p>Our processes have been refined over years of implementation meaning 
                    our teams always deliver.
                    </p>
                    
                    <h1>Enhanced Productivity</h1>
                    <p>Our customized platform with in-built analytics helps you manage your 
                    distributed teams.
                    </p>
                </div>
                    
            </section>
        )
    }

    const Section3 = () => {
        const SuccessStory = () => {
            return(
                <>
                </>
            )
        }
        return(
            <>
                
                <h1>Delivering real results for top companies. <span>Some of our success stories.</span></h1>
                
                <p>
                    “The team perfectly fit the specialized skill set required. They focused 
                    on the most essential features helping us launch the platform eight months 
                    faster than planned.”
                </p>
                <h3>Kady Baker</h3>
                <h2>
                    Product Manager at Bookmark
                </h2>

                
                
                “We needed to automate our entire onboarding process. The team came in and 
                built out the whole journey. Since going live, user retention has gone 
                through the roof!”
                Aiysha Reese
                Founder of Manage
                
                “Amazing. Our team helped us build an app that delivered a new experience for 
                hiring a physio. The launch was an instant success with 100k downloads in the 
                first month.”
                Arthur Clarke
                Co-founder of MyPhysio
                    
                    
            </>
        )
    }
    return(<>
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
      
        Copyright 2020. All Rights Reserved</>)
}