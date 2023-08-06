import { Plus_Jakarta_Sans } from "next/font/google"
import { ClassNameValue, twMerge } from "tailwind-merge"
import AppsPattern from "./challenge_files/starter-code/assets/pattern-apps.svg"
import GraphicDesignPattern from "./challenge_files/starter-code/assets/pattern-graphic-design.svg"
import IllustrationsPattern from "./challenge_files/starter-code/assets/pattern-illustrations.svg"
import MotionGraphicsPattern from "./challenge_files/starter-code/assets/pattern-motion-graphics.svg"
import PhotographyPattern from "./challenge_files/starter-code/assets/pattern-photography.svg"
import UIUXPattern from "./challenge_files/starter-code/assets/pattern-ui-ux.svg"
import ImageAmy from "./challenge_files/starter-code/assets/image-amy.webp"
import ImageSlide1 from "./challenge_files/starter-code/assets/image-slide-1.jpg"
import ImageSlide2 from "./challenge_files/starter-code/assets/image-slide-2.jpg"
import ImageSlide3 from "./challenge_files/starter-code/assets/image-slide-3.jpg"
import ImageSlide4 from "./challenge_files/starter-code/assets/image-slide-4.jpg"
import ImageSlide5 from "./challenge_files/starter-code/assets/image-slide-5.jpg"
import ArrowLeft from "./challenge_files/starter-code/assets/icon-arrow-left.svg"
import ArrowRight from "./challenge_files/starter-code/assets/icon-arrow-right.svg"


import Image, { ImageLoader, StaticImageData } from "next/image";
import React, { MouseEvent, TouchEvent, MouseEventHandler, MutableRefObject, useEffect, useRef, useState } from "react";
import { FunctionBody } from "typescript"
import { useWindowSize } from "rooks"

const colors = {
    galactic_blue: "#755CDE",
    summer_yellow: "#F6A560",
    pink: "#F39E9E",
    light_red: "#EB7565",
    cyan: "#61C4B7",
    dark_purple: "#552049",
    black: "#030303",
    medium_brown: "#7A746E",
    light_cream: "#FFF7F0",
}

const plus_jakarta_sans= Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['500', '700']
})

const typography = {
    heading_L: "font-bold text-[56px] leading-[70px]",
    heading_L_md: "font-bold max-md:text-[clamp(36px,6vw,44px)] max-md:leading-[clamp(45px,2vw,55px)]",
    heading_M: "font-bold text-[clamp(32px,4vw,40px)] leading-[40px,7vw,51px]",
    heading_S: "font-bold text-[32px] leading-[40px]",
    heading_S_md_1: "max-md:font-bold max-md:text-[clamp(26px,4vw,32px)] max-md:leading-[clamp(33px,5vw,40px)]",
    heading_S_md_2: "max-md:font-bold max-md:text-[clamp(24px,4vw,32px)] max-md:leading-[clamp(30px,5vw,40px)]",
    body: "font-medium text-[18px] leading-[28px] text-design_portfolio-medium_brown",
    body_md:"font-medium max-md:text-[clamp(16px,2.5vw,18px)] max-md:leading-[clamp(26px,3.75vw,28px)]"
}
interface ExtendableComponentProps {
    className?: string;
}

interface SkillProps extends ExtendableComponentProps {
    title: string;
    children: React.ReactNode;
}

export default function SinglePagePortfolio(){
    const Button: React.FC<ExtendableComponentProps> = ({className=""}) => {
        return (
          <button className={`text-design_portfolio-light_cream text-base max-md:text-[clamp(14px,2.5vw,16px)] leading-7 shrink-0 w-[228px] max-md:w-[clamp(176px,30vw,228px)] h-[56px] max-md:h-[clamp(44px,7vw,56px)] rounded-full ${className}`}>
            Free Consultation
          </button>
        );
    };
      
    const Button1 = () => {
        return(
            <Button className="bg-design_portfolio-black hover:bg-design_portfolio-galactic_blue"></Button>
        )
    }
    
    const Button2 = () => {
        return(
            <Button className=" bg-design_portfolio-light_red hover:bg-design_portfolio-summer_yellow"></Button>
        )
    }
      
    function Logo(){
        return(
            <div className="flex items-center justify-center w-16 max-md:w-[clamp(48px,8vw,64px)] h-16  max-md:h-[clamp(48px,8vw,64px)] bg-design_portfolio-black">
                <div className="w-8 h-8 max-md:w-[clamp(24px,3.5vw,32px)] max-md:h-[clamp(24px,3.5vw,32px)] border-4 border-design_portfolio-light_cream rounded-full">
                </div>
            </div>
        )
    }

    const Navbar:React.FC<ExtendableComponentProps> = ({className=""}) => {
        return(
            <section className={twMerge("flex items-center justify-between w-full mb-[66px]", className)}>
                <Logo></Logo>
                <Button1/>
            </section>
        )
    }
    
    function Section1(){
        function Title(){
            return(
                <section className="w-full flex flex-col items-center text-center mb-[80px] max-md:mb-16">
                    <h1 className={`${typography.heading_L} ${typography.heading_L_md} mb-[23px] max-md:mb-[27px]`}>Design solutions made easy</h1>
                    <p className={`${typography.body} ${typography.body_md} w-[730px] max-md:w-[clamp(285px,70vw,573px)] max-[375px]:w-[clamp(0px,90vw,285px)]`}>With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</p>
                </section>
            )
        }

        function SkillSection(){
            const Skill : React.FC<SkillProps> = ({className, title, children: Image}) => {
                return(
                    <div className={twMerge("flex flex-col justify-between p-6 rounded-lg max-[375px]:h-[182px]", className)}>
                        <div className="self-end">{Image}</div>
                        <h2 className="text-design_portfolio-light_cream text-2xl leading-[30px]">{title}</h2>
                    </div>
                )
                
            }
            return(
                <section className="grid grid-rows-[182px_158px] max-md:grid-rows-[182px_158px_182px] grid-cols-[repeat(auto-fit,minmax(155px,1fr))] lg:text-[10px] max-md:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] max-[375px]:grid-cols-2 gap-6 w-full h-fit">
                    <Skill className="lg:min-w-[333px] max-[375px]:h-[364px] row-span-2 col-span-2 bg-design_portfolio-galactic_blue" title="Graphic Design">
                        <Image src={GraphicDesignPattern} alt="Graphic Design Pattern" width={128} height={192}/>
                    </Skill>
                    <Skill className=" bg-design_portfolio-summer_yellow" title="UI/UX">
                        <Image src={UIUXPattern} alt="UI / UX Pattern" width={64} height={64}/>
                    </Skill>
                    <Skill className=" bg-design_portfolio-pink" title="Apps">
                        <Image src={AppsPattern} alt="Apps Pattern" width={64} height={64}/>
                    </Skill>
                    <Skill className="lg:order-5 col-span-2 max-[375px]:h-[158px] bg-design_portfolio-light_red" title="Illustrations">
                        <Image src={IllustrationsPattern} alt="Illustrations Pattern" width={128} height={64}/>
                    </Skill>
                    <Skill className=" col-span-2 bg-design_portfolio-cyan" title="Photography">
                        <Image src={PhotographyPattern} alt="Photography Pattern" width={160} height={64}/>
                    </Skill>
                    <Skill className=" lg:order-6 col-span-2 bg-design_portfolio-dark_purple" title="Motion Graphics">
                        <Image src={MotionGraphicsPattern} alt="Motion Graphics Pattern" width={128} height={64}/>
                    </Skill>
                </section>
            )
        }
        return(
            <section className="w-full flex flex-col items-center mb-[136px] max-md:mb-[120px]">
                <Title></Title>
                <SkillSection></SkillSection>     
            </section>
        )
    }
    

    function Section2(){
        return(
            <section className="w-full flex items-center max-sm:flex-col justify-center max-sm:text-center mb-[88px] gap-x-[clamp(70px,7vw,125px)]">
                <div className="min-[375px]:min-w-[300px] max-md:w-[clamp(300px,60vw,365px)] ml-[-80px] max-sm:ml-0 max-sm:mb-10">
                    <Image src={ImageAmy} alt="Amy Person Image" width={445} height={445}></Image>
                </div>
                <section className="flex flex-col max-sm:items-center justify-center w-[clamp(340px,40vw,540px)] max-[375px]:w-[clamp(0px,100vw,343px)]">
                    <h1 className={`${typography.heading_M} ${typography.heading_S_md_1} mb-[34px] max-md:mb-6`}>I’m Amy, and I’d love to work on your next project</h1>
                    <p className={`${typography.body} mb-8 max-md:mb-6`}>I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</p>
                    <Button2></Button2>
                </section>
            </section>
        )
    }

    function ImageSliderSection(){
        interface ArrowProps{
            src: StaticImageData;
            onClickHandler: React.MouseEventHandler;
        }

        interface ArrowsProps{
            arrow_left: StaticImageData;
            arrow_right: StaticImageData;
            prevSlide: MouseEventHandler;
            nextSlide: MouseEventHandler; 
        }

        const Arrow : React.FC<ArrowProps> = ({src, onClickHandler}) => {
            return(
                <div className="flex justify-center items-center w-16 h-16 bg-[black] rounded-full cursor-pointer hover:bg-design_portfolio-galactic_blue" onClick={onClickHandler}>
                    <Image src={src} alt="arrow left" width={15} height={16}></Image>
                </div>
            )
        }
        
        const Arrows : React.FC<ArrowsProps> = ({arrow_left, arrow_right, prevSlide, nextSlide}) => {
            return (
                <div className="flex mx-auto w-[144px] gap-x-4">
                    <Arrow src={arrow_left} onClickHandler={prevSlide}></Arrow>
                    <Arrow src={arrow_right} onClickHandler={nextSlide}></Arrow>
                </div>
            )
        }

        const slides: Array<StaticImageData> = [
            ImageSlide1, ImageSlide2, ImageSlide3, ImageSlide4, ImageSlide5
        ]

        const carousel = useRef<HTMLDivElement | null>(null);
        // const firstImg = useRef<HTMLImageElement | null>(null);

        let isDragStart = false;
        let prevPageX : number, prevScrollLeft : number, positionDiff : number;
        const IMG_COUNT = 5;
        const GAP_X = 30;
        let {innerWidth} = useWindowSize();
        const [firstImageWidth, setFirstImageWidth] = useState<number|null>();

        useEffect(() => {
            setFirstImageWidth((carousel.current?.firstChild as HTMLDivElement)?.offsetWidth);
            const CAROUSEL_WIDTH = firstImageWidth! * IMG_COUNT + GAP_X * (IMG_COUNT - 1);
            carousel.current!.scrollLeft = (CAROUSEL_WIDTH - innerWidth!) / 2;
            console.log(carousel.current!.scrollLeft);
        }, [innerWidth, firstImageWidth]);
        
        function autoSlide(){
            positionDiff = Math.abs(positionDiff);
            // console.log(positionDiff);
            if (carousel.current!.scrollLeft > prevScrollLeft) {
                return console.log("scrolling right");
            }
            console.log("scrolling left");
        }

        function dragHandler(e : MouseEvent | TouchEvent){
            if(!isDragStart || !carousel.current) return;
            let currentPageX = 'pageX' in e ? e.pageX : e.touches[0].pageX;
            positionDiff = currentPageX - prevPageX;
            carousel.current.scrollLeft = prevScrollLeft - positionDiff;
            // console.log(carousel.current.scrollLeft);
        }

        function dragStart(e: MouseEvent | TouchEvent){
            isDragStart = true;
            prevPageX = "pageX" in e ? e.pageX : e.touches[0].pageX;
            prevScrollLeft = carousel.current!.scrollLeft!;
            carousel.current!.classList.remove("scroll-smooth");
        }



        function dragStop(e: MouseEvent | TouchEvent){
            isDragStart = false;
            carousel.current!.classList.add("scroll-smooth");
            autoSlide();
        }

        
        function prevSlide(){
            carousel.current!.scrollLeft -= firstImageWidth! + GAP_X;
        }

        function nextSlide(){
            carousel.current!.scrollLeft += firstImageWidth! + GAP_X;
            // const first_img = carousel.current?.firstChild as HTMLImageElement;
            // console.log(first_img.width);
        }

        return(
            // <section className="flex flex-col items-center mb-[88px]">
            <section className="flex flex-col items-center gap-y-14 mb-[88px] max-md:mb-[clamp(100px,18vw,120px)]">
                <h1 className={`${typography.heading_S} ${typography.heading_S_md_2}`}>My Work</h1>
                <div ref={carousel} onMouseDown={dragStart} onTouchStart={dragStart} onMouseMove={dragHandler} onTouchMove={dragHandler} onMouseUp={dragStop} onMouseLeave={dragStop} onTouchEnd={dragStop}  className="flex gap-x-[30px] overflow-hidden w-[100vw] scroll-smooth cursor-pointer">
                    {slides.map((slide, index) => {
                        return(
                            <div className="w-[540px] h-[360px] shrink-0 max-md:w-[clamp(270px,50vw,540px)] max-md:h-[clamp(180px,30vw,360px)]" key={index}>
                                <Image className="rounded-[10px]" key={index} src={slide} alt={`slide ${index}`} width={540} height={360} draggable={false}/>
                            </div>
                        )
                    })}
                </div>
                <Arrows arrow_left={ArrowLeft} arrow_right={ArrowRight} prevSlide={prevSlide} nextSlide={nextSlide}/> 
            </section>
        )
    }

    const Footer = () => {
        return(
            <section className="flex max-md:flex-col gap-y-6 gap-x-16 max-md:text-center justify-between items-center w-full py-20 max-md:pt-[clamp(48px,8vw,56px)] max-md:pb-[clamp(48px,9vw,64px)] pl-[65px] pr-[95px] max-md:px-[clamp(24px,6vw,75px)] mb-14 bg-design_portfolio-black text-design_portfolio-light_cream">
                <div className="w-[540px] max-md:w-[clamp(295px,75vw,540px)] max-[375px]:w-[clamp(0px,70vw,295px)]">
                    <h1 className={`${typography.heading_M} ${typography.heading_S_md_1} mb-[25px]`}>Book a call with me</h1>
                    <p className={`${typography.body} ${typography.body_md}`}>I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</p>
                </div>
                <Button2></Button2>
            </section>
        )
    }

    return(
        <div className={`${plus_jakarta_sans.className} px-[clamp(16px,10vw,164px)] max-md:px-[clamp(16px,5vw,40px)] pt-[34px] max-md:pt-[clamp(16px,4.5vw,34px)] max-[375px]:px-4 max-[375px]:pt-4 pb-[clamp(56px,7vw,64px)] max-md:pb-[clamp(32px,8vw,56px)] flex flex-col items-center justify-center bg-design_portfolio-light_cream`}>
            <Navbar></Navbar>
            <Section1></Section1>
            <Section2></Section2>
            <ImageSliderSection></ImageSliderSection>
            <Footer></Footer>
            <Navbar className="mb-0"></Navbar>
            {/* <Button2></Button2> */}
        </div>
    )
}
