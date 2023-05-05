import { PeriodTabs, TopGenresList } from "../components";

export const TopGenresView = () => {
    return (
        <div className="glass-container flex flex-col w-full md:w-[85%] lg:w-[80%] xl:w-[75%] text-white items-center">
            <div className="p-5">
                <h2 className="text-3xl">Your top <strong><i>genres</i></strong></h2>
            </div>

            <div className="w-full">
                <PeriodTabs List={TopGenresList} />
            </div>

            {/* <span className="text-4xl mb-20 mt-10">Coming Soon</span> */}
        </div>
    )
}
