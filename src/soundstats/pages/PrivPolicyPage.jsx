
export const PrivPolicyPage = () => {
    return (
        <div className="h-[100vh] sm:h-[100vh] mt-[50%] sm:mt-0 flex flex-col text-white justify-center items-center p-5">
            
            <h1 className="logo-font text-5xl  sm:text-6xl mb-5 mt-28">
                <a href="/">SoundStats<i className="logo-sub text-lg">beta</i></a>
            </h1>

            <div className="glass-container mb-[50%] sm:mb-0 sm:w-[90%] md:w-[80%] lg:w-[70%] pb-10 pt-6">
                
                <a href="/">
                    <div className="flex hover:underline items-center px-[10%] space-x-1">
                        <ion-icon size="small" name="chevron-back-outline"></ion-icon>
                        <span>Go back</span>
                    </div>
                </a>
                
                
                <div className="flex flex-col mt-2 px-[10%] items-center space-y-3">
                    <h2 className="text-3xl font-semibold">Privacy Policy</h2>

                    <p>
                        The website utilizes the Spotify API to access your top tracks and artists, we will ask for your permission to authenticate with your Spotify account. 
                        <br/><br/>

                        I understand the importance of protecting your privacy and want to assure you that I will never share your personal information with any third parties. 
                        Any data the website collects from your Spotify account will only be used to improve your experience on the website.
                        <br/><br/>

                        The website may collect the following information from your Spotify account:

                        <br/><br/>
                        
                        &emsp;• Your top tracks and artists
                        <br/>
                        &emsp;• Your Spotify username
                        <br/>
                        &emsp;• Your Spotify profile picture
                        <br/>
                        

                        <br />

                        if you want to revoke permissions from SoundStats, visit your <a href="https://www.spotify.com/us/account/apps/" target="_blank" className="text-[#4efe8e] hover:underline" >apps page</a> in your profile and look for SoundStats
                        to remove access, more info <a href="https://support.spotify.com/us/article/spotify-on-other-apps/" target="_blank" className="text-[#4efe8e] hover:underline" >here</a>.
                    </p>
                </div>
            </div>


        </div>
    )
}
