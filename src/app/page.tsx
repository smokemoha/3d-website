"use client";

// Importing the Tablet component for rendering a tablet UI element
import Tablet from "@/lib/components/Tablet";
// Importing CSS module for scoped styling
import c from "./page.module.css";
// Importing the global Navigation component for site-wide navigation
import Navigation from "@/lib/global/Navigation";
// Importing the Button component for reusable button UI
import Button from "@/lib/components/Button";
// Importing the Arrow icon for button enhancement
import Arrow from "@/lib/icons/Arrow";
// Importing Next.js Link for client-side navigation
import Link from "next/link";
// Importing Next.js Image for optimized image rendering
import Image from "next/image";

// Importing GSAP for animations
import gsap from "gsap";
// Importing useGSAP hook for integrating GSAP with React
import { useGSAP } from "@gsap/react";

// Registering the useGSAP plugin to enable GSAP animations in React
gsap.registerPlugin(useGSAP);

// Defining the Home component as the default export
export default function Home() {
  // Using the useGSAP hook to manage GSAP animations
  useGSAP(() => {
    // Setting initial state for elements with the animated_intro class
    gsap.set(`.${c.animated_intro}`, {
      opacity: 0, // Starting with zero opacity for fade-in effect
      y: 10, // Starting 10px below for subtle slide-up animation
      willChange: "opacity", // Optimizing for opacity animation
      immediateRender: true, // Ensuring immediate rendering for smooth start
    });

    // Animating elements with the animated_intro class to their final state
    gsap.to(`.${c.animated_intro}`, {
      immediateRender: true, // Ensuring immediate rendering for animation
      alignContent: "center", // Aligning content for visual consistency
      opacity: 1, // Fading in to full opacity
      y: 0, // Moving to original position
      duration: 0.5, // Animation duration of 0.5 seconds
      willChange: "opacity", // Optimizing for opacity animation
      stagger: 0.2, // Staggering animations by 0.2 seconds for sequential effect
      ease: "power4.out", // Using power4.out easing for smooth, dynamic motion
    });
  });

  // Rendering the main content of the Home page
  return (
    // Main container for the page content
    <main className={c.main}>
      {/* Rendering the global navigation bar */}
      <Navigation />

      {/* Hero section for the landing page */}
      <section className={c.hero_main}>
        {/* Container for the hero video */}
        <div className={`${c.video_container} ${c.animated_intro}`}>
          {/* Auto-playing, looping video without controls */}
          <video
            className={c.video}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            src="render.mp4"
          ></video>
        </div>

        {/* Container for landing page content */}
        <div className={c.landing_content}>
          {/* Link wrapping the Tablet component for navigation */}
          <Link href={"#"}>
            {/* Tablet component with animated intro effect */}
            <Tablet className={c.animated_intro} />
          </Link>

          {/* Main heading with animated intro effect */}
          <h1 className={`${c.title} ${c.animated_intro}`}>
            unlocking <br /> innovation
          </h1>

          {/* Description paragraph with animated intro effect */}
          <p className={`${c.description} ${c.animated_intro}`}>
            Transforming ideas into immersive digital experiences through
            cutting edge technology and innovative design.
          </p>
          {/* Container for call-to-action buttons */}
          <div className={`${c.button_container} ${c.animated_intro}`}>
            {/* Primary button for shopping */}
            <Button text="shop now" />
            {/* Ghost-style button with an arrow icon for additional action */}
            <Button
              text="see more"
              version="ghost"
              endIcon={<Arrow />}
            ></Button>
          </div>
        </div>
      </section>

     
    </main>
  );
}
