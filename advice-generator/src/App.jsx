import { useState } from "react";
import desktopDivider from "./assets/pattern-divider-desktop.svg";
import mobileDivider from "./assets/pattern-divider-mobile.svg";
import dice from "./assets/icon-dice.svg";
import axios from "axios";

// https://api.adviceslip.com/advice

function App() {
  const [advice, setAdvice] = useState("");
  const [adviceNumber, setAdviceNumber] = useState("");

  const url = "https://api.adviceslip.com/advice";

  axios
    .get(url)
    .then((response) => {
      setAdviceNumber(response.data.slip.id);
      setAdvice(response.data.slip.advice);
    })
    .catch((error) => console.log(error));

  const getAdvice = () => {
    axios
      .get(url)
      .then((response) => {
        setAdviceNumber(response.data.slip.id);
        setAdvice(response.data.slip.advice);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <section className='flex min-h-screen place-items-center justify-center px-4 font-manrope sm:px-0'>
        <div className='max-w-lg rounded-2xl bg-dark-grayish-blue px-6 py-14 text-center sm:px-10'>
          <div className='text-xs tracking-wider text-neon-green'>
            <p>A D V I C E # {adviceNumber}</p>
          </div>
          <div className='my-7 text-2xl text-light-cyan sm:text-[1.75rem]'>
            <p>{advice}</p>
          </div>
          <div className='hidden items-center justify-center sm:block'>
            <img src={desktopDivider} alt='' />
          </div>
          <div className='flex items-center  justify-center sm:hidden'>
            <img src={mobileDivider} alt='' />
          </div>
          <div className='flex justify-center'>
            <div className='absolute mx-auto mt-6'>
              <button
                onClick={getAdvice}
                className='tw-button flex h-14 w-14 items-center justify-center rounded-full bg-neon-green '
              >
                <img src={dice} alt='' />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
