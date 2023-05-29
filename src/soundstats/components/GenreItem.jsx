
export const GenreItem = ({position, title, newPosition}) => {

  let icon = <div className="flex flex-col w-5"></div>;

  if (newPosition) {
      if (newPosition === 'above') {
          icon =  <div className="flex flex-col w-5 text-green-500">
                      <ion-icon size="small" name="arrow-up-outline"></ion-icon>
                  </div>
      } else if (newPosition === 'below') {
          icon =  <div className="flex flex-col w-5 text-red-500">
                      <ion-icon size="small" name="arrow-down-outline"></ion-icon>
                  </div>
      } else if (newPosition === 'new') {
          icon =  <div className="flex flex-col w-5 text-blue-500">
                      <ion-icon name="ellipse"></ion-icon>
                  </div>
      }
  }

  return (
    <div className="glass-item animate__animated animate__fadeIn p-5">
        <div className="flex flex-row items-center">

            {icon}
        
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
