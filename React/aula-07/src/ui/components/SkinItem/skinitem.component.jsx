import "./skinitem.style.css"
import { Link } from "react-router-dom"

export function SkinItem({ skin }) {
  return (
    <Link
      className="skin-container"
      to={`/skinDetail`}
      state={{ skinId: skin.id }}
    >
      <img src={skin.image} className="skin-img" alt="skin image" />
      <p className="skin-name">{skin.name}</p>
    </Link>
  )
}
