
export const getGenres = (artists) => {

    let allGenres = [];
    let topGenres = {};

    for (const artist of artists) {
        

        allGenres.push(...artist.genres);
    }

    for (const genre of allGenres) {

        if(Object.keys(topGenres).length >= 50){
            break;
        }

        if(!topGenres.hasOwnProperty(genre)){
            topGenres[genre] = 1;
            continue;
        } 
        
        topGenres[genre]++;
    }

    let sortedGenres = Object.entries(topGenres).sort((a,b) => b[1] - a[1]);

    return sortedGenres;
}
