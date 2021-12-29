import mergerClasses from "../mergerClasses"


export default function hidePhaseWithSound() {
    const class_balloon = '_1KUxv _11rtD'

    const phase_container = document.querySelector(mergerClasses(class_balloon) + ' div[dir="ltr"] > span')


    if (phase_container) {
        phase_container.classList.add('hidePhaseWithSound')
    }
}