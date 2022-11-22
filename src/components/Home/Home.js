import React, { useEffect, useState } from 'react';
import Input from '../Pages/Input';
import Table from '../Pages/Table';

const Home = () => {

    const [data, setData] = useState([])
    const name='Name'
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])



    useEffect(() => {
     const result= data.filter(d=>{
        // console.log(d.person)
        if(name === 'Name'){
            return d['person'] !== undefined
        }
     })

     console.log(result)
    //  console.log(d.person[name]) 
    }, [data])


    return (
        <div className='max-w-[930px] mx-auto py-20'>
            <>
                <Input data={data} />
                <Table data={data} />
            </>
        </div>
    );
};

export default Home;