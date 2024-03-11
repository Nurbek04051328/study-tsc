// 10 - lesson
// let revenue:number = 1000;
// let bonus:number = 500;

// let res:number = revenue + bonus;
// console.log(res);



// 11 - lesson
// function getfullName(firstname:string, surname:string):string {
//   return `${firstname} ${surname}`
// }

// const getfullNameArrow = (firstname:string, surname:string):string => {
//   return `${firstname} ${surname}`
// }

// console.log(getfullName('Aziz','Abdullaev'));



// 12 - lesson
// const user = {
//   firstname: "G'anisher",
//   surname: "Sa'dullaev",
//   age: 34,
//   city: "Tashkent",
//   skills: {
//     dev: true,
//     devops: true
//   }
// }

// function getfullName(userEntity: {firstname:string, surname:string}):string {
//   return `${userEntity.firstname} ${userEntity.surname}`
// }
// console.log(getfullName(user));


// 13-lesson 
let info: {
  officeId:number,
  isOpened: boolean,
  contacts: {
    phone:string,
    email:string,
    address: {
      city:string
    }
  }
} = {
	"officeId": 45,
	"isOpened": false,
	"contacts": {
		"phone": "+79100000000",
		"email": "my@email.ru",
		"address": {
			"city": "Москва"
		}
	}
}