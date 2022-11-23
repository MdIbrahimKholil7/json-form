import React, { useEffect, useState } from 'react';
import { RiArrowUpDownLine } from 'react-icons/ri';


const Table = ({ data, inputData }) => {

    const [tableData, setTableData] = useState([])

    useEffect(() => {
        inputData.forEach(element => {
            for (let i = 0; i < data.length; i++) {
                if(element==='Name'){
                    setTableData([...tableData,])
                }
            }
        });
    }, [])

    return (
        <div>
            
            <div className="overflow-x-auto">
                <table className=" w-full rounded-none border-2 border-[#E1E1E1] ">

                    <thead className='bg-white py-3'>
                        <tr className='py-3 '>
                            <th className='h-[40px] border-[1px] border-[#E1E1E1] flex justify-center items-center gap-3'><p className='flex justify-center items-center gap-3'>Name  <RiArrowUpDownLine
                                className='text-xl'
                            /></p></th>

                            <th className='h-[40px] border-[1px] border-[#E1E1E1]'><p className='flex justify-center items-center gap-3'>City <RiArrowUpDownLine
                                className='text-xl'
                            /></p></th>
                            <th className='h-[40px] border-[1px] border-[#E1E1E1]'><p className='flex justify-center items-center gap-3'>Email <RiArrowUpDownLine
                                className='text-xl'
                            /></p></th>
                            <th className='h-[40px] border-[1px] border-[#E1E1E1]'><p className='flex justify-center items-center gap-3'>Joining Date <RiArrowUpDownLine
                                className='text-xl'
                            /></p></th>
                            <th className='h-[40px] border-[1px] border-[#E1E1E1]'><p className='flex justify-center items-center gap-3'>Role <RiArrowUpDownLine
                                className='text-xl'
                            /></p></th>

                        </tr>
                    </thead>
                    <tbody className='border-collapse '>

                        <tr className=' border-[1px] border-[#E1E1E1]'>

                            <td className=' border-[1px] border-[#E1E1E1]'>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td >Quality Control Specialist</td>
                            <td className=' border-[1px] border-[#E1E1E1]'>Blue</td>
                            <td className=' border-[1px] border-[#E1E1E1]'>Blue</td>
                            <td className=' border-[1px] border-[#E1E1E1]'>Blue</td>
                        </tr>

                        {/* <tr>
                            
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>

                        <tr>
                          
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;