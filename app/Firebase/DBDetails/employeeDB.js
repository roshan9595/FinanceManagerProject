import { database } from '../config';
import { _storeEmployeeId,_retrieveEmployeeMailId } from '../constants';


export const employeeObj = {id:"", name:"", EmailId:""};

export const addEmployeeToDB =  (employeeObj) => {
	setTimeout(() => {
            database.ref('employee/'+employeeObj.id).set(employeeObj)
            .then(() => {
                console.log('INSERTED !');
            }).catch((error) => {
                console.log(error);
            });
        }, 5000);
}

export const fetchEmployeeByEmailId =  (EmailId) => {

        var ref = database.ref('employee/').orderByChild('EmailId').equalTo(EmailId);
        ref.once('value', snapshot => {

           if (snapshot.exists()) {
                _storeEmployeeId(snapshot.child.val().id)
           } else {
              console.log('There is no user who has email like '+ EmailId)
           }
           console.log(_retrieveEmployeeMailId)
    });

}