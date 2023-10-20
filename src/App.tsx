import { useEffect,  useState } from "react";
import { Card } from "./components/Card";
import { CompassForm } from "./components/form/CompassForm";
import { SvgContainer } from "./components/SvgContainer";
import Confetti from "./components/Confetti";


export default function App() {

  const [showForm, setShowForm] = useState(true)
  const [confetti, setConfetti] = useState(false)
  const [data, setData] = useState<string | undefined>();
  const [isRendered, setIsRendered] = useState(true);



  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setConfetti(true);
        setTimeout(() => {
          setShowForm(false);
        }, 800);
      }, 2000);

    }
  }, [data]);


  const onDataReceived = (responseData: string) => {
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
          data={data} />
          {confetti && <Confetti />}
        </div>
      )}
    </div>
  )
}
