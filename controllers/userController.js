module.exports.profile = (req, res)=>{        //profile is the name for rendring user profile we have to do users/profile to render userProfile 

    // return res.end('<h1> User Profile</h1>');

    return res.render('userProfile', {     // userProfile.ejs will be rendered 
        title:'User-Profile'
    })
}

// render the login page
module.exports.login = (req, res)=>{

    return res.render('login', {
        title:'Hey | User Login'
    })
}

// render the sign Up
module.exports.signUp = (req, res)=>{

    return res.render('signUp', {
        title: 'Hey | User signUp'
    })
}


// getting the signUp data from the signUp form 
module.exports.create = (req, res)=>{

}

// getting the login data from the login form
module.exports.createSession = (req, res)=>{
    
}