import { useActionData } from 'react-router-dom';
import { Navbar } from '../../ui/Navbar';
import { CategoryTabs } from '../components';
import { useEffect } from 'react';

export const StatsPage = () => {
  return (
    <>
        <Navbar />
        <div className="flex flex-col p-5 justify-center items-center">

            <div className="w-full">
                <CategoryTabs />
            </div>

        </div>
        
    </>
  )
}
