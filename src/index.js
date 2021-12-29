import { hideRank } from "./scripts/home/hideRank";
import weAreHome from "./scripts/home/weAreHome";
import addStyled from './scripts/addStyled';
import hideRankPeoples from "./scripts/home/hideRankPeoples";
import weArePracticing from "./scripts/practice/weArePracticing";
import hidePhaseWithSound from "./scripts/practice/hidePhaseWithSound";
import { Howl, Howler } from 'howler';
import addInterface from "./scripts/addInterface";
import { getAudios, mostraFrases } from "./scripts/stories/getAudios";
import { CONFIG } from "./scripts/config";



function start() {
    'use strict';
    let SomAtual;
    addStyled()
    addInterface(SomAtual)
    getAudios(mostraFrases, SomAtual)

    window.__proto__.marlon = 1


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
        else if (weArePracticing(URLcurrent)) {


            if (CONFIG.practice.hidePhaseWithSound) {
                hidePhaseWithSound()
            }

        }

    }, CONFIG.loopSpead)
}

start()
