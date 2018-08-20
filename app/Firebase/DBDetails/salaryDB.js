import { database } from '../config';

export const salaryObj = {employerId:"",salary:"",bonus:""};

export const addSalaryToDB =  (salaryObj) => {
    setTimeout(() => {
            database.ref('salary/'+salaryObj.employerId).set(salaryObj)
            .then(() => {
                console.log('INSERTED !');
            }).catch((error) => {
                console.log(error);
            });
        }, 5000);
}

export const fetchSalaryByEmployerId =  (employerId) => {

        var ref = database.ref('salary/').orderByChild('employerId').equalTo(employerId);
        ref.once('value', snapshot => {
           if (snapshot.exists()) {
               snapshot.forEach((child) => {
               
                  console.log("--")
                  console.log(child.val().salary)
                  console.log(child.key)
                  console.log("--")
               
              })
           } else {
              console.log('There is no user who has email like '+ employerId)
           }
    })

}