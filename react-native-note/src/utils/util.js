export const getTodayDate = () => {
    const date = new Date();
    
    const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = date.getDate();
    let month = date.getMonth();

    return `${day} ${monthName[month]}`;
}