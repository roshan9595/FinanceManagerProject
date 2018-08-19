import { database } from '../config';

export const employerObj = {id:"", employerName:"",employeeId:"",EmailId:"",startDate:""};

export const addEmployerToDB =  (employerObj) => {
    setTimeout(() => {
            database.ref('employer/'+employerObj.id).set(employerObj)
            .then(() => {
                console.log('INSERTED !');
            }).catch((error) => {
                console.log(error);
            });
        }, 5000);
}

export const fetchEmployerByEmployeeId =  (employeeId) => {

        var ref = database.ref('employer/').orderByChild('employeeId').equalTo(employeeId);
        ref.once('value', snapshot => {
           if (snapshot.exists()) {
               employerObj = snapshot.val();
               console.log(employerObj['EmailId'])
           } else {
              console.log('There is no user who has email like '+ employeeId)
           }
    })

}
