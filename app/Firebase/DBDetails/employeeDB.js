import { database } from '../config';
import { AsyncStorage } from "react-native";

export const employeeObj = {id:"", name:"", EmailId:""};

export const addEmployeeToDB =  (employeeObj) => {
	
            database.ref('employee/'+employeeObj.id).set(employeeObj)
            .then(() => {
                console.log('INSERTED !');
            }).catch((error) => {
                console.log(error);
            });
       
}

export const fetchEmployeeByEmailId =  (EmailId) => {

        var ref = database.ref('employee/').orderByChild('EmailId').equalTo(EmailId);
        ref.once('value', snapshot => {

           if (snapshot.exists()) {
                 
                console.log(snapshot.val().id)
                storeEmployeeId(snapshot.val().id)
           } else {
              console.log('There is no user who has email like '+ EmailId)
           }
    });

}
const storeEmployeeId = async (EmployeeId) => {
  try {
    await AsyncStorage.setItem('EmployeeID', EmployeeId);
    console("Success")
  } catch (error) {
    // Error saving data
    console.log(error);
  }
}

export const retrieveEmployeeId = async () => {
  const value=null
    try {
    value = await AsyncStorage.getItem('EmployeeID');
  } catch (error) {
    // Error retrieving data
    console.log(error);
  }
  return value;
}