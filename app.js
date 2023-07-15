let store = [];
let todoBody = document.getElementById('todo-body')



    // Adding a empty todo poster to the body of the todo app. 

function noTodoCheck(){
    let noTodo = document.getElementById('no-todo')

    if(store.length == 0){
        noTodo.classList.add('no-todo')
    }
    else{
        noTodo.classList.add('d-none')
        noTodo.classList.remove('no-todo')
    }
}

    // Function of render the all the user-typed-info to a box...box contains various html tags.

function rendering(){
    todoBody.innerHTML = ''


    store.map((value)=>{
        let todoDiv = document.createElement('div')
        todoDiv.classList.add('body')

        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.classList.add('check')

        let content = document.createElement('div')
        content.classList.add('content')

        let heading = document.createElement('h3')
        heading.classList.add('todo-title')

        let ddesc = document.createElement('p')
        ddesc.classList.add('description','fsize')

        let dealer = document.createElement('div')
        dealer.classList.add('dealer')

        let dating = document.createElement('p')
        dating.classList.add('date','fsize1')

        let authoring = document.createElement('p')
        authoring.classList.add('author','fsize1')

        let dLogo = document.createElement('i')
        dLogo.classList.add('bi','bi-calendar-event')

        let setDate = document.createElement('span')
        setDate.setAttribute('id','date')

        let uLogo = document.createElement('i')
        uLogo.classList.add('bi','bi-person-fill')

        let name = document.createElement('span')
        name.setAttribute('id','authorName')


        
        
        // Rendering the values when the all heirarchy created 
        
        heading.innerText = value.heading;
        ddesc.innerText = value.description;
        let date = new Date(value.time)
        const option = {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        }
        let newDate = date.toLocaleDateString('en', option)
        dating.innerText = newDate;
        authoring.innerText = value.author;

    // Creating the heirarchy structure for the TODO

        todoBody.appendChild(todoDiv)
        todoDiv.appendChild(checkbox)
        todoDiv.appendChild(content)
        content.appendChild(heading)
        content.appendChild(ddesc)
        content.appendChild(dealer)
        dealer.appendChild(dating)
        dating.appendChild(dLogo)
        dating.appendChild(setDate)
        dealer.appendChild(authoring)
        authoring.appendChild(uLogo)
        authoring.appendChild(name)
        


    })

}



function sorting(){
    let sortingValue = store.sort((a, b)=>{
        let firstDate = a.time;
        let secondDate = b.time;

        // comparision between the dates

        if(firstDate < secondDate){
            return -1;
        }
        else if(firstDate > secondDate){
            return 1;
        }
        else{
            return 0;
        }
    })
    console.log(sortingValue)
}




function adding() {
    let heading = document.getElementById('heading').value;
    let description = document.getElementById('description').value;
    let author = document.getElementById('author').value;
    let time = document.getElementById('time').value
    
    

    let object = {
        heading:heading,
        description:description,
        author:author,
        time:time
    }
    store.push(object)



    noTodoCheck();

    emptyAdd();

    sorting();

    rendering();
}



function emptyAdd(){
    document.getElementById('heading').value = '';
    document.getElementById('description').value = '';
    document.getElementById('author').value = '';
    document.getElementById('time').value = ''
}