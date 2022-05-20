function createEmployeeRecord([firstName,familyName,title,payPerHour]){
    const timeInEvents = [];
    const timeOutEvents = [];
    const employee = {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: timeInEvents,
        timeOutEvents: timeOutEvents,
    }
    return employee;
}

function createEmployeeRecords(employeeRecord){
    let twoRecord = [];
    for(const employee of employeeRecord){
     let aEmployee = createEmployeeRecord(employee)
     twoRecord.push(aEmployee)
    }
    return twoRecord;
}

function createTimeInEvent(dates){
     this.dates= dates.split(" ")
     this.date = this.dates[0]
     this.hour = parseInt(this.dates[1])
     const addObj = {type:"TimeIn",date:this.date,hour:this.hour}
     this.timeInEvents.push(addObj)
     return this
}
 
function createTimeOutEvent(dates){
    this.dates= dates.split(" ")
    this.date = this.dates[0]
    this.hour = parseInt(this.dates[1])
    const addObj = {type:"TimeOut",date:this.date,hour:this.hour}
    this.timeOutEvents.push(addObj)
    return this
}

function hoursWorkedOnDate(dates){
for(let i = 0; i< dates.length;i++){
    if(this.timeInEvents[i].date === dates){
        return ((Math.abs((this.timeInEvents[i].hour-this.timeOutEvents[i].hour)/100)))
    }
}
}

function wagesEarnedOnDate(dates){
this.wages = hoursWorkedOnDate.call(this,dates)
this.payPerHour = this.payPerHour
let total = (this.wages * this.payPerHour)
return total;

}
   

function findEmployeeByFirstName(collection,firstNameString){
   for(const employeeName of collection){
       if(employeeName.firstName === firstNameString){
           return employeeName
       } 
   }
   return undefined
}

function calculatePayroll(employeesRecords){
let employeeTotal = 0
for(const employee of employeesRecords){

employeeTotal += allWagesFor.call(employee)

}
return employeeTotal

}

   
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

