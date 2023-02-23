import "./skindetails.style.css"
import { useContextGlobalLanguage, useSkinsApi } from "../../../hooks/index"
import { useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

export function SkinDetails() {
  const [skin, setSkin] = useState()
  const { skins, getSkinById } = useSkinsApi()
  const { language } = useContextGlobalLanguage
  const location = useLocation()
  const navigate = useNavigate()

  function onClickGoBack() {
    navigate(-1)
  }

  useEffect(() => {
    const skinId = location.state?.skinId
    const selectedSkin = getSkinById(skinId)
    setSkin(selectedSkin)
  }, [skins, getSkinById, location])

  return skin?.id ? (
    <main className="skindetail-main-container">
      <header className="skindetail-header">
        <h1 className="skindetail-title">{skin.name}</h1>
      </header>
      <section className="skindetail-content">
        <img className="skindetail-image" src={skin.image} alt="agent image" />
        <p className="skindetail-description">{skin.description}</p>
        <button onClick={onClickGoBack} className="skindetail-back-button">
        {language == 'brazilian' ? 'Voltar': 'Back'}
        </button>
      </section>
    </main>
  ) : null
}