'use client';
import {
  SiApple,
  SiFacebook,
  SiGithub,
  SiGoogle,
  SiInstagram,
  SiX,
  SiYoutube,
} from '@icons-pack/react-simple-icons';
import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from '@/components/ui/shadcn-io/announcement';
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';
import { Button } from '@/components/ui/button';
import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerMuteButton,
  VideoPlayerPlayButton,
  VideoPlayerSeekBackwardButton,
  VideoPlayerSeekForwardButton,
  VideoPlayerTimeDisplay,
  VideoPlayerTimeRange,
  VideoPlayerVolumeRange,
} from '@/components/ui/shadcn-io/video-player';
import Link from 'next/link';
import { LightRays } from "@/components/ui/light-rays";
const logos = [
  {
    name: 'GitHub',
    icon: SiGithub,
    url: 'https://github.com',
  },
  {
    name: 'Facebook',
    icon: SiFacebook,
    url: 'https://facebook.com',
  },
  {
    name: 'Google',
    icon: SiGoogle,
    url: 'https://google.com',
  },
  {
    name: 'X',
    icon: SiX,
    url: 'https://x.com',
  },
  {
    name: 'Apple',
    icon: SiApple,
    url: 'https://apple.com',
  },
  {
    name: 'Instagram',
    icon: SiInstagram,
    url: 'https://instagram.com',
  },
  {
    name: 'YouTube',
    icon: SiYoutube,
    url: 'https://youtube.com',
  },
];

 const pageName = "Daveloper";
    const helloDev = "Hola, soy ";
  const nameDev = "Dave";
  const pageSubtitle = "En Daveloper, diseño y desarrollo sitios web modernos, rápidos y funcionales que impulsan tu negocio. Desde páginas informativas hasta plataformas completas, transformo tus ideas en resultados reales.";
  const pageQuestion = "¿Tienes una idea? conversemos.";

const Hero = () => (
  <div className="flex flex-col gap-16 px-8 py-24 text-center">
    <LightRays color="rgba(123, 171, 242, 0.42)" className="z-0"/>
    <div className="flex flex-col items-center justify-center gap-8">
      <Link href="#">
        <Announcement>
          <AnnouncementTag>Latest</AnnouncementTag>
          <AnnouncementTitle>Introducing blocks by Kibo UI</AnnouncementTitle>
        </Announcement>
      </Link>
      <h1 className="mb-0 text-balance font-medium text-6xl md:text-7xl xl:text-[5.25rem]">
        Transformo tus ideas en sitios web funcionales y atractivos
      </h1>
      <p className="mt-0 mb-0 text-balance text-lg text-muted-foreground">
       {pageSubtitle}
      </p>
      <div className="flex items-center gap-2">
        <Button asChild>
          <Link href="#">Comenzar proyecto</Link>
        </Button>
        <Button asChild variant="outline">
          <Link className="no-underline" href="#proyectos">
           Ver proyectos
          </Link>
        </Button>
      </div>
    </div>
    {/* <section className="flex flex-col items-center justify-center gap-8 rounded-xl bg-secondary py-8 pb-18">
      <p className="mb-0 text-balance font-medium text-muted-foreground">
        Trusted by developers from leading companies
      </p>
      <div className="flex size-full items-center justify-center">
        <Marquee>
          <MarqueeFade className="from-secondary" side="left" />
          <MarqueeFade className="from-secondary" side="right" />
          <MarqueeContent pauseOnHover={false}>
            {logos.map((logo) => (
              <MarqueeItem className="mx-16 size-12" key={logo.name}>
                <Link href={logo.url}>
                  <logo.icon className="size-full" />
                </Link>
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </section> */}
    {/* <VideoPlayer className="overflow-hidden rounded-lg border">
      <VideoPlayerContent
        crossOrigin=""
        muted
        preload="auto"
        slot="media"
        src="https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/high.mp4"
      />
       <VideoPlayerControlBar>
        <VideoPlayerPlayButton />
        <VideoPlayerSeekBackwardButton />
        <VideoPlayerSeekForwardButton />
        <VideoPlayerTimeRange />
        <VideoPlayerTimeDisplay showDuration />
        <VideoPlayerMuteButton />
        <VideoPlayerVolumeRange />
      </VideoPlayerControlBar> 
    </VideoPlayer> */}
  </div>
);
export default Hero;