import React from 'react'
import PropTypes from 'prop-types'
import List from '../../components/List'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const Home = props => {
    const data = Array(50).fill({});
    return (
        <div className='pt-20'>
            <header className='fixed top-0 left-0 right-0 drop-shadow-lg h-20 bg-gradient-to-b from-black via-black flex items-center '>
                <div className="container mx-auto px-[1.875rem]">
                    <div className="flex justify-between ">
                        <span className='text-xl'>Title</span>
                        <div><MagnifyingGlassIcon className="h-6 w-6 " /></div>
                    </div>
                </div>
            </header>
            <section>
                <List data={data} />
            </section>
        </div>
    )
}

Home.propTypes = {}

export default Home