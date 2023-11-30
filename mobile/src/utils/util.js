export const getTodayDate = () => {
    const date = new Date();
    
    const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = date.getDate();
    let month = date.getMonth();

    return `${day} ${monthName[month]}`;
}

export const getDateToDot = (date) => {
    const d = new Date(date);
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();

    return `${day}.${month}.${year}`;
}

export const getSplitDay = (date, pos) => {
    const dateCopy = date.split(' ')

    if (pos === 'day') {
        return dateCopy[1];
    }

    return dateCopy[2];
}