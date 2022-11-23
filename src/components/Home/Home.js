import React, { useEffect, useState, memo, useMemo } from 'react';
import Input from '../Pages/Input';
import Table from '../Pages/Table';

const Home = memo(() => {

    const [data, setData] = useState([])

    const [inputData, setInputData] = useState([])
  
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    


    console.log(inputData)

    return (
        <div className='max-w-[930px] mx-auto py-20'>
            <>
                <Input
                    setInputData={setInputData}
                    data={data}
                    

                />
                <Table
                    inputData={inputData}
                    data={data}
                />
            </>
        </div>
    );
})

export default Home;