import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () => {
    const [darkMode, setDarkmode] = useLocalStorage('displayDarkMode')



    return [darkMode, setDarkmode]





}