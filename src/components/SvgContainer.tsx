import { useState } from "react";
import Back from "../assets/back";
import Copy from "../assets/copy";
import useCopy from "../hooks/useCopy";

type PropsSvgContainer = {
  data: string | undefined;
  className?: string;
  onImageReceived: (data: boolean) => void;
  onBack: (back: boolean) => void;
};

export const SvgContainer: React.FC<PropsSvgContainer> = ({
  data,
  onImageReceived,
  onBack,
}) => {
  const [isLoadImage, setIsLoadImage] = useState(false);
  const [showCard, setShowCard] = useState(true);
  const [copied, copy, setCopied] = useCopy(data || '');

  const onLoadImage = () => {
    setIsLoadImage(true);
    onImageReceived(isLoadImage);
  };

  const handleTransitionEnd = (event: React.TransitionEvent) => {
    if (event.propertyName === "opacity" && !showCard) {
      onBack(true);
    }
  };

  const onClickBack = () => {
    setShowCard(false);
  };

  const onCopyToClipboard = () => {
    copy();

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }



  return (
    <div
      className={`transition duration-500 ease-in-out  ${showCard ? "opacity-100" : "opacity-0"
        }`}
      onTransitionEnd={handleTransitionEnd}>
      <div className="flex items-center xl:w-[58rem]">
        <div className="p-20 w-full">
          <div className="bg-white rounded-lg shadow-lg w-full">
            {!isLoadImage ? (
              <div className="animate-pulse bg-gray-300 rounded-t-lg h-[38rem]  w-full"></div>
            ) : null}
            <img
              onLoad={onLoadImage}
              src={data}
              alt="svg"
              width="100%"
              height="100%"
              className="rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="font-bold mb-2 text-2xl text-dark-light">
                Take your image
              </h2>
              <div className="flex justify-end space-x-3">
                <button
                  title="Back to form"
                  onClick={() => onClickBack()}
                  className="inline-flex items-center justify-center  shadow rounded-lg active:scale-95 opacity-80  text-secondary-light bg-tertiary-light p-4 transition duration-300 ease-in-out hover:opacity-100 cursor-pointer ">
                  <span className="font-bold mr-2">Back</span> <Back />
                </button>
                <button
                  onClick={() => onCopyToClipboard()}
                  title="Copy on clipboard"
                  className="inline-flex items-center justify-center  shadow rounded-lg active:scale-95 opacity-80  text-white bg-primary-light p-4 transition duration-300 ease-in-out hover:opacity-100 cursor-pointer">
                  <Copy />
                </button>
                <div>
                  {copied && "Copied to clipboard" }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
