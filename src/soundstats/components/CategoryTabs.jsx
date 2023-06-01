import { Tab } from '@headlessui/react';
import { TopArtistsView, TopGenresView, TopTracksView } from '../views';
import { useState } from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export const CategoryTabs = () => {
    const [ selectedIndex, setSelectedIndex ] = useState(localStorage.getItem("category-tab"));

    return (
        <div>
            <Tab.Group 
                selectedIndex={selectedIndex}
                onChange={(index) => {
                    window.localStorage.setItem("category-tab",`${index}`);
                    window.localStorage.setItem("period-tab",`${0}`);
                    setSelectedIndex(index);
                }}
            >
                <div className="glass-container px-6 sm:px-24 mx-auto mb-5 md:w-[95%] lg:w-[80%] xl:w-[75%]">
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
