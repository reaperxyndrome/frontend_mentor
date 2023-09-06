import { twMerge } from "tailwind-merge"
import Image from "next/image"
import IconFacebook from "./starter-code/assets/icon-facebook.svg"
import IconTwitter from "./starter-code/assets/icon-twitter.svg"
import IconPinterest from "./starter-code/assets/icon-pinterest.svg"
import BGPatternHome6 from "./starter-code/assets/bg-pattern-home-6-about-5.svg"
import Logo from "./starter-code/assets/logo.svg"
import Link from "next/link"
import { Livvic } from "next/font/google"


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

const Footer = () => {
    return(
        <section>
            <div className="relative flex justify-between py-[76px] px-[260px] bg-myteam_multi_page_website-primary-light_coral">
                <h2 className={`${typography.h2}
                text-myteam_multi_page_website-secondary-sacramento_state_green`}>
                    Ready to get started?
                </h2>
                <Button className=" text-myteam_multi_page_website-secondary-sacramento_state_green" title="contact us"></Button>
                <Image className="absolute left-0 bottom-0" src={BGPatternHome6} alt="Pattern Home 6"></Image>
            </div>
            <footer className="flex justify-around  bg-myteam_multi_page_website-secondary-dark_green text-[white] px-[165px] py-12">
                <div className="flex flex-col gap-y-6">
                    <Image src={Logo} alt="myteam logo"></Image>
                    <div className={`${typography.body_1} flex gap-x-10`}>
                        <p>home</p>
                        <p>about</p>
                    </div>
                </div>
                <div className={`${typography.body_2} opacity-60`}>
                987 Hillcrest Lane<br></br>
                Irvine, CA<br></br>
                California 92714<br></br>
                Call Us : 949-833-7432
                </div>
            
                <div className={`flex flex-col justify-between ${typography.body_2} opacity-60`}>
                    <div className="flex gap-x-4 justify-end">
                        {/* <IconFacebook/> */}
                        <Image className=" fill-[white]" src={IconFacebook} alt="facebook"></Image>
                        <Image src={IconPinterest} alt="pinterest"></Image>
                        <Image src={IconTwitter} alt="twitter"></Image>
                    </div>
                    Copyright 2020. All Rights Reserved
                </div>
            </footer>
        </section>
    )
}

const Navbar: React.FC<ExtendableProp> = ({className}) => {
    return(
        <nav className={twMerge(`${typography.body_1} text-[white] flex gap-x-3 justify-between`, className)}>
            <div className="flex items-center ">
                <Image className="mr-20" src={Logo} alt="my team"></Image>
                <Link className="mr-10" href={""}>home</Link>
                <Link href={""}>about</Link>
            </div>
            <Button title="contact us"></Button>
        </nav>
    )
}

export default Button;
export {livvic, typography, Footer, Navbar};