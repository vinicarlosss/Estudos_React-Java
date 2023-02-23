import "./hogwarts.style.css";
import { ANIMALS, HOUSES, CLASSES } from "../../../assets/data/index";
import { useForms } from "../../../hooks/index";
import { useEffect } from "react";

export function Hogwarts() {
  const {
    user,
    handleUser,
    animal,
    handleAnimal,
    year,
    handleYear,
    house,
    handleHouse,
    lesson,
    handleLesson,
    handleSubmit,
    currentForm,
    lessonError,
    handleSubmitPeronalData,
    handleSubmitClass,
  } = useForms();
  function renderForm() {
    switch (currentForm) {
      case "personal data":
        return (
          <main className="hogwarts-main">
            <header className="hogwarts-header">
              <span className="selected-form">Dados Pessoais</span>
              <span>Aulas</span>
            </header>
            <header className="personaldata-header">
              <h1 className="personaldata-title">Dados pessoais</h1>
            </header>
            <form className="app-form" onSubmit={handleSubmitPeronalData}>
              <label className="app-label">Nome completo</label>
              <input
                className="app-input"
                name="nome-completo"
                autoComplete="off"
                value={user.value}
                onChange={handleUser}
              />
              <p className="error-popup-name">{user.error}</p>
              <label className="app-label">Animal de estimação</label>
              <select
                className="form-select"
                name="animal-de-estimacao"
                value={animal}
                onChange={handleAnimal}
              >
                {ANIMALS.map((animal) => {
                  return (
                    <option
                      className="select-option"
                      key={animal.id}
                      value={animal.nome}
                    >
                      {animal.nome}
                    </option>
                  );
                })}
              </select>
              <label className="app-label">Ano letivo</label>
              <select
                className="form-select"
                name="ano-letivo"
                value={year}
                onChange={handleYear}
              >
                <option
                  className="select-option"
                  value="1"
                  onChange={handleYear}
                >
                  1
                </option>
                <option
                  className="select-option"
                  value="2"
                  onChange={handleYear}
                >
                  2
                </option>
                <option
                  className="select-option"
                  value="3"
                  onChange={handleYear}
                >
                  3
                </option>
                <option
                  className="select-option"
                  value="4"
                  onChange={handleYear}
                >
                  4
                </option>
                <option
                  className="select-option"
                  value="5"
                  onChange={handleYear}
                >
                  5
                </option>
                <option
                  className="select-option"
                  value="6"
                  onChange={handleYear}
                >
                  6
                </option>
                <option
                  className="select-option"
                  value="7"
                  onChange={handleYear}
                >
                  7
                </option>
              </select>
              <label className="app-label">Minha casa</label>
              <select className="form-select" name="minha-casa">
                {HOUSES.map((house) => {
                  return (
                    <option
                      className="select-option"
                      key={house.id}
                      value={house.nome}
                      onChange={handleHouse}
                    >
                      {house.nome}
                    </option>
                  );
                })}
              </select>
              <button className="submit-button">Próximo</button>
            </form>
          </main>
        );
      case "class":
        return (
          <main className="hogwarts-main">
            <header className="hogwarts-header">
              <span>Dados Pessoais</span>
              <span className="selected-form">Aulas</span>
            </header>
            <header className="class-header">
              <h1 className="class-title">Aulas</h1>
              <h2 className="class-subtitle">Escolher Matérias</h2>
            </header>
            <form className="app-form-class" onSubmit={handleSubmitClass}>
              <div className="form-options">
                {CLASSES.map((classItem, index) => {
                  return (
                    <div key={classItem.id} className="class-checkbox-two">
                      <label>{classItem.aula}</label>
                      <input
                        type="checkbox"
                        name={classItem.aula}
                        onChange={handleLesson}
                      />
                    </div>
                  );
                })}
              </div>
              <p className="lesson-error-popup">{lessonError}</p>
              <button className="submit-class-button">Concluir</button>
            </form>
          </main>
        );
      case "result":
        return (
          <main>
            <div className="result-box">
              <header className="result-header">
                <div className="student-data">
                  <h2 className="name">{user.value}</h2>
                  <p className="animal">{animal}</p>
                </div>
                <p className="period">{`${year}º ano`}</p>
              </header>
              <p className="house">{house}</p>
              <div className="class-box">
                <h2 className="class-box-title">Aulas</h2>
                <div className="class-item">
                  {lesson.map((lessonItem, index) => {
                    if (lessonItem.checked) {
                      return <p key={index}>{lessonItem.name}</p>;
                    }
                  })}
                </div>
              </div>
            </div>
          </main>
        );
      default:
        break;
    }
  }

  useEffect(() => {}, [currentForm]);

  return <>{renderForm()}</>;
}
