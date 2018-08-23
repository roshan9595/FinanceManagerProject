import { database } from '../config';

export const expenseObj = {employeeId:"", Expense:"",Amount:"",Date:""};

export const addExpenseToDB =  (expenseObj) => {
    
            database.ref('expense/'+expenseObj.employeeId).push(expenseObj)
            .then(() => {
                console.log('INSERTED !');
            }).catch((error) => {
                console.log(error);
            });
       
}

export const fetchAllExpensesByEmployeeId =  (employeeId) => {

        var ref = database.ref('expense/').child(employeeId);
         var expense = {}, expenseList = [];
         
        ref.on('value', snapshot => {
           if (snapshot.exists()) {
               snapshot.forEach((child) => {
                  expense = {}
                  expense = child.toJSON()
                  expenseList.push(expense);
               
              })
           } else {
              console.log('There is no expense for employer with employeeId '+ employeeId)
           }
           console.log(expenseList)
    })
       

   return expenseList;
}

export const getTotalExpense =  (employeeId) => {
        var d = new Date();
        const month = "-"+("0" + (d.getMonth() + 1)).slice(-2)+"-";
        var ref = database.ref('expense/').child(employeeId);
         var expense = 0;
         
        ref.on('value', snapshot => {
           if (snapshot.exists()) {
               snapshot.forEach((child) => {
                var date = child.val().Date;
                console.log(date)
                console.log(month)
                  if(date.includes(month)){
                  expense += parseInt(child.val().Amount);
                }
                  
               
              })
           } else {
              console.log('There is no expense for employer with employeeId '+ employeeId)
           }
           console.log(expense)
    })
       

   return expense;
}