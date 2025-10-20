import { Particles } from "@/components/ui/shadcn-io/particles";
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { PulsatingButton } from "@/components/ui/pulsating-button"

export default function CallMe() {
  return (
    <div className="relative mb-2 h-screen rounded-md bg-white overflow-hidden">
      {/* Your content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-black mb-4">
           Trabajemos juntos!
          </h1>
          <p className="text-xl text-gray-600">
             Conversemos y hagamos que suceda. 
          </p>
          {/* <button className="bg-gray-800 text-white p-2 text-2xl rounded-sm ">¡Conversemos!</button> */}
        
          <ShimmerButton className="mt-4 self-center justify-self-center">¡Conversemos!</ShimmerButton>
        </div>
      </div>
      
      {/* Interactive particles */}
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        staticity={50}
        color="#000000" //#ffffff
        size={0.8}
      />
    </div>
  );
}