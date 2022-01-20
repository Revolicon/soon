import Image from 'next/image'

import style from '../styles/home.module.scss'
import Waitlist from "../components/waitlist";

function Content() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="flex pointer-events-none select-none" data-aos="fade-up" data-aos-anchor="body">
        <Image
          src="/logo.svg"
          alt="Revolicon Logo"
          width={178}
          height={116}
          loading="eager"
          draggable={false}
          unoptimized={true}
          quality={100}
        />
      </div>
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
        <a href="https://twitter.com/revolicon" className="inline-flex items-center justify-center px-5 py-2 bg-white rounded-full text-black text-base font-medium leading-6 select-none">Follow us</a>
        <ContentSocial/>
      </div>
    </div>
  )
}
function ContentSocial() {
  let social = [
    {
      icon: 'twitter',
      url: 'https://twitter.com/revolicon',
    },
    {
      icon: 'github',
      url: 'https://github.com/revolicon',
    },
    {
      icon: 'dribbble',
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
          <Image
            src={`/icons/${item.icon}.svg`}
            alt={item.icon + " Icon"}
            width={20}
            height={20}
            draggable={false}
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
      <CreatorsItem link="https://twitter.com/emrhnugrl" badge="Designer" name="Emirhan Ugurlu"/>
      <span className="text-white text-opacity-25">✦</span>
      <CreatorsItem link="https://twitter.com/berkpw" badge="Developer" name="Berk Altıok"/>
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
