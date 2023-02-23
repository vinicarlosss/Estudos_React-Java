import { useEffect } from "react";
import useGlobalCharacter from "../../../context/character.context";
import { useCharacterById } from "../../../api/user/character.api";
import { Link, Navigate } from "react-router-dom";
import "./backpack.style.css";
import { Header } from "../../components/header/header.component";
export function Backpack() {
  const [characterSelected, setCharacterSelected] = useGlobalCharacter();
  const { characterFounded, fetchCharacterById } = useCharacterById();
  const mensagem = "Você não possui nenhum item, vá até a loja!";

  useEffect(() => {
    fetchCharacterById(characterSelected);
  }, []);

  return (
    <>
      <div className="backpack_page">
        <Header screen="ToCharacter" characterID={characterSelected} />
        <h1 className="character_bag--title">ITENS:</h1>

        <div className="infos_item">
          {characterFounded?.items.length === 0 ? (
            <Link to={"/shop"}>
              <p className="character_bag">{mensagem}</p>
            </Link>
          ) : (
            <>
              {characterFounded?.items.map((item) => {
                return (
                  <div key={item} className="character_bag">
                    <p className="character_bag--name">{item.name}</p>
                    <div className="item_card">
                      <div className="item_card--data">
                        <p>Tipo: {item.type}</p>
                        <p>Aprimoramento: {item.enhancement}</p>
                        <p>Preço: {item.price}</p>
                        <p>Preço de venda: {item.sellPrice}</p>
                      </div>

                      <img src={item.image} alt="item" className="item_bag" />
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}
