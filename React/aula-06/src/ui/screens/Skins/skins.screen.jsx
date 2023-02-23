import "./skins.style.css"
import { Link } from "react-router-dom"
import { useSkinsApi } from "../../../hooks/index"
import { SkinItem } from "../../components/SkinItem/skinitem.component"
import loadingImage from "../../../assets/img/loading.gif"

export function Skins() {
  const { skins, loading } = useSkinsApi()

  return (
    <main className="skins-main">
      {loading ? (
        <img src={loadingImage} alt="loading image" />
      ) : (
        <section className="skins-container">
          {skins.map((skin, index) => {
            return <SkinItem key={index} skin={skin} />
          })}
        </section>
      )}
      <footer className="footer-skin-navbar">
        <ul className="footer-skikns-navbar-list">
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/agents">Agentes</Link>
          </li>
          <li>
            <Link to="/skins">Skins</Link>
          </li>
        </ul>
      </footer>
    </main>
  )
}