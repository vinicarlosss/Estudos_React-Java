import { useState, useEffect } from "react";

export function useForms() {
  const [user, setUser] = useState({ value: "", error: "" });
  const [animal, setAnimal] = useState("Gato");
  const [year, setYear] = useState("1");
  const [house, setHouse] = useState("Grifinória");
  const [lesson, setLesson] = useState([]);
  const [lessonError, setLessonError] = useState("");
  const [currentForm, setCurrentForm] = useState("personal data");

  function handleUser(event) {
    setUser((lastUser) => {
      return { ...lastUser, value: event.target.value };
    });
  }

  function handleAnimal(event) {
    setAnimal(event.target.value);
  }

  function handleYear(event) {
    setYear(event.target.value);
  }

  function handleHouse(event) {
    setHouse(event.target.value);
  }

  function handleLesson(event) {
    const { name, checked } = event.target;
    let index = undefined;
    if (lesson.some((element) => element.name == name)) {
      lesson.forEach((element) => {
        if (element.name == name && element.checked == false) {
          element.checked = true;
        } else if (element.name == name && element.checked == true) {
          element.checked = false;
        }
      });
    } else {
      setLesson((lastLesson) => [
        ...lastLesson,
        { name: name, checked: checked },
      ]);
    }
  }

  function handleCurrentForm() {
    switch (currentForm) {
      case "personal data":
        setCurrentForm("class");
        break;
      case "class":
        setCurrentForm("result");
        break;
      case "result":
        setCurrentForm("personal data");
    }
  }

  function handleSubmitPeronalData(event) {
    event.preventDefault();
    const MIN_CHAR_NUMBER = 0
    const MAX_CHAR_NUMBER = 30
    if (user.value.length > MIN_CHAR_NUMBER && user.value.length <= MAX_CHAR_NUMBER) {
      setUser((lastUser) => ({ ...lastUser, error: "" }));
      handleCurrentForm();
    } else {
      setUser((lastUser) => ({
        ...lastUser,
        error: "O nome informado não atende aos parâmetros exigidos",
      }));
    }
  }

  function handleSubmitClass(event) {
    event.preventDefault();
    const MIN_CLASS_NUMBER = 2
    if (lesson.length < MIN_CLASS_NUMBER) {
      setLessonError(
        "É preciso se matricular em ao menos 2 matérias, jovem bruxo!"
      );
    } else {
      setLessonError("");
      handleCurrentForm();
    }
  }

  return {
    user,
    animal,
    year,
    house,
    lesson,
    currentForm,
    lessonError,
    handleUser,
    handleAnimal,
    handleYear,
    handleHouse,
    handleLesson,
    handleSubmitPeronalData,
    handleCurrentForm,
    handleSubmitClass,
  };
}
