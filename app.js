let todo=[];

let req=prompt(" Please Enter your request");

while(true){
    if(req=="quit"){
        console.log("quitting app")
        break;
    }

    if(req=="list"){
        console.log("------------")
        for(i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("-----------");
    }else if(req=="add"){
        let task=prompt("Enter your task that you want to add");
        todo.push(task);
        console.log("task added")
    }else if(req=="remove"){
        let idx =prompt("please enter the task undex");
        todo.splice(idx);
        console.log("task removed");
    }
    req=prompt(" Please Enter your request");
    
}