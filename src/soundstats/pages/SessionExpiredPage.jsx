import { useEffect } from "react"

export const SessionExpiredPage = () => {

    useEffect(() => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('expiration_time');
        localStorage.removeItem('code_verifier');
        localStorage.removeItem('period-tab');
        localStorage.removeItem('category-tab');
    }, [])

    return (
        <div className="h-[62vh] flex flex-col text-white justify-center items-center p-5">
            <h1 className="logo-font text-5xl sm:text-6xl mb-5 mt-28">
                <a href="/">SoundStats<i className="logo-sub text-lg">beta</i></a>
            </h1>

            <div className="glass-container sm:w-[80%] md:w-[70%] lg:w-[50%] pb-10 pt-6">
                <a href="/">
                    <div className="flex hover:underline items-center px-[10%] space-x-1">
                        <ion-icon size="small" name="chevron-back-outline"></ion-icon>
                        <span>Go to Homepage</span>
                    </div>
                </a>

                <div className="flex flex-col px-[10%] items-center space-y-3 mt-5">
                    <h2 className="text-3xl font-semibold">Session has expired</h2>

                    <p>
                        Log in again to keep tracking your stats.
                    </p>
                </div>
            </div>
        </div>
    )
}
