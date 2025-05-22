// crud crate read update 

// this is how we store data in localstorage
localStorage.setItem("username","ashwin")
localStorage.setItem("password","********")


// this is how we get / retreive data from localstorage
 console.log( localStorage.getItem("username"))
 console.log(localStorage.getItem("password"))

//  update 
localStorage.setItem("username","ashwin_hero")

// delete
localStorage.clear("username")