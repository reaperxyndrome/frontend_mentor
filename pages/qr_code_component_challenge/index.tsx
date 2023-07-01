import Image from "next/image"
import QRCodeImg from "./image-qr-code.png"
import {Outfit} from 'next/font/google'

const outfit = Outfit({
    subsets: ['latin'],
    weight: ['400', '700'],
})

const QRCode = () => {
    const shadow = {
        boxShadow: "0px 5px 20px 10px rgba(0,0,0,0.05)"
    }
    return(
        <div style={shadow} className={`flex flex-col items-center text-center
            bg-[white] rounded-3xl p-4 w-[20%] min-w-[325px] h-[65%] min-h-[500px] text-lg ${outfit.className}`}>
            <Image src={QRCodeImg} alt="QR Code Image" width={500} height={500} className="rounded-xl"/>
                <h1 className=" text-[22px] leading-7 font-bold text-qr_code_title mx-2 mt-6">
                    Improve your front-end skills by building projects
                </h1>
                <p className="text-qr_code_par text-[15px] leading-5 mt-4 mx-4">
                    Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                </p>
        </div>
    )
}

export default function QRCodePage(){
    return (
        <div className="relative flex flex-col justify-center items-center h-[100vh] bg-qr_code_body">
            <QRCode/>
            <div className="absolute bottom-8">
                Challenge by
                <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"> <u>Frontend Mentor</u></a>. 
                Coded by
                <a href="https://www.linkedin.com/in/leon-jayakusuma-a464b3155/"> <u><em><strong>Leon Jayakusuma</strong></em></u></a>.
            </div>            
        </div>
    )
}