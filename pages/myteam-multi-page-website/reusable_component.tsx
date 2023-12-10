import { twMerge } from "tailwind-merge"
import Image from "next/image"
import BGPatternHome6 from "./starter-code/assets/bg-pattern-home-6-about-5.svg"
import BGPatternMobileNav from "./starter-code/assets/bg-pattern-about-1-mobile-nav-1.svg"
import IconClose from "./starter-code/assets/icon-close-nav.svg"
import Logo from "./starter-code/assets/logo.svg"
import Link from "next/link"
import { Livvic } from "next/font/google"
import {useEffect, useState} from "react"


const livvic= Livvic({
    subsets: ['latin'],
    weight: ['600', '700']
})

const typography = {
    h1_L: "font-bold text-[64px] md:text-[clamp(64px,7vw,100px)] min-[375px]:text-[clamp(40px,10vw,64px)] leading-[56px] md:leading-[clamp(56px,7vw,100px)] min-[375px]:leading-[clamp(40px,10vw,56px)]",
    h1_S: "font-bold text-[64px] leading-[56px]",
    h2:"font-bold text-[clamp(32px,4vw,48px)] leading-[clamp(32px,4vw,48px)]",
    h2_S: "font-bold text-[32px] leading-[48px]",
    h3: "font-bold text-[18px] leading-[28px]",
    body_1:"font-semibold text-[clamp(15px,1.5vw,18px)] leading-[28px]",
    body_2:"font-semibold text-[15px] leading-[25px]"
}

interface ExtendableProp{
    className?: string;
}
interface ButtonProp extends ExtendableProp {
    title?:string;
}
const Button : React.FC<ButtonProp> = ({className, title}) => {
    return(
        <div className={twMerge(`flex items-center justify-center
         text-[white] rounded-full w-[153px] h-[48px] px-[30px]
          py-[10px] border-2 cursor-pointer`, className)}>
            <p>{title}</p>
        </div>
    )
}

const ContactButton1:React.FC<ExtendableProp> = ({className}) => {
    return(
        <Link href="/myteam-multi-page-website/contact" className={className}>
            <Button className={`hover:bg-[white]
                hover:text-myteam_multi_page_website-secondary-dark_green`}
                title="contact us"/>
        </Link>
    )
}

const ContactButton2 = () => {
    return(
        <Button className={` text-myteam_multi_page_website-secondary-sacramento_state_green
         hover:bg-myteam_multi_page_website-secondary-sacramento_state_green
          hover:border-myteam_multi_page_website-secondary-sacramento_state_green
        hover:text-[white]`}
          title="contact us"/>
    )
}

interface IconProps{
    pathData: string,
    width: string,
    height: string
}

const Icon : React.FC<IconProps> = ({pathData, width, height}) => {
    function hoverHandler(e: React.MouseEvent<SVGSVGElement, MouseEvent>){
        const icon = e.currentTarget.querySelector("path")
        icon?.setAttribute("fill", "#F67E7E")
    }
    function leaveHandler(e: React.MouseEvent<SVGSVGElement, MouseEvent>){
        const icon = e.currentTarget.querySelector("path")
        icon?.setAttribute("fill", "#FFF")
    }
    
    return(
        <svg
            className="cursor-pointer"
            onMouseEnter={hoverHandler}
            onMouseLeave={leaveHandler}
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
        >
            <path fill="#FFF" d={pathData} />
        </svg>
    )
}


const IconFacebook = () => {
    const FACEBOOK_PATHDATA = `M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 
    24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504
    0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z`
    const FACEBOOK_WIDTH = "24"
    const FACEBOOK_HEIGHT = "24"
    return(
        <Icon pathData={FACEBOOK_PATHDATA} width={FACEBOOK_WIDTH} height={FACEBOOK_HEIGHT} />
    )
}

const IconPinterest = () => {
    const PINTEREST_PATHDATA = `M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 
    11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914
    1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495
    0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0
    01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 
    4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002
    2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z`
    const PINTEREST_WIDTH = "24"
    const PINTEREST_HEIGHT = "24"
    return(
        <Icon pathData={PINTEREST_PATHDATA} width={PINTEREST_WIDTH} height={PINTEREST_HEIGHT} />
    )
}

const IconTwitter = () => {
    const TWITTER_PATHDATA = `M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127
    1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523
    6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6
    3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z`
    const TWITTER_WIDTH = "24"
    const TWITTER_HEIGHT = "20"
    return(
        <Icon pathData={TWITTER_PATHDATA} width={TWITTER_WIDTH} height={TWITTER_HEIGHT}></Icon>
    )
}

const IconLinkedIn = () => {
    const LINKEDIN_PATHDATA = `M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6
    17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17
    17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z`
    const LINKEDIN_WIDTH = "20"
    const LINKEDIN_HEIGHT = "20"
    return(
        <Icon pathData={LINKEDIN_PATHDATA} width={LINKEDIN_WIDTH} height={LINKEDIN_HEIGHT}></Icon>
    )
}

// TODO: fix the navbar to be on the main page, instead of the child of a section
// FIXME: fix the burger menu sidebar please
const Navbar: React.FC<ExtendableProp> = ({className}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        console.log(isMenuOpen)
    }, [isMenuOpen])
    return(
        <nav>
            <div className={`absolute -top-40 -left-20  w-[110vw] h-[110vh] bg-[black] opacity-40 ${isMenuOpen ? 'absolute' : 'hidden'} z-10`}></div>
            <div className={`flex flex-col absolute top-0 right-0 h-screen w-[260px] bg-myteam_multi_page_website-secondary-police_blue transition-transform duration-200 ease-in-out transform ${isMenuOpen? 'translate-x-0' : ' translate-x-96'} pt-14 pl-12 pr-6 z-30 sm:hidden overflow-hidden`}>
                {/* <div className="bg-[black] h-5 w-5 mb-10 self-end" onClick={toggleMenu}></div> */}
                <Image className="mb-10 self-end hover:cursor-pointer" color="currentColor" src={IconClose} alt="Icon Close" onClick={toggleMenu}></Image>
                <Link className="mr-10 hover:text-myteam_multi_page_website-primary-light_coral mb-6" 
                    href={"/myteam-multi-page-website"}>home
                </Link>
                <Link className="hover:text-myteam_multi_page_website-primary-light_coral mb-9"
                    href={"/myteam-multi_page_website/about"}>about
                </Link>
                <ContactButton1></ContactButton1>
                <Image className="absolute -right-[100px] bottom-0" src={BGPatternMobileNav} alt="Pattern Mobile Nav"></Image>
            </div>
            <div className={twMerge(`${typography.body_1} absolute flex w-[clamp(690px,80vw,1110px)] max-md:w-[clamp(327px,80vw,690px)] text-[white]  gap-x-3 justify-between items-center z-10`, className)}>
                <div className="flex items-center">
                    <Link href={"/myteam-multi-page-website"}>
                        <Image className="mr-[clamp(40px,5vw,80px)]" src={Logo} alt="my team"/>
                    </Link>
                    <div className="max-sm:hidden">
                        <Link className="mr-10 hover:text-myteam_multi_page_website-primary-light_coral" 
                            href={"/myteam-multi-page-website"}>home
                        </Link>
                        <Link className="hover:text-myteam_multi_page_website-primary-light_coral"
                            href={"/myteam-multi-page-website/about"}>about
                        </Link>
                    </div>
                </div>
                <div className="sm:hidden w-5 h-[17px] hover:cursor-pointer" onClick={toggleMenu}>
                    <div className="bg-[white] h-[3px] mb-1"></div>
                    <div className="bg-[white] h-[3px] mb-1"></div>
                    <div className="bg-[white] h-[3px]"></div>
                </div>
                
                {/* <Button title="contact us"></Button> */}
                <ContactButton1 className="max-sm:hidden"></ContactButton1>
            </div>
        </nav>
        
    )
}

const ContactSection = () => {
    return(
        <section className="relative flex justify-between py-[76px] px-[clamp(98px,19vw,260px)] max-md:px-[98px]
         bg-myteam_multi_page_website-primary-light_coral overflow-hidden">
            <h2 className={`${typography.h2}
            text-myteam_multi_page_website-secondary-sacramento_state_green`}>
                Ready to get started?
            </h2>
            <ContactButton2></ContactButton2>
            <Image className="absolute left-0 md:bottom-0 max-md:-bottom-5" src={BGPatternHome6} alt="Pattern Home 6"></Image>
        </section>
            
    )
}
const Footer = () => {
    return(
        <footer className="flex justify-around max-md:justify-between
        bg-myteam_multi_page_website-secondary-dark_green text-[white] px-[clamp(40px,7vw,165px)] py-12">
            <div className="flex flex-col gap-y-6">
                <Image src={Logo} className="w-[clamp(96px,12vw,160px)] h-[clamp(24px,3vw,40px)]" alt="myteam logo"></Image>
                <div className={`${typography.body_1} flex gap-x-10`}>
                    <p className="hover:text-myteam_multi_page_website-primary-light_coral cursor-pointer">home</p>
                    <p className="hover:text-myteam_multi_page_website-primary-light_coral cursor-pointer">about</p>
                </div>
                <div className="flex gap-x-4 justify-start items-center md:hidden">
                    <IconFacebook></IconFacebook>
                    <IconPinterest></IconPinterest>
                    <IconTwitter></IconTwitter>
                </div>
            </div>
            <div className={`flex flex-col justify-between items-end  ${typography.body_2} opacity-60`}>
                <p className="max-md:text-end">
                    987 Hillcrest Lane<br></br>
                    Irvine, CA<br></br>
                    California 92714<br></br>
                    Call Us : 949-833-7432    
                </p>
                <p className="md:hidden">Copyright 2020. All Rights Reserved</p>
            </div>
        
            <div className={`flex flex-col justify-between max-md:hidden`}>
                <div className="flex gap-x-4 justify-end items-center">
                    <IconFacebook></IconFacebook>
                    <IconPinterest></IconPinterest>
                    <IconTwitter></IconTwitter>
                </div>
                <p className={`${typography.body_2} opacity-60 `}>Copyright 2020. All Rights Reserved</p>
                
            </div>
        </footer>
    )
}



export default Button;
export {livvic, typography, ContactSection, Footer, Navbar, IconTwitter, IconLinkedIn};
export type {ButtonProp, ExtendableProp};