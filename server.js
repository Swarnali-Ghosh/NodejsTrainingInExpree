// in this page we will have only middleware and code to run server
const express = require('express');
const bodyParser = require('body-parser');
const userModel = require("./model/userSchema");
const userRoute = require("./route/userRoute")
const app = express()
const port = 8001;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/user", userRoute)

app.post("/add_user", async (request, response) => {

    let insertData = {
        "name": request.body.name,
        "age": request.body.age
    };
    const user = new userModel(insertData);
    console.log("app hit");
    try {
        await user.save(); // save data inside users table 
        response.send(user); //sending user json as response to client
    } catch (error) {
        response.status(500).send(error);
    }
});

/*
async- await
promise
callback
*/
/* API to add new user in MongoDB */
app.post("/add_user", async (request, response) => {

    let insertData = {
        "name": request.body.name,
        "age": request.body.age
    };
    console.log(insertData)
    const user = new userModel(insertData);
    console.log("app hit");
    try {
        await user.save(); // save data inside users table 
        response.send(user); //sending user json as response to client
    } catch (error) {
        response.status(500).send(error);
    }
});
// /* API to get all user from MongoDB */
app.get("/users", (request, response) => {
    userModel.find({}).then((list) => {
        response.send(list);
    }).catch((err) => {
        response.status(500).send(err);
    })
});
/* API to get particular user in MongoDB */
app.get('/user/:userId', function (req, res) {
    userModel.find({ "_id": req.params.userId }).then((list) => {
        res.send(list);
    }).catch((err) => {
        res.send(err);
    })
})
// /* API to Update particular user Details in MongoDB */
app.put('/updateUser/:id', (req, res) => {
    console.log("Id to update:::::", req.params.id)
    const taskToUpdate = req.body;
    userModel.findOneAndUpdate({ "_id": req.params.id }, taskToUpdate)
        .then((user) => {
            res.send("User Updated Successfully");
        }).catch((err) => {
            res.send(err);
        })
})
// /* API to Hard delete particular user Details in MongoDB */
app.delete('/deleteUser/:userId', function (req, res) {
    userModel.deleteOne({ "_id": req.params.userId })
        .then((user) => {
            res.send(user);
        }).catch((err) => {
            res.send(err);
        })
})

async function insert() {
    await userModel.create({
        name: 'Swarnali Ghosh',
        age: 35
    })
}

// insert();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})