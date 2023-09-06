import { livvic, typography, Navbar, Footer } from "./reusable_component"
import { StaticImageData } from "next/image"
import BGPatternAbout1 from "./starter-code/assets/bg-pattern-about-1-mobile-nav-1.svg"
import BGPatternAbout4 from "./starter-code/assets/bg-pattern-about-4.svg"
import IconCross from "./starter-code/assets/icon-cross.svg"

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

export default function AboutPage(){
    const HeroSection = ()  => {
        return(
            <section className="relative bg-myteam_multi_page_website-primary-midnight_green px-[165px] pt-[73px] pb-[120px] text-[white]">
                <Navbar className="mb-[120px]"></Navbar>
                <div className="flex gap-x-[30px]">
                    <h1 className={`${typography.h1_S} w-[350px]`}>About</h1>
                    <div>
                        <div className="w-[50px] h-1 bg-myteam_multi_page_website-primary-light_coral mb-10"></div>
                        <p className={`${typography.body_1} w-[730px]`}> We help companies build dynamic teams made up of top global talent. 
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

    const DirectorSection = () => {
        return(
            <section className="px-[165px] py-[140px] bg-myteam_multi_page_website-secondary-deep_jungle_green">
                <h2 className={`${typography.h2} text-[white]`}>Meet the directors</h2>
                <div>
                    <div className="relative flex flex-col items-center w-[350px] h-[253px] pt-8 pb-14 bg-myteam_multi_page_website-secondary-sacramento_state_green">
                        <Image className="w-24 mb-4 rounded-full border-2 border-myteam_multi_page_website-secondary-teal" src={AvatarNikita} alt=""></Image>
                        <p className={`${typography.body_1} text-myteam_multi_page_website-secondary-rapture_blue`}>Nikita Marks</p>
                        <p className={`${typography.body_2} text-[white]`}>Founder & CEO</p>
                        <div className="absolute flex items-center justify-center rounded-full bottom-[-28px] w-14 h-14 bg-myteam_multi_page_website-primary-light_coral">
                            <Image className="" src={IconCross} alt=""></Image>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    const ClientSection = () => {
        return(
            <section className="relative flex flex-col items-center px-[165px] py-[140px] text-[white] bg-myteam_multi_page_website-secondary-sacramento_state_green gap-y-16">
                <h2 className={`${typography.h2}`}>Some of our clients</h2>
                <div className="flex items-center gap-x-20">
                    <Image className="w-[165px] h-7" src={LogoTheVerge} alt=""/>
                    <Image className="w-[184px] h-[23px]" src={LogoJakartaPost} alt=""></Image>
                    <Image className="w-[180px] h-7" src={LogoGuardian} alt=""></Image>
                    <Image className="w-[165px] h-7" src={LogoTechradar} alt=""></Image>
                    <Image className="w-[98px] h-[45px]" src={LogoGadgetsNow} alt=""></Image>
                </div>
                <Image className="absolute top-0 left-0" src={BGPatternAbout4} alt=""></Image>
            </section>
        )
    }
    return(
        <div className={`${livvic.className}`}>
            <HeroSection></HeroSection>
            <DirectorSection></DirectorSection>
            <ClientSection></ClientSection>
            <Footer></Footer>
        </div>
    )
}