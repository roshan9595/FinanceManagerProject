import { database } from '../config';

export const expenseObj = {employeeId:"", Expense:"",Amount:"",Date:""};

export const addExpenseToDB =  (expenseObj) => {
    setTimeout(() => {
            database.ref('expense/'+expenseObj.employeeId).set(expenseObj)
            .then(() => {
                console.log('INSERTED !');
            }).catch((error) => {
                console.log(error);
            });
        }, 5000);
}

export const fetchAllExpensesByEmployeeId =  (employeeId) => {

        var ref = database.ref('expense/').orderByChild('employeeId').equalTo(employeeId);
        ref.once('value', snapshot => {
           if (snapshot.exists()) {
               employerObj = snapshot.val();
               console.log(employerObj['EmailId'])
           } else {
              console.log('There is no user who has email like '+ employeeId)
           }
    })

}