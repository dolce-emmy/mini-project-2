export const Home = (req,res) => {
    res.sendFile("./view/index.html", {root: "."})
}