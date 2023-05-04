
export const AboutPage = () => {
  return (
    <div className="h-[62vh] flex flex-col text-white justify-center items-center p-5">
        <h1 className="logo-font text-5xl sm:text-6xl mb-5 mt-28">
            <a href="/">SoundStats<i className="logo-sub text-lg">beta</i></a>
        </h1>

        <div className="glass-container sm:w-[80%] md:w-[70%] lg:w-[50%] pb-10 pt-6">
            
            <a href="/">
                <div className="flex hover:underline items-center px-[10%] space-x-1">
                    <ion-icon size="small" name="chevron-back-outline"></ion-icon>
                    <span>Go back</span>
                </div>
            </a>

            <div className="flex flex-col px-[10%] items-center space-y-3">
                <h2 className="text-3xl font-semibold">About</h2>

                <p>
                    SoundStats is designed for music enthusiasts who want to explore their listening habits on Spotify. 
                    Stats like your top artists and tracks over different time periods (e.g., last month, last 6 months, all time). 
                    This data is collected from your Spotify profile, if you want to know more about this check the <a href="/privacy" className="text-[#4efe8e] hover:underline">privacy policy</a>. 
                </p>
            </div>
        </div>


    </div>
  )
}
