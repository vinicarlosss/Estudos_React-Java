import createGlolbalState from "react-create-global-state";
import { USER_KEY } from "../constants/index";

const stateInStorage = localStorage.getItem(USER_KEY);
const initialState = stateInStorage ? JSON.parse(stateInStorage) : null;
const [_useGlobalUser, Provider] = createGlolbalState(initialState);

export function useGlobalUser() {
  const [_user, _setUser] = _useGlobalUser();

  function setUser(user) {
    _setUser(user);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  return [_user, setUser];
}
export const GlobalUserProvider = Provider;

export default useGlobalUser;
