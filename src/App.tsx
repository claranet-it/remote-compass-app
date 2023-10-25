import {  useEffect, useState } from "react";
import { Card } from "./components/Card";
import { CompassForm } from "./components/form/CompassForm";
import { SvgContainer } from "./components/SvgContainer";
import Confetti from "./components/Confetti";


export default function App() {

  const [showForm, setShowForm] = useState(true)
  // const [confetti, setConfetti] = useState(false)
  const [data, setData] = useState<string | undefined>();
  const [showImage, setShowImage] = useState(false);
  const [confetti, setConfetti] = useState(false)
  const [isRendered, setIsRendered] = useState(true);



  useEffect(() => {
    if (showImage) {
      setConfetti(true)
    }
  }, [showImage]);


  const onDataReceived = (responseData: string) => {
    setData(responseData);
    setTimeout(() => {
      setShowForm(false)
    }, 500);
  };

  const onImageReceived = (responseData: boolean) => {
    setShowImage(responseData);
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
            <CompassForm  onDataReceived={onDataReceived} isLoading={!!data}/>
          </Card> }
      </div>

      {data && !showForm && !showImage && (
        <div className="flex items-center">
          <SvgContainer 
          onImageReceived={onImageReceived}
          data={data} />
          { confetti && <Confetti />}
        </div>
      )}
    </div>
  )
}
