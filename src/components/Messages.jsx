import { useEffect, useState } from "react";
import textImg from "../assets/img/image-1.jpg";
// import backgroundImg from "../assets/img/image-2.jpg";

export const Messages = () => {
  let [count, setCount] = useState(0);
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.slip.advice);
        setAdvice(json.slip.advice);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <img src={textImg} alt="" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <p className="mb-2 text-2xl font-bold text-red-500">
            Количество кликов: {count}
          </p>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="p-6 text-white rounded-lg bg-zinc-500 hover:bg-zinc-700"
          >
            Нажми на меня
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6 offset-6">
          <p className="text-lg text-center text-blue-600">{advice}</p>
        </div>
      </div>
    </>
  );
};
