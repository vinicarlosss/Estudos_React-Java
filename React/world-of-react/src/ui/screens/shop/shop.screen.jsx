import React from "react";
import "./shop.style.css";
import {
  useShop,
  useCharacterById,
  useBuyItem,
  useItemById,
  useSellItem,
  useActualUser,
} from "../../../api";
import { ItemToSell } from "../../components/item-to-sell/item-to-sell.component";
import { useState, useEffect } from "react";
import useGlobalCharacter from "../../../context/character.context";
import { Header } from "../../components/header/header.component";
const MESSAGE_TIME = 3000;
export function Shop() {
  const [idDoPersonagem] = useGlobalCharacter();
  const { characterFounded, fetchCharacterById } = useCharacterById();
  const { shop, fechtShop } = useShop();
  const { messageBuyItem, setMessageBuyItem, buyItem } = useBuyItem();
  const { messageSellItem, setMessageSellItem, sellItem } = useSellItem();
  const [itemTypeSelected, setItemTypeSelected] = useState(null);
  const [groupOfItemsSelected, setGroupOfItemsSelected] = useState(null);
  const { selectedItemToBuy, setSelectedItem, fechtSelectedItemToBuy } =
    useItemById();
  const [selectedItemIdToSell, setSelectedItemIdToSell] = useState();
  const { actualUser, fetchActualUser } = useActualUser();
  const itemTypes = shop
    ?.map((itens) => itens.type)
    .filter((type, index, types) => types.indexOf(type) === index);

  function handleTypeChange(event) {
    setItemTypeSelected(event.target.value);
  }

  function handleSelectedItemChangeToBuy(event) {
    fechtSelectedItemToBuy(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const characterTypesItems = characterFounded.items.map((item) => item.type);

    if (characterTypesItems.includes(itemTypeSelected)) {
      setMessageBuyItem("Deve vender seu item deste tipo para comprar outro!!");
      return;
    }

    buyItem(selectedItemToBuy?.id, idDoPersonagem);
    setSelectedItem("");
    setTimeout(() => {
      setMessageBuyItem("");
    }, MESSAGE_TIME);
  }

  function handleSelectedItemChangeToSell(event) {
    setSelectedItemIdToSell(event.target.value);
  }

  function handleSellItem() {
    sellItem(selectedItemIdToSell, idDoPersonagem);

    setTimeout(() => {
      setMessageSellItem("");
    }, MESSAGE_TIME);
  }

  function renderItensToSell() {
    const characterFiltersdByCheatItems = characterFounded?.items.filter(
      (item) => !item.isCheat
    );
    return characterFiltersdByCheatItems?.map((item) => (
      <ItemToSell
        key={item.id}
        item={item}
        handleSelectedItemChangeToSell={handleSelectedItemChangeToSell}
        selected={selectedItemIdToSell}
      />
    ));
  }

  useEffect(() => {
    fechtShop();
  }, []);

  useEffect(() => {
    fetchCharacterById(idDoPersonagem);
    fetchActualUser();
  }, [messageSellItem, messageBuyItem]);

  useEffect(() => {
    if (itemTypeSelected === "EXPANSAO") {
      const itemsSelected = shop?.filter(
        (item) => item.type === itemTypeSelected
      );
      const itemNotOwnedByUser = itemsSelected?.filter(
        (item) => !actualUser?.expansions.includes(item.expansionId)
      );
      setGroupOfItemsSelected(itemNotOwnedByUser);
    } else {
      const itemOwnedByCharacter = characterFounded?.items.find(
        (item) => item.type === itemTypeSelected
      );

      const itemsSelected = shop?.filter(
        (item) => item.type === itemTypeSelected
      );

      const itemsSelectedFiltered = itemsSelected?.filter(
        (item) => item.id !== itemOwnedByCharacter?.id
      );

      setGroupOfItemsSelected(itemsSelectedFiltered);
    }
  }, [itemTypeSelected, messageSellItem, messageBuyItem]);

  return (
    <>
      <main className="storePage">
        <Header screen="ToCharacter" characterID={idDoPersonagem} />
        <h1 className="store_title">LOJA</h1>
        <div className="store_content">
          <div className="store_buy">
            <h1 className="components_title">COMPRAR</h1>
            <h3 className="money">
              Dinheiro restante: {characterFounded?.money}
            </h3>
            <div>
              <form action="" onSubmit={handleSubmit} className="store_form">
                <div className="store_content--one">
                  <div className="store_items--type">
                    <h3 className="text">Tipo do item</h3>
                    <select
                      onChange={handleTypeChange}
                      defaultValue=""
                      className="select"
                    >
                      <option value="" disabled>
                        Selecione ...
                      </option>
                      {itemTypes?.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="store_items--option">
                    <h3 className="text">Selecione o item</h3>
                    <select
                      onChange={handleSelectedItemChangeToBuy}
                      defaultValue=""
                      className="select"
                    >
                      <option value="" disabled>
                        Selecione ...
                      </option>
                      {groupOfItemsSelected?.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  {selectedItemToBuy && (
                    <div className="cardItem">
                      <img
                        src={selectedItemToBuy.image}
                        alt={selectedItemToBuy.name}
                        className="cardItem_content--image"
                      />

                      <p className="cardItem_content--valor">
                        Valor do item selecionado: {selectedItemToBuy.price}
                      </p>

                      <button className="button_shopPage">Comprar</button>
                    </div>
                  )}
                </div>
              </form>
            </div>

            <span className="mensagem_store">{messageBuyItem}</span>
          </div>
          <div className="store_sell">
            <h1 className="components_title">VENDER</h1>
            <div className="itemsSell">
              {characterFounded && characterFounded?.items.length === 0 ? (
                <span className="mensagem_store">
                  Você não possui itens para vender!
                </span>
              ) : (
                <>
                  {renderItensToSell()}
                  <button onClick={handleSellItem} className="button_shopPage">
                    Vender
                  </button>
                </>
              )}
            </div>

            {messageSellItem && (
              <span className="mensagem_store">{messageSellItem}</span>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
