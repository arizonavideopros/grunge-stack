import { useLottie, useLottieInteractivity } from "lottie-react"

import testLottie from "./Sign3.json";

const style = {
    height: '40vh',
    marginBottom: '1vh',
    marginTop: '1vh',
  };
  
  const options = {
    animationData: testLottie,
  };
  
  const Example = () => {
    const lottieObj = useLottie(options, style);
    const Animation = useLottieInteractivity({
      lottieObj,
      mode: "scroll",
      actions: [
          {
            visibility: [0.0, 0.3],
            type: "stop",
            frames: [1],
          },
          {
            visibility: [0.3, 0.8],
            type: "play",
            frames: [1, 990],
          },
          {
            visibility: [0.9, 1.0],
            type: "stop",
            frames: [991],
          },
        ],
    });
  
    return Animation;
  };
  
  export default Example;