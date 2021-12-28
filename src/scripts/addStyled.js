export function styledHidle() {
    const style = `
        .hide {
            display: none;
        }
    `

    document.body.insertAdjacentHTML('beforeend', `
        <style>
            ${style}
        </style>
    `)
}