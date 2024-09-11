import { createContext,useContext } from "react";

// we can put deault value in createCOntext(variablse + Methods)
export const ThemeContext= createContext({
    themeMode : "light",
    darkTheme :() =>{},
    lightTheme :() =>{},
})

// the provider
export const ThemeProvider = ThemeContext.Provider

// custom hook (hook is a funtion u know)
// this hook just simfisthe  process, we dont have to import useconetxt along with ThemeCOntxt
// we can use his hook, it will do he sme
export default function useTheme(){
    return useContext(ThemeContext)
}