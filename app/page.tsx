import Image from "next/image";
//import { Globe } from "@/components/ui/globe";
import Compo from '../components/Compo';
import Bento from '../components/Bento';
import Kpi from "../components/Kpi";
import MenuBar from "../components/MenuBar";
import { LightRays } from "@/components/ui/light-rays";
import { TypingAnimation } from "../components/ui/typing-animation";
import Servicios from "../components/Servicios";
import ServiciosMb from "../components/Servicios";
import CallMe from "../components/CallMe";
import Proyectos from "../pages/proyectos";
import Hero from "../components/Hero";

import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import About from "@/components/About";


// Ensure that '../components/Compo.tsx' exists and exports a default React component.
export function Footer() {
  const pageName = "Dadd";
  return (
    <div className="bg-black  w-full  h-30  flex-wrap items-center justify-center text-white p-10">
      <h1>{pageName}</h1>
    </div>
  );
}

export default function Home() {

   return (
    <div className=" font-sans grid grid-rows-[20px_1fr_20px] items-center  justify-items-center min-h-screen p-2 pb-2  sm:p-10"> {/*gap-16 sm:p-20*/}
      <main className="  flex flex-col  row-start-2 w-full h-full">
        {/* <MenuBar /> */}
        <Hero />
           <Kpi />
            <div className="mb-6 mt-8"><h1 className="text-center uppercase font-semibold text-3xl">Skill Tech</h1></div>
           <Compo />
         <Servicios />
          <CallMe />
            <Proyectos />
        {/* <div className="flex flex-row items-left">
          <div className="px-2 flex flex-col w-100">
            <LightRays color="rgba(123, 171, 242, 0.42)" className="z-0"/>
            <div className="border border-black rounded-lg  mb-10 w-30">
              <h1 className="text-1xl text-center uppercase font-semibold  p-0">{pageName}</h1>
            </div>
            <h2 className="text-2xl text-gray-700">{helloDev}</h2>
            <h1 className="text-6xl pb-2  uppercase font-semibold ">{nameDev}</h1>
           <TypingAnimation className="text-1xl pb-2  uppercase ">{pageSubtitle}</TypingAnimation> 
            <h3 className="text-center lg:text-left text-gray-800 text-1xl uppercase font-semibold">{pageQuestion}</h3>

          </div>
        </div> */}
     
        {/* <About/> */}

        {/* <Bento />  */}
        {/* <div className="mt-20 mb-4 lg:mb-0"><h1 className="text-center uppercase font-semibold text-3xl">Mis servicios </h1></div>
    
     
        <div className="mb-6"><h1 className="text-center uppercase font-semibold text-3xl">Skill Tech</h1></div>
        <Compo />
        <CallMe />
        <Proyectos /> */}
        {/*     <MenuBar /> */}

      </main>

      {/* <footer className="bg-black  w-full  h-30  flex-wrap items-center justify-center">
  

       <div className="flex w-50 flex-col bg-amber-600">2</div>
       <div className="flex w-50 flex-col bg-amber-300">
        
        
         </div> 
    
      </footer> */}

    </div>
  );
}


