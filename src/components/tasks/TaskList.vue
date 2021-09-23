<template>
    <div>
        <div 
            class=""
            v-for="task in tasks" :key="task.id">
            <div 
                :class="{ 'from-green-300 to-blue-300 border-green-300' : task.status,  'from-purple-300 to-indigo-300' : !task.status}"
                class="p-3 mt-2 border-gray-900  bg-gradient-to-r hover:border border-transparent hover:text-white transition duration-700 rounded-lg flex justify-between px-7">
                <span :class="{ 'line-through' : task.status }"> {{ task.name }} </span>
                <div class="flex gap-4">
                    <button 
                        @click="$emit('check',task.id)"
                        class="p-1 px-2 bg-yellow-300 hover:bg-yellow-500 hover:border-gray-700 border transition duration-500 hover:text-white rounded-md">
                            {{ (task.status) ? 'uncheck' : 'check' }}
                        </button>
                    <button 
                            @click="$emit('remove',task.id)"
                            class="p-1 px-2 bg-red-300 hover:bg-red-500 hover:border-gray-700 border transition duration-500 hover:text-white rounded-md">
                        Delete
                    </button>
                </div>
            </div>

                
        </div>
    </div>
</template>

<script>
export default {
    props : [ 'tasks' ],
    emits : [ 'remove', 'check' ]   
}
</script>