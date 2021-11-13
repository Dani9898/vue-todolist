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

            lineThrough(index) {
                // if (!this.$refs.itemLista[index].className.includes("task-fatta")) {
                //     this.$refs.itemLista[index].classList.add("task-fatta")
                // } else {
                //     this.$refs.itemLista[index].classList.remove("task-fatta")
                // }

                if (this.tasks[index].done == false) {
                    this.tasks[index].done = true
                } else {
                    this.tasks[index].done = false
                }                          
            },

            removeTask(index) {
                this.tasks.splice(index, 1)
            }
        }

    }
)


