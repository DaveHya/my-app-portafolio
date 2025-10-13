import Image from "next/image";
//import { Globe } from "@/components/ui/globe";
import Compo from '../components/Compo';
import Bento from '../components/Bento';
 import Kpi from "../components/Kpi";
import MenuBar from "../components/MenuBar";
import { LightRays } from "@/components/ui/light-rays"
import Servicios from "../pages/Servicios";
import CallMe from "../components/CallMe";
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


// Ensure that '../components/Compo.tsx' exists and exports a default React component.

export default function Home() {
  return (
    <div className=" font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className=" b flex flex-col  row-start-2 w-full h-full">
         {/* <MenuBar /> */}
        <div className="flex flex-row items-left  "> 
        <div className="flex flex-col   "> 
       <LightRays color="rgba(123, 171, 242, 0.42)" />
  <h1 className="text-6xl pb-2  uppercase font-semibold ">Daveloper</h1>
  <h3 className="text-1xl  uppercase font-semibold">Soy desarrollador web con más de 4 años de experiencia.</h3>
  <h3 className="text-1xl  uppercase font-semibold"> ¿Tienes una idea? conversemos.</h3>
      </div>
      </div>
        <Kpi />
      {/* <Compo /> */}
     <Bento /> 
     <div className="mt-10"><h1 className="text-center font-semibold text-3xl">Mis servicios</h1></div>
     <Servicios />
     <CallMe/>
{/*     <MenuBar /> */}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
