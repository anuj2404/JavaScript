// const tinderUser = new Object() // singleton object
const tinderUser = {} // Non-singleton object

tinderUser.id = "123asd"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "anuj@gmail.com",
    fullname: {
        userfullname: {
            firstname: "anuj",
            lastname:"gupta"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    5: "a",
    6: "b"
}

const obj4 = {
    3: "a",
    4: "b"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
const obj3 = {...obj1, ...obj2,...obj4} 
console.log(obj3);


const users = [
    {

    },
    {
        id:1,
        email:"anuj@gmail.com"
    },
    {

    },
    {

    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // less used

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Object de-structure

const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);

// const navbar = ({comapany}) => {

// }

// navbar(company = "hitesh") 


// JSON API Intro


// {
//     "name": "anuj",
//     "coursename": "js in hindi",
//     "price": "999"
// }