import { useLayoutEffect, useState } from 'react'

//const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches

const isDarkTheme = (new Date()).getHours();
console.log(isDarkTheme);
const defaultTheme = isDarkTheme >= 6 && isDarkTheme <= 21 ?  'light' : 'dark'; 

 function useTheme() {
  const [theme, setTheme] = useState(
    sessionStorage.getItem('app-theme') || defaultTheme)

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    sessionStorage.setItem('app-theme', theme)
  }, [theme])

  return { theme, setTheme }
}

export default useTheme;