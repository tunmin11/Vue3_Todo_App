<template>
    <div>
        <div class="flex flex-col space-y-2">
             <input
                type="text"
                placeholder="New Task"
                class="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                :value="taskName"    
                @input="$emit('update:taskName',$event.target.value)"
            />
            <button 
                @click="$emit('add')"
                class="p-2 bg-indigo-200 hover:bg-indigo-400 rounded-md">Add New CreateTask
                 <font-awesome-icon :icon="['fa', 'plus']" /></button>
        </div>
    </div>
</template>
<script>
export default {
    props : [ 'taskName' ],
    emits : [ 'add', 'update:taskName' ],
}
</script>