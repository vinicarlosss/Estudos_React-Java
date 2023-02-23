import "./forcaImage.style.css";
import image0 from "../../assets/img/3.jpg";
import image1 from "../../assets/img/5.jpg";
import image2 from "../../assets/img/6.jpg";
import image3 from "../../assets/img/7.jpg";
import image4 from "../../assets/img/8.jpg";
import image5 from "../../assets/img/9.jpg";
import image6 from "../../assets/img/10.jpg";
import { useEffect, useState } from "react";

const forcaImageUpdate = (attempts) => {
  switch (attempts) {
    case 0:
      return image0;
    case 1:
      return image1;
    case 2:
      return image2;
    case 3:
      return image3;
    case 4:
      return image4;
    case 5:
      return image5;
    case 6:
      return image6;
    default:
      break;
  }
};

export function ForcaImage({ wrongLetters }) {
  const [attempt, setAttempt] = useState(-1);
  useEffect(() => {
    setAttempt((lastAttempt) => lastAttempt + 1);
  }, [wrongLetters]);
  return <img className="image" src={forcaImageUpdate(attempt)}></img>;
}
