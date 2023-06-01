
export const setVisitTime = (timeRange, category, reset) => {
    let visitTime;
    
    if (reset) {
        localStorage.setItem(`${category}_${timeRange}_time`, Date.now());
    }

    switch (timeRange) {
        case 'long_term':
            visitTime = Number(localStorage.getItem(`${category}_${timeRange}_time`));

            if (!visitTime) {
                localStorage.setItem(`${category}_${timeRange}_time`, Date.now());
                visitTime = Number(localStorage.getItem(`${category}_${timeRange}_time`));
            }

            break;

        case 'medium_term':
            visitTime = Number(localStorage.getItem(`${category}_${timeRange}_time`));

            if (!visitTime) {
                localStorage.setItem(`${category}_${timeRange}_time`, Date.now());
                visitTime = Number(localStorage.getItem(`${category}_${timeRange}_time`));
            }

            break;

        case 'short_term':
            visitTime = Number(localStorage.getItem(`${category}_${timeRange}_time`));

            if (!visitTime) {
                localStorage.setItem(`${category}_${timeRange}_time`, Date.now());
                visitTime = Number(localStorage.getItem(`${category}_${timeRange}_time`));
            }

            break;
    
        default:
            break;
    }

    return visitTime;
}