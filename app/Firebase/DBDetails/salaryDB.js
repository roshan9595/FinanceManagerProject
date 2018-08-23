import { database } from '../config';

export const salaryObj = {employerId:"",salary:"",bonus:""};

export const addSalaryToDB =  (salaryObj) => {
    
            database.ref('salary/'+salaryObj.employerId).set(salaryObj)
            .then(() => {
                console.log('INSERTED !');
            }).catch((error) => {
                console.log(error);
            });
        
}

export const fetchSalaryByEmployerId =  (employerId) => {

        var ref = database.ref('salary/').child(employerId);
        var salary = {}
        
        ref.on('value', snapshot => {
           if (snapshot.exists()) {
               
                  salary =snapshot.toJSON()
          
              
           } else {
              console.log('There is no salary for employerID '+ employerId)
           }
           console.log("--")
           console.log(salary);
           console.log("--")
    })
        

        return salary;

}