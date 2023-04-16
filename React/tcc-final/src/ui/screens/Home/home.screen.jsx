import { useEffect, useState } from 'react';
import {
  BsCalendarEventFill,
  BsCheckCircleFill,
  BsInboxFill,
} from 'react-icons/bs';
import { IoAlertCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useAddTask, useGetUserData } from '../../../hook';
import { useGetTasks } from '../../../hook/useGetTasks/useGetTasks.hook';
import { useGetUserStats } from '../../../hook/useGetUserStats/useGetUseStats.hook';
import {
  Button,
  Dashboard,
  DateInput,
  Footer,
  Header,
  Modal,
  SelectInput,
  Stats,
  TextInput,
} from '../../index';
import './home.style.css';

const OPTIONS = {
  inbox: {
    key: 'em_andamento',
    name: 'Em andamento',
    icon: <BsInboxFill color="#3498DB" className="home-filter-icon" />,
    defaultSort: 'dataPrazo',
  },
  today: {
    key: 'hoje',
    name: 'Hoje',
    icon: <BsCalendarEventFill color="#F7B149" className="home-filter-icon" />,
    defaultSort: 'prioridade',
  },
  completed: {
    key: 'concluida',
    name: 'Concluídas',
    icon: <BsCheckCircleFill color="#60BB69" className="home-filter-icon" />,
    defaultSort: 'dataCriacao',
  },
  late: {
    key: 'atrasada',
    name: 'Em atraso',
    icon: <IoAlertCircle color="#E74C3C" className="home-filter-icon" />,
    defaultSort: 'dataPrazo',
  },
};

export function HomeScreen() {
  const [registerTaskModal, setRegisterTaskModal] = useState(false);
  const { handleCreateSubmit, handleChange } = useAddTask();
  const { userStats, taskMap, mapPeriod, handleGraphPeriod, fetchUserStats } =
    useGetUserStats();
  const { fetchUserData } = useGetUserData();
  const {
    tasks,
    filter,
    sort,
    fetchTasks,
    loading: loadingTasks,
    handleFilter,
    handleSort,
    handleSortOrder,
  } = useGetTasks(OPTIONS.inbox);

  function fetchInfo() {
    fetchUserStats(mapPeriod.key);
    fetchUserData();
    fetchTasks();
  }

  async function handleSubmit(event) {
    await handleCreateSubmit(event, fetchInfo, toggleModal);
  }

  useEffect(() => {
    fetchInfo();
  }, [filter]);

  function toggleModal() {
    setRegisterTaskModal(!registerTaskModal);
  }

  return (
    <main className="home-main">
      <Header />
      <section className="home-section">
        <div className="home-filter">
          {Object.values(OPTIONS).map((option) => {
            const { name, icon } = option;
            return (
              <Link
                key={name}
                className="home-filter-link"
                onClick={() => handleFilter(option)}
              >
                <div className="home-filter-link-box">
                  {icon}
                  {name}
                </div>
              </Link>
            );
          })}
        </div>
        <div className="home-content-section">
          <Stats
            userStats={userStats}
            taskMap={taskMap}
            handleGraphPeriod={handleGraphPeriod}
            mapPeriodObj={mapPeriod}
          />
          <Dashboard
            filter={filter}
            toggleModal={toggleModal}
            tasks={tasks}
            loading={loadingTasks}
            updateInfo={fetchInfo}
            sort={sort}
            handleSort={handleSort}
            handleSortOrder={handleSortOrder}
          />
        </div>
      </section>
      <Footer />
      <form onSubmit={handleSubmit}>
        {registerTaskModal && (
          <Modal toggleModal={toggleModal}>
            <h1>Cadastro de atividade</h1>
            <p>Campos com asterisco* são campos obrigatórios</p>
            <TextInput
              placeholder="Ex.: Limpar a casa"
              labelText="Título* "
              inputName="title"
              forId="title"
              onChange={handleChange}
            />

            <TextInput
              labelText="Descrição"
              placeholder="Ex.: Limpar banheiro e quintal"
              inputName="description"
              forId="description"
              onChange={handleChange}
            />
            <DateInput
              labelText="Data de entrega*"
              forId="date"
              inputName="date"
              onChange={handleChange}
            />
            <SelectInput
              labelText="Prioridade*"
              inputName="priority"
              onChange={handleChange}
              forId="priority"
            >
              <option value="BAIXA">Baixa</option>
              <option value="MEDIA">Média</option>
              <option value="ALTA">Alta</option>
            </SelectInput>
            <Button>Cadastrar</Button>
          </Modal>
        )}
      </form>
    </main>
  );
}
