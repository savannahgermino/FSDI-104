function displayUsers(users){
    //travel the array
    $("#usersTable tbody").html("");
    let data = "";
    for(let i=0; i<users.length; i++){
        data += createUser(users[i], i);
    //get each user

    //display the user

    //append the user to the table
    }
    $("#usersTable tbody").html(data);
}

function createUser(user, index){
    return `<tr>
                <td>${user.firstName} </td>
                <td>${user.lastName} </td>
                <td>${user.email} </td>
                <td>${user.password} </td>
                <td>${user.age} </td>
                <td>${user.address} </td>
                <td>${user.cardNumber} </td>
                <td>${user.phone} </td>
                <td>${user.color} </td>
                <td><input type='button' value='Remove' onclick='removeUser(${index})'/> </td>
            </tr>`;
}

function removeUser(index){
    remove(index);
    let users=readUsers();
    displayUsers(users);
}

function init(){
    console.log("Listing users");
    let users=readUsers();
    displayUsers(users);
}

window.onload=init;