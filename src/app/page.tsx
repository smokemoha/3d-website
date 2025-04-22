'use client';

import Tablet from "@/lib/components/Tablet";
import c from "./page.module.css";
import Navigation from '@/lib/global/Navigation';
import Button from "@/lib/components/Button";
import Arrow from '@/lib/icons/Arrow';
import Link from "next/link";
import Image from "next/image";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);


export default function Home() {
  useGSAP(
    () => {
      gsap.set(`.${c.animated_intro}`, {
        opacity: 0,
        y: 10,
        willChange: 'opacity',
        immediateRender: true,
      });
      
      gsap.to(`.${c.animated_intro}`, {
        immediateRender: true,
        alignContent: 'center',
        opacity: 1,
        y: 0,
        duration: .5,
        willChange: 'opacity',
        stagger: 0.2,
        ease: 'power4.out',
      });
    },
  );


  return (
    <main className={c.main}>
      <Navigation />

      <section className={c.hero_main}>
        {/* ... existing hero content ... */}
        <div className={`${c.video_container} ${c.animated_intro}`}>
          <video
            className={c.video}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            src="render.mp4"></video>
        </div>


        <div className={c.landing_content}>
          <Link href={'#'}>
            <Tablet className={c.animated_intro} />
          </Link>

          <h1 className={`${c.title} ${c.animated_intro}`}>
            revolutionizing <br /> design and <br /> development
          </h1>
          <p className={`${c.description} ${c.animated_intro}`}>
            Transforming ideas into immersive digital experiences through
            cutting-edge technology and innovative design. Join our movement
            to shape the future of digital creation.
          </p>
          <div className={`${c.button_container} ${c.animated_intro}`}>
            <Button text="shop now" />
            <Button
              text="see more"
              version="ghost"
              endIcon={<Arrow />} >
            </Button>
          </div>
        </div>
      </section>

      {/* New company logos section */}
      <section className={`${c.companies_section} ${c.animated_intro}`}>
        <h2 className={c.companies_title}>Trusted by leading companies</h2>
        <div className={c.companies_logos}>
          <div className={c.logo_item}>
            <Image src="/logos/airtable.png" alt="Airtable" width={120} height={40} />
          </div>
          <div className={c.logo_item}>
            <Image src="/logos/amazon.png" alt="Amazon" width={120} height={40} />
          </div>
          <div className={c.logo_item}>
            <Image src="/logos/asana.png" alt="Asana" width={120} height={40} />
          </div>
          <div className={c.logo_item}>
            <Image src="/logos/basecamp.png" alt="Basecamp" width={120} height={40} />
          </div>
          <div className={c.logo_item}>
            <Image src="/logos/slack.png" alt="Slack" width={120} height={40} />
          </div>
        </div>
      </section>

    </main>
  );
}