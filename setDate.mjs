export const setDate = (a) =>{
    let months =  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]
    let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

    let day = days[a.getDay()];
    let date = a.getDate();
    let month = months[a.getMonth()];
    let year = a.getFullYear();
    return day + " " + date + " " + month + " " + year
}
