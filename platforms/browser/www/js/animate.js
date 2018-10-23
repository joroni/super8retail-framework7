


$$('.page-content').animate(
    /* CSS properties to animate, e.g.: */
    {
        'margin-bottom': -100,
        'opacity': 1,
        'width':'100%'
      
    },
    /* Animation parameters */
    {
        // Animation duraion in ms, optional (default to 300)
        duration: 300,
        // Animation easing, optional (default to 'swing'), can be also 'linear'
        easing: 'swing',
        /* Callbacks */
        // Animation begins, optional
        begin: function (elements) {
            console.log('animation began');
        },
        // Animation completed, optional
        complete: function (elements) {
            console.log('animation completed');
        },
        // Animation in progress, optional
        progress: function (elements, complete, remaining, start) {
            /* Where
            complete - The call's completion percentage (as a decimal value)
            remaining - How much time remains until the call completes (in ms)
            start - The absolute time at which the call began (in ms)
            */
            console.log('animation in progress');
        }
    }
);


