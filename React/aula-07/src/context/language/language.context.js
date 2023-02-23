import createGlobalState from 'react-create-global-state'

const LANGUAGE_KEY = 'language'
const stateInStorage = localStorage.getItem(LANGUAGE_KEY)
const initialState = stateInStorage ? JSON.parse(stateInStorage) : 'brazilian'

const [_useGlobalLanguage, Provider] = createGlobalState(initialState)

function useGlobalLanguage() {
    const[_language, _setLanguage] =  _useGlobalLanguage()

    function setLanguage(language) {
        _setLanguage(language)
        localStorage.setItem(LANGUAGE_KEY, JSON.stringify(language))
    }

    return[_language, setLanguage]
}
export const GlobalLanguageProvider = Provider

export default useGlobalLanguage