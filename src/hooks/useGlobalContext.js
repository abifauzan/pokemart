import { useContext } from "react";
import { GlobalContext } from '../contexts/GlobalState'

export default function useGlobalContext() {
    return useContext(GlobalContext)
}