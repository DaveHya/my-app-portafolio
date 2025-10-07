import { NumberTicker } from "@/components/magicui/number-ticker";
import { TextAnimate } from "@/components/magicui/text-animate";

const styleBk = {  borderRadius: '12px',
    boxShadow:"inset 0 -20px 80px -20px #ffffff1f",
    };

export default function Kpi() {
  return (
    <> 
  
    <div  className="mt-10 flex text-black  items-center justify-center gap-10 flex-row w-100">

 
 
    <div style={styleBk}  className=" border-gray-500 border-solid border-2 w-50  rounded-2xl  text-center  text-2xl font-medium text-black/60 dark:text-white/60">
      
      <div className=" flex items-center justify-center gap-2">
        <NumberTicker
          value={4}
          className=" whitespace-pre-wrap text-8xl font-medium tracking-tighter dark:text-white"
        />
         <TextAnimate animation="slideUp" by="word" duration={5}>
      Años
    </TextAnimate>
      </div>
      <h2 className="pb-3">Experiencia</h2>
    </div>


         <div style={styleBk}  className="  border-gray-500 border-solid border-2 w-50  rounded-2xl  w-50 text-center text-2xl font-medium  ">
     
      
    <div className=" flex items-center justify-center gap-2">
        <NumberTicker
          value={20}
          className=" whitespace-pre-wrap text-8xl font-medium tracking-tighter dark:text-white"
        />
         <TextAnimate className="text-5xl" animation="slideUp" by="word" duration={5}>
     +
    </TextAnimate>
      </div>
      <h2 className="pb-3">Proyectos </h2> 
      </div>
      </div>
      
      </>
  );
}
