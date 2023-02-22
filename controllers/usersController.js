import fs from "fs";

export const getAllUsers = (req, res) => {
    const userData = fs.readFileSync("./data/user.json");

    const originalUserData = JSON.parse(userData);
    res.send(originalUserData);
}


export const getSingleUser = (req, res) => {
    const userData = fs.readFileSync("./data/user.json");
    const parsedUserData = JSON.parse(userData);
    const user = parsedUserData.users.find(
        (user) => user.id === Number(req.params.id)
    );

    if (user) {
        res.send(user);
    } else {
        res.send("user doesn't exist");
    }
}


export const updateNewUser =  (req, res) => {

    const userData = fs.readFileSync("./data/user.json");
    const parsedObjectData = JSON.parse(userData);
    console.log(parsedObjectData)
    parsedObjectData.users.push(req.body)
    fs.writeFileSync("./data/user.json", JSON.stringify(parsedObjectData, null, 2))

    res.send("new user add")

    
}


export const userChanger = (req,res) => {
    const data = fs.readFileSync("./data/user.json")
    const parsedData = JSON.parse(data)

    let users = {...parsedData, users:parsedData.users.map(user => {
        if(user.id === Number(req.params.id)) {
            let updatedUser = {...user, ...req.body}
            return updatedUser
        } else {

            return user
        }
    })}

    console.log(users)

    fs.writeFileSync("./data/user.json", JSON.stringify(users,null,2))
    res.send("user updated")

}