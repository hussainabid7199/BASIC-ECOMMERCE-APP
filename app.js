const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const https = require("https");
const { response, Router } = require("express");
const axios = require('axios');
const { includes } = require("lodash");
const { isGeneratorFunction } = require("util/types");


const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const homefaq = [];
const coursedetailsfaqs = [];
const popularPosts = [];
const dataError = []

// const errorData = data;

const cateogry = {
    railway: [],
    ssc: [],
    higherSecondary: [],
    isc: []
}

for (var key in cateogry) {
    console.log(cateogry + ":" + cateogry[key]);
}
// console.log(cateogry.railway);


const boosterData = {
    trendingPosts: [],
    freePosts: [],
    recentlyPosts: [],
    boosterPosts: []
}

for (var i = 0; i < cateogry.railway.length; i++) {
    console.log(cateogry.railway[i]);
}

let getErrorData = async () => {
    let response = await axios(`https://hammerhead-app-aop52.ondigitalocean.app/get-error`);
    return response.data;
};

app.get("/", (req, res) => {
    res.render("index", { faqposts: homefaq, trendingPosts: cateogry.railway, freePosts: boosterData.freePosts, recentlyPosts: boosterData.recentlyPosts, boosterPosts: boosterData.boosterPosts, popularPosts: popularPosts });
});

app.get("/error-correction", async (req, res) => {
    var data = await getErrorData()
    res.render("error-correction", { errorData: data });
    console.log(data);
});


app.get("/privacypolicy", (req, res) => {
    res.render("privacypolicy");
});

app.get("/verifycertificate", (req, res) => {
    res.render("verifycertificate");
});


app.get("/refundpolicy", (req, res) => {
    res.render("refundpolicy");
});

app.get("/career", (req, res) => {
    res.render("career");
});

app.get("/resultAnylisis", (req, res) => {
    res.render("resultAnylisis");
});

app.get("/mcqPanel", (req, res) => {
    res.render("mcqPanel");
});

app.get("/seeAllCourses", (req, res) => {
    res.render("seeAllCourses");
});

app.get("/termsAndCondition", (req, res) => {
    res.render("termsAndCondition");
});

app.get("/contactus", async (req, res) => {
    // await testRequest();
    res.render("contactus");
});

app.get("/aboutus", (req, res) => {
    res.render("aboutus")
});


app.get("/compose", (req, res) => {
    res.render("compose");
});

app.get("/login", (req, res) => {
    res.render("login")
});

app.get("/signup", (req, res) => {
    res.render("signup")
});

app.get("/forgotpassword", (req, res) => {
    res.render("forgotpassword")
});

app.get("/resetpassword", (req, res) => {
    res.render("resetpassword")
});

app.get("/otpverification", (req, res) => {
    res.render("otpverification")
});

app.get("/admin", (req, res) => {
    res.render("admin")
});

app.get("/users", (req, res) => {
    res.render("users")
});


// Getting Data From :- Form
app.post("/compose", (req, res) => {
    const cardSection = req.body.cardSection;
    // console.log(cardSection + " section.")

    const card = {
        cardTitle: req.body.productName,
        cardDiscription: req.body.productDiscription,
        currentPrice: req.body.currentPrice,
        realPrice: req.body.mrp,
        rating: req.body.rating,
        totalRating: req.body.totalRating,
        aboutCourseTitle: req.body.aboutCourseTitle,
        aboutCourseContent1: req.body.aboutCourseContent1,
        aboutCourseContent2: req.body.aboutCourseContent2,
        aboutbullet1: req.body.aboutbullet1,
        aboutbullet2: req.body.aboutbullet2,
        aboutbullet3: req.body.aboutbullet3,
        aboutbullet4: req.body.aboutbullet4,
        aboutbullet5: req.body.aboutbullet5
    }


    if (response.statusCode === 200) {
        console.log("\n Status :- " + response.statusCode + " | Data uploaded successfully!");
        console.log(card);
    } else {
        console.log("Error " + response.statusCode);
    }



    // Requiring Data From Array and Posting to Course Details Page
    const postTemp = (postData) => {
        app.get("/:userId", (req, res) => {
            const requestTitle = _.lowerCase(req.params.userId);
            postData.forEach(function (card) {
                const storedTitle = _.lowerCase(card.cardTitle);
                if (requestTitle === storedTitle) {
                    res.render("courseDetail", {
                        faqposts: coursedetailsfaqs,
                        currentPrice: card.currentPrice,
                        cardTitle: card.cardTitle,
                        cardDiscription: card.cardDiscription,
                        rating: card.rating,
                        aboutCourseTitle: card.aboutCourseTitle,
                        aboutCourseContent1: card.aboutCourseContent1,
                        aboutCourseContent2: card.aboutCourseContent2,
                        aboutbullet1: card.aboutbullet1,
                        aboutbullet2: card.aboutbullet2,
                        aboutbullet3: card.aboutbullet3,
                        aboutbullet4: card.aboutbullet4,
                        aboutbullet5: card.aboutbullet5
                    });
                }
            })
        });
    }

    switch (cardSection) {
        case "railway":
            console.log(cateogry.railway.push(card));
            postTemp(cateogry.railway);
            break;

        case "freePosts":
            boosterData.freePosts.push(item);
            break;


        case "recentlyPosts":
            boosterData.recentlyPosts.push(item);
            break;


        case "boosterPosts":
            boosterData.boosterPosts.push(item);
            break;

        default:
            console.log("Error in Switch Statement !");
            break;
    }
    // Switching to the section of Home page and passing require data to function 
    res.redirect("/compose");
})


app.post("/", function (req, res) {
    var firstName = req.body.Fname;
    var lastName = req.body.Lname;
    var email = req.body.email;

    console.log(firstName, lastName, email);

    var data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }]
    };

    var jsonData = JSON.stringify(data);

    const url = "https://us14.api.mailchimp.com/3.0/lists/1216434217";
    const options = {
        method: "POST",
        auth: "myrequest1:57314ee930b4e19ccaab6d1125d04932-us14"
    }

    if (response.statusCode === 200) {
        res.sendFile(__dirname + "/success.html");
    }
    else {
        res.sendFile(__dirname + "/failure.html");
    }

    const request = https.request(url, options, function (response) {
        response.on("data", function (data) {
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData)
    request.end();
});



app.listen(4000, (req, res) => {
    console.log("Server is succesfully running on port 4000");
})







// const baseUrl = "https://fc4c-203-189-248-102.in.ngrok.io/";


// function testRequest() {
//     let result = await getOrder();
//     res.json(result);
// }


// async function getOrder() {
//     try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
//         return response.data
//     } catch (error) {
//         return { "error": error }
//     }
// }




