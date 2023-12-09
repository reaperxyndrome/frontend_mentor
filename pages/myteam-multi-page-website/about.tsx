import { livvic, typography, Navbar, Footer, IconTwitter, IconLinkedIn, ContactSection } from "./reusable_component"
import { StaticImageData } from "next/image"
import BGPatternAbout1 from "./starter-code/assets/bg-pattern-about-1-mobile-nav-1.svg"
import BGPatternAbout2 from "./starter-code/assets/bg-pattern-about-2-contact-1.svg"
import BGPatternAbout3 from "./starter-code/assets/bg-pattern-home-4-about-3.svg"
import BGPatternAbout4 from "./starter-code/assets/bg-pattern-about-4.svg"
import IconCross from "./starter-code/assets/icon-cross.svg"
import IconClose from "./starter-code/assets/icon-close.svg"

import AvatarNikita from "./starter-code/assets/avatar-nikita.jpg"
import AvatarCristian from "./starter-code/assets/avatar-christian.jpg"
import AvatarCruz from "./starter-code/assets/avatar-cruz.jpg"
import AvatarDrake from "./starter-code/assets/avatar-drake.jpg"
import AvatarGriffin from "./starter-code/assets/avatar-griffin.jpg"
import AvatarAden from "./starter-code/assets/avatar-aden.jpg"


import Image from "next/image"
import LogoTheVerge from "./starter-code/assets/logo-the-verge.png"
import LogoGuardian from "./starter-code/assets/logo-the-guardian.png"
import LogoTechradar from "./starter-code/assets/logo-tech-radar.png"
import LogoGadgetsNow from "./starter-code/assets/logo-gadgets-now.png"
import LogoJakartaPost from "./starter-code/assets//logo-jakarta-post.png"
import { EventHandler, MouseEventHandler, MutableRefObject, RefObject, useRef, useState } from "react"
import type { ExtendableProp } from "./reusable_component"

const HeroSection = ()  => {
    return(
        <section className="relative bg-myteam_multi_page_website-primary-midnight_green
         px-[clamp(40px,11vw,165px)] max-md:px-10 pt-[73px] max-md:pt-[64px] pb-[120px] max-md:pb-[112px] text-[white]">
            <Navbar className="mb-[120px]"></Navbar>
            <div className="flex max-lg:flex-col max-lg:items-center max-lg:text-center gap-x-[30px]">
                <h1 className={`${typography.h1_S} w-[350px] max-lg:mb-6`}>About</h1>
                <div>
                    <div className="w-[50px] h-1 bg-myteam_multi_page_website-primary-light_coral mb-10 max-lg:hidden"></div>
                    <p className={`${typography.body_1} w-[clamp(457px,50vw,730px)]`}> We help companies build dynamic teams made up of top global talent. 
                        Using our network of passionate professionals we drive innovation and deliver incredible outcomes.
                        Talented, diverse teams shape the best products and experiences.
                        We’ll bring those teams to you.
                    </p>
                </div>
            </div>
            <Image className="absolute bottom-0 right-[-100px]" src={BGPatternAbout1} alt=""></Image>
        </section>
    )
}

const ClientSection = () => {
    return(
        <section className="relative flex flex-col items-center px-[clamp(35px,10vw,165px)] max-md:px-[40px] py-[clamp(100px,12vw,140px)] text-[white] bg-myteam_multi_page_website-secondary-sacramento_state_green gap-y-16 overflow-hidden">
            <h2 className={`${typography.h2}`}>Some of our clients</h2>
            <div className="flex items-center gap-x-[clamp(40px,5vw,80px)]">
                <Image className="w-[clamp(103px,15vw,165px)] h-[clamp(17px,2vw,28px)]" src={LogoTheVerge} alt=""/>
                <Image className="w-[clamp(114px,15vw,184px)] h-[clamp(14px,2vw,23px)]" src={LogoJakartaPost} alt=""></Image>
                <Image className="w-[clamp(112px,15vw,180px)] h-[clamp(17px,2vw,28px)]" src={LogoGuardian} alt=""></Image>
                <Image className="w-[clamp(103px,15vw,165px)] h-[clamp(17px,2vw,28px)]" src={LogoTechradar} alt=""></Image>
                <Image className="w-[clamp(61px,8vw,98px)] h-[clamp(28px,3vw,45px)]" src={LogoGadgetsNow} alt=""></Image>
            </div>
            <Image className="absolute top-[clamp(-100px,calc(-200px+15vw),0px)] max-md:-top-[100px] left-0" src={BGPatternAbout4} alt=""></Image>
        </section>
    )
}

interface DirectorProps{
    name: string,
    position: string,
    quote: string,
    avatar: StaticImageData,

}

const Director:React.FC<DirectorProps> = ({name, position, quote, avatar}) => {
    const [isOpen, setOpen] = useState(true);
    const cardRef : RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    const clickHandler : MouseEventHandler<HTMLDivElement> = (e) => {
        const card = cardRef.current
        const closedBGCard = "bg-myteam_multi_page_website-secondary-sacramento_state_green"
        const openBGCard = "bg-myteam_multi_page_website-secondary-dark_green"
        const button = e.currentTarget
        const closedBGButton = "bg-myteam_multi_page_website-primary-light_coral"
        const openBGButton = "bg-myteam_multi_page_website-secondary-rapture_blue"
        const cross = button.children.namedItem("cross")
        const close = button.children.namedItem("close")
        const icons = card?.children.namedItem("icons")

        setOpen(isOpen => !isOpen)
        
        if(isOpen){
            card?.classList.remove(closedBGCard)
            card?.classList.add(openBGCard, "pt-[35px]", "pb-[63px]")
            card?.children.namedItem("avatar")?.classList.add("hidden")
            card?.children.namedItem("position")?.classList.add("hidden")
            card?.children.namedItem("quote")?.classList.remove("hidden")
            button.classList.remove(closedBGButton)
            button.classList.add(openBGButton, `hover:${closedBGButton}`)
            cross?.classList.add("hidden")
            close?.classList.remove("hidden")
            icons?.classList.remove("hidden")
            return;
        }
        card?.classList.add(closedBGCard)
        card?.classList.remove(openBGCard, "pt-[35px]", "pb-[63px]")
        card?.children.namedItem("avatar")?.classList.remove("hidden")
        card?.children.namedItem("position")?.classList.remove("hidden")
        card?.children.namedItem("quote")?.classList.add("hidden")
        button.classList.add(closedBGButton)
        button.classList.remove(openBGButton, `hover:${closedBGButton}`)
        cross?.classList.remove("hidden")
        close?.classList.add("hidden")
        icons?.classList.add("hidden")
    }

    return(
        <div ref={cardRef} className="relative flex flex-col items-center w-[clamp(280px,30vw,350px)] h-[253px] pt-8 pb-14 bg-myteam_multi_page_website-secondary-sacramento_state_green text-center">
            <Image id="avatar" className="w-24 mb-4 rounded-full border-2 border-myteam_multi_page_website-secondary-teal" src={avatar} alt=""></Image>
            <p className={`${typography.body_1} text-myteam_multi_page_website-secondary-rapture_blue`}>{name}</p>
            <p id="position" className={`${typography.body_2} text-[white]`}>{position}</p>
            <p id="quote" className={`hidden ${typography.body_2} text-[white] w-[254px] mt-2 mb-6`}>{quote}</p>
            <div id="icons" className="flex gap-x-[18px] hidden">
                {/* <Image src={IconTwitter} alt="LinkedIn icon"></Image> */}
                {/* <Image src={IconLinkedin} alt="Facebook icon"></Image> */}
                <IconTwitter></IconTwitter>
                <IconLinkedIn></IconLinkedIn>
            </div>
            <div onClick={clickHandler} className="absolute flex items-center justify-center rounded-full bottom-[-28px] w-14 h-14 bg-myteam_multi_page_website-primary-light_coral cursor-pointer">
                <Image id="cross" src={IconCross} alt=""></Image>
                <Image id="close" className="hidden" src={IconClose} alt=""></Image>
            </div>
        </div>
    )
}

const DirectorSection = () => {
    const directorList = [
        {
            name: "Nikita Marks",
            position: "Founder & CEO",
            quote: "“It always amazes me how much talent there is in every corner of the globe.”",
            avatar: AvatarNikita
        },
        {
            name: "Cristian Duncan",
            position: "Co-founder & COO",
            quote: "“Distributed teams required unique processes. You need to approach work in a new way.”",
            avatar: AvatarCristian
        },
        {
            name: "Cruz Hamer",
            position: "Co-founder & CTO",
            quote: "“Technology is at the forefront of enabling distributed teams. That's where we come in.”",
            avatar: AvatarCruz
        },
        {
            name: "Drake Heaton",
            position: "Business Development Lead",
            quote: "“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”",
            avatar: AvatarDrake
        },
        {
            name: "Griffin Wise",
            position: "Lead Marketing",
            quote: "“Unique perspectives shape unique products, which is what you need to survive these days.”",
            avatar: AvatarGriffin
        },
        {
            name: "Aden Allan",
            position: "Head of Talent",
            quote: "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
            avatar: AvatarAden
        }
    ]
    
    return(
        <section className="relative flex flex-col justify-center items-center px-[clamp(98px,11vw,165px)] pt-[clamp(100px,11vw,140px)] pb-[clamp(128px,11vw,140px)] bg-myteam_multi_page_website-secondary-deep_jungle_green gap-y-16">
            <h2 className={`${typography.h2} text-[white]`}>Meet the directors</h2>
            <div className="flex justify-center flex-wrap gap-x-[clamp(11px,1.5vw,30px)] gap-y-[76px]">
            {directorList.map((director, index) => 
                <Director key={`director ${index}`} {...director}></Director>
            )}
            </div>
            <Image className="absolute top-0 left-[-100px]" src={BGPatternAbout2} alt=""></Image>
            <Image className="absolute bottom-0 right-0" src={BGPatternAbout3} alt=""></Image>
            
        </section>
    )
}
export default function AboutPage(){
    return(
        <div className={`${livvic.className}`}>
            <HeroSection/>
            <DirectorSection/>
            <ClientSection/>
            <ContactSection/>
            <Footer/>
        </div>
    )
}