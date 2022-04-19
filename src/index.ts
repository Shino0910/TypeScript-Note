// ------------------------------- Enum --------------------------------
enum LiveStream {
    success= 0,
    fail= -1,
    streaming = 1
}

const roll = LiveStream.fail
console.log(roll)

//------------------------------- Union --------------------------------

let test : string | number
test = 1000
test = "Hello"

//------------------------------- Type --------------------------------

type A = number | string
let a1 :A
a1 = 09
a1= "Jojo"


type B = boolean | null
let b1 : B
b1= false
b1 =null

//------------------------------- Interface --------------------------------

interface User{
    name:string,
    age: number
}

//------------------------------- Object --------------------------------

type Card ={
    name:string,
    des: string
}

interface Card2 {
    name: string,
    des: string
}


interface Card2 {
   age?: number   // optional 
}

// interface can be extended

const obj :Card2 = {
   name:"brian",
   des:"Male",
   age:34
}

//------------------------------- Function --------------------------------

function hello(a: string, b:string){
    return a + b
}


function hello2 (a: string , b: string ) :number{
    return 400
}

function hello3(name: string, age?:number){ 

// optinal condition shoud be in the last line

//    let a:number
//    a = age
if(age === undefined) return -1
test2(age)

return 
}



 function test2 (a:number){
  console.log(a)

 }


//-------------------------------as Unknown --------------------------------


type Data ={
    userId: number,
    id: number,
    title: string,
    completed:boolean 
}


 async function getData() {
     const res =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
     const data = await  res.json() as Data
 }


 const data1 : Data = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
 }


type Beta ={
    name: string
}

// Assume the data1 can be changed
 const beta = data1 as unknown as Beta


 //------------------------------- Class --------------------------------

 //private
 //public
 //protected

 class Live{
     roomName :string
     private ID :string
     protected liverName :string


    constructor(roomName1 :string,ID1:string, liverName1 :string){
        console.log("establish live stream....")
        this.roomName = roomName1
        this.ID = ID1
        this.liverName = liverName1

    }

    
 }

 const live = new Live ("No.1" ,"0001" , "Aya")

 class Live2{
     #name  //private variable
     constructor(name:string){
         this.#name = name
     }
 }


interface  CarProps{
    name : string
    age: number
}




 class Car implements  CarProps{
   name: string
   age : number

   constructor(name :string, age: number){
       this.name = name
       this.age = age
   }
 }



 //------------------------------- Generic --------------------------------


 function print<T> (data : T){
     console.log("data" , data)
 }

 print<number>(6666)        // data 6666
 print<string> ("Vivian")  // data Vivian