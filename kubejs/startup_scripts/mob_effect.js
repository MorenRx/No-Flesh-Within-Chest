StartupEvents.registry('mob_effect', event => {
    event.create('burning_heart')
        .beneficial()
        .color(Color.DARK_RED)
    
    event.create('flaring_heart')
        .beneficial()
        .color(Color.RED)
})