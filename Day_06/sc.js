console.log("hii")
var task=prompt("enter task:")
console.log(task)
var Todo=[];
Todo.push(task);


function myfun(){
    while(true){
        var choice = prompt("choose 1 to add task, 2 to read,3 to delete");
        if(choice==1){
            var task=prompt("enter task");
            Todo.push(task);
        }else if(choice==2){
            console.log(Todo)
            document.write(Todo)
        }else if(choice==3){
            var index = prompt("enter index")
            Todo.splice(index,1);
        }
        else{
            break;
        }
    }
}

