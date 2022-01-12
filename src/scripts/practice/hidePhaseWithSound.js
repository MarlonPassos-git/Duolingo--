import mergerClasses from "../mergerClasses"


export default function hidePhaseWithSound() {
    const class_phase_container = '._1KUxv div[dir="ltr"] > span'
    const class_sond_button = '._21LCG._31Egf._371Cf._3ZPOL'
    const class_solution_container = '._3dRS9._3DKa-._1tuLI._3vF5k'
    const $solution_container = document.querySelector(class_solution_container)
    const $sound_button = document.querySelector(class_sond_button)


    if (!$sound_button) return

    const $phase_container = document.querySelector(class_phase_container)

    if ($solution_container) {
        $phase_container.classList.remove('hidePhaseWithSound')
    }
    else {
        $phase_container.classList.add('hidePhaseWithSound')
    }
}