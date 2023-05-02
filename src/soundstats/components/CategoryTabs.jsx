import { Tab } from '@headlessui/react';
import { TopArtistsView, TopGenresView, TopTracksView } from '../views';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const CategoryTabs = () => {
    return (
        <div className="">
            <Tab.Group>
                <div className="glass-container px-24 mx-auto mb-5 lg:w-[70%]">
                    <Tab.List className="flex rounded-xl ">
                        <Tab
                            className={({ selected }) =>
                                classNames(
                                'w-full py-2.5 text-sm font-medium leading-5 text-white focus:outline-none',
                                selected
                                    ? 'bg-white/[0.12] line shadow'
                                    : 'text-white hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            Top tracks
                        </Tab>

                        <Tab 
                            className={({ selected }) =>
                                classNames(
                                'w-full py-2.5 text-sm font-medium leading-5 text-white focus:outline-none',
                                selected
                                    ? 'bg-white/[0.12] line shadow'
                                    : 'text-white hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            Top artists
                        </Tab>

                        <Tab 
                            className={({ selected }) =>
                                classNames(
                                'w-full py-2.5 text-sm font-medium leading-5 text-white focus:outline-none',
                                selected
                                    ? 'bg-white/[0.12] line shadow'
                                    : 'text-white hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            Top genres
                        </Tab>
                    </Tab.List>
                </div>
                
                <Tab.Panels>
                    <Tab.Panel>
                        <div className="flex flex-col items-center">
                            <TopTracksView />
                        </div>
                    </Tab.Panel>

                    <Tab.Panel>
                        <div className="flex flex-col items-center">
                            <TopArtistsView />
                        </div>
                    </Tab.Panel>

                    <Tab.Panel>
                        <div className="flex flex-col items-center">
                            <TopGenresView />
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
