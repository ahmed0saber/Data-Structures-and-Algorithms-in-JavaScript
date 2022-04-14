// That's the array we need to find an element in it
let users = 
    [
        {
            id: 123, 
            username: "ahmed0saber", 
            email: "ahmed0saber33@gmail.com"
        },
        {
            id: 456, 
            username: "ahmed1", 
            email: "ahmed111"
        },
        {
            id: 789,
            username: "ahmed2", 
            email: "ahmed222"
        }
    ]

// The id we need to find its user and a variable to store the object of that user
let userId, currentUser

// a function that filters the elements and returns only one element which has an id equals userId
const getUserById = (user) => {
  return user.id == userId
}

// a function which will be called if the element is found
const userFound = () => {
    currentUser = users.find(getUserById)
    console.table(currentUser)
}

// a function which will be called if the element is not found, so we can display something on console screen, write to the DOM, show an alert, or even direct the user to 404.html page
const userNotFound = () => {
    console.log("Not Found")
}

// a function that checks if the element is found or not
const getUser = (id) => {
    userId = id
    users.find(getUserById) ? userFound() : userNotFound()
}

// first test which searches for element within the array
getUser(123)

// second test which searches for element not in the array
getUser(12345)
