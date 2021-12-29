const isArray = Array.isArray;
const isObject = x => ('object' === typeof x) && !!x && !isArray(x);
const isString = x => ('string' === typeof x);


export function getAudios(callback) {

    const originalXhrOpen = XMLHttpRequest.prototype.open;

    XMLHttpRequest.prototype.open = function (method, url, async, user, password) {

        const regex = /https\:\/\/stories\.duolingo\.com\/api2\/stories/

        if (regex.test(url)) {
            this.addEventListener('load', () => {
                const audios = isObject(this.response) ? this.response : JSON.parse(this.responseText);

                callback(audios);

            })
        }
        return originalXhrOpen.call(this, method, url, async, user, password);
    }
}

export function mostraFrases(dados) {
    console.log('chamou')
    const storySounds = dados.elements.map(element => {
        if ('HEADER' === element.type) {
            return element?.learningLanguageTitleContent?.audio?.url;
        } else if ('LINE' === element.type) {
            return element?.line?.content?.audio?.url;
        }
    }).filter(isString);

    GM_setValue('storySounds', storySounds)




}
