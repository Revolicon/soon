import {useRef} from "react";
import style from "../styles/waitlist.module.scss";
import ReCAPTCHA from "react-google-recaptcha";

export default function Waitlist() {
  const recaptchaRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await recaptchaRef.current.executeAsync();

    console.log(token)
  }

  return (
    <div
      className={style.waitlist}
      data-aos="fade-up"
      data-aos-delay={1400}
    >
      <div className="flex flex-col text-base text-white">
        <div className="font-medium">Join the waitlist</div>
        <div className="text-white text-opacity-50">Sign up to be one of the first to use Revolicon.</div>
      </div>
      <form onSubmit={handleSubmit}>
        <label className={style.waitlist__form}>
          <input type="email" name="email" placeholder="Email adress" />
          <button type="submit">
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6655 2.62836C10.8707 2.44363 11.1869 2.46027 11.3716 2.66552L15.8716 7.66552C16.0427 7.85567 16.0427 8.14433 15.8716 8.33449L11.3716 13.3345C11.1869 13.5397 10.8707 13.5564 10.6655 13.3717C10.4602 13.1869 10.4436 12.8708 10.6283 12.6655L14.3773 8.5H0.499756C0.223613 8.5 -0.000244141 8.27615 -0.000244141 8C-0.000244141 7.72386 0.223613 7.5 0.499756 7.5H14.3773L10.6283 3.33449C10.4436 3.12923 10.4602 2.81309 10.6655 2.62836Z" fill="white"/>
            </svg>
          </button>
        </label>
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          theme="dark"
          sitekey="6LcfZyUeAAAAAN7bjLWN7woeVRHDLsVypV_InnfP"
          onChange={() => console.log}
        />
      </form>
    </div>
  )
}
