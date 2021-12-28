import mergerClasses from "../mergerClasses"

export function hideRank() {
    const class_rank_display = '_2Rsru _1ORYU'
    const $rank_display = document.querySelector(mergerClasses(class_rank_display))

    if ($rank_display) {
        $rank_display.classList.add('hide')
    }

}