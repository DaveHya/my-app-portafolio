

import { cn } from "@/lib/utils";
import { h1, image, img } from "motion/react-client";


//Shacdn marquee

'use client';
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';


const skills = [
  {
    id: 1,
    name: "JavaScript",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    id: 2,
    name: "HTML",
    img: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
  },
  {
    id: 3,
    name: "CSS",
    img: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  },
  {
    id: 4,
    name: "Figma",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
  },
  {
    id: 5,
    name: "Git ",
    img: "https://cdn-icons-png.flaticon.com/512/15466/15466163.png",
  },
  {
    id: 6,
    name: "React",
    img: "https://cdn-icons-png.flaticon.com/512/875/875209.png",
  },
  {
    id: 7,
    name: "Wordpress",
    img: "https://cdn-icons-png.flaticon.com/512/174/174881.png",
  },
  {
    id: 8,
    name: "Boostrap",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
  },
  {
    id: 9,
    name: "Sass",
    img: "https://cdn-icons-png.flaticon.com/512/919/919831.png",
  },
  {
    id: 10,
    name: "Jira",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968875.png",
  },
  {
    id: 11,
    name: "Github",
    img: "https://cdn-icons-png.flaticon.com/512/2111/2111432.png",
  },
  {
    id: 12,
    name: "Gitlab",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968853.png",
  },
];

//Component marquee
const Example = () => (
  <div className="flex size-full items-center justify-center bg-background">
    <Marquee>
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />
      <MarqueeContent>
         {skills.map (skill => (
          <MarqueeItem className="h-32 w-32" key={skill.id}>
            <img
             // alt={`Placeholder ${skill.name}`}
              className="overflow-hidden w-15 h-auto"
              src={skill.img}
            />

            <h1 className="text-font text-black uppercase text-center">{skill.name}</h1>
          </MarqueeItem>
          ))}
      </MarqueeContent>
    </Marquee>
  </div>
);



//Function Skills



export default function Skills() {


  return (
    <div className="relative flex w-full flex-col items-center caja place-self-center justify-center overflow-hidden self-center ">
     
<div className="flex flex-row ">
    <Example />
</div>
    
    </div>
  );
}


