import mergerClasses from "../mergerClasses"

export default function hideRankPeoples() {
    const class_rank_display_wrapper = '_2ufrs'
    const class_rank_display = '_2Rsru _1ORYU'
    const $rank_display = document.querySelector(mergerClasses(class_rank_display))

    const $rank_display_wrapper = document.querySelectorAll(mergerClasses(class_rank_display_wrapper) + ' > :is(a, div[class])')

    if ($rank_display_wrapper) {

        for (let people of $rank_display_wrapper) {
            people.classList.add('hide')


        }
        $rank_display.classList.add('height-auto')

    }
} 