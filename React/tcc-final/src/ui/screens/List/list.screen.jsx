import { useEffect, useState } from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { GiBroom } from 'react-icons/gi';
import {
  useAddGrocery,
  useDeleteGrocery,
  useGetGroceries,
  useSendGroceriesEmail,
} from '../../../hook';
import { Tooltip } from '../../components/Tooltip/tooltip.component';
import {
  Button,
  Footer,
  GroceryItem,
  Header,
  Modal,
  TextInput,
} from '../../index';
import './list.style.css';

export function List() {
  const { list, totalPrice, fetchGroceries } = useGetGroceries();
  const { input, DEFAULT_INPUT, setInput, handleSubmit, handleChange } =
    useAddGrocery(onSubmit);
  const [listModal, setListModal] = useState(false);
  const { remove, cleanList } = useDeleteGrocery(fetchGroceries);
  const { sendEmail } = useSendGroceriesEmail();

  function toggleModal() {
    setListModal(!listModal);
  }

  function onSubmit() {
    fetchGroceries();
    setInput(DEFAULT_INPUT);
    toggleModal();
  }

  useEffect(() => {
    fetchGroceries();
  }, []);

  function renderContent() {
    return (
      <>
        {list?.length > 0 ? (
          list?.map((item) => {
            return (
              <GroceryItem
                key={item.id}
                item={item}
                handleRemove={remove}
                updateInfo={fetchGroceries}
              />
            );
          })
        ) : (
          <GroceryItem empty={true} />
        )}
      </>
    );
  }

  return (
    <>
      <main className="list-main">
        <Header />
        <section className="list-section">
          <div className="list-title-container">
            <div className="list-title-help-div">
              <h1>Lista de compras</h1>
              <Tooltip
                hiddenText={'Clique em qualquer campo para editar itens'}
              >
                <AiFillQuestionCircle className="list-question-icon" />
              </Tooltip>
            </div>
            <div>
              <Button onClick={toggleModal} className="list-button">
                +
              </Button>
              <Button
                onClick={() => cleanList(list)}
                className="list-button-clean"
              >
                <GiBroom className="list-button-clean-icon" />
              </Button>
            </div>
          </div>
          <table className="list-table">
            <thead className="list-table-head">
              <tr className="list-table-head-container">
                <th className="list-table-head-row">Item</th>
                <th className="list-table-head-row">Valor estimado</th>
                <th className="list-table-head-row">Quantidade</th>
                <th className="list-table-head-row">Remover item</th>
              </tr>
            </thead>
            <tbody className="list-table-body">{renderContent()}</tbody>
          </table>
          <div className="list-value-container">
            <div>
              <p className="list-value-title">Valor total estimado:</p>
              <p className="list-value-title">R$ {totalPrice}</p>
            </div>
            <Button
              className="list-footer-button"
              onClick={() => sendEmail(list)}
            >
              Enviar por email
            </Button>
          </div>
        </section>
        <Footer />
        <form onSubmit={handleSubmit}>
          {listModal && (
            <Modal toggleModal={toggleModal}>
              <h1>Cadastro de item</h1>
              <p>Campos com asterisco* são campos obrigatórios</p>
              <TextInput
                inputValue={input.name}
                inputName="name"
                forId="name"
                labelText="Item*"
                placeholder="Ex.: Carne"
                onChange={handleChange}
              ></TextInput>
              <TextInput
                inputValue={input.price}
                inputName="price"
                forId="price"
                labelText="Valor"
                placeholder="49.99"
                onChange={handleChange}
                inputType="number"
                step="any"
              ></TextInput>
              <TextInput
                inputValue={input.quantity}
                inputName="quantity"
                forId="quantity"
                placeholder="1"
                labelText="Quantidade*"
                onChange={handleChange}
                inputType="number"
                step="1"
                min="1"
              ></TextInput>
              <Button>Cadastrar</Button>
            </Modal>
          )}
        </form>
      </main>
    </>
  );
}
