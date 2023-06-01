import { Tab } from '@headlessui/react';
import { useState } from 'react';
import { useToken } from '../hooks';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export const PeriodTabs = ({List}) => {

    const [selectedIndex, setSelectedIndex] = useState(localStorage.getItem("period-tab"))
    const tokenState = useToken();

    return (
        <div className="flex flex-col w-full">
            <Tab.Group
                selectedIndex={selectedIndex}
                onChange={(index) => {
                    localStorage.setItem("period-tab",`${index}`);
                    setSelectedIndex(index);
                }}
            >
                <div className="mx-auto w-[95%] sm:w-[50%]">
                    <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                        <Tab
                            className={({ selected }) =>
                                classNames(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white focus:outline-none',
                                selected
                                    ? 'bg-green-600 shadow'
                                    : 'hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            Last month
                        </Tab>

                        <Tab 
                            className={({ selected }) =>
                                classNames(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white focus:outline-none',
                                selected
                                    ? 'bg-green-600 shadow'
                                    : 'hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            Last 6 months
                        </Tab>

                        <Tab 
                            className={({ selected }) =>
                                classNames(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white focus:outline-none',
                                selected
                                    ? 'bg-green-600 shadow'
                                    : 'hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            All time
                        </Tab>
                    </Tab.List>
                </div>
                

                <Tab.Panels>
                    <Tab.Panel>
                        <div className="flex flex-col items-center mb-10">
                            <List timeRange="short_term" />
                        </div>
                    </Tab.Panel>

                    <Tab.Panel>
                        <div className="flex flex-col items-center mb-10">
                            <List timeRange="medium_term" />
                        </div>
                    </Tab.Panel>

                    <Tab.Panel>
                        <div className="flex flex-col items-center mb-10">
                            <List timeRange="long_term" />   
                        </div>
                    </Tab.Panel> 
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
