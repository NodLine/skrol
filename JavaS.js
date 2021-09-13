window.addEventListener('scroll', () => {
    const sectionOne = document.querySelector('.section-one');
    const sectionTwo = document.querySelector('.section-two');
    const sectionThree = document.querySelector('.section-three');

    let onePos = sectionOne.getBoundingClientRect().top;
    let twoPos = sectionTwo.getBoundingClientRect().top;
    let threePos = sectionThree.getBoundingClientRect().top;

    let scrollPos = window.innerHeight;

    if (onePos < scrollPos) {
        sectionOne.classList.add('section-one-avtive');
    } else {
        sectionOne.classList.remove('section-one-avtive');
    }

    if (twoPos < scrollPos) {
        sectionTwo.classList.add('section-two-avtive')
    } else {
        sectionTwo.classList.remove('section-two-avtive')
    }

    if (threePos < scrollPos) {
        sectionThree.classList.add('section-three-avtive');
    } else {
        sectionThree.classList.remove('section-three-avtive');
    }

})