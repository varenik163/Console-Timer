function Machine() {
            this._enable = false

            this.enable = function () {
                this._enable = true

                return "Включено"
            }

            this.disable = function () {
                this._enable = false
                return "Включено"
            }


        }
        
        function Timer() {
            Machine.call(this)

            this.time = 0

            this.countdown = function () {
                var self = this
                var coundown = setInterval(function () {
                    console.log(self.time)
                    self.time = self.time - 1
                    if(self.time === 0) clearInterval(coundown)
                }, 1000)
            }

            this.alerting = function () {
                var self = this
                var alerting = setInterval(function () {

                    if(self.time === 0){
                        console.log("Время вышло")
                        clearInterval(alerting)
                    }
                    else {
                        console.log("У вас осталось " + self.time + " секунд")
                    }
                }, 3000)
            }

            this.run = function (time) {
                this.time = time
                if(!time) return "Задайте начальное значение"
                if(this._enable) {
                    this.countdown()
                    this.alerting()

                    return "Timer start"
                }
                return "Включите таймер"
            }
        }
