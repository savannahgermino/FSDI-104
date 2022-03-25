const LS_KEY="users";

function saveUser(user){
    //load old data
    let data=readUsers();
    //merge old data and new user
    data.push(user);
    //save it
    let val=JSON.stringify(data); //parse into a JSON string
    localStorage.setItem(LS_KEY,val); //send string to localStorage
}

function readUsers(){
    let data= localStorage.getItem(LS_KEY);
    console.log(data);
    if(!data){
        return[];
    }else{
        let list =JSON.parse(data);
        return list;
    }
}

function remove(index){
     let data=readUsers();
     data.splice(index, 1);
     let val=JSON.stringify(data); 
     localStorage.setItem(LS_KEY,val); 
}