function timeConversions(a){
    let amPm = a.charAt(8);
    let militaryHour = "";
    if(amPm == "A"){
        if(a.substring(0,2) == "12"){
            militaryHour = "00";
        }
        else {
            militaryHour = a.substring(0,2);
        }
    }else{
        if(a.substring(0,2) == "12"){
            militaryHour = a.substring(0,2);
        }else {
            militaryHour = parseInt(a.substring(0, 2), 10) + 12;
        }
    }
    return militaryHour + a.substring (2, 8);
 };

console.log(timeConversions("12:00:00AM"));