import { Navbar } from '../../ui';
import { CategoryTabs } from '../components';

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
