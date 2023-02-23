import "./image.style.css"
import randomPic from "../../../assets/img/no-image.png"

export function Image({ src }) {
  return <img className="card-img" src={src === undefined ? randomPic : src} alt="magic card" />
}
