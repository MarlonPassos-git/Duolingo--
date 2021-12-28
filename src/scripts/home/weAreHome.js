export default function weAreHome(url) {
    const regEx = /https\:\/\/www\.duolingo\.com\/learn/

    const response = regEx.test(url)
    return response
} 