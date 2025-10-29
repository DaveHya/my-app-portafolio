import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import {
  BellIcon,
  Share2Icon,
  HandPlatter,
  User,
  FolderKanban,
  Handshake,
} from "lucide-react";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { Meteors } from "@/components/magicui/meteors";
import { LightRays } from "@/components/ui/light-rays"
// import ServList from "./ServList";
// import  Connect  from "./Connect";
// import List from "./List";

//import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
//import AnimatedBeamMultipleOutputDemo from "@/registry/example/animated-beam-multiple-outputs";
//import AnimatedListDemo from "@/registry/example/animated-list-demo";
// import { AnimatedList } from "@/components/magicui/animated-list";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
// import { Marquee } from "@/components/magicui/marquee";
// import { div } from "motion/react-client";
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

const handService = <HandPlatter color="#ffffff" />;

const features = [
  {
    Icon: User,
    name: "Sobre Mi",
    description: "Conoce sobre mi",
    href: "/about",
    cta: "Ver Sobre Mi ➤ ",
    className: "col-span-3 lg:col-span-1",
      //  background: (   <Globe />),
  },

  {
    Icon: Handshake,
    name: "Servicios",
    description: "Conoce mis servicios",
    href: "/gallery",
    cta: "Ver Servicios ➤",
    className: "col-span-3 lg:col-span-2",
      //  background: (   <Globe />),
    // background: (
    //   <ServList/>
    // ),
  },
  {
    Icon: FolderKanban,
    name: "Proyectos",
    description: "Descubre mis proyectos",
    href: "/work",
    cta: "Ver Proyectos ➤",
    className: "col-span-3 lg:col-span-2 border-inherit",
    //  background: (   <Globe />),
    //  <div className=   ] w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
    //   <Meteors number={30} />
    //   <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
    //    Services
    //   </span>
    // </div>
    //  <Bkg />
    //  ),
  },
  {
    Icon: "s",
    name: "Hola Mundo",
    description: "",
    className: "col-span-3 lg:col-span-1",


  },
];

//Retro Grid Background
export function BkGrid() {
  return (
    <div className="mt-20 relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <span className="bg-red-700 pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        Proyectos
      </span>

      <RetroGrid />
    </div>
  );
}

// Meteor Background
export function Bkg() {
  return (
    //absolute
    <div className=" top-0 flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
      <Meteors number={40} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Projects
      </span>
    </div>
  );
}

export default function Bento() {
  return (
    <div className="dave">
      
        {/* <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid> */}
    </div>
  );
}
