import { PeriodTabs } from "../components"
import { TopArtistsList } from "../components/TopArtistsList"

export const TopArtistsView = () => {
    return (
        <div className="glass-container flex flex-col w-full lg:w-[70%] text-white items-center">
            <div className="p-5">
                <h2 className="text-3xl">Your top <strong><i>artists</i></strong></h2>
            </div>

            <div className="w-full">
                <PeriodTabs List={TopArtistsList} />
            </div>
        </div>
    )
}
