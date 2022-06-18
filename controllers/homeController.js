module.exports.home = (req, res) =>{        /// this controller will be available for routes

    // return res.end('<h1>Express is running</h1>');

    // rather than ending up the response now we will render the home.ejs file

    return res.render('home', {
        // content you want send along with the response

        title: 'Home'
    })
}

// you can add more controller function

// module.exports.actionNmae1 = (req, res)=>{}
// module.exports.actionNmae2 = (req, res)=>{}
// module.exports.actionNmae3 = (req, res)=>{}
