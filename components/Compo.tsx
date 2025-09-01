import { Globe } from "@/components/magicui/globe";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { img } from "motion/react-client";

const reviews = [
  {
     body: "JavaScript", 
    img: "https://raw.githubusercontent.com/DaveHya/my-portafolio/refs/heads/main/src/img/skills/JS.png?token=GHSAT0AAAAAADJ354Z32XOBDKCRT7TZE3TC2FV6SWA",
  },
  {
    body: "HTML",
    img: "https://raw.githubusercontent.com/DaveHya/my-portafolio/refs/heads/main/src/img/skills/Html.png?token=GHSAT0AAAAAADJ354Z2ADBUV5MOSQGA5ENI2FV7NZA",
  },
  {
 
    body: "CSS",
    img: "https://raw.githubusercontent.com/DaveHya/my-portafolio/refs/heads/main/src/img/skills/CSS.png?token=GHSAT0AAAAAADJ354Z3S4LLV4BTBG65O2NI2FWABPA",
  },
  {

    body: "Figma",
    img: "https://raw.githubusercontent.com/DaveHya/my-portafolio/refs/heads/main/src/img/skills/Figma.png?token=GHSAT0AAAAAADJ354Z33FC47GBAV6TI3JDI2FV7QBQ",
  },
  {
   
    body: "Git ",
    img: "https://raw.githubusercontent.com/DaveHya/my-portafolio/refs/heads/main/src/img/skills/Git.png?token=GHSAT0AAAAAADJ354Z243ZAXGP33M4UTEPS2FWACOA",
  },
  {

    body: "React",
    img: "https://raw.githubusercontent.com/DaveHya/my-portafolio/refs/heads/main/src/img/skills/react.png?token=GHSAT0AAAAAADJ354Z2DFHDIZBOSOZOM33A2FWADIA",
  },
  {

    body: "Wordpress",
    img: "https://raw.githubusercontent.com/DaveHya/my-portafolio/refs/heads/main/src/img/skills/wordpress.png?token=GHSAT0AAAAAADJ354Z3UVS2QQRVFQNPKJFO2FWADZQ",
  },
    {

    body: "Vtex",
    img: "https://raw.githubusercontent.com/DaveHya/my-portafolio/refs/heads/main/src/img/skills/vtex.png?token=GHSAT0AAAAAADJ354Z2UUDEJYLPHJGHHOKS2FWAFMQ",
  },
   {

    body: "Boostrap",
    img: "https://raw.githubusercontent.com/DaveHya/my-portafolio/refs/heads/main/src/img/skills/boostrap.png?token=GHSAT0AAAAAADJ354Z3KWT4G5B5UPYUWXUQ2FWAGQQ",
  },
   {

    body: "Sass",
    img: "https://raw.githubusercontent.com/DaveHya/my-portafolio/refs/heads/main/src/img/skills/Sass.png?token=GHSAT0AAAAAADJ354Z3KK7MVVFH33SDDMVI2FWAH5A",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-34 w-34 cursor-pointer overflow-hidden rounded-xl border p-4 ",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
    <div>
      <div className="flex flex-row items-center gap-4 place-content-center">
        <img className="self-center place-content-center" width="80" height="32" alt="" src={img} />
        <div className="flex flex-col">
          {/* <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption> */}
          {/* <p className="text-xs font-medium dark:text-white/40">{username}</p> */}
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-center">{body}</blockquote>
      </div>
     </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden" style={{width: '80vw'}}>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}


export default function Compo() {
    return(
        <div>
{/*           
         <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Doce
      </span>
      <Globe className="top-28" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div> */}
    <MarqueeDemo />

    
         </div>
    )
}