import {useRef, useState} from "react";
import style from "../styles/waitlist.module.scss";
import ReCAPTCHA from "react-google-recaptcha";

import axios from "axios";

export default function Waitlist() {
  const recaptchaRef = useRef();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    setResult({})

    const token = await recaptchaRef.current.executeAsync();

    axios.post('/api/join', { token, email: event.target.email.value })
      .then(response => {
        setResult(response.data);
        setLoading(false);
      })
      .catch(error => {
        setResult(error.response.data);
        setLoading(false);
      });
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
          <input type="email" name="email" placeholder="Email adress" disabled={loading || result?.success} />
          <button type="submit" className={loading || result?.success ? "hover:bg-transparent cursor-default" : ""}>
            {(!loading && !result?.success) && (
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6655 2.62836C10.8707 2.44363 11.1869 2.46027 11.3716 2.66552L15.8716 7.66552C16.0427 7.85567 16.0427 8.14433 15.8716 8.33449L11.3716 13.3345C11.1869 13.5397 10.8707 13.5564 10.6655 13.3717C10.4602 13.1869 10.4436 12.8708 10.6283 12.6655L14.3773 8.5H0.499756C0.223613 8.5 -0.000244141 8.27615 -0.000244141 8C-0.000244141 7.72386 0.223613 7.5 0.499756 7.5H14.3773L10.6283 3.33449C10.4436 3.12923 10.4602 2.81309 10.6655 2.62836Z" fill="white"/>
              </svg>
            )}
            {(!loading && result?.success) && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20">
                <path fill="currentColor" fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            )}
            {loading && (
              <svg className="animate-spin text-white w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
            )}
          </button>
        </label>
        {(!loading && result?.message && !result?.success) && (
          <div className="mt-2.5 ml-3 text-xs text-red-500">{result.message}</div>
        )}
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          theme="dark"
          sitekey="6LcfZyUeAAAAAN7bjLWN7woeVRHDLsVypV_InnfP"
        />
      </form>
    </div>
  )
}
