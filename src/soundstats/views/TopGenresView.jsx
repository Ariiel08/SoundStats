import { PeriodTabs, TopGenresList } from "../components";
import { useToken } from "../hooks";

export const TopGenresView = () => {
    const tokenState = useToken();

    return (
        <div className="glass-container flex flex-col w-full md:w-[95%] lg:w-[80%] xl:w-[75%] text-white items-center">
            <div className="p-5">
                <h2 className="text-3xl">Your top <strong><i>genres</i></strong></h2>
            </div>

            <div className="w-full">
                <PeriodTabs List={TopGenresList} />
            </div>
        </div>
    )
}
