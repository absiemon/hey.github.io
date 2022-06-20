const User = require('../models/user');

module.exports.profile = (req, res)=>{        //profile is the name for rendring user profile we have to do users/profile to render userProfile 


    // return res.render('profile', {     // profile.ejs will be rendered 
    //     title:'User-Profile'
    // })

    //Now we will render profile only user is logged in
    
    // if user is logged in then its id will be in cookie
    if(req.cookies.user_id){              //user_id is in createSession
        //check if user_id in cookies matches with the database
        User.findById(req.cookies.user_id, (err, user)=>{ 

            if(err) { console.log('you have not logged in', err); return}

            // if user is available
            if(user){ 
                return res.render('profile', { 
                    title: 'User Profile', 
                    user: user   
                    // above key value pairs will go to the profile.ejs where it will be accessible by its key name
                })
            }
            //if user is  not available
            return res.redirect('/users/login');
        });

    
    }
    else{
        return res.redirect('/users/login');

    }
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

    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    //if email already exiests then

    User.findOne({email: req.body.email}, (err, user)=>{

        if(err){ 
            console.log('Error in finding the email', err);
            return
        }

        // if user is not created
        if(!user){

            User.create(req.body , (err, user)=>{
                if(err){ 
                    console.log('Error in creating the user', err);
                    return
                }
                return res.redirect('/users/login'); // create user and send to the login page.
            })
        }
        // if user is already available
        else{
            return res.redirect('back');
        }
    })

}

// getting the login data from the login form
module.exports.createSession = (req, res)=>{
    
    // finding the the user 
    User.findOne({email: req.body.email}, (err, user)=>{

        if(err) {
            console.log('Error in creating the user', err);
            return
        }
        // if user founded
        if(user){
            // check is password is not correct
            if(user.password != req.body.password){
                return res.redirect('back');
            }

            // if password is correct then create session for the by creating the cookie
            res.cookie('user_id', user.id);
            return res.redirect('/users/profile')

        }
        // if user not found
        else{
            return res.redirect('back');
        }
    })
}


module.exports.signOut = (req, res)=>{

    res.cookie('user_id', 1213);

    return res.redirect('/users/login');
}