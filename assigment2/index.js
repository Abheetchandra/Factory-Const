function iPhone(ASIN, color, display, camera, bluetooth) {
    this.ASIN = ASIN;
    this.bluetooth = bluetooth;
    this.color = color;
    this.display = display;
    this.camera = camera;
    this.dial = function() { return ("tring.. tring...") }
    this.sendMessage = function () { return ("Sending message...") }
    this.cameraClick = function () { return ("Camera clicked") }
    this.connectBluetooth = function () { return ("Bluetooth connected successfully...") }
}
    function iPhone3(ASIN, color, display, camera, bluetooth) {
        // Initialize properties using .call()
        iPhone3.call(this, ASIN, color, display, camera, bluetooth);
    


}

const myiPhone11 = new iPhone('B09G9D8KRQ', 'Blue', '6.1-inch Super Retina XDR display', 'Dual 12MP camera system', 'Bluetooth 5.3');
console.log(myiPhone11);
console.log(myiPhone11.dial());
console.log(myiPhone11.sendMessage());
console.log(myiPhone11.cameraClick());
console.log(myiPhone11.connectBluetooth());


const myiPhone20 = new iPhone('B09G9D8ZABX', 'Diamond blue', '6.5-inch Super Retina OLDR display', 'Dual 250 MP camera system', 'Bluetooth 8.3');
console.log(myiPhone20);
console.log(myiPhone20.dial());
console.log(myiPhone20.sendMessage());
console.log(myiPhone20.cameraClick());
console.log(myiPhone20.connectBluetooth());




