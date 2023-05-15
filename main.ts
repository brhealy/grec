radio.onReceivedValue(function (name, value) {
    accel = value
})
let accel = 0
accel = 0
basic.showString("GREC")
radio.setGroup(4)
basic.forever(function () {
    serial.writeValue("mg", accel)
})
