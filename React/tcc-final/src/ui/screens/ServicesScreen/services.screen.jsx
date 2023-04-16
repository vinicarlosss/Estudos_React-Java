import { useEffect, useState } from 'react';
import {
  CATEGORIA,
  ORDER_BY,
  REGISTER_CATEGORIA,
} from '../../../helpers/servicesList';
import {
  Pagination,
  useGetServices,
  usePagination,
  useServicesFormInputs,
} from '../../../hook';
import { useAddService } from '../../../hook/useAddServico/useAddServico.hook';
import { Loading } from '../../components/Loading/loading.component';
import {
  Button,
  Footer,
  Header,
  Modal,
  SelectInput,
  ServiceCard,
  TextInput,
} from '../../index';
import './services.style.css';

export function Services() {
  const [isServiceChanged, setServiceChange] = useState(false);
  const { page, setPage } = usePagination();
  const { services, fetchServices, totalPages, isLoading } =
    useGetServices(page);
  const { formInputs, handleChange } = useServicesFormInputs();
  const [addService, setAddService] = useState(false);
  const { serviceInputs, handleServiceInputChange, onAddServiceClick } =
    useAddService();

  const toggleModal = () => {
    setAddService(!addService);
  };

  useEffect(() => {
    fetchServices(formInputs.categoria, formInputs.order);
    setServiceChange(false);
  }, [formInputs, page, totalPages, isServiceChanged]);

  function renderOptions(options) {
    return options.map(({ value, campo }, index) => (
      <option key={index} value={value}>
        {campo}
      </option>
    ));
  }

  return (
    <>
      <Header />
      <div className="services-main">
        <section className="services-section">
          <div className="services-filter">
            <SelectInput
              inputName="categoria"
              className="services-filter-select"
              labelText="Categoria de serviços"
              onChange={handleChange}
            >
              {renderOptions(CATEGORIA)}
            </SelectInput>
            <SelectInput
              inputName="order"
              className="services-filter-select"
              labelText="Ordenar por"
              onChange={handleChange}
            >
              {renderOptions(ORDER_BY)}
            </SelectInput>
            <Button onClick={toggleModal} className="services-filter-button">
              +
            </Button>
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div className="center-services">
                {services.map(
                  (
                    {
                      categoria,
                      descricao,
                      titulo,
                      fotoPrestador,
                      imagem,
                      nomePrestador,
                      dataPublicacao,
                      emailPrestador,
                      telefonePrestador,
                      valor,
                      idServico,
                      idUsuario,
                    },
                    index
                  ) => {
                    return (
                      <ServiceCard
                        key={index}
                        setServiceChange={setServiceChange}
                        page={page}
                        setPage={setPage}
                        services={services}
                        idServico={idServico}
                        idUsuario={idUsuario}
                        categoryImage={imagem}
                        userImage={fotoPrestador}
                        category={categoria}
                        title={titulo}
                        description={descricao}
                        userName={nomePrestador}
                        valor={valor}
                        telefonePrestador={telefonePrestador}
                        emailPrestador={emailPrestador}
                        dataPublicacao={dataPublicacao}
                      />
                    );
                  }
                )}
              </div>
            </>
          )}
          <div className={`select-page ${isLoading && 'post-is-loading'}`}>
            {totalPages >= 1 && (
              <Pagination pages={totalPages} setCurrentPage={setPage} />
            )}
          </div>
        </section>
      </div>
      <Footer className="footer-follow-scroll" />
      {addService && (
        <Modal toggleModal={toggleModal}>
          <h1>Cadastre um novo serviço</h1>
          <p>Campos com asterisco* são campos obrigatórios</p>
          <TextInput
            placeholder="Ex.: Limpeza em casas"
            labelText="Título*"
            inputName="titulo"
            forId="titulo"
            inputValue={serviceInputs.titulo}
            onChange={handleServiceInputChange}
          />

          <TextInput
            placeholder="Ex.: Realizo limpeza diária em horário comercial"
            labelText="Descrição*"
            inputName="descricao"
            forId="descricao"
            inputValue={serviceInputs.descricao}
            onChange={handleServiceInputChange}
          />

          <TextInput
            placeholder="Ex.: 40.00"
            labelText="Valor do serviço"
            inputName="valor"
            inputType="number"
            forId="valor"
            inputValue={serviceInputs.valor}
            onChange={handleServiceInputChange}
          />

          <TextInput
            placeholder="Cole o url de uma imagem aqui"
            labelText="Imagem do serviço"
            inputName="imagem"
            forId="imagem"
            inputValue={serviceInputs.imagem}
            onChange={handleServiceInputChange}
          />

          <div className="select-input-align">
            <SelectInput
              inputName="categoria"
              labelText="Categoria de serviços*"
              onChange={handleServiceInputChange}
            >
              {REGISTER_CATEGORIA.map(({ value, campo }, index) => {
                return (
                  <option key={index} value={value}>
                    {campo}
                  </option>
                );
              })}
            </SelectInput>
          </div>

          <Button
            onClick={() => {
              onAddServiceClick(setServiceChange);
              toggleModal();
            }}
          >
            Cadastrar serviço
          </Button>
        </Modal>
      )}
    </>
  );
}
