
const letters = [' ', 'A', 'r', 'i', 'e', 'l', ' ', 'O', 'r', 't', 'e', 'g', 'a'];

export const Footer = () => {
    return (
        <>
            <footer className="flex flex-col mb-5 text-white justify-end items-center h-[250px]">
                <hr className="w-[90%] md:w-[70%] mb-5" />

                <div className="flex sm:hidden flex-col items-center space-y-3 mb-3">
                    <div className="flex items-center text-[14px] hover:underline">
                        <a href="/about">About</a>
                    </div>

                    <div className="flex items-center text-[14px]">
                        <a href="/privacy" className="hover:underline">Privacy policy</a>
                    </div>
                </div>

                <div className="flex mb-2 sm:mb-0 w-[85%] sm:justify-between md:w-[65%] justify-center ">

                    <div className="hidden sm:flex items-center text-[14px] hover:underline">
                        <a href="/about">About</a>
                    </div>

                    <div className="flex">
                        <div className="flex">
                            Made by
                        </div> 

                        <a href="https://github.com/Ariiel08" target="_blank" >
                            <div className="flex w-[50%] mt-[1px] waviy-footer">
                                {letters.map((letter, index) => (
                                    <pre
                                        key={ index }
                                        style={{ '--i': index + 1 }}
                                        className="logo-font text-base"
                                    >
                                        { letter }
                                    </pre>
                                ))}
                            </div>
                        </a>
                    </div>

                    <div className="hidden sm:flex items-center text-[14px]">
                        <a href="/privacy" className="hover:underline">Privacy policy</a>
                    </div>

                </div>
                
            </footer>
        </>
    )
}
