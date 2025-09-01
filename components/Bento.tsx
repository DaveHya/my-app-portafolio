import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { Meteors } from "@/components/magicui/meteors";
import  Connect  from "./Connect";


//import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
// import AnimatedBeamMultipleOutputDemo from "@/registry/example/animated-beam-multiple-outputs";
// import AnimatedListDemo from "@/registry/example/animated-list-demo";
// import { AnimatedList } from "@/components/magicui/animated-list";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import { div } from "motion/react-client";
import { Globe } from "@/components/magicui/globe";




const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Sobre Mi",
    description: "We automatically save your files as you type.",
    href: "#",
    cta: "Leer ",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
     
    ),
  },
  {
    Icon: BellIcon,
    name: "Servicios",
    description: "Conoce mis servicios",
    href: "#",
    cta: "Leer",
    className: "col-span-3 lg:col-span-2",
   //  background: (
//       <AnimatedList>
//   <p>Item 1</p>
//   <p>Item 2</p>
//   <p>Item 3</p>
// </AnimatedList>
   //    <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
  //    <Connect/>
  // ),
  },
  {
    Icon: Share2Icon,
    name: "Proyectos",
    description: "Descubre mis proyectos",
    href: "#",
    cta: "Leer más",
    className: "col-span-3 lg:col-span-2",
   background: (
    //  <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
    //   <Meteors number={30} />
    //   <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
    //    Services
    //   </span>
    // </div>
     <Bkg />
     ),
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
   
     background: (
    //   <Calendar
    //     mode="single"
    //     selected={new Date(2022, 4, 11, 0, 0, 0)}
    //     className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90"
    //   />
    <Globe />
    ),
  },
];


//Retro Grid Background
  export function BkGrid (){
    return(

    
     <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
       Proyectos
      </span>
 
      <RetroGrid />
    </div>
    )
  }


  // Meteor Background
 export function Bkg () {

  return(
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
      <Meteors number={40} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Meteoros
      </span>

      
    </div>
  )
}

export default function Bento() {
  return (
  <div>

 
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}

        {/* <Bkg /> */}
       
    </BentoGrid>
      <BkGrid/>
 </div>
 

  );
}
