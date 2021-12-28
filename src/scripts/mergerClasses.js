export default function mergerClasses(string) {

    const response = '.' + string
        .split(' ')
        .join('.')

    return response
}
