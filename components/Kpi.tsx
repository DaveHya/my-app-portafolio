import { NumberTicker } from "@/components/magicui/number-ticker";

export default function Kpi() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">

        <div className="text-center text-2xl font-medium text-black/60 dark:text-white/60">
       <h2>Proyectos</h2> 
      
    <NumberTicker
      value={20}
      className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white"
    />
      </div>

    <div className="text-center text-2xl font-medium text-black/60 dark:text-white/60">
      <h2>Experiencia</h2>
      <div className="flex items-center justify-center gap-2">
        <NumberTicker
          value={4}
          className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white"
        />
        <span className="text-4xl font-medium text-black dark:text-white">años</span>
      </div>
    </div>
      </div>
  );
}
