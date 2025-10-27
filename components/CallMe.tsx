import { Particles } from "@/components/ui/shadcn-io/particles";
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { PulsatingButton } from "@/components/ui/pulsating-button"

export default function CallMe() {
  return (
    <div style={{height:"60vh"}} className="py-6 bg-white relative mb-2 h-screen rounded-md overflow-hidden">
      {/* Your content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="lg:text-6xl text-5xl font-bold text-black mb-4">
           Trabajemos juntos!
          </h1>
          <p className="text-xl text-gray-600">
             Conversemos y hagamos que suceda. 
          </p>
          {/* <button className="bg-gray-800 text-white p-2 text-2xl rounded-sm ">¡Conversemos!</button> */}
        <a className=" text-center place-self-center" href="https://wa.me/56972783856?text=Hola%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20tus%20servicios
">
          <ShimmerButton className="lg:place-self-center lg:ml-0 ml-30 text-center place-self-center mt-4 justify-center">¡Conversemos!</ShimmerButton>
          </a>
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