basic.forever(function () {
    if (input.temperature() < 18) {
        led.setBrightness(70)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
    if (input.temperature() >= 18 && input.temperature() <= 24) {
        led.setBrightness(130)
        basic.showLeds(`
            . . . . .
            . # . # .
            # . . . #
            . # # # .
            . . . . .
            `)
    }
    if (input.temperature() > 24) {
        led.setBrightness(255)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            `)
    }
})
