
export const HomePage = () => {
  return (
    <>
        <div className="h-screen flex flex-col text-white justify-center items-center p-5">
            <div className="logo-font text-6xl mb-5">
                SoundStats
            </div>

            <div className="glass-container flex flex-col justify-center items-center w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] px-5 py-20">
                <div className="flex flex-row">
                    <button className="px-4 py-2 w-full font-semibold bg-[#1D8954] hover:bg-[#30bc78] text-white rounded-full">
                        <div className="flex flex-row space-x-3 items-center justify-center">
                            <img className="w-7" src="src/assets/spotify_white.png" />
                            <span>Log in with Spotify</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}
