export function fixErrorOnTime() {
    const $next_button = document.querySelector('._3HhhB._2NolF._275sd._1ZefG._2orIw.o66XQ.NAidc')
    const $textArea = document.querySelector('.FA030 textarea')
    const $corret_respost = document.querySelector('._1UqAr._1sqiF')





    if ($next_button && $textArea && $corret_respost) {

        const corret_respost = $corret_respost.innerText.match(/(\w)+/gi).join('').toLowerCase()
        const you_respost = $textArea.value.match(/\w+/gi).join('').toLowerCase()
        $textArea.disabled = false;
        $textArea.focus();
        $next_button.style.display = 'none'

        if (you_respost === corret_respost) {
            $textArea.disabled = false;
            $next_button.style.display = 'block'
            console.log('voce acertou')
        }
    }


}