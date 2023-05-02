import { PeriodTabs, TopGenresList } from "../components";

export const TopGenresView = () => {
    return (
        <div className="glass-container flex flex-col w-full lg:w-[70%] text-white items-center">
            <div className="p-5">
                <h2 className="text-3xl">Your top <strong><i>genres</i></strong></h2>
            </div>

            <div className="w-full">
                <PeriodTabs List={TopGenresList} />
            </div>
        </div>
    )
}
