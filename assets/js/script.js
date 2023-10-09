let tasks = [
    {id:1, name: 'Hacer mercado', completed: false},
    {id:2, name: 'Pasear al perro', completed: false},
    {id:3, name: 'Limpiar la casa', completed: false}
]

let counter = tasks.length;

const textInput = document.getElementById('textInput');
const listContainer = document.querySelector('.listContainer');
const btn = document.getElementById('btn');
const total = document.querySelector('.total');
const totalComplete = document.querySelector('#totalComplete');

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    addTask();
})
    


const addTask = ()=>{
    const nameTask = textInput.value;
    
    counter = counter + 1;
    
    const newTask = {
        id: counter, name: nameTask, completed: false
    }

    tasks.push(newTask);
    textInput.value = '';

    renderTask();
}


const renderTask = ()=>{
    let html = '';
    tasks.forEach((task) =>{
        html+=`
        <div>
        <span class="number">${task.id}</span>
        <span class="descripcion">${task.name}</span>
        <input onclick="update(${task.id})" type="checkbox" ${task.completed ? 'checked': ''} />
        <img src="assets/imgs/eliminar.png" id="trash" onclick="remove(${task.id})" />
      </div>
        `
    })

    const completedTask = tasks.filter((task)=> task.completed).length;
    
    
    total.textContent = tasks.length;
    listContainer.innerHTML = html;
    totalComplete.textContent = completedTask;
    
}

renderTask();

const update = (id)=>{
    tasks.forEach(task =>{
        if (task.id === id){
            task.completed = !task.completed;
        }
    
    })
    renderTask();
}


const remove = (id)=>{
    const removeTask = tasks.filter((task) => task.id !== id) 
    tasks = removeTask;

    renderTask();
}

