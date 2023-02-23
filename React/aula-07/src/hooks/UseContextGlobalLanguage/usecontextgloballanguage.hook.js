import useGlobalLanguage from "../../context/language/language.context"

export function useContextGlobalLanguage() {
    const [language, setLanguage] = useGlobalLanguage()

    function handleLanguage(event) {
        setLanguage(event.target.value)
    }

    return {
        language,
        handleLanguage
    }
}

