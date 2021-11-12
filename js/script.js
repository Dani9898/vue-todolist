var app = new Vue(
    {
        el: "#container",
        data: {
            newTask: "",
            tasks: [
                {
                    text: "fare la spesa",
                    done: false
                },
                {
                    text: "andare dal dentista",
                    done: true
                },
                {
                    text: "comprare una medicina",
                    done: false
                },
                {
                    text: "organizzare una festa",
                    done: false
                },
                {
                    text: "portare in giro il cane",
                    done: true
                }

            ]
        },
        methods: {
            addTask() {
                const nuovoOggetto = {
                    text: this.newTask,
                    done: false
                };

                // isNaN per evitare il fattore degli spazi infiniti anche se non funziona se si inseriscono spazi + lettera 
                if (isNaN(this.newTask)) { 
                    this.tasks.push(nuovoOggetto) 
                    this.newTask = "";
                }            
            },
            removeTask(index) {
                this.tasks.splice(index, 1)
            }
        }

    }
)


