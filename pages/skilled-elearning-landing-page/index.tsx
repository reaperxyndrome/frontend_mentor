import { twMerge } from "tailwind-merge"
import Logo from "./challenge_files/starter-code/assets/logo-dark.svg"
import Image from "next/image"

const typography = {
    logo_L: "font-extrabold text-4xl",
    logo_M: "font-extrabold text-[28px]",
    heading_XL: "font-extrabold text-[70px] leading-[70px]",
    heading_L: "font-bold text-[40px] leading-[51px]",
    heading_M: "font-extrabold text-[32px] leading-8",
    heading_S: "font-extrabold text-2xl leading-7",
    body_M: "font-medium text-[18px] leading-7",
    body_S: "font-bold text-base leading-7"
}

interface Extendable{
    className?:string
}

const Button:React.FC<Extendable> = ({className}) => {
    return(
        <button className={twMerge(`${typography.body_M} w-[167px] h-14 text-[white] rounded-full`, className)}>
            Get Started
        </button>
    )
}

const Button1 = () => {
    return(
        <Button className="bg-skilled_elearning_landing_page-yankees_blue hover:bg-skilled_elearning_landing_page-dark_blue_gray"></Button>
    )
}

const Button2 = () => {
    return(
        <Button className="bg-gradient-orange-skilled_elearning_landing_page hover:opacity-50"></Button>
    )
}

const Button3 = () => {
    return(
        <Button className=" bg-gradient-blue-skilled_elearning_landing_page hover:opacity-50"></Button>
    )
}

const Navbar = () => {
    return(
        <>
            <p className={`${typography.logo_L} w-[114px] h-[45px]`}>skilled</p>
        </>
    )
}

export default function LandingPage(){
    return(
        <>
            <Navbar></Navbar>
            <Button1></Button1>
            <Button2></Button2>
            <Button3></Button3>
        </>
    )
}