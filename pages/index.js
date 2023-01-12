/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Lottie from "lottie-react";
import { Dribbble, Github, Twitter } from "../components/icons";

import style from '../styles/home.module.scss'
import Waitlist from "../components/waitlist";
import flagAnimation from '../public/flag.json'

function Content() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <ContentLogo/>
      <div
        className="text-white text-opacity-75 text-lg leading-6"
        data-aos="fade-up"
        data-aos-delay={300}
        data-aos-anchor="body"
      >
        Where audacious crypto builders meet.
      </div>
      <div
        className="flex items-center gap-3"
        data-aos="fade-up"
        data-aos-delay={800}
        data-aos-anchor="body"
      >
        <a href="https://twitter.com/mike_l_lee" className="inline-flex items-center justify-center px-5 py-2 bg-white rounded-full text-black text-base font-medium leading-6 select-none">Follow us</a>
        <ContentSocial/>
      </div>
    </div>
  )
}
function ContentLogo() {
  return (
    <div className="flex flex-col items-center gap-1 pointer-events-none select-none" data-aos="fade-up" data-aos-anchor="body">
      <Lottie
        animationData={flagAnimation}
        autoplay={true}
        loop={true}
        className="w-16 h-16"
      />
      <h1 className="font-mono text-5xl mt-2 font-semibold">Building Block</h1>
    </div>
  )
}
function ContentSocial() {
  let social = [
    {
      icon: Twitter,
      url: 'https://twitter.com/mike_l_lee',
    },
    {
      icon: Github,
      url: 'https://github.com/revolicon',
    },
    {
      icon: Dribbble,
      url: 'https://dribbble.com/revolicon',
    }
  ]

  return (
    <div className="flex gap-3">
      {social.map((item, index) => (
        <a
          href={item.url}
          key={index}
          target="_blank"
          rel="noreferrer"
          className="h-10 w-10 flex items-center justify-center rounded-full transition-all duration-300 bg-white bg-opacity-0 ring-1 ring-white ring-inset ring-opacity-0 hover:ring-opacity-20 hover:bg-opacity-10"
        >
          <item.icon
            width="20"
            height="20"
          />
        </a>
      ))}
    </div>
  )
}

function Creators() {
  return (
    <div
      className="flex items-center gap-3"
      data-aos="fade-up"
      data-aos-delay={1700}
      data-aos-anchor="body"
    >
      <CreatorsItem link="https://twitter.com/mike_l_lee" badge="Designer" name="Mike Lee"/>
      <span className="text-white text-opacity-25">✦✦</span>
      <CreatorsItem link="https://twitter.com/mike_l_lee" badge="Developer" name="Mike Lee"/>
    </div>
  )
}
function CreatorsItem({ name, link, badge }) {
  return (
    <div className="flex gap-1">
      <span className="hidden sm:inline text-white text-opacity-25">{badge}</span>
      <a
        className="text-white text-opacity-50 hover:text-opacity-100 transition-colors duration-200"
        href={link}
        target="_blank"
        rel="noreferrer"
      >{name}</a>
    </div>
  )
}

function Circle() {
  return (
    <div className={style.circle}>
      <div className={style.circle__inner}>
        <div className={style.circle__image}>
          <Image
            src="/circle.jpg"
            alt="Circle"
            width={1920}
            height={1920}
            loading="eager"
            draggable={false}
            unoptimized={true}
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Circle/>
      <div className="flex flex-col justify-center items-center overflow-hidden px-4 relative overflow-hidden mt-20">
        <div className="max-w-[552px] w-full flex flex-col items-center gap-[72px]">
          <Content/>

                  <div className="py-16 bg-transparent">
                      <div className="container m-auto space-y-8">
                          <div className="m-auto text-center">
                              <h2 className="text-4xl text-white font-bold font-mono">Our partners</h2>
                          </div>
                          <div className="grid grid-cols-3">
                              <div className="p-4">
                                  <svg viewBox="0 0 122 32" fill="none"><path d="M82.3 6.613c-2.158 0-3.822.769-5.366 2.374v-2h-4.238v19.68h4.56V15.253c0-2.613 1.556-4.266 3.917-4.266.429 0 .805.053 1.073.106l3.165-4.16c-1.234-.213-2.307-.32-3.112-.32zM121.625 6.987h-5.258l-4.855 6.419-4.855-6.42h-5.258l7.418 9.917-7.418 9.764h5.365l4.721-6.226 4.721 6.226h5.419l-7.468-9.748 7.468-9.932zM25.86 2.56c-1.556 2.08-1.932 2.773-3.434 2.773H0V32h8.799c1.985 0 3.916-.96 5.15-2.56 1.61-2.133 1.824-2.773 3.38-2.773h22.48V0h-8.853c-1.985 0-3.916.96-5.097 2.56zm6.974 17.227h-9.389c-2.039 0-3.916.853-5.15 2.506-1.61 2.134-1.932 2.774-3.434 2.774h-7.94v-12.8h9.389c2.038 0 3.916-.96 5.15-2.56 1.61-2.08 2.039-2.72 3.487-2.72h7.887v12.8zM66.526 13.227c1.986-1.12 3.38-3.094 3.38-5.707 0-3.84-2.95-7.52-7.242-7.52H49.788v26.667h12.876c4.667 0 7.886-3.307 7.886-7.467 0-2.453-1.126-4.587-4.024-5.973zM54.348 4.16h7.94c1.985 0 3.165 1.867 3.165 3.52 0 2.027-1.77 3.413-3.433 3.413h-7.672V4.16zm7.672 18.347h-7.672v-7.254h7.94c2.039 0 3.702 1.76 3.702 3.574 0 2.026-2.092 3.68-3.97 3.68z" fill="currentColor"></path><path d="M96.839 21.013c-.751 1.174-2.2 1.867-3.81 1.867-2.52 0-4.613-1.707-4.613-4.32h13.627c.215-.8.268-1.173.268-1.867 0-5.973-3.702-10.08-9.281-10.08-5.473 0-9.335 3.894-9.335 10.24 0 6.187 3.701 10.187 9.442 10.187 4.024 0 7.565-1.973 8.584-6.027h-4.882zm-3.81-10.24c2.522 0 4.454 1.6 4.4 4h-8.96c0-2.346 2.04-4 4.56-4z" fill="currentColor"></path></svg>
                                  </div>
                                  <div className="p-4">
                                  <img src="https://assets.website-files.com/6208e20a0ddb3d947e38be03/6272b12cf83e6d80b0b9e066_Harmony-logo-WH.svg" className="w-32" alt="" />
            </div>
                              <div className="p-2">
                                  <img src="https://ml.globenewswire.com/Resource/Download/d3b01806-1bd9-4a96-a972-787d1b6be913?size=3" className="w-32" alt="" />
            </div>
                                                          </div>
                                                      </div>
                                                  </div>

          <div className="flex flex-col items-center gap-6 w-full mb-12">
            <Waitlist/>
            <Waitlist/>
            <Waitlist/>
            <Waitlist/>
            <Waitlist/>
            <Creators/>
          </div>
        </div>
      </div>
    </>
  )
}
