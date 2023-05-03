import { useContext } from "react";
import { TokenContext } from "../context";


export const Navbar = () => {

    const { token, setToken } = useContext( TokenContext );

    const handleLogout = () => {
        setToken(null);
        window.localStorage.removeItem('access_token');
    }

    return (
        <header className="glass-nav  py-2">
            <nav className="flex w-[92%] mx-auto">
                <div className="logo-font text-white text-2xl flex sm:w-full sm:justify-center items-center sm:ml-24">
                    SoundStats
                </div>
                
                <div className="flex ml-auto">
                    <button 
                        className="nav-btn flex ml-auto items-center space-x-1 px-2 py-2 text-red-500 font-semibold rounded-lg w-[95px]"
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

