
//Nueva version

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { div } from "motion/react-client";
import Image from 'next/image'
import { RippleButton } from '@/components/ui/shadcn-io/ripple-button';
// import { div } from "motion/react-client";


import Sally from '../images/projects/mideas.svg'

export const cardsDa = [
  {
    id: 1,
    name: "Dave H",
    image: "../images/projects/sallyb.svg",
    title: "Sally Beauty",
    description:
      "Cadena especializada en productos profesionales para el cuidado del cabello, coloración, maquillaje, manicure y más, con despacho a todo Chile.",
    url: "https://www.sallybeauty.cl/",
  },
  {
    id: 2,
    avatar: "/images/avatar2.jpg",
    name: "Jane Doe",
    image: "../images/projects/mideas.svg",
    title: "Midea",
    description:
      "Tienda online de electrodomésticos (refrigeradores, lavadoras, aires acondicionados) con enfoque en eficiencia energética y tecnología.",
    url: "https://www.mideastore.cl/",
  },
  {
    id: 3,
    avatar: "/images/avatar3.jpg",
    name: "John Smith",
    image: "../images/projects/liquimoly.svg",
    title: "Liquimoly",
    description:
      "Empresa especializada en la fabricación y comercialización de lubricantes, aceites de motor, aditivos, y productos para el cuidado y mantenimiento de vehículos",
    url: "https://www.liqui-moly.cl/",
  },

  {
    id: 4,
    avatar: "/images/avatar3.jpg",
    name: "John Smith",
    image: "../images/projects/kayser.svg",
    title: "Kayser",
    description:
      "Tienda en línea de moda y accesorios para hombres y mujeres. Encuentra las últimas tendencias en ropa, calzado y complementos en Kaysershop.",
    url: "https://www.kaysershop.com/",
  },
  {
    id: 5,
    avatar: "/images/avatar3.jpg",
    name: "John Smith",
    image: "../images/projects/ferouch.svg",
    title: "Ferouch",
    description:
      "Ferouch es la marca de vestir masculino más grande del mercado nacional.",
    url: "https://www.ferouch.cl/",
  },
  {
    id: 6,
    avatar: "/images/avatar3.jpg",
    name: "John Smith",
    image: "../images/projects/caffarena.svg",
    title: "Caffarena",
    description:
      "Caffarena es una empresa chilena de comercialización de productos spaniles.",
    url: "https://www.caffarena.cl/",
  },
  {
    id: 7,
    avatar: "/images/avatar3.jpg",
    name: "John Smith",
    image: "../images/projects/nimtu.svg",
    title: "Nimtu",
    description:
      "Tienda de hombre outdoor y trekking. Ropa, calzado y accesorios para actividades al aire libre.",
    url: "https://www.nimtu.cl/",
  },

  {
    id: 8,
    avatar: "/images/avatar3.jpg",
    name: "John Smith",
    image: "../images/projects/casasilva.svg",
    title: "Casasilva",
    description: "Tienda de vinos",
    url: "https://www.casasilva.cl/",
  },

  {
    id: 9,
    avatar: "/images/avatar3.jpg",
    name: "John Smith",
    image: "../images/projects/edelbrock.svg",
    title: "Edelbrock",
    description:
      "Tienda en calzado de seguridad que transforma la protección laboral en una experiencia única.",
    url: "https://www.edelbrock.cl/",
  },

  // {
  //     id: 10,
  //     avatar: "/images/avatar3.jpg",
  //     name: "John Smith",
  //     image: "",
  //     title: "Directwines",
  //     description:
  //         "A rocky exoplanet in the habitable zone, full of possibilities and secrets.",
  //     url: "https://example.com/view-project"

  // },

  // {
  //     id: 11,
  //     avatar: "/images/avatar3.jpg",
  //     name: "John Smith",
  //     image: "",
  //     title: "Markup",
  //     description:
  //         "A rocky exoplanet in the habitable zone, full of possibilities and secrets.",
  //     url: "https://example.com/view-project"

  // },

  {
    id: 12,
    avatar: "/images/avatar3.jpg",
    name: "John Smith",
    image: "../images/projects/safety.svg",
    title: "Safety store",
    description:
      " Tienda comercialización de productos y soluciones integrales de seguridad industrial.",
    url: "https://safetystore.cl/",
  },

  {
    id: 13,
    avatar: "/images/avatar3.jpg",
    name: "John Smith",
    image: "../images/projects/propulsow.svg",
    title: "Propulsow",
    description:
      "Agencia de diseño especialistas en ecommerce y marketing digital.",
    url: "https://www.propulsow.com/",
  },

  {
    id: 14,
    avatar: "/images/avatar3.jpg",
    name: "John Smith",
    image: "../images/projects/fiorentina.svg",
    title: "Fiorentina",
    description:
      "Fiorentina es una tienda de ropa de vestir y accesorios, dedicada a cubrir las necesidades de la mujer sofisticada y moderna, permitiéndole un estilo de vida único y diferente.",
    url: "https://www.fiorentina.cl/",
  },

  {
    id: 15,
    avatar: "/images/avatar3.jpg",
    name: "John Smith",
    image: "../images/projects/vdc.svg",
    title: "Ventas por catalogos",
    description: "Tienda B2B de grupo Chiozza (Caffarena)",
    url: "https://www.consultorasvdc.cl/registro",
  },

  {
    id: 16,
    avatar: "/images/avatar3.jpg",
    name: "John Smith",
    image: "../images/projects/suplementos.svg",
    title: "Suplementos Mayotistas",
    description: "Tienda B2B de supletech",
    url: "https://www.suplementosmayoristas.cl/",
  },

  {
    id: 17,
    avatar: "/images/avatar3.jpg",
    name: "John Smith",
    image: "../images/projects/doce34.svg",
    title: "Doce34",
    description:
      "Tienda de relojes y representantes de las marcas Casio, G-shock, Swatch, Bulova, entre otras.",
    url: "https://www.doce34.cl/",
  },

  // {
  //     id: 18,
  //     avatar: "/images/avatar3.jpg",
  //     name: "John Smith",
  //     image: "",
  //     title: "Sies spa",
  //     description:
  //         "A rocky exoplanet in the habitable zone, full of possibilities and secrets.",
  //     url: "https://example.com/view-project"

  // },

  // {
  //     id: 19,
  //     avatar: "/images/avatar3.jpg",
  //     name: "John Smith",
  //     image: "",
  //     title: "Caro & Dave",
  //     description:
  //         "A rocky exoplanet in the habitable zone, full of possibilities and secrets.",
  //     url: "https://example.com/view-project"

  // },
];



export default function Proyectos() {
  return (
    <div id="proyectos" className="none-mb">
        {/* <div className="mb-6 mt-8"><h1 className="text-center uppercase font-semibold text-3xl">Mis proyectos</h1></div> */}
      <div className="w-full lg:w-full p-2 gap-4 flex justify-center flex-wrap">
        {cardsDa.map((card) => (
          
          <div  key={card.id} className=" flex p-2   rounded-sm border-2 border-black border-solid ">
            
            <div key={card.id} className=" flex flex-col justify-center align-center "  >
            <Image
             src={card.image}
              alt={card.title}
              width={200}
              height={50}
              className="block w-80 h-50  object-cover mx-auto mb-4"
            />
              <h1 className="pt-3 uppercase font-bold">{card.title}</h1>
              <div key={card.id} className=" w-90">{card.description}</div>
           <div className="flex justify-center pt-3">  <a key={card.id} href={card.url}> <RippleButton className="  p-2 px-3 rounded-sm" >Abrir proyecto </RippleButton></a> </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
