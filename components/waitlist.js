import {useRef, useState} from "react";
import useSound from "use-sound";

import style from "../styles/waitlist.module.scss";
import ReCAPTCHA from "react-google-recaptcha";

import axios from "axios";
import { Arrow, Check, Loading } from "/components/icons.js";


export default function Waitlist() {
  const recaptchaRef = useRef();
  const emailRef = useRef();

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});

  const [play, { stop }] = useSound("/success.mp3", { volume: 0.4 });

  const handleSubmit = async (event) => {
    event.preventDefault();
    stop();
    if (!event.target.email.value) {
      emailRef.current.focus();
    } else {
      setLoading(true)
      setResult({})

      const token = await recaptchaRef.current.executeAsync();

      axios.post('/api/join', { token, email: event.target.email.value })
        .then(response => {
          setResult(response.data);
          setLoading(false);

          if (response.data.success) play();
        })
        .catch(error => {
          setResult({
            success: false,
            message: "System error! Please try again later."
          });
          setLoading(false);
        });

      recaptchaRef.current.reset();
    }
  }

  return (
    <div
      className={style.waitlist}
      data-aos="fade-up"
      data-aos-delay={1400}
      data-aos-anchor="body"
    >
      <div className="flex flex-col text-base text-white">
        <div className="font-medium">Join the waitlist</div>
        <div className="text-white text-opacity-50">Sign up to be one of the first to use Revolicon.</div>
      </div>
      <form onSubmit={handleSubmit}>
        <label className={style.waitlist__form}>
          <input ref={emailRef} type="email" name="email" id="email" autoComplete="email" placeholder="Email adress" disabled={loading || result?.success} />
          <button type="submit" className={[
            loading || result?.success ? "hover:bg-transparent cursor-default" : "",
            result?.success ? "pointer-events-none" : ""
          ].join(" ")}>
            {!loading && (
              (!result?.success && <Arrow className="w-4 h-4 text-white" />) ||
              (result?.success && <Check className="w-4 h-4 text-white" />)
            )}
            {loading && <Loading className="w-4 h-4 text-white animate-spin" />}
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
