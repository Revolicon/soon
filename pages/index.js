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
          className="h-13 flex rounded-xl border border-white border-opacity-8 flex-1 bg-white/[.05] outline-none px-5 placeholder-white/[.5] text-white transition-colors duration-300 focus:outline-none"
          placeholder="Email adress"
        />
        <button className="h-13 px-6 flex items-center justify-center border border-transparent text-white backdrop-blur-26 rounded-xl transition-all duration-300 hover:(border-white/[.08] bg-white/[.03])">Submit</button>
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
