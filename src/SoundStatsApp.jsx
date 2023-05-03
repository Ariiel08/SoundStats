import React from 'react'
import { AppRouter } from './router/AppRouter'

export const SoundStatsApp = () => {

  const letters = [' ', 'A', 'r', 'i', 'e', 'l', ' ', 'O', 'r', 't', 'e', 'g', 'a'];

  return (
    <>
        <AppRouter />

        <footer className="flex flex-col mb-5 text-white justify-end items-center h-[250px]">
          <hr className="w-[90%] md:w-[70%] mb-5" />

           <div className="flex">
           
              <div className="flex flex-col">
                Made by
              </div> 

              <a href="https://github.com/Ariiel08" target="_blank" >
              
            
                <div className="flex flex-row w-[50%] items-baseline waviy-footer">
                  
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

          
        </footer>
    </>
  )
}
