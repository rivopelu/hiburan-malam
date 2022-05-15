import { faChair, faTable } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { BrandLogo } from '../../components'
const HomePage = () => {
    const dataMain = [
        { id: 1, name: 'reservasi', icon: faChair },
        { id: 2, name: 'reservasi', icon: faChair },
        { id: 3, name: 'reservasi', icon: faChair },
        { id: 4, name: 'reservasi', icon: faChair },
        { id: 4, name: 'reservasi', icon: faChair },
    ]
    return (
        <div className="HomePage ">
            <div className='pt-16'>
                <div className="containerMain ">

                    <div className='flex justify-between'>
                        {
                            dataMain.map((item) => (
                                <div>


                                    <div className="card h-16 border w-16 flex items-center justify-center rounded-lg shadow-lg hover:border-black">
                                        <FontAwesomeIcon icon={item.icon} className='text-3xl' />
                                    </div>
                                    <div className="resservesi text-xs pt-2">{item.name}</div>
                                </div>
                            ))
                        }

                    </div>
                    <div className="pt-10 flex flex-col gap-3">
                        {
                            dataMain.map((item) => (

                                <div className="menuCard border items-center flex  px-4 py-3 rounded-lg shadow-lg">
                                    <FontAwesomeIcon className='text-4xl' icon={faTable} />
                                    <div className="kanan pl-4 w-full">
                                        <h1 className='text-2xl'>Table</h1>
                                        <div className="flex w-full justify-between pt-1">
                                            <h1 className='text-gray-200'>Table sekian sekian</h1>
                                            <h1>Rp. 7.000.000</h1>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage