import "./magic.style.css"
import { useEffect } from "react"
import { useGetMagicCards, usePagination } from "../../../hooks/index"
import { Image } from "../../components/index"
import loadingPic from "../../../assets/img/loading.gif"


export function MagicScreen() {
  const { picture, loading, getMagicCards } = useGetMagicCards()
  const { page, handlePreviousPage, handleNextPage } = usePagination()

  useEffect(() => {
    getMagicCards(page)
  }, [page])

  return (
    <main className="magic-main">
    {console.log(picture)}
      <header className="main-header">
        <h1 className="magic-title">Bem vindo ao Magic</h1>
      </header>
      <div className="card-collection">
        {loading === true ? (
          <Image src={loadingPic} />
        ) : (
          picture.map((card, key) => {
            return <Image src={card.imageUrl} key={key} />
          })
        )}
      </div>
      <div className="button-box">
        <button className="button" onClick={() => handlePreviousPage()}>Página anterior</button>
        <span>{`< Página ${page} >`}</span>
        <button className="button" onClick={() => handleNextPage()}>Próxima página</button>
      </div>
    </main>
  )
}