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

