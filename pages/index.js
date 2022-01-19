import Head from 'next/head'
import Image from 'next/image'

import style from '../styles/home.module.scss'

function Content() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <img className="select-none" src="/logo.svg" alt="Logo" />
      <div className="text-white text-opacity-72 text-lg leading-6 mb-2">Beautifully crafted open source icons.</div>
      <div className="flex gap-3">
        <a href="https://twitter.com/revolicon" className="inline-flex items-center justify-center px-6 py-2.5 bg-white rounded-full text-base font-medium leading-6 select-none">Follow us</a>
      </div>
    </div>
  )
}

function Waitlist() {
  return (
    <div className={style.waitlist}>
      <div className="flex flex-col text-base text-white">
        <div className="font-medium">Join the waitlist</div>
        <div className="text-white text-opacity-50">Sign up to be one of the first to use Revolicon.</div>
      </div>
      <form className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          className="flex-1 text-white placeholder:text-white/[.5] rounded-xl leading-6 text-sm py-3.5 px-6 ring-1 ring-white ring-opacity-10 ring-inset bg-white bg-opacity-5 outline-none focus:outline-none transition-all duration-300 hover:ring-opacity-25 focus:ring-opacity-25"
          placeholder="Email adress"
        />
        <button className="h-13 w-[52px] flex items-center justify-center ring-1 ring-white ring-opacity-10 ring-inset rounded-xl transition-all duration-300 bg-white bg-opacity-5 hover:ring-opacity-25">
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6655 2.62836C10.8707 2.44363 11.1869 2.46027 11.3716 2.66552L15.8716 7.66552C16.0427 7.85567 16.0427 8.14433 15.8716 8.33449L11.3716 13.3345C11.1869 13.5397 10.8707 13.5564 10.6655 13.3717C10.4602 13.1869 10.4436 12.8708 10.6283 12.6655L14.3773 8.5H0.499756C0.223613 8.5 -0.000244141 8.27615 -0.000244141 8C-0.000244141 7.72386 0.223613 7.5 0.499756 7.5H14.3773L10.6283 3.33449C10.4436 3.12923 10.4602 2.81309 10.6655 2.62836Z" fill="white"/>
          </svg>
        </button>
      </form>
    </div>
  )
}

function Creators() {
  return (
    <div className="flex items-center gap-3">
      <CreatorsItem link="https://twitter.com/emrhnugrl" badge="Designer" name="Emirhan Ugurlu"/>
      <span className="text-white text-opacity-25">✦</span>
      <CreatorsItem link="https://twitter.com/berkpw" badge="Developer" name="Berk Altıok"/>
    </div>
  )
}
function CreatorsItem({ name, link, badge }) {
  return (
    <div className="inline-block">
      <span className="text-white text-opacity-25">{badge} </span>
      <a
        className="text-white text-opacity-50 hover:text-opacity-100 transition-colors duration-200"
        href={link}
        target="_blank"
        rel="noreferrer"
      >{name}</a>
    </div>
  )
}

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center overflow-hidden px-4 relative overflow-hidden">
      <div className="circle select-none pointer-events-none">
        <div className="circle__inner">
          <img src="/circle.png" alt="Circle"/>
        </div>
      </div>
      <div className="max-w-[34rem] w-full flex flex-col items-center gap-[72px]">
        <Content/>
        <div className="flex flex-col items-center gap-4 w-full">
          <Waitlist/>
          <Creators/>
        </div>
      </div>
    </div>
  )
}
