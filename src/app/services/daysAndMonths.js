const MontsAndWeeks = {
    dayWeek: ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"],
    montsName: ["Jan","Feb","Mar","Apr","May","Jun","Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
}

export function ConvertDateToString(date) {
    
    let dateRecived = Date.parse(date);
    let todayDate = new Date(dateRecived);

    let newday = MontsAndWeeks.dayWeek[todayDate.getDay()];
    let newdate = todayDate.getDate();
    let newmonth = MontsAndWeeks.montsName[todayDate.getMonth()];
    
    let currentDate = `${newday}. ${newdate} ${newmonth}`;
    
    return currentDate;
}