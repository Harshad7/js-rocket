var car = {
    make : 'VW',
    type : 'Polo',
    color : 'blue',
    isTurnedOn: false,
    numberOfwheels : 4,
    seats : [
        'seat 1',
        'seat 2',
        'seat 3',
        'seat 4'
    ],
    turnOn : function(){
        this.isTurnedOn = true;
    },

    switchCar : function(isOn){
        console.log('You chose to turn the car ' + isOn)

        if(isOn == true){
            this.isTurnedOn = true;
        else{
            this.isTurnedOn = false;
        }
        }
    }

};
console.log("Hello Friends");