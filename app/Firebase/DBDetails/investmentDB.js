import { database } from '../config';

export const investmentObj = {employeeId:"", InvestorName:"",Date:"",Amount:""};

export const addInvestmentToDB =  (employerObj) => {
    setTimeout(() => {
            database.ref('investment/'+investmentObj.employeeId).set(investmentObj)
            .then(() => {
                console.log('INSERTED !');
            }).catch((error) => {
                console.log(error);
            });
        }, 5000);
}

export const fetchAllExpensesByEmployeeId =  (employeeId) => {

        var ref = database.ref('investment/').orderByChild('employeeId').equalTo(employeeId);
        ref.once('value', snapshot => {
           if (snapshot.exists()) {
               employerObj = snapshot.val();
               console.log(employerObj['EmailId'])
           } else {
              console.log('There is no user who has email like '+ employeeId)
           }
    })

}

