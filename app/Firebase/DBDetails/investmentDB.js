import { database } from '../config';

export const investmentObj = {employeeId:"", InvestorName:"",Date:"",Amount:""};

export const addInvestmentToDB =  (employerObj) => {
    setTimeout(() => {
            database.ref('investment/'+investmentObj.employeeId).push(investmentObj)
            .then(() => {
                console.log('INSERTED !');
            }).catch((error) => {
                console.log(error);
            });
        }, 5000);
}

export const fetchAllInvestmentByEmployeeId =  (employeeId) => {

        var ref = database.ref('investment/'+employeeId);
        ref.once('value', snapshot => {
           if (snapshot.exists()) {
               snapshot.forEach((child) => {
               
                  console.log("--")
                  console.log(child.val().InvestorName)
                  console.log(child.key)
                  console.log("--")
               
              })
           } else {
              console.log('There is no user who has email like '+ employeeId)
           }
    })

}

