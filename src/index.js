import { hideRank } from "./scripts/home/hideRank";
import weAreHome from "./scripts/home/weAreHome";
import { styledHidle } from './scripts/addStyled';
import hideRankPeoples from "./scripts/home/hideRankPeoples";
import


    function start() {
        'use strict';

        styledHidle()

        const CONFIG = {
            loopSpead: 500,
            home: {
                hideRank: false,
                hideRankPeoples: true,
                hideFriend: false,
            },
            stories: {

            },
            practice: {

            }
        }


        let loop = setInterval(() => {
            const URLcurrent = window.location.href


            if (weAreHome(URLcurrent)) {

                if (CONFIG.home.hideRank) {
                    hideRank()
                }
                else if (CONFIG.home.hideRankPeoples) {
                    hideRankPeoples()
                }
            }

            const regExp_weAreStudying = /www\.duolingo\.com\/skill\/.+/

            if (!regExp_weAreStudying.test(URLcurrent)) return;

            let phase = document.querySelector('.ltr [data-test="hint-sentence"]')
            let sound = document.querySelector('._21LCG')
            let answer = document.querySelector('.YQ0lZ ')

            document.onkeyup = function (key) {
                if (key.which >= 49 && key.which <= 57) {

                    let wordBalloonsTop = document.querySelectorAll('._3NgMa div ._1Bh_M button')
                    let wordBalloonsBotoon = document.querySelectorAll('._1_wIY button')

                    wordBalloonsBotoon[key.which - 49].click()
                }
            }



            if (sound) {
                phase.classList.add('hideText')
            } else {
                phase.classList.remove('hideText')
            }

            if (answer) {
                phase.classList.remove('hideText')
            }

            hasStyle()

        }, CONFIG.loopSpead)


        function hasStyle() {

            let b = document.querySelector('.stylePlugin')
            if (b == null) {
                document.body.insertAdjacentHTML('beforeend', '<style class="stylePlugin"> .hideText {color: #FFF;}.hideText:hover {color: #3c3c3c}</style>')
            }
        }

        function showRank() {
            const class_rank_display = '_2Rsru _1ORYU'
        }



    }

document.onload(start())
