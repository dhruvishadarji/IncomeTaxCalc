const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  var userName;
  var userAge;
  var userAmount;
  var userGender;
  
   // console.log(` ${answer}`);
   rl.question('Enter your name : ', (name) => {
       userName=name;
    rl.question('Enter your age : ', (age) => {
        userAge=age;
        rl.question('Enter your gender : ', (gender) => {
            userGender=gender;
            rl.question('Enter your income : ', (income) => {
                userAmount=income;
                calculate_tax();
                 rl.close();
             });
         });
    });
});
  function calculate_tax() {
    var taxAmount = 0;
    if(userAge => 18 && userAge < 60){
         if(userAmount >= 250000 && userAmount < 500000){
            taxAmount = (userAmount - 250000) * 0.05;
        }else if(userAmount >= 500000 && userAmount< 750000){
            taxAmount = 12500 + (userAmount - 500000) * 0.1; 
        }else if(userAmount >= 750000 && userAmount< 1000000){
            taxAmount = 37500 + (userAmount - 750000) * 0.15; 
        }else if(userAmount >= 1000000 && userAmount< 1250000){
            taxAmount = 75000 + (income - 1000000) * 0.2; 
        }else if(userAmount >= 1250000 && userAmount< 1500000){
            taxAmount = 125000 + (userAmount - 1250000) * 0.25; 
        }else(userAmount >= 1500000);{
            taxAmount = 187500 + (userAmount - 1500000) * 0.3; 
        }
      
    } else if(userAge >= 60 && userAge <80){
        if(userAmount>= 300000 && userAmount < 500000){
            taxAmount = (userAmount - 300000) * 0.05;
        }else if(userAmount >= 500000 && userAmount< 1000000){
            taxAmount = 12500 + (userAmount - 500000) * 0.2; 
        }else if(userAmount>= 1000000){
            taxAmount = 37500 + (userAmount - 750000) * 0.3;; 
        }
    }
    else if(userAge >= 80){
        if(userAmount>= 500000 && userAmount < 1000000){
            taxAmount = 12500 + (userAmount - 500000) * 0.2;
        }else if(userAmount >= 1000000){
            taxAmount = 37500 + (userAmount - 750000) * 0.3; 
        }
    }

    if(taxAmount >0){
        console.log("Your tax amount is : " +taxAmount);
    }
    else{
        console.log("Your tax amount is NIL");
    }

}
  
  