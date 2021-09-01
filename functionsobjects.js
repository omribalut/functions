// Exercise 1


function equalF(num1, num2) {
    if(num1 === num2) {
        return true
    }
    
    else {
            return false
        }
    }
    console.log = equalF(2,2)

    // Exercise 2
    function isSmaller(num1, num2) {

        if(num1<num2) {
    
            return true
        }
    
        else {
            return false
        }
        }


        // Exercise 3
        function evenV1(num1) {

            if(num1 % 2 === 0) {
                return true}
        
                else {
        
                    return false
                }
        
            }


            // Exercise 4
                    function oddV1(num1) {

                        return !(num1 % 2 === 0) 
                        
                    
                        }
                        console.log = oddV1(3)
                    
                    
                    
                        function oddV1(num1) {
                    
                        return !(num1 % 2 === 1) 
                        }


                        // Exercise 5

                        function getObject(firstName, lastName, age){



                            return firstName: firstName
                                lastName: lastName
                                age: age
                        }
                        const obj = getObject("Omri", "Blutstein", "30" )

                        // Exercise 6

                        function getPersonName(person) {

                            return person.firstName
                        }
                        
                        const p = {
                        
                            firstName: "Omri"
                        
                        }
                        
                        console.log = getPersonName(p)


                        // Exercise 7

                        function isPersonsNameEqual(person1, person2) {

                            if(person1.firstName === person2.firstName){
                        
                                return true
                            }
                        
                            return false
                            }
                        console.log = isPersonsNameEqual(omri, hello)


                        // Exercise 8

                        const person = {

                            firstName: "Omri"
                        
                        }
                        
                        function print(property) {
                        
                        console.log(property)
                        }
                        
                        function printInnerFunc(object) {
                        
                            print(object.firstName);
                        }
                        
                        printInnerFunc(person);
                        
                        
                        
                        
                        
                        
                        
                        
                        




                    
                        
                        
                        
                        
                        



                




