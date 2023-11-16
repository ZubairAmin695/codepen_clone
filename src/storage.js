import {useEffect, useState} from "react";

const NAME = ".code-pen"


export default function useLocalStorage(key, intialValue){
    const codeKey = key + NAME;
    const [value,setValue]=useState(()=>{
        const jsonValue = localStorage.getItem(codeKey)
        if (jsonValue !=null) return JSON.parse(jsonValue)


        if (typeof intialValue === "function"){
            return intialValue()

        }
        else {
            return intialValue
        }
    })


    useEffect(()=>{
        localStorage.setItem(codeKey, JSON.stringify(value))
    },[codeKey,value])

    return [value,setValue]
}