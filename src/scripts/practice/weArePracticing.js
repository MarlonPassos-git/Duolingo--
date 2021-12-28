export default function weArePracticing(url) {
    const regEx = /https\:\/\/www\.duolingo\.com\/skill/

    const response = regEx.test(url)

    console.log(response)
    return response
}