import { twMerge } from "tailwind-merge"
import HeroImageDesktop from "./challenge_files/starter-code/assets/image-hero-desktop.png"
import HeroImageTablet from "./challenge_files/starter-code/assets/image-hero-tablet.png"
import HeroImageMobile from "./challenge_files/starter-code/assets/image-hero-mobile.png"
import LogoDark from "./challenge_files/starter-code/assets/logo-dark.svg"
import LogoLight from "./challenge_files/starter-code/assets/logo-light.svg"
import IconAnimation from "./challenge_files/starter-code/assets/icon-animation.svg"
import IconDesign from "./challenge_files/starter-code/assets/icon-design.svg"
import IconPhotography from "./challenge_files/starter-code/assets/icon-photography.svg"
import IconCrypto from "./challenge_files/starter-code/assets/icon-crypto.svg"
import IconBusiness from "./challenge_files/starter-code/assets/icon-business.svg"



import Image from "next/image"

const typography = {
    logo_L: "font-extrabold text-4xl",
    logo_M: "font-extrabold text-[28px]",
    heading_XL: "md:font-extrabold md:text-[clamp(2.5rem,1.357rem+2.381vw,3.5rem)] md:leading-[clamp(3.188rem,1.83rem+2.827vw,4.375rem)]",
    heading_L: "max-md:font-bold max-md:text-[40px] max-md:leading-[51px]",
    heading_M: "font-extrabold text-[clamp(1.5rem,0.269rem+1.923vw,2rem)] leading-8",
    heading_S: "font-extrabold text-[clamp(20px,2vw,24px)] leading-7",
    body_M: "font-medium text-[clamp(1rem,0.625rem+0.556vw,1.125rem)] leading-7",
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
        <Button className=" bg-gradient-blue-skilled_elearning_landing_page hover:brightness-150"></Button>
    )
}

const Navbar = () => {
    return(
        <nav className="flex justify-between items-center">
            <Image src={LogoDark} alt="Logo Dark"></Image>
            <Button1></Button1>
        </nav>
    )
}

const HeroSection = () => {
    return (
        <section className="flex flex-col max-sm:items-center sm:mt-[clamp(6.25rem,1.107rem+10.714vw,10.75rem)] max-sm:mt-10 md:w-[clamp(398px,33vw,480px)] max-md:w-[clamp(250px,53vw,398px)] max-sm:w-full">
            <h1 className={`${typography.heading_XL} ${typography.heading_L} mb-[29px] max-md:mb-6`}>Maximize skill, minimize budget</h1>
            <p className={`${typography.body_M} md:w-[clamp(24.875rem,21.518rem+6.994vw,27.813rem)] mb-10 max-md:mb-6`}>Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</p>
            <Button2></Button2>
            <Image src={HeroImageDesktop} alt="Hero Image" className="absolute -top-[clamp(100px,11vw,145px)] -right-[clamp(18.75rem,16.25rem+5.208vw,20.938rem)] w-[clamp(40.063rem,15.063rem+52.083vw,61.938rem)] h-[clamp(40rem,18.786rem+44.196vw,58.563rem)] max-md:hidden"></Image>
            <Image src={HeroImageTablet} alt="Hero Image" className="absolute -top-[70px] -right-[300px] w-[700px] md:hidden max-[640px]:hidden"></Image>
            <Image src={HeroImageMobile} alt="Hero Image" className="sm:hidden mt-11"></Image>
        </section>
    )
}

const Footer = () => {
    return (
        <footer className="flex justify-between items-center w-full md:px-[clamp(2.5rem,-6.429rem+18.601vw,10.313rem)] max-md:px-[clamp(1rem,-0.431rem+6.107vw,2.5rem)] py-8 max-md:py-9 bg-skilled_elearning_landing_page-yankees_blue">
            <Image src={LogoLight} alt="Logo Light" className="h-fit"></Image>
            <Button3/>
        </footer>
    )
}

interface courseProps {
    title: string,
    description: string,
    icon_src: string
}

const CourseCard = ({course}:{course: courseProps}) => {
    return (
        <section className="relative w-[350px] pt-7">
            <Image src={course.icon_src} alt={`${course.title} icon`} className="absolute top-0 left-8"></Image>
            <section className="h-[clamp(260px,23vw,322px)] pt-[clamp(56px,5vw,64px)] pb-10 px-8 shadow-md rounded-2xl">
                <h2 className={`${typography.heading_S} mb-6`}>{course.title}</h2>
                <p className={`${typography.body_M} mb-6 h-[clamp(4.875rem, -1.5rem + 9.444vw, 7rem)]`}>{course.description}</p>
                <p className={`${typography.body_M} text-skilled_elearning_landing_page-sasquatch_socks`}>Get started</p>
            </section>
            
        </section>
    )
}
const courses = [{
    title: "Animation",
    description: "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
    icon_src: IconAnimation
},{
    title: "Design",
    description: "Create beautiful, usable interfaces to help shape the future of how the web looks.",
    icon_src: IconDesign
},{
    title: "Photography",
    description: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
    icon_src: IconPhotography
},{
    title: "Crypto",
    description: "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
    icon_src: IconCrypto
},{
    title: "Business",
    description: "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
    icon_src: IconBusiness
}]
const CoursesSection = () => {
    return (
        <section className="flex justify-center">
            <section className="flex flex-wrap justify-center gap-y-[clamp(2rem,-2.5rem+6.667vw,3.5rem)] sm:mt-[226px] gap-x-[clamp(0.625rem,-0.804rem+2.976vw,1.875rem)] w-[1110px] max-xl:max-w-[800px] max-md:w-full mx-auto">
                <section className="w-[350px] h-[clamp(260px,23vw,322px)] lg:pt-16 max-lg:pt-14 px-8 bg-gradient-orange-skilled_elearning_landing_page rounded-2xl self-end">
                    <h1 className={`${typography.heading_M} text-[white]`}>Check out our most popular courses!</h1>
                </section>
                {courses.map((course) => {
                    return (
                        <CourseCard key={course.title} course={course}></CourseCard>
                    )
                })}
            </section>
        </section>
        
    )
}

export default function LandingPage(){
    return(
        <>
        <main className="relative flex flex-col w-screen md:px-[clamp(40px,50vw-550px,165px)] max-md:px-[clamp(1rem,-0.431rem+6.107vw,2.5rem)] pt-6 pb-[140px]">
            <Navbar/>
            <HeroSection/>
            <CoursesSection/>
        </main>
        <Footer></Footer>
        </>
    )
}