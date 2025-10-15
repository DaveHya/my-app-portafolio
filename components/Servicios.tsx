

//Nueva version

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { div } from "motion/react-client";

const cardsData = [
  {
    id: 1,
    avatar:
      "https://sallybeauty.vtexassets.com/arquivos/SallyBeautyLogo_expertas.svg",

    title: "🧩 Desarrollo Web a Medida",
    description:
      "Creación de sitios web personalizados, adaptados a las necesidades del cliente. ●  Sitios web corporativos ● Landing pages ● Blogs personalizados ● Páginas de eventos o campañas",
  },
  {
    id: 2,

    title: "🛍️ E-commerce",
    description:
      "Desarrollo de tiendas online funcionales y optimizadas para ventas. ● Tiendas con Shopify, WooCommerce, Vtex, etc. ● Integración de pasarelas de pagos ● Gestión de productos, inventario y envíos ",
  },

  {
    id: 4,

    title: "🔁 Mantenimiento y Optimización Web",
    description:
      "Servicios de soporte técnico, mejoras y actualizaciones continuas. ● Actualización de contenido y funcionalidades ● Optimización de velocidad y rendimiento ● Implementación de medidas de seguridad y backups",
  },
  {
    id: 5,

    title: "🎨 Diseño UI/UX",
    description:
      "Diseño experiencias de usuario intuitivas, agradables y centradas en las personas. ● Investigación y análisis de usuarios ● Wireframes y prototipos ● Diseño visual y branding coherente",
  },
  {
    title: "📊 Consultoría y Asesoría Técnica",
    description:
      "Brindo asesoramiento técnico para que mis clientes tomen decisiones informadas y efectivas. ● Evaluación de necesidades tecnológicas ● Recomendaciones de herramientas y plataformas ● Estrategias de crecimiento digital",
  },
];


export default function Servicios() {
  return (
    <div className="w-full p-6    gap-4 flex justify-center flex-wrap">
 
     {cardsData.map((card) => (
       
         <div key={card.id} className="flex flex-row ">
         <div className="flex p-5 gap-3  rounded-sm border-2 border-black border-solid ">
                 
                <div className="flex flex-col "  >
                  <h1 >{card.title}</h1>
                  <div className=" w-90" >
                    {card.description}
                  </div>
                </div>
                </div>


                
                </div>

                
              
      
          ))}
       
    </div>
  )
}
