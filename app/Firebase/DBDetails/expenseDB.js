import { database } from '../config';

export const expenseObj = {employeeId:"", Expense:"",Amount:"",Date:""};

export const addExpenseToDB =  (expenseObj) => {
    setTimeout(() => {
            database.ref('expense/'+expenseObj.employeeId).push(expenseObj)
            .then(() => {
                console.log('INSERTED !');
            }).catch((error) => {
                console.log(error);
            });
        }, 5000);
}

export const fetchAllExpensesByEmployeeId =  (employeeId) => {

        var ref = database.ref('expense/').child(employeeId);
         var expense = {}, expenseList = [];
        ref.once('value', snapshot => {
           if (snapshot.exists()) {
               snapshot.forEach((child) => {
                  expense = {}
                  expense.id = child.val().employeeId;
                  expense.Expense = child.val().Expense;
                  expense.Amount = child.val().Amount;
                  expenseList.push(expense);
               
              })
           } else {
              console.log('There is no expense for employer with employeeId '+ employeeId)
           }
           console.log(expenseList)
    })
   return expenseList;
}