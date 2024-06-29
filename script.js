new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todos: []
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim() !== '') {
                this.todos.push({ text: this.newTodo, isEditing: false });
                this.newTodo = '';
            }
        },
        deleteTodo(index) {
            this.todos.splice(index, 1);
        },
        editTodo(todo) {
            todo.isEditing = !todo.isEditing;
        },
        updateTodo(todo) {
            if (todo.text.trim() === '') {
                this.deleteTodo(this.todos.indexOf(todo));
            }
            todo.isEditing = false;
        }
    }
});
