import { useContext, useEffect } from 'react';
import { Navbar } from '../../ui';
import { CategoryTabs } from '../components';
import { useProfile } from '../hooks';
import { UserContext } from '../../context';

export const StatsPage = () => {

  const userProfile = useProfile();
  const { userState, setUser } = useContext( UserContext );

  useEffect(() => {

    if (userProfile) {
      setUser(userProfile.id);
    }
    
  }, [userProfile]);
  
  
  return (
    <>
        <Navbar userProfile={ userProfile } />
        <div className="flex flex-col p-5 justify-center items-center">

            <div className="w-full">
                <CategoryTabs />
            </div>

        </div>
        
    </>
  )
}
