import {Inter, Lexend_Deca} from 'next/font/google'
import HeaderImg from "./image-header-desktop.jpg"
import Image from "next/image"
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'],
})

const lexend_deca = Lexend_Deca({
  subsets: ['latin'],
  weight: ['400'],
})
const colors = {
    primary:{
      main_background: '#090b1a',
      card_background: '#1b1938',
      accent: '#aa5cdb',

    }, neutral:{
      main_heading_stats: '#ffffff',
      // '#ffffff' but with different alpha values
      main_paragraph: 'hsla(0, 0%, 100%, 0.75)',
      stat_headings: 'hsla(0, 0%, 100%, 0.6)'
    } 
};

const StatsSection = (props: {heading: string, subheading:string}) => {
  return(
    <div>
      <h2 className={`font-bold text-xl`}>{props.subheading}</h2>
      <p className='text-xs opacity-60'>{props.heading}</p>
    </div>
  )
  
}
function Stats(){
  return (
    <section className='flex gap-x-10'>
      <StatsSection heading='COMPANIES' subheading='10k+'></StatsSection>
      <StatsSection heading='TEMPLATES' subheading='314'></StatsSection>
      <StatsSection heading='QUERIES' subheading='12M+'></StatsSection>
    </section>
  )
}

export default function MyComponent(){
    return(
        <div className={`flex flex-col justify-center items-center h-[100vh] bg-[#090b1a] text-[white] ${inter.className}`}>
          <div className='flex w-[1000px] h-[400px] bg-[#1b1938] rounded-lg'>
            <section className='w-[500px] p-14'>
              <h1 className='text-3xl font-bold mb-7'>Get <span className="text-[#aa5cdb]">insights</span> that help your business grow.</h1>
              <p className={`w-[350px] text-[15px] opacity-75 mb-20`}>
                Discover the benefit of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency. 
              </p>
              <Stats/>
            </section>
            <Image className='rounded-r-md' src={HeaderImg} alt='Header Image' width={500} height={300}></Image>  
          </div>
        </div>
    )
}