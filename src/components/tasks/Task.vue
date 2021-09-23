<template>
    <div class="p-5">
     
        <header class="py-3 text-xl tracking-widest">Todo List</header>
      
        <div class="p-4 bg-white-200 shadow-lg rounded-lg border">
         
            <create-task 
            @add='addTask' 
            v-model:task-name="task.name"></create-task>

            <hr class="my-3 border-1 border-gray-400"/>

            <task-list 
                @remove="deleteTask"
                @check="checkTask"
                :tasks="tasks"></task-list>

        </div>
    </div>  
</template>

<script>
import TaskList from './TaskList.vue'
import CreateTask from './CreateTask.vue'

export default {
    components : {
      TaskList,
      CreateTask,
    },
    data () {
        return {
            tasks: [],
            task : Object()
        }
    },
    created () {
        this.tasks = JSON.parse(localStorage.getItem('tasks') || [])
    },
    methods : {
        getTasks () {
            return JSON.parse(localStorage.getItem('tasks') || [])
        },
        setTasks (data) {
                this.tasks = data,
                localStorage.setItem('tasks', JSON.stringify(data))
        },
        addTask() {
            let id = this.tasks.length + 1;
            let data = [ ...this.tasks, { id, name : this.task.name, status : false } ]
            this.task = Object() // form value reset
            this.setTasks(data)
        },
        deleteTask(id) {
            let response = this.tasks.filter( task => task.id !== id )
            this.setTasks(response)
        },
        checkTask(id) {
            let response = this.tasks.map( task => {
                                return ( task.id == id ) ? { ...task, status : !task.status }  : task 
                            })
            this.setTasks(response)
        }
    }
}
</script>