// function fun_one():string {
//     return "Welcome";
    
// };
// console.log(fun_one);
// console.log(fun_one());

// function fun_one():any{
//     return fun_two;
    
// };

// function fun_two():any{
//     return {"key":"Hello"};
// };
// console.log(fun_one()().key);

// function fun_one(arg1:string,arg2:string,arg3:string,arg4:string):string{
//     return `${arg1}......${arg2}<==>${arg3}<==>${arg4}`;

// };
// console.log(fun_one("MEAN Stack","Anguler","NodeJs","MongoDB"));
// console.log(fun_one("MERN Stack","ReactJS","NodeJs","MongoDB"));
// console.log(fun_one("MEVN Stack","VuJS","NodeJs","MongoDB"));

/////Anonymous Function
//The Function without name called Anonoums function
//Anonoums function also called as Arrow Function(ES6)
//Arrow Function we will repersent "=>" symbol
//Arrow Function are "secured" function comared to "Name" function
//Arrow Functionbehave loke callback function

/*
Syntex.
//functiondefinition
var/let/ const variablename:datatype=(arg1:datatype,
                                  arg2:datatype,
                                  arg3:datatype,
                                  arg4:datatype,
                                  .....
                                  argn:datatype,                                        
    ): returnetype =>{

        //bussines logic
    };
    variablename(param1,param2,.....paramn);

*/
//example

// let fun_one:any = ():string =>{
//     return "Welcome to ashok IT";

// };
// console.log(fun_one); //defination
// console.log(fun_one());//output

// let fun_one:any=(arg1:any,
//                   arg2:any,
//                   arg3:any):any => {
               
//                console.log(arg1(),arg2(),arg3());
               
// };
// fun_one(():any=>{return "ReactJS"}, 
//         ():any=>{return "NodeJS"},
//         ():any=>{return "MongoDB"} );

//Rest Perameters in funtions
//example

// function fun_one(...arg1:any):void{
//     console.log(arg1);
    
// };                                      //output  
// fun_one("Hello1","Hello2", "Hello3");   //[ 'Hello1', 'Hello2', 'Hello3' ]
// fun_one();                              //[]
// fun_one(undefined);                     //[ undefined ] 
// fun_one(undefined,null);                //[ undefined, null ]



// function fun_one(...arg1:any,...arg2:any){} 
// //A rest parameter must be last in a parameter list.ts(1014)


//Optional Perameters in function
//while calling the function we will be make few parameter are optional
//optional parameter introduce in "ES6"

//we will repersent parameter by using "?"

// function fun_one(arg1?:any,arg2?:any,arg3?:any):void{
//     console.log(arg1,arg2,arg3);
    
// };
// fun_one(); //undefine undefine undefine
// fun_one("Hello1"); //Hello1 undefine undefine


function fun_one(arg1:any,arg2?:any,...arg3:any):void{
    console.log(arg1,arg2,arg3);
    
};
//fun_one(); // Expected at least 1 arguments, but got 0
fun_one("Hello1");
fun_one(undefined);
fun_one(undefined,undefined,undefined);
fun_one(null,null,null);
