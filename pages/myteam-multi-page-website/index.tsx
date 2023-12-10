import Image from "next/image";
import { Livvic } from "next/font/google";
import BGPatternHome1 from "./starter-code/assets/bg-pattern-home-1.svg";
import BGPatternHome2 from "./starter-code/assets/bg-pattern-home-2.svg";
import BGPatternHome3 from "./starter-code/assets/bg-pattern-home-3.svg";
import BGPatternHome4 from "./starter-code/assets/bg-pattern-home-4-about-3.svg";
import BGPatternHome5 from "./starter-code/assets/bg-pattern-home-5.svg";
import IconPerson from "./starter-code/assets/icon-person.svg";
import IconCog from "./starter-code/assets/icon-cog.svg";
import IconChart from "./starter-code/assets/icon-chart.svg";
import IconQuotes from "./starter-code/assets/icon-quotes.svg";
import AvatarKady from "./starter-code/assets/avatar-kady.jpg";
import AvatarAiysha from "./starter-code/assets/avatar-aiysha.jpg";
import AvatarArthur from "./starter-code/assets/avatar-arthur.jpg";
import { StaticImageData } from "next/image";
import {
  livvic,
  typography,
  Navbar,
  Footer,
  ContactSection,
} from "./reusable_component";

// const livvic= Livvic({
//     subsets: ['latin'],
//     weight: ['600', '700']
// })
// TODO: move navbar to home page
const Section1 = () => {
  return (
    <section
      className="relative
        bg-myteam_multi_page_website-primary-midnight_green
        text-[white] px-[clamp(40px,11vw,165px)] max-md:px-10 pt-[250px] max-md:pt-16 pb-[250px] min-[375px]:pb-[clamp(200px,50vw,250px)]"
    >
      <div className="flex max-md:flex-col max-md:text-center gap-x-[32px]">
        <h1 className={`${typography.h1_L} md:w-[635px] max-md:mb-6`}>
          Find the <br></br> best
          <span className=" text-myteam_multi_page_website-primary-light_coral">
            {" "}
            talent
          </span>
        </h1>
        <div className="flex flex-col justify-between items-center">
          <div className="w-[50px] h-1 bg-myteam_multi_page_website-secondary-rapture_blue max-md:hidden"></div>
          <p
            className={`${typography.body_1} w-[445px] max-md:w-[457px] min-[375px]:w-[clamp(327px,80vw,457px)]`}
          >
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </div>
      <Image
        src={BGPatternHome1}
        alt="hello"
        className="absolute top-1/2 -translate-y-1/2 left-[clamp(-300px,calc(-300px+14vw),-100px)] max-md:left-[-300px]"
      />
      <Image
        src={BGPatternHome2}
        alt="hello"
        className="absolute bottom-0 right-[165px] max-md:right-1/2 max-md:translate-x-1/2"
      />
    </section>
  );
};
const Section2 = () => {
  interface FeatureProps {
    icon: StaticImageData | string;
    icon_name: string;
    title: string;
    description: string;
  }
  const Feature: React.FC<FeatureProps> = ({
    icon,
    icon_name,
    title,
    description,
  }) => {
    return (
      <div className="flex gap-x-6 items-center">
        <Image
          className="grow-0 w-[72px] h-[72px]"
          src={icon}
          alt={icon_name}
        ></Image>
        <div>
          <h2
            className={`${typography.body_1} 
                    text-myteam_multi_page_website-primary-light_coral mb-4`}
          >
            {title}
          </h2>
          <p className={`${typography.body_2} text-[white]`}>{description}</p>
        </div>
      </div>
    );
  };

  const featureList = [
    {
      icon: IconPerson,
      icon_name: "Person Icon",
      title: "Experienced Individuals",
      description:
        "Our network is made up of highly experienced professionals who are passionate about what they do.",
    },
    {
      icon: IconCog,
      icon_name: "Cog Icon",
      title: "Easy to Implement",
      description:
        "Our processes have been refined over years of implementation meaning our teams always deliver.",
    },
    {
      icon: IconChart,
      icon_name: "Chart Icon",
      title: "Enhanced Productivity",
      description:
        "Our customized platform with in-built analytics helps you manage your distributed teams.",
    },
  ];
  return (
    <section
      className="relative flex max-lg:flex-col
         justify-between px-[clamp(97px,12vw,165px)] py-[clamp(100px,11vw,140px)]
        bg-myteam_multi_page_website-secondary-sacramento_state_green"
    >
      <div>
        <div
          className="w-[50px] h-1 bg-myteam_multi_page_website-primary-light_coral
                 mb-[clamp(32px,3.5vw,56px)]"
        ></div>
        <h1 className={`${typography.h2} w-[445px] text-[white]`}>
          Build & manage distributed teams like no one else.
        </h1>
      </div>
      <div className="flex flex-col gap-y-8 mt-12 w-[540px] max-md:w-[573px]">
        {featureList.map((feature, index) => (
          <Feature key={`feature ${index}`} {...feature}></Feature>
        ))}
      </div>
      <Image
        className="absolute md:bottom-0 max-md:top-0 right-[-100px]"
        src={BGPatternHome3}
        alt="Pattern Home 3"
      ></Image>
    </section>
  );
};

const Section3 = () => {
  interface SuccessProps {
    name: string;
    position: string;
    avatar: StaticImageData | string;
    testimony: string;
  }
  const SuccessStory: React.FC<SuccessProps> = ({
    name,
    position,
    avatar,
    testimony,
  }) => {
    return (
      <div className="relative flex flex-col items-center pt-9">
        <Image
          className="absolute top-0"
          src={IconQuotes}
          alt="Icon Quotes"
        ></Image>
        <p
          className={`${typography.body_2} w-[350px] max-lg:w-[573px] mb-6 z-10`}
        >
          {testimony}
        </p>
        <h2 className=" text-myteam_multi_page_website-secondary-rapture_blue">
          {name}
        </h2>
        <h3 className="mb-8 max-lg:mb-4">{position}</h3>
        <Image
          className=" rounded-full border-2 border-myteam_multi_page_website-secondary-teal"
          src={avatar}
          alt={`avatar ${name}`}
          width={62}
        ></Image>
      </div>
    );
  };

  const successList = [
    {
      name: "Kady Baker",
      position: "Product Manager at Bookmark",
      avatar: AvatarKady,
      testimony: `“The team perfectly fit the specialized skill set required.
             They focused on the most essential features helping us launch the platform eight months faster than planned.”`,
    },
    {
      name: "Aiysha Reese",
      position: "Founder of Manage",
      avatar: AvatarAiysha,
      testimony: `“We needed to automate our entire onboarding process.
             The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”`,
    },
    {
      name: "Arthur Clarke",
      position: "Co-founder of MyPhysio",
      avatar: AvatarArthur,
      testimony: `“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio.
             The launch was an instant success with 100k downloads in the first month.”`,
    },
  ];
  return (
    <section
      className="relative flex flex-col px-[clamp(97px,12vw,165px)] 
            py-[clamp(100px,11vw,140px)] gap-y-14 max-lg:gap-y-12
          bg-myteam_multi_page_website-secondary-deep_jungle_green
            items-center text-center text-[white]"
    >
      <h1 className={`${typography.h2} w-[clamp(480px,75vw,932px)] `}>
        Delivering real results for top companies. Some of our
        <span className=" text-myteam_multi_page_website-secondary-rapture_blue">
          {" "}
          success stories.
        </span>
      </h1>
      <div className="flex max-lg:flex-col gap-x-[30px] max-lg:gap-y-12">
        {successList.map((success, index) => (
          <SuccessStory key={`success ${index}`} {...success}></SuccessStory>
        ))}
      </div>
      <Image
        className="absolute top-0 left-0"
        src={BGPatternHome4}
        alt="Pattern Home 4"
      />
      <Image
        className="absolute bottom-0 right-0"
        src={BGPatternHome5}
        alt="Pattern Home 5"
      />
    </section>
  );
};
export default function HomePage() {
  return (
    <div className={`${livvic.className} relative`}>
      <Navbar className="top-[73px] left-1/2 -translate-x-1/2"></Navbar>
      <Section1 />
      <Section2 />
      <Section3 />
      <ContactSection />
      <Footer />
    </div>
  );
}
