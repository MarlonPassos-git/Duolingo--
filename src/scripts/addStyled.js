export default function addStyled() {
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

        .container {
            width: 75px;
            height: 75px;
            background-color: red;
            position: fixed;
            top: 100px;
            z-index: 1000;
            left: 26px;
        }
    `

    GM_addStyle(style)
}