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
      <h2 className={`font-bold text-2xl mb-1`}>{props.subheading}</h2>
      <p className='text-sm opacity-60'>{props.heading}</p>
    </div>
  )
  
}
function Stats(){
  return (
    <section className='flex max-xl:flex-col max-xl:justify-center max-xl:items-center gap-x-[4.5rem] gap-y-8'>
      <StatsSection heading='COMPANIES' subheading='10k+'></StatsSection>
      <StatsSection heading='TEMPLATES' subheading='314'></StatsSection>
      <StatsSection heading='QUERIES' subheading='12M+'></StatsSection>
    </section>
  )
}

export default function MyComponent(){
    return(
        <div className={`flex flex-col justify-center items-center h-[100vh] max-xl:h-full bg-[#090b1a] text-[white] ${inter.className}`}>
          <div className='flex max-xl:flex-col w-[77%] max-xl:max-w-[327px] xl:max-w-[1110px] xl:max-h-[446px] max-xl:my-20 bg-[#1b1938] rounded-xl'>
            <section className='max-xl:flex max-xl: flex-col max-xl:items-center max-xl:justify-center max-xl:order-2 max-xl:text-center w-[100%] p-[4.5rem] pb-[3.75rem]'>
              <h1 className='xl:text-4xl xl:leading-tight max-xl:text-[1.75rem] font-bold leading-tight mb-6 max-w-[400px] max-xl:w-[270px] xl:min-w-[400px]'>Get <span className="text-[#aa5cdb]">insights</span> that help your business grow.</h1>
              <p className={`w-[350px] max-xl:w-[270px] text-[15px] leading-relaxed opacity-75 mb-[4.5rem]`}>
                Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency. 
              </p>
              <Stats/>
            </section>
            <section className='max-xl:order-1 bg-[#aa5cdb] max-xl:max-w-[327px] xl:min-w-[540px] max-h-[446px] max-xl:rounded-t-xl xl:rounded-r-xl'>
              <Image className="max-xl:max-w-[327px] max-xl:max-h-[240px] mix-blend-multiply opacity-75 xl:rounded-r-xl" src={HeaderImg} alt='Header Image' width={540} height={446}/>
            </section>
          </div>
        </div>
    )
}
