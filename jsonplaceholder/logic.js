const baseUrl = "https://jsonplaceholder.typicode.com";

function getPosts() {
    let partialUrl = "/posts";
    let output = "";

    fetch(baseUrl + partialUrl)
        .then(response => response.json())
        .then (json => {
            document.getElementById("count").innerHTML = "Total number of posts: " + json.length;

            let uniqueIds = json.map(el => el.userId).filter((item, i, ar) => ar.indexOf(item) === i);

            for (let id of uniqueIds) {
                let countUserPosts = json.filter(el => el.userId === id);
                output+= "User with userId=" + id + " has " + countUserPosts.length + " posts<br>";

            }
            document.getElementById("info").innerHTML = output;
        });
}

function getUsers() {
    let partialUrl = "/users";

    fetch(baseUrl + partialUrl)
        .then(response => response.json())
        .then(json => {

            let usersData = [];

            let result = json.map(el => ({name: el.name, phone: el.phone}));

            for (let elem of result) {
                usersData += (elem.name + " " + elem.phone + "<br>")
            }

            document.getElementById("count").innerHTML = "Number of users: " + json.length;
            document.getElementById("info").innerHTML = "Users info: <br>" + usersData;
        });
}

