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
        var employer = {}, employerList = [];
        
        ref.once('value', snapshot => {
           if (snapshot.exists()) {
               snapshot.forEach((child) => {
               
                  
                  employer = {}
                  employer.id = child.val().id;
                  employer.employerName = child.val().employerName;
                  employer.EmailId = child.val().EmailId;
                  employerList.push(employer);
               
              })
           } else {
              console.log('There is no user who has email like '+ employeeId)
           }
           console.log("--")
           console.log(employerList);
           console.log("--")
    })

}
