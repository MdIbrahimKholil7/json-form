import React, { useEffect, useMemo } from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
// import { colourOptions } from '../data';

const animatedComponents = makeAnimated();
const Input = ({ data }) => {

    const options = []

    useEffect(() => {
        for (let option in data[0]) {
            options.push({ label: option.charAt(0).toUpperCase() + option.slice(1).replace(/([a-z])([A-Z])/g, `$1 $2`), value: option })
        }
    }, [data])

    return (
        <div className='mb-32'>
            <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={options}
            />
        </div>
    );
};

export default Input;