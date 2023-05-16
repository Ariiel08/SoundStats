import { useContext } from "react";
import { TokenContext } from "../context";
import { useProfile } from "../soundstats/hooks/useProfile";


export const Navbar = () => {

    const { token, setToken } = useContext( TokenContext );
    const userProfile = useProfile();

    console.log(userProfile);

    const handleLogout = () => {
        setToken(null);
        window.localStorage.clear();
    }

    return (
        <header className="glass-nav  py-2">
            <nav className="flex w-[92%] mx-auto">

                {
                    (userProfile) ? 
                        <>
                            <div className="sm:flex hidden">
                                <a 
                                    className="nav-btn hover:cursor-pointer flex justify-center items-center space-x-1 px-2 py-2 text-white font-semibold rounded-full"
                                    href={userProfile.external_urls.spotify}
                                    target="_blank"
                                >
                                    <div className="flex flex-col max-w-[2rem] mr-2">
                                        <img className="rounded-full" src={userProfile.images[0].url} />
                                    </div>
                                    <div>
                                        {userProfile.display_name}
                                    </div>
                                </a>
                            </div>

                            <div className="flex sm:hidden">
                                <a 
                                    className="nav-btn hover:cursor-pointer flex justify-center items-center px-2 py-2 text-white font-semibold rounded-full"
                                    href={userProfile.external_urls.spotify}
                                    target="_blank"
                                >
                                    <div className="flex flex-col max-w-[2rem]">
                                        <img className="rounded-full" src={userProfile.images[0].url} />
                                    </div>
                                </a>
                            </div>
                        </>

                    :   <>
                            <div className="sm:flex hidden">
                                <div 
                                    className="nav-btn hover:cursor-pointer flex justify-center items-center space-x-1 px-2 py-2 text-white font-semibold rounded-full"
                                >
                                    <div className="flex justify-center">
                                        <div className="custom-loader-nav"></div>
                                    </div>
                                </div>
                            </div>
                        </>
                }

                <div className="logo-font flex ml-auto sm:mlauto sm:mr-7 text-white text-xl sm:text-2xl justify-center items-center ">
                    <a href="/">SoundStats<i className=" mt-1 items-baseline logo-sub text-[12px]">beta</i></a>
                </div>
                
                <div className="flex ml-auto">
                    <button 
                        className="nav-btn flex ml-auto items-center space-x-1 px-2 py-2 text-red-500 font-semibold rounded-lg text-sm w-[6rem] sm:text-base sm:w-[95px]"
                        onClick={handleLogout}
                    >
                        <ion-icon size="small" name="log-out-outline"></ion-icon>
                        <div>Log out</div>
                    </button>
                </div>
            </nav>
        </header>
    )
}

