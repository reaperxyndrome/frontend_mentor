import { Plus_Jakarta_Sans } from "next/font/google"

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

const typography = {
    plus_jakarta_sans: Plus_Jakarta_Sans({
        subsets: ['latin'],
        weight: ['500', '700']
    }),
    heading: {
        font_weight: "bold",
        L: {
            font_size: "56px",
            line_height: "70px", 
        },
        M: {
            font_size: "40px",
            line_height: "51px"
        },
        S: {
            font_size: "32px",
            line_height: "40px"
        }
    },
    body: {
        font_weight: "medium",
        font_size: "18px",
        line_height: "28px" 
    }
}



export default function SinglePagePortfolio(){
    return(<></>)
}
