const assignProps = (props, defaultProps) => {
    return Object.assign({}, defaultProps, props)
}

const defaultProps = {
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    distance: '30px',
    duration: 1000,
    desktop: true,
    mobile: true
}

ScrollReveal().reveal(
    '.welcome',
    assignProps(
        {
            delay: 300,
            distance: '0px'
        },
        defaultProps
    )
)

ScrollReveal().reveal(
    '.homepage',
    assignProps(
        {
            delay: 450,
            origin: 'top'
        },
        defaultProps
    )
)

ScrollReveal().reveal(
    '.story',
    assignProps(
        {
            delay: 450,
            origin: 'bottom'
        },
        defaultProps
    )
)

ScrollReveal().reveal(
    '.story .arrow-down',
    assignProps(
        {
            delay: 300,
            origin: 'top'
        },
        defaultProps
    )
)

ScrollReveal().reveal(
    '.projects',
    assignProps(
        {
            delay: 500,
            origin: 'bottom'
        },
        defaultProps
    )
)

ScrollReveal().reveal(
    '.contact',
    assignProps(
        {
            delay: 600,
            origin: 'top'
        },
        defaultProps
    )
)

ScrollReveal().reveal(
    '.contact-media__items',
    assignProps(
        {
            delay: 800,
            origin: window.innerWidth >= 768 ? 'right' : 'bottom'
        },
        defaultProps
    )
)
