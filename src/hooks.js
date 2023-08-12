import {useState} from 'react'

export default function useInputForm(initialValue){
    const [value, setValue] = useState(initialValue);

    function handleChange(e){
        setValue(e.target.value);
    }

    return{
        value,
        onchange: handleChange
    };
}