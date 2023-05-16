import Image from "next/image"
import QRCodeImg from "./image-qr-code.png"

const QRCode = () => {
    return(
        <div className="flex flex-col justify-between items-center text-center bg-[white] rounded-3xl p-5 w-[20%] h-[65%] drop-shadow-xl">
            <Image src={QRCodeImg} alt="QR Code Image" width={500} height={500} className="rounded-xl"></Image>
            <h1 className="text-lg font-bold text-qr_code_title">Improve your front-end skills by building projects</h1>
            <p className="text-qr_code_par text-[15px]">
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
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="#">Leon Jayakusuma</a>.
            </div>            
        </div>
    )
}