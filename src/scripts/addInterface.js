export default function addInterface(SomAtual) {
    const elementString = `
        <div 
            class="container"
        >
            <button id="play">Play</button>
            <button id="pause">Pause</button>
        </div>
    `



    document.body.insertAdjacentHTML('beforeend', elementString)

    const $element = document.querySelector('.container')
    const [$buttonPlay, $buttonPause] = $element.querySelectorAll('button')



    $buttonPlay.addEventListener('click', () => {

        const storySounds = GM_getValue('storySounds')
        listenAll(storySounds, SomAtual)
    })

    $buttonPause.addEventListener('click', () => {
        const sound = GM_getValue('SomAtual')


        SomAtual.pause()
    })



}

function listenAll(listURls, SomAtual) {

    const totalAudios = listURls.length;

    listenNext(0)

    function listenNext(number) {

        if (number >= totalAudios) return

        const sound = new Howl({
            src: listURls[number],
        });

        console.log('tocando novo audio')
        SomAtual = sound

        console.log(SomAtual)

        sound.play();
        sound.on('end', () => {
            listenNext(number + 1)
        });

        /* GM_setValue('SomAtual', sound) */
    }

}