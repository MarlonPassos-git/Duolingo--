export function styledHidle() {
    const style = `
        .hide {
            display: none;
        }

        .height-auto {
            height: auto !important;
        }

        .hidePhaseWithSound {
            color: #FFF;
        }
        
        .hidePhaseWithSound:hover {
            color: #3c3c3c
        }
    `

    document.body.insertAdjacentHTML('beforeend', `
        <style>
            ${style}
        </style>
    `)
}