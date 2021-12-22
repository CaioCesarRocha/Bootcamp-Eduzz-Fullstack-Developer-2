import { createContext } from "react";

export const themes = {
    primary:{
        background: '#751aff',
        color: '#fff',
    },
    secundary: {
        background: '#fff',
        color: '#751aff'
    }
}

export const ThemeContext = createContext(themes.primary);