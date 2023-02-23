import createGlolbalState from "react-create-global-state";
import { CHARACTER_KEY } from "../constants";

const stateInStorage = localStorage.getItem(CHARACTER_KEY);

const initialState = stateInStorage ? JSON.parse(stateInStorage) : null;
const [_useGlobalCharacter, Provider] = createGlolbalState(initialState);

export function useGlobalCharacter() {
  const [_characterSelected, _setCharacterSelected] = _useGlobalCharacter();

  function setCharacterSelected(character) {
    _setCharacterSelected(character);
    localStorage.setItem(CHARACTER_KEY, JSON.stringify(character));
  }

  return [_characterSelected, setCharacterSelected];
}

export const GlobalCharacterProvider = Provider;

export default useGlobalCharacter;
