import React from 'react'

import profilePic from '../assets/Douglas_Blumeyer_profile_pic.jpg'
import RainbowbblesIcon from '../assets/rainbowbbles.svg'
import HoundstoothIcon from '../assets/houndstooth.svg'
import GeometrhythmIcon from '../assets/geometrhythm.svg'
import FourEyesIcon from '../assets/four_eyes.svg'
import UncannlyIcon from '../assets/uncannly.svg'
import MusicalPatternsIcon from '../assets/musical_patterns.svg'
import XenWikiLogoIcon from '../assets/xen_wiki_logo.svg'
import SagittalIcon from '../assets/sagittal.svg'
import resume from '../assets/Douglas_Blumeyer_2022_resume.pdf'

import { faGithubSquare, faLinkedin, faSoundcloud, faVimeoSquare } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({ callback }) => (
    <div className="the-container" ref={callback}>


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
                    SF Bay Area
                </div>
                <div className="info-text me-category">
                    <a href="tel:415-254-1073">+1.415.254.1073</a>
                </div>
            </div>

            <div className="photo row-section me me-category">
                <img src={profilePic} width="80%"/>
            </div>
        </div>


        <div className="a-row code-links-row">
            <div className="cv row-section code-category me-category">
                <a target="_blank" href={resume}>
                    <FontAwesomeIcon icon={faFile} style={{width: '80%', height: '80%'}}/>
                </a>
            </div>

            <div className="li row-section code-category me-category">
                <a href="https://linkedin.com/in/douglasblumeyer" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} style={{width: '90%', height: '90%'}}/>
                </a>
            </div>

            <div className="gh row-section code-category">
                <a href="https://github.com/cmloegcmluin" target="_blank">
                    <FontAwesomeIcon icon={faGithubSquare} style={{width: '90%', height: '90%'}}/>
                </a>
            </div>

            <div className="rb row-section code-category">
                <a href="https://rainbowbbles.douglasblumeyer.com" target="_blank" title="Rainbowbbles">
                    <RainbowbblesIcon width="88%" height="88%"/>
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
            <div className="demos row-section code-category music-category vr-category" title="Houndstoothtopia">
                <canvas id="dougstoothCanvas"/>
            </div>

            <div className="gr row-section code-category music-category">
                <a href="https://github.com/geometrhythm" target="_blank" title="Geometrhythm">
                    <GeometrhythmIcon width="90%" height="90%" />
                </a>
            </div>

            <div className="sc row-section code-category music-category">
                <a href="https://soundcloud.com/cmloegcmluin" target="_blank">
                    <FontAwesomeIcon icon={faSoundcloud} style={{width: '87%', height: '87%'}}/>
                </a>
            </div>
            
            <div className="sag row-section code-category music-category">
                <a href="https://sagittal.org" target="_blank" title="Sagittal microtonal notation">
                    <SagittalIcon width="89%" height="89%"/>
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
                    <FontAwesomeIcon icon={faVimeoSquare} style={{width: '90%', height: '90%'}}/>
                </a>
            </div>

            <div className="blog row-section word-category film-category vr-category">
                <a href="https://blog.douglasblumeyer.com" target="_blank" title="Cmloegcmluin">
                    <FourEyesIcon width="90%" height="90%"/>
                </a>
            </div>

            <div className="uncannly row-section word-category">
                <a href="https://github.com/Uncannly" target="_blank" title="Uncannly">
                    <UncannlyIcon width="100%" height="100%"/>
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

            <div className="xw row-section music-category word-category">
                <a href="https://en.xen.wiki/w/User:Cmloegcmluin" target="_blank" title="Xen Wiki profile">
                    <XenWikiLogoIcon width="89%" height="89%"/>
                </a>
            </div>
        </div>


    </div>
)
