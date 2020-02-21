// declarative rendering
const app = new Vue ({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

app.message = 'I have changed the data!';

const app2 = new Vue ({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleDateString(),
    }
})

// conditionals and loops
const app3 = new Vue ({
    el: '#app-3',
    data: {
        seen: true,
    }
})

app3.seen = false;

const app4 = new Vue ({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
})

app4.todos.push({ text: 'New item' })

// handling user input
const app5 = new Vue ({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

const app6 = new Vue ({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
})

// composing with components
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li> {{ todo.text }} </li>'
})

const app7 = new Vue ({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans eat' }
        ]
    }
})

