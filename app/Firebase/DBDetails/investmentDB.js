import { database } from '../config';

export const investmentObj = {employeeId:"", InvestorName:"",Date:"",Amount:""};

export const addInvestmentToDB =  (employerObj) => {

            database.ref('investment/'+investmentObj.employeeId).push(investmentObj)
            .then(() => {
                console.log('INSERTED !');
            }).catch((error) => {
                console.log(error);
            });
       
}

export const fetchAllInvestmentByEmployeeId =  (employeeId) => {

        var ref = database.ref('investment/').child(employeeId);;
        var investor = {}, investorList = [];
        ref.on('value', snapshot => {
           if (snapshot.exists()) {
               snapshot.forEach((child) => {
                  
                  investor = {}
                  investor = child.toJSON()
                  investorList.push(investor);
               
              })
           } else {
              console.log('There is no user who has email like '+ employeeId)
           }
    })

        return investorList;
}

export const getTotalInvestment =  (employeeId) => {
        var d = new Date();
        const month = "-"+("0" + (d.getMonth() + 1)).slice(-2)+"-";
        var ref = database.ref('investment/').child(employeeId);;
        var totalinvestment = 0;
        ref.on('value', snapshot => {
           if (snapshot.exists()) {
               snapshot.forEach((child) => {
                var date = child.val().Date;
                console.log(date)
                console.log(month)
                    if(date.includes(month)){
                      totalinvestment += parseInt(child.val().Amount);
                    }
                  
               
              })
           } else {
              console.log('There is no user who has email like '+ employeeId)
           }
    })

        return totalinvestment;
}

