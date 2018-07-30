let hovered

document.querySelector('#dougstoothCanvas').addEventListener('mouseover', () => {
    hovered = true
    window.spotLight.intensity = 1
})

document.querySelector('#dougstoothCanvas').addEventListener('mouseout', () => {
    hovered = false
    window.spotLight.intensity = 0.65
})

document.querySelectorAll('.me-category').forEach(el => {
    el.addEventListener('mouseover', () => {

        document.querySelectorAll('.me-category').forEach(ell => ell.classList.add('section-hovered'))

        document.querySelectorAll('.code-category').forEach(ell => ell.classList.add('not-hovered'))
        document.querySelectorAll('.vr-category').forEach(ell => ell.classList.add('not-hovered'))
        document.querySelectorAll('.music-category').forEach(ell => ell.classList.add('not-hovered'))
        document.querySelectorAll('.film-category').forEach(ell => ell.classList.add('not-hovered'))
        document.querySelectorAll('.word-category').forEach(ell => ell.classList.add('not-hovered'))
    })

    el.addEventListener('mouseout', () => {

        document.querySelectorAll('.me-category').forEach(ell => ell.classList.remove('section-hovered'))

        document.querySelectorAll('.code-category').forEach(ell => ell.classList.remove('not-hovered'))
        document.querySelectorAll('.vr-category').forEach(ell => ell.classList.remove('not-hovered'))
        document.querySelectorAll('.music-category').forEach(ell => ell.classList.remove('not-hovered'))
        document.querySelectorAll('.film-category').forEach(ell => ell.classList.remove('not-hovered'))
        document.querySelectorAll('.word-category').forEach(ell => ell.classList.remove('not-hovered'))
    })
})

document.querySelectorAll('.code-category').forEach(el => {
    el.addEventListener('mouseover', () => {
        document.querySelectorAll('.me-category').forEach(ell => ell.classList.add('not-hovered'))

        document.querySelectorAll('.code-category').forEach(ell => ell.classList.add('section-hovered'))
        if (!hovered) window.spotLight.intensity = 0.65

        document.querySelectorAll('.vr-category').forEach(ell => ell.classList.add('not-hovered'))
        document.querySelectorAll('.music-category').forEach(ell => ell.classList.add('not-hovered'))
        document.querySelectorAll('.film-category').forEach(ell => ell.classList.add('not-hovered'))
        document.querySelectorAll('.word-category').forEach(ell => ell.classList.add('not-hovered'))
    })

    el.addEventListener('mouseout', () => {
        document.querySelectorAll('.me-category').forEach(ell => ell.classList.remove('not-hovered'))

        document.querySelectorAll('.code-category').forEach(ell => ell.classList.remove('section-hovered'))
        if (!hovered) window.spotLight.intensity = 0.3

        document.querySelectorAll('.vr-category').forEach(ell => ell.classList.remove('not-hovered'))
        document.querySelectorAll('.music-category').forEach(ell => ell.classList.remove('not-hovered'))
        document.querySelectorAll('.film-category').forEach(ell => ell.classList.remove('not-hovered'))
        document.querySelectorAll('.word-category').forEach(ell => ell.classList.remove('not-hovered'))
    })
})

document.querySelectorAll('.vr-category').forEach(el => {
    el.addEventListener('mouseover', () => {
        document.querySelectorAll('.me-category').forEach(ell => ell.classList.add('not-hovered'))
        document.querySelectorAll('.code-category').forEach(ell => ell.classList.add('not-hovered'))

        document.querySelectorAll('.vr-category').forEach(ell => ell.classList.add('section-hovered'))
        if (!hovered) window.spotLight.intensity = 0.65

        document.querySelectorAll('.music-category').forEach(ell => ell.classList.add('not-hovered'))
        document.querySelectorAll('.film-category').forEach(ell => ell.classList.add('not-hovered'))
        document.querySelectorAll('.word-category').forEach(ell => ell.classList.add('not-hovered'))
    })

    el.addEventListener('mouseout', () => {
        document.querySelectorAll('.me-category').forEach(ell => ell.classList.remove('not-hovered'))
        document.querySelectorAll('.code-category').forEach(ell => ell.classList.remove('not-hovered'))

        document.querySelectorAll('.vr-category').forEach(ell => ell.classList.remove('section-hovered'))
        if (!hovered) window.spotLight.intensity = 0.3

        document.querySelectorAll('.music-category').forEach(ell => ell.classList.remove('not-hovered'))
        document.querySelectorAll('.film-category').forEach(ell => ell.classList.remove('not-hovered'))
        document.querySelectorAll('.word-category').forEach(ell => ell.classList.remove('not-hovered'))
    })
})

document.querySelectorAll('.music-category').forEach(el => {
    el.addEventListener('mouseover', () => {
        document.querySelectorAll('.me-category').forEach(ell => ell.classList.add('not-hovered'))
        document.querySelectorAll('.code-category').forEach(ell => ell.classList.add('not-hovered'))
        document.querySelectorAll('.vr-category').forEach(ell => ell.classList.add('not-hovered'))

        document.querySelectorAll('.music-category').forEach(ell => ell.classList.add('section-hovered'))

        document.querySelectorAll('.film-category').forEach(ell => ell.classList.add('not-hovered'))
        document.querySelectorAll('.word-category').forEach(ell => ell.classList.add('not-hovered'))
    })

    el.addEventListener('mouseout', () => {
        document.querySelectorAll('.me-category').forEach(ell => ell.classList.remove('not-hovered'))
        document.querySelectorAll('.code-category').forEach(ell => ell.classList.remove('not-hovered'))
        document.querySelectorAll('.vr-category').forEach(ell => ell.classList.remove('not-hovered'))

        document.querySelectorAll('.music-category').forEach(ell => ell.classList.remove('section-hovered'))

        document.querySelectorAll('.film-category').forEach(ell => ell.classList.remove('not-hovered'))
        document.querySelectorAll('.word-category').forEach(ell => ell.classList.remove('not-hovered'))
    })
})

document.querySelectorAll('.film-category').forEach(el => {
    el.addEventListener('mouseover', () => {
        document.querySelectorAll('.me-category').forEach(ell => ell.classList.add('not-hovered'))
        document.querySelectorAll('.code-category').forEach(ell => ell.classList.add('not-hovered'))
        document.querySelectorAll('.vr-category').forEach(ell => ell.classList.add('not-hovered'))
        document.querySelectorAll('.music-category').forEach(ell => ell.classList.add('not-hovered'))

        document.querySelectorAll('.film-category').forEach(ell => ell.classList.add('section-hovered'))

        document.querySelectorAll('.word-category').forEach(ell => ell.classList.add('not-hovered'))
    })

    el.addEventListener('mouseout', () => {
        document.querySelectorAll('.me-category').forEach(ell => ell.classList.remove('not-hovered'))
        document.querySelectorAll('.code-category').forEach(ell => ell.classList.remove('not-hovered'))
        document.querySelectorAll('.vr-category').forEach(ell => ell.classList.remove('not-hovered'))
        document.querySelectorAll('.music-category').forEach(ell => ell.classList.remove('not-hovered'))

        document.querySelectorAll('.film-category').forEach(ell => ell.classList.remove('section-hovered'))

        document.querySelectorAll('.word-category').forEach(ell => ell.classList.remove('not-hovered'))
    })
})

document.querySelectorAll('.word-category').forEach(el => {
    el.addEventListener('mouseover', () => {
        document.querySelectorAll('.me-category').forEach(ell => ell.classList.add('not-hovered'))
        document.querySelectorAll('.code-category').forEach(ell => ell.classList.add('not-hovered'))
        document.querySelectorAll('.vr-category').forEach(ell => ell.classList.add('not-hovered'))
        document.querySelectorAll('.music-category').forEach(ell => ell.classList.add('not-hovered'))
        document.querySelectorAll('.film-category').forEach(ell => ell.classList.add('not-hovered'))

        document.querySelectorAll('.word-category').forEach(ell => ell.classList.add('section-hovered'))
    })

    el.addEventListener('mouseout', () => {
        document.querySelectorAll('.me-category').forEach(ell => ell.classList.remove('not-hovered'))
        document.querySelectorAll('.code-category').forEach(ell => ell.classList.remove('not-hovered'))
        document.querySelectorAll('.vr-category').forEach(ell => ell.classList.remove('not-hovered'))
        document.querySelectorAll('.music-category').forEach(ell => ell.classList.remove('not-hovered'))
        document.querySelectorAll('.film-category').forEach(ell => ell.classList.remove('not-hovered'))

        document.querySelectorAll('.word-category').forEach(ell => ell.classList.remove('section-hovered'))
    })
})
