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
        Beautifully crafted open source icons.
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
      <svg width="178" height="48" viewBox="0 0 178 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.9361 39H20.8161L15.6961 26.44H8.13614V39H3.41614V8.48H15.6961C18.6828 8.48 21.0428 9.22667 22.7761 10.72C24.5095 12.1867 25.3761 14.4 25.3761 17.36C25.3761 19.36 24.9228 21.0667 24.0161 22.48C23.1095 23.8933 21.8561 24.9333 20.2561 25.6L25.9361 39ZM8.13614 22.32H15.0561C16.8695 22.32 18.2561 21.9067 19.2161 21.08C20.2028 20.2533 20.6961 19.0533 20.6961 17.48C20.6961 15.96 20.2028 14.7867 19.2161 13.96C18.2561 13.1333 16.8695 12.72 15.0561 12.72H8.13614V22.32Z M37.6633 39.44C35.5033 39.44 33.5833 38.9467 31.9033 37.96C30.2233 36.9467 28.9167 35.5733 27.9833 33.84C27.05 32.08 26.5833 30.12 26.5833 27.96C26.5833 25.9333 26.9967 24.0267 27.8233 22.24C28.6767 20.4533 29.93 19.0133 31.5833 17.92C33.2367 16.8267 35.2233 16.28 37.5433 16.28C39.5167 16.28 41.33 16.7067 42.9833 17.56C44.6633 18.4133 46.01 19.6933 47.0233 21.4C48.0367 23.08 48.5433 25.1333 48.5433 27.56V28.76H31.0633C31.1433 29.64 31.3567 30.44 31.7033 31.16C32.2367 32.52 33.0367 33.6 34.1033 34.4C35.17 35.2 36.3833 35.6 37.7433 35.6C39.1567 35.6 40.37 35.24 41.3833 34.52C42.3967 33.7733 43.13 32.8267 43.5833 31.68H48.1833C47.4367 33.9733 46.17 35.84 44.3833 37.28C42.6233 38.72 40.3833 39.44 37.6633 39.44ZM43.9833 25.2C43.8767 24.3733 43.65 23.6667 43.3033 23.08C42.77 22.0667 41.9967 21.2933 40.9833 20.76C39.9967 20.2 38.9033 19.92 37.7033 19.92C36.45 19.92 35.3433 20.2 34.3833 20.76C33.4233 21.2933 32.6633 22.0667 32.1033 23.08C31.7833 23.6133 31.53 24.32 31.3433 25.2H43.9833Z M60.1852 39H56.6252L48.4252 16.72H53.1852L58.3852 31.96L63.7052 16.72H68.4652L60.1852 39Z M79.5246 39.44C77.3646 39.44 75.4312 38.9467 73.7246 37.96C72.0446 36.9733 70.7246 35.6 69.7646 33.84C68.8312 32.0533 68.3646 30.0267 68.3646 27.76C68.3646 25.5467 68.8312 23.5733 69.7646 21.84C70.7246 20.1067 72.0446 18.7467 73.7246 17.76C75.4312 16.7733 77.3646 16.28 79.5246 16.28C81.6846 16.28 83.6046 16.7733 85.2846 17.76C86.9912 18.7467 88.3112 20.1067 89.2446 21.84C90.2046 23.5733 90.6846 25.5467 90.6846 27.76C90.6846 30 90.2179 32.0133 89.2846 33.8C88.3512 35.56 87.0312 36.9467 85.3246 37.96C83.6446 38.9467 81.7112 39.44 79.5246 39.44ZM79.5246 35.6C80.8046 35.6 81.9512 35.2667 82.9646 34.6C83.9779 33.9333 84.7646 33 85.3246 31.8C85.9112 30.6 86.2046 29.2533 86.2046 27.76C86.2046 26.32 85.9112 25.0267 85.3246 23.88C84.7646 22.7067 83.9779 21.7867 82.9646 21.12C81.9512 20.4533 80.8046 20.12 79.5246 20.12C78.2446 20.12 77.0979 20.4533 76.0846 21.12C75.0712 21.76 74.2712 22.6667 73.6846 23.84C73.1246 24.9867 72.8446 26.2933 72.8446 27.76C72.8446 29.28 73.1246 30.64 73.6846 31.84C74.2712 33.0133 75.0712 33.9333 76.0846 34.6C77.0979 35.2667 78.2446 35.6 79.5246 35.6Z M98.2258 39C96.4925 39 95.1858 38.6 94.3058 37.8C93.4258 37 92.9858 35.6533 92.9858 33.76V8.48H97.3858V32.68C97.3858 33.6133 97.5325 34.28 97.8258 34.68C98.1192 35.08 98.7192 35.28 99.6258 35.28H100.866V39H98.2258Z M107.028 39H102.628V16.72H107.028V39ZM104.828 13.6C104.028 13.6 103.335 13.3333 102.748 12.8C102.162 12.2667 101.868 11.6 101.868 10.8C101.868 10 102.162 9.33333 102.748 8.8C103.335 8.26667 104.028 8 104.828 8C105.655 8 106.348 8.26667 106.908 8.8C107.495 9.33333 107.788 10 107.788 10.8C107.788 11.6 107.495 12.2667 106.908 12.8C106.348 13.3333 105.655 13.6 104.828 13.6Z M120.436 39.44C118.276 39.44 116.356 38.9467 114.676 37.96C113.022 36.9733 111.729 35.6 110.796 33.84C109.862 32.0533 109.396 30.0267 109.396 27.76C109.396 25.5467 109.862 23.5733 110.796 21.84C111.729 20.1067 113.022 18.7467 114.676 17.76C116.356 16.7733 118.276 16.28 120.436 16.28C123.022 16.28 125.209 16.9467 126.996 18.28C128.809 19.6133 129.982 21.4 130.516 23.64H125.796C125.396 22.4933 124.729 21.6 123.796 20.96C122.862 20.32 121.742 20 120.436 20C119.156 20 118.022 20.3333 117.036 21C116.049 21.64 115.276 22.5467 114.716 23.72C114.156 24.8933 113.876 26.24 113.876 27.76C113.876 29.3333 114.156 30.72 114.716 31.92C115.276 33.12 116.049 34.0533 117.036 34.72C118.022 35.3867 119.156 35.72 120.436 35.72C121.822 35.72 122.996 35.36 123.956 34.64C124.942 33.8933 125.596 32.9067 125.916 31.68H130.676C130.169 34.08 128.982 35.9733 127.116 37.36C125.276 38.7467 123.049 39.44 120.436 39.44Z M143.009 39.44C140.849 39.44 138.916 38.9467 137.209 37.96C135.529 36.9733 134.209 35.6 133.249 33.84C132.316 32.0533 131.849 30.0267 131.849 27.76C131.849 25.5467 132.316 23.5733 133.249 21.84C134.209 20.1067 135.529 18.7467 137.209 17.76C138.916 16.7733 140.849 16.28 143.009 16.28C145.169 16.28 147.089 16.7733 148.769 17.76C150.476 18.7467 151.796 20.1067 152.729 21.84C153.689 23.5733 154.169 25.5467 154.169 27.76C154.169 30 153.702 32.0133 152.769 33.8C151.836 35.56 150.516 36.9467 148.809 37.96C147.129 38.9467 145.196 39.44 143.009 39.44ZM143.009 35.6C144.289 35.6 145.436 35.2667 146.449 34.6C147.462 33.9333 148.249 33 148.809 31.8C149.396 30.6 149.689 29.2533 149.689 27.76C149.689 26.32 149.396 25.0267 148.809 23.88C148.249 22.7067 147.462 21.7867 146.449 21.12C145.436 20.4533 144.289 20.12 143.009 20.12C141.729 20.12 140.582 20.4533 139.569 21.12C138.556 21.76 137.756 22.6667 137.169 23.84C136.609 24.9867 136.329 26.2933 136.329 27.76C136.329 29.28 136.609 30.64 137.169 31.84C137.756 33.0133 138.556 33.9333 139.569 34.6C140.582 35.2667 141.729 35.6 143.009 35.6Z M156.55 39V16.72H160.95V19.84C161.937 18.5333 162.924 17.6133 163.91 17.08C164.897 16.5467 166.017 16.28 167.27 16.28C170.604 16.28 172.857 17.48 174.03 19.88C174.484 20.76 174.764 21.6667 174.87 22.6C174.977 23.5067 175.03 24.6 175.03 25.88V39H170.63V25.84C170.63 23.5733 170.244 22 169.47 21.12C168.75 20.3733 167.71 20 166.35 20C164.724 20 163.47 20.5067 162.59 21.52C162.004 22.16 161.577 23.0267 161.31 24.12C161.07 25.2133 160.95 26.6933 160.95 28.56V39H156.55Z" fill="white"/>
      </svg>
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
      <span className="text-white text-opacity-25">✦</span>
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
      <div className="w-full h-full flex flex-col justify-center items-center overflow-hidden px-4 relative overflow-hidden">
        <div className="max-w-[552px] w-full flex flex-col items-center gap-[72px]">
          <Content/>
          <div className="flex flex-col items-center gap-6 w-full">
            <Waitlist/>
            <Creators/>
          </div>
        </div>
      </div>
    </>
  )
}
