const todoList=[];

function renderTodoList(){ let todoListHTML='';
    for(let i =0;
        i<todoList.length;i++)
    {
        const todoObject=todoList[i];
        const name=todoObject.name;
        const dueDate=todoObject.dueDate;
        const HTML=`
        <div> ${name} </div>
        <div> ${dueDate}</div>
        <button onclick="
                todoList.splice(${i},1);
                renderTodoList();
                " class="delete-button">Delete</button> `;
        todoListHTML+=HTML;

    }
    document.querySelector('.todo-display').innerHTML=todoListHTML;
}
function addTodo(){let inputElemnet=document.querySelector('.todo-input');
    const name=inputElemnet.value;
let inputElemnet2=document.querySelector('.todo-input-date');
    const date=inputElemnet2.value;
todoList.push({name:name,dueDate:date});
    inputElemnet.value='';
    inputElemnet2.value='';
    
     renderTodoList();
}