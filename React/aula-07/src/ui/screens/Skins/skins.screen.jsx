import "./skins.style.css"
import { Link } from "react-router-dom"
import { useSkinsApi } from "../../../hooks/index"
import { SkinItem } from "../../components/SkinItem/skinitem.component"
import { useContextGlobalLanguage } from '../../../hooks/index'
import { useEffect } from "react"
import loadingImage from "../../../assets/img/loading.gif"

export function Skins() {
  const { skins, fetchSkins, loading } = useSkinsApi()
  const { language, handleLanguage } = useContextGlobalLanguage()

  useEffect(() => {
    fetchSkins()
  }, [language])
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
            <Link to="/">{language == 'brazilian' ? 'Início' : 'Home'}</Link>
          </li>
          <li>
            <Link to="/agents">{language == 'brazilian' ? 'Agentes' : 'Agents'}</Link>
          </li>
          <li>
            <Link to="/skins">Skins</Link>
          </li>
          <li>
            <form>
              <select className="form-select" name="language" value={language} onChange={handleLanguage}>
                <option className="select-option" value='brazilian' onChange={handleLanguage}>
                  PT-br
                </option>
                <option className="select-option" value='english' onChange={handleLanguage}>
                  EN-us
                </option>
              </select>
            </form>
          </li>
        </ul>
      </footer>
    </main>
  )
}