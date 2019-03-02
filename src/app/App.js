import React from 'react'

import goodOneSmall from '../assets/good_one_small.jpg'
import RainbowbblesIcon from '../assets/rainbowbbles.svg'
import HoundstoothIcon from '../assets/houndstooth.svg'
import GeometrhythmIcon from '../assets/geometrhythm.svg'
import FourEyesIcon from '../assets/four_eyes.svg'
import UncannlyIcon from '../assets/uncannly.svg'
import MusicalPatternsIcon from '../assets/musical_patterns.svg'

import { faGithubSquare, faLinkedin, faSoundcloud, faVimeoSquare } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => (
    <div className="the-container">


        <div className="a-row name-row">
            <div className="name row-section me me-category">
                <div className="name-text">
                    Douglas Blumeyer
                </div>
            </div>
        </div>


        <div className="a-row info-row">
            <div className="info me me-category">
                <div className="info-text me-category">
                    <a href="mailto:douglas.blumeyer@gmail.com">@gmail.com</a>
                </div>
                <div className="info-text">
                    San Francisco
                </div>
                <div className="info-text me-category">
                    <a href="tel:847-922-1483">+1.415.254.1073</a>
                </div>
            </div>

            <div className="photo row-section me me-category">
                <img src={goodOneSmall} width="89%"/>
            </div>
        </div>


        <div className="a-row code-links-row">
            <div className="cv row-section code-category me-category">
                <a target="_blank" href="../assets/Douglas_Blumeyer_2017_resume.pdf">
                    <FontAwesomeIcon icon={faFile} style={{width: '67%', height: '67%'}}/>
                </a>
            </div>

            <div className="li row-section code-category me-category">
                <a href="https://linkedin.com/in/douglasblumeyer" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} style={{width: '67%', height: '67%'}}/>
                </a>
            </div>

            <div className="gh row-section code-category">
                <a href="https://github.com/cmloegcmluin" target="_blank">
                    <FontAwesomeIcon icon={faGithubSquare} style={{width: '67%', height: '67%'}}/>
                </a>
            </div>

            <div className="rb row-section code-category">
                <a href="https://rainbowbbles.douglasblumeyer.com" target="_blank" title="Rainbowbbles">
                    <RainbowbblesIcon width="67%"/>
                </a>
            </div>

            <div className="dt row-section code-category">
                <a href="https://drem.pt" target="_blank" title="Drempt">
                    <div className="dt-wrapper">
                        <div className="dt-text"/>
                    </div>
                </a>
            </div>

            <div className="ht row-section code-category">
                <a href="https://houndstoothcraft.douglasblumeyer.com" target="_blank" title="Houndstoothcraft">
                    <HoundstoothIcon width="100%" height="100%"/>
                </a>
            </div>
        </div>


        <div className="a-row code-row">
            <div className="code row-section code-category">
                <div className="code-text category">
                    code
                </div>
            </div>
        </div>


        <div className="a-row music-links-row">
            <div className="demos row-section code-category music-category vr-category">
                <a href="https://houndstoothtopia.douglasblumeyer.com" target="_blank" title="Houndstoothtopia">
                    <canvas id="dougstoothCanvas"/>
                </a>
            </div>

            <div className="gr row-section code-category music-category">
                <a href="https://www.geometrhythm.com" target="_blank" title="Geometrhythm">
                    <GeometrhythmIcon width="67%"/>
                </a>
            </div>

            <div className="sc row-section code-category music-category">
                <a href="https://soundcloud.com/cmloegcmluin" target="_blank">
                    <FontAwesomeIcon icon={faSoundcloud} style={{width: '87%', height: '87%'}}/>
                </a>
            </div>
        </div>


        <div className="a-row vr-music-row">
            <div className="vr row-section vr-category">
                <div className="category vr-text">
                    vr
                </div>
            </div>

            <div className="music row-section music-category">
                <div className="category music-text">
                    music
                </div>
            </div>
        </div>


        <div className="a-row misc-row">
            <div className="film row-section film-category">
                <div className="category film-text">
                    film
                </div>
            </div>

            <div className="vm row-section film film-category vr-category">
                <a href="https://vimeo.com/douglasblumeyer" target="_blank">
                    <FontAwesomeIcon icon={faVimeoSquare} style={{width: '67%', height: '67%'}}/>
                </a>
            </div>

            <div className="blog row-section word-category film-category vr-category">
                <a href="https://blog.douglasblumeyer.com" target="_blank" title="Cmloegcmluin">
                    <FourEyesIcon width="67%"/>
                </a>
            </div>

            <div className="uncannly row-section word-category">
                <a href="https://uncannly.douglasblumeyer.com" target="_blank" title="Uncannly">
                    <UncannlyIcon width="100%"/>
                </a>
            </div>

            <div className="word row-section word-category">
                <div className="category word-text">
                    word
                </div>
            </div>

            <div className="mp row-section music-category word-category">
                <a href="https://musical-patterns.douglasblumeyer.com" target="_blank" title="Musical Patterns">
                    <MusicalPatternsIcon width="89%" height="89%"/>
                </a>
            </div>
        </div>


    </div>
)
