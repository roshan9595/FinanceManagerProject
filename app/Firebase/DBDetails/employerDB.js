import { database } from '../config';
import { fetchSalaryByEmployerId } from './salaryDB';

export const employerObj = {id:"", employerName:"",employeeId:"",EmailId:"",startDate:""};

export const addEmployerToDB =  (employerObj) => {
            database.ref('employer/'+employerObj.id).set(employerObj)
            .then(() => {
                console.log('INSERTED !');
            }).catch((error) => {
                console.log(error);
            });
        
}

export const fetchEmployerByEmployeeId =  (employeeId)  => {

        var employer = {}, salary = {},employerList = [];
        const ref = database.ref('employer/').orderByChild('employeeId').equalTo(employeeId);
        ref.on('value', (snapshot) => {
           if (snapshot.exists()) {
               snapshot.forEach((child) => {                             
                  employer = {},salary={};
                  employer = child.toJSON()
                  salary = fetchSalaryByEmployerId(employer.id);
                  employer.salary = salary.salary
                  employer.bonus = salary.bonus
                  employerList.push(employer);
                
                  
               
              })
           } else {
              console.log('There is no employers who has employeeId like '+ employeeId)
           }
           console.log("--")
           console.log(employerList);
           console.log("--")
    });

        return employerList;
}

const monthDiff =  (date) => {
    var d1 = new Date();
    var d2 = new Date(date);
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

export const getTotalSalary =  (employeeId)  => {

        var  totalSalary = 0;
        const ref = database.ref('employer/').orderByChild('employeeId').equalTo(employeeId);
        ref.on('value', (snapshot) => {
           if (snapshot.exists()) {
               snapshot.forEach((child) => {                             
                  
                  var date = child.val().startDate
                  
                  var diffmonths = monthDiff(date)
                  var noofIncrement = Math.floor(diffmonths/6);
                  salary = fetchSalaryByEmployerId(child.val().id);
                  percent = (100+parseInt(salary.bonus))/100;
                  totalSalary += (parseInt(salary.salary)*Math.pow(percent,noofIncrement));
                  console.log(totalSalary)
              })
           } else {
              console.log('There is no employers who has employeeId like '+ employeeId)
           }
           
    });

        return totalSalary;
}
