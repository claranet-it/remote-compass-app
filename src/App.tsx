 import { useEffect, useState } from "react";
// import Confetti from "./components/Confetti";
import { Card } from "./components/Card";
import { CompassForm, ResponseApi } from "./components/form/CompassForm";
import { SvgContainer } from "./components/SvgContainer";
import Confetti from "./components/Confetti";


export default function App() {

  // const [element, setElement] = useState(false)
  const [confetti, setConfetti] = useState(false)
  //const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<ResponseApi | undefined>();


  useEffect(() => {
    if (data) {
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth"
        });
      }, 0);

      setTimeout(() => {
        setConfetti(true)
      }, 1000)

    }
  }, [data]);


  const onDataReceived = (responseData: ResponseApi) => {
    setData(responseData);
  };
  
  return (
    <div className="min-h-screen items-center flex flex-col">
      <div className="w-full">

        <Card>
          <CompassForm onDataReceived={onDataReceived}/>
        </Card>
      </div>


      {data && (
      <div className="flex items-center">
        <SvgContainer data={data.data.message}/>
        {confetti && <Confetti/> }
        </div>
      )}
    </div>
  )
}
