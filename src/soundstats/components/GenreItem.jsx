
export const GenreItem = ({position, title}) => {
  return (
    <div className="glass-item animate__animated animate__fadeIn p-5">
        <div className="flex flex-row items-center">
        
            <div className="flex flex-col mr-2 sm:mr-5">
                <span>{position}°</span>
            </div>

            <div className="flex flex-col mr-2 sm:mr-5">
                <span className="font-semibold">{title}</span>
            </div>
        </div>
    </div>
  )
}
