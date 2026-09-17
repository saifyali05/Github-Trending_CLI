const today = new Date();

console.log(today);
function getDate(duration){
    const today = new Date();
    if(duration=="Day"){
        today.setDate(today.getDate() - 1);
    }
    if (duration === "week") {
        today.setDate(today.getDate() - 7);
    }

    if (duration === "month") {
        today.setMonth(today.getMonth() - 1);
    }

    if (duration === "year") {
        today.setFullYear(today.getFullYear() - 1);
    }

    return today;
}
module.exports = getDate;
console.log(getDate("day"));
console.log(getDate("week"));
console.log(getDate("month"));
console.log(getDate("year"));