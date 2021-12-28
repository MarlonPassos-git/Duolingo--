export function styledHidle() {
    const style = `
        .hide {
            display: none;
        }

        .height-auto {
            height: auto !important;
        }
    `

    document.body.insertAdjacentHTML('beforeend', `
        <style>
            ${style}
        </style>
    `)
}