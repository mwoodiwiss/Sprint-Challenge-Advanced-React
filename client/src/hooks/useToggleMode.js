
import {useEffect} from "react";
import useLocalStorage from "./useLocalStorage.js";

export default function useToggleMode (mode, initialValue, cssClass) {
   const [isModeOn, setIsModeOn] = useLocalStorage(mode, initialValue);

   useEffect(() => {
      document.body.classList.toggle(cssClass, isModeOn);
   }, [isModeOn, cssClass]);

   return [isModeOn, setIsModeOn];
}