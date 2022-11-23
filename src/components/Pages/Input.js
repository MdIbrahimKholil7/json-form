import React, { useEffect, useMemo } from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';


const animatedComponents = makeAnimated();
const Input = ({ data, setInputData, setInputValue }) => {
    // const options = []
    const options = useMemo(() => [], []);
    
    useEffect(() => {
        if (data.length > 0) {
            for (let option in data[0]) {
                options.push({ label: option.charAt(0).toUpperCase() + option.slice(1).replace(/([a-z])([A-Z])/g, `$1 $2`), value: option })
            }

        }
   
    }, [data,options])


    console.log(options.slice(0,5))
    console.log(data.length > 0 && Object.keys(data[0]))


    return (
        <div className='mb-32'>
            <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={options.slice(0,Object.keys(data?.length > 0 &&data[0]).length)}
                onChange={e => setInputData(e)}
            />
        </div>
    );
};

export default Input;