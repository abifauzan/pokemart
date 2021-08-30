import { useEffect, useState } from "react"

export const useThemeMode = () => {
    const [theme, setTheme] = useState('light')
    const [isMounted, setIsMounted] = useState(false)

    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    }

    const toggleTheme = () => {
        theme === 'light' ? setMode('dark') : setMode('light')
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme')
        const prefersDark = window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches &&
            !localTheme

        if (localTheme && ['dark', 'light'].includes(localTheme))
            setTheme(localTheme)
        else if (prefersDark)
            setTheme('dark')
        // localTheme && setTheme(localTheme)
        setIsMounted(true)
    }, [])

    return [theme, toggleTheme, isMounted]
}