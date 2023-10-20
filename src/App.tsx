import { useEffect,  useState } from "react";
import { Card } from "./components/Card";
import { CompassForm, ResponseApi } from "./components/form/CompassForm";
import { SvgContainer } from "./components/SvgContainer";
import Confetti from "./components/Confetti";


export default function App() {

  const [showForm, setShowForm] = useState(true)
  const [confetti, setConfetti] = useState(false)
  const [data, setData] = useState<ResponseApi | undefined>();
  const [isRendered, setIsRendered] = useState(true);



  useEffect(() => {
    if (data) {
      // setTimeout(() => {
      //   window.scrollTo({
      //     top: document.body.scrollHeight,
      //     behavior: "smooth"
      //   });
      // }, 1000);
      setTimeout(() => {
        setConfetti(true);
        // Imposta showForm su false dopo l'effetto di dissolvenza
        setTimeout(() => {
          setShowForm(false);
        }, 800);
      }, 2000);

    }
  }, [data]);


  const onDataReceived = (responseData: ResponseApi) => {
    setData(responseData);
    setTimeout(() => {
      setShowForm(false)
    }, 500);
  };

  const handleTransitionEnd = () => {
    if (!showForm) {
      setIsRendered(false);
    }
  };

  return (
    <div className="min-h-screen items-center flex flex-col">
      <div className="w-full">
         {isRendered && <Card className={`transition duration-500 ease-in-out ${showForm ? 'opacity-100' : 'opacity-0'}`} 
          onTransitionEnd={handleTransitionEnd}>
            <CompassForm  onDataReceived={onDataReceived} />
          </Card> }
      </div>

      {data && !showForm && (
        <div className="flex items-center">
          <SvgContainer 
          data={data.data.message} />
          {confetti && <Confetti />}
        </div>
      )}
    </div>
  )
}
