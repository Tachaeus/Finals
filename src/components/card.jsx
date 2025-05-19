import { useState } from 'react';

function Card() {
    const [active, setActive] = useState();

    const questions = [
        {
            question: "What are some of Scriptor's hiring criteria for coders?",
            answer: "Given the complexity of the role in both professional and ethical standards,the company has a requirement of at least one diploma in a computer field as well as a minimum three years of programming experience."
        },
        {
            question: "Are contract-based labour agreements subject to charges?",
            answer: "It is completely free to collaborate on the site. But if you are using Scriptor as a recruitment platform, you are liable to charges as stipulated by the 2% deduction rate."
        },
        {
            question: "Is Scriptor a marketplace or a hosted work platform?",
            answer: "Scriptor functions as a round-the-clock workspace and free-to-use hosting platform for all work done on the site by either individuals or organizations. Users are similarly allowed to market their skills and services at a fee."
        }
    ];

    return (
        <div className="main_area">
            <main>
                <section className="section">
                <div className="start">
                    <img className="desktop_img" src="https://i.ibb.co/Q3wbLN0G/removed2.png" />
                    <div className="in_image_text">
                        <p>Masterful Coding Solutions <br /> Optimizing Potential</p>
                        <p>Our work may not be the best you've ever seen,<br /> <span>but rest assured,</span><br /> it is what's just right for you!</p>
                        <a href=""><button>Take a Look</button></a>
                    </div>
                    <img className="mobile_img" src="https://i.ibb.co/fV4fbrnv/removed3.png"></img>
                </div><br /><br />
                <div className="find">
                    <div id="find">
                        <p>There's not much to it.</p>
                        <h3>Highly skilled developers fully-vetted and <br />guaranteed to give you your money's worth.</h3>
                        <p>Only a click of a button away.</p>
                        <button>Find Me One</button>
                    </div>
                    <img src="https://i.ibb.co/gb6wY2P8/removed3-2.png" />
                </div><br />
                </section>
                <section>
                <p>Services Rendered</p>
                <div className="services">
                    <ul>
                        <div className="pair">
                            <li>
                                <h3>Consultation</h3>
                                <p>Make inquiries and requests for aid on computational and developmental problems.</p>
                                <button>Continue</button>
                            </li>
                            <li>
                                <h3>Project Collaboration</h3>
                                <p>Team-intregration and a hosting platform for group-work.</p>
                                <button>Continue</button>
                            </li>
                        </div><br />
                        <li>
                            <span className='third_service'>
                                <h3>Offsource Tasks</h3>
                                <p>Agreement-based leasing of commercial services complete with work flexibility and disgression per demand.</p>
                            <button>Continue</button>
                            </span>
                            <img src="https://i.ibb.co/sJKLK57F/removed1.png" />
                        </li>
                    </ul>
                    </div>
                    <div className="testimonials">
                        <ul>
                            <li>
                                <h3>Don't Take Our Word For It</h3>
                                <p>Here are a sample few reviews from some of our loyal clientel.</p>
                            </li>
                            <li>
                                <p>"A project I worked on with a backend developer from Scriptor <br />was such a grand success, I haven't stoped using it since."</p><br />
                                <p>— Cliff D, 27</p>
                            </li>
                            <li>
                                <p>"I was hesitant to try at first, now I only recruit from <br />Scriptor when I need a collaborative team."</p>
                                <p>— Andy F, 38</p>
                            </li>
                            <li>
                                <p>"One word...'Perfection'!"</p>
                                <p>— Imran S, 42</p>
                            </li>
                        </ul>
                    </div><br />
                    </section>
                    <section>
                    <div className="credits">
                        <p>Partnered with</p>
                        <a href="https://github.com"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEX////4+Pi3ubtvcnZNUVU+Q0cpLjLr6+x3en0sMTYkKS59gIORk5aUl5n8/Pzw8PFTV1tbX2Pc3d5DSEzn5+g3PECLjpFKTlKFh4qxs7XCxMUuMze/wcLh4uPV1tZzd3o/Q0jOz9CmqKpjZ2qfoaTxAyfNAAABPUlEQVR4AW3TBYKDMBQE0AltAgzuzur9z7ibH5oKfWjc4UEFl6s2Rl8vgcJZGMX04iTEM5UaPomzHA+KkidVAa/WfKNpffMd32oKCHUlWfb27Q19ZSMVrNHGTMDckMtQLqSegdXGpvi3Sf93W9UudRby2WzsEgL4oMvwoqY1AsrQNfFipbXkCGh1BV6oT1pfRwvfOJlo9ZA5NAonStbmB1pawBuDTAgkX4MzV/eC2H3e0C7lk1aBEzd+7SpigJOZVoXx+J5UxzADil+8+KZYoRaK5y2WZxSdgm0j+dakzkIc2kzT6W3IcFnDTzdt4sKbWMqkpNl229IMsfMmg6UaMsJXmv4qCMXDoI4mO5oADwyFDnGoO3KI0jSHQ6E3eJum5TP4Y+EVyUOGXHZjgWd7ZEwOJzZRjbPQt7mF8P4AzsYZpmkFLF4AAAAASUVORK5CYII=" /></a>
                        <a href="https://react.com"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAkFBMVEUiIiIiICAgGxkgGxojKCkeEg8gGBYhHx4yVV9e0ete0fFbyd45ankcAAA0XGgdBgBh2fQ5bHoiIiNUtshPqbssRExczeAfFRUjICJMn65Xv9IgFhMeDAA2X2tXwdBcy+ZPq8U/fIohHRsvTFVGk59Utc4nNDlEiptKmq8qPEBh2ftWvNcZAABHkqdk4v8mLzMywZ40AAABj0lEQVR4AaVSBaKkIAC1ERlMwMIcJcz7326Zv931DBpeYP0Z7J8POa7nB28V3wPB12NBCCP0wADgGEXw4X81mKRZHqPCcwl85GHqfnkGoKy0g6puCuK1Nm8658sT4z4xU/CQlqabj1Nrfcb87EsLcEKWvgR5smZfUgIVdHMh0y4elPASRt0vuAZ6W9Gw7QbbgNbtGbT5hzGcITioap8Ogw5WEiI44TfCtrs2HX+sHePeJAUupnHCYdN4wAz65+q2NhjSmI/XtTs0HYQd+IS8GNtMz8aFBR063bY0PAqCDcWS3a+VZMHA4vulA3Rd8K7SYTaSpyZ4yRCs1uYQWWA6jiEmas2wWOB7Oc5NIFlPzEJ8HJim7tQoVogPPtj4llc0QHgqdQ4piq5TYPDZIQ4FDcdIymgNqcduN//CW5PK3Ob7lCHRziaV4OtUfPMXENL2B6kw39DPGJR4tpLiq1SsNqWJqNFTI6ITkd7gy0EuWQNrETjeAhumEusrcB17L/ogsWOaGK5fAXy6VC6w/hvvAOSaJO/caetCAAAAAElFTkSuQmCC" /></a>
                        <a href="https://medium.com"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAQlBMVEVHcEwAAAAAAAAAAAAAAAAAAABxcXGkpKSUlJQeHh5/f3/Q0ND////e3t6rq6taWlrHx8e0tLQsLCw+Pj7u7u62trYTUwO8AAAABnRSTlMAS8D5/5dwkjMFAAAA1klEQVR4AX3TRQLEIAwFUNoGhypz/6vOJ9SFrAIPFyFE03b0iK5tBELSR0j0o89oRPuNrei+sRNUiYJKa20slXAoqBOSDyG4klqkns6oURNLapD2F+x7VA2cjvqOkwWOZfq+oPLTjiN0zh3nibHHGnYcgJpo8cTosIQdZ4pQJIoRpf6MjncTiRFL8H1/oE3YjTEFF972gZR3k2jH/oILL2kfNl2QsBu7Yl7eeEGF8oq8vLSi56NLA+d88D/ofmW5K5vqy5Upj56VqD+T6gOrPs3qo659hz8m8RNl7wTa8QAAAABJRU5ErkJggg==" /></a>
                        <a href="https://stackoverflow.com"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAA7ElEQVR4AWJwLwC0WwcaCENhFMefoV6hABgEBhDAxN7jAggRPcSeoAcYQFgIInuSIcAlwLqHM45klvtt0PCXO7Pfvu3Gskn7c3AG/WldhNIpwRaNDQJadb9EH9agYiWQ13G55doRPYwFLkKNIpiQ68QcZIqUXHuszUBMo1PJLm2JJ/qoo0FcSKZCBdGc62asd5h8wkRTKxCIkwsvZPMU+h7tQP4VNB5zehNR4LWq6tD+y+N0xHyH8/wzigFbXEA2TColiMed3ODTBMQUPXlzEJP0ZQnWl9t9MyQr8KdiwTy0C2WD4rnzN80MmvcG9xb1UQNO3ZEAAAAASUVORK5CYII=" /></a>
                        <a href="https://syncfusion.com"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACFElEQVR4Ae2WA4xdURRFv+3fb6u2bdu23bC2bcZoUNtuXFtRx7Y950zGONHc8CVZnztvr+SSJ+DzmLNmgLpb2knXh+ldlF1q/ce+vINb4ow65PyXc9ZdAsSfnmYYIxYKBKwFKso1kQedb7G8GlnnZhjWMRdQSvnS37vsl2uVV1D4dZvtuNcokvMCrRc/JLin0gY8BkvnMVTOFZy0r3q5SCjg315h2o1FWNgAxd+2267xWnXdWkJQoDW2am129l9N5YJtlj2rXn5juWkuFBRVlFESjS7g0otkYQcc16jiCv7ssj9udAHErBaqv+8oG/9iQuBXe5fEyUQAUcmEogdrzFugKK92edYZd9yS3qqWmGMmgOB6PzhBPy/7rDu9ojzjtDsDNqZR+D9zgQqOTtYPhPJIoAgm6Ar8jY0AQe+gtMW1paY1KilfWEPA5hm2iWCDTGk1qXWhTlSuib3XDKKchAcbTZBCJFZJJDKDlsoo1C4HPmxYS7kDCDZEB5dEi7naQ5BBkAJD0BKGYCmVgyG4ixMOxvg+kNEQV5eaFmIpkzlQLvCC2nhAYFkdAU6AE+AEYKOxUuCpJhBKFFRGKFIY8GFWjdAAWBtCpxAo6gj4WszdRLBBqfGZ9KYOnaicwz92Bt6E4PNMKmdxDujAdAjg8wsq5w5NrXcOcAKcACfwieA9CARAYBqVA4EL5QKXqBwITKotUAr2NQhGsplDBAAAAABJRU5ErkJggg==" /></a>
                    </div><br />
                    <div className="explore">
                        <h3>View Some of <br />Our Resources</h3>
                        <p>Complementary sneak peek at how one goes from <br />writing simple scripts to producing iconic code.</p>
                    </div>
                    <div className="cards">
                        <ul>
                            <li>
                                <h3>Coding Practices</h3>
                                <p>Hands-on challenges and tutorials with view to sharpening creative problem-solving.</p>
                                <button>Explore</button>
                            </li>
                            <li>
                                <h3>Project Guides</h3>
                                <p>Basic and gradual comprehensive build on how to properly handle web tachnologies.</p>
                                <button>Explore</button>
                            </li>
                            <li>
                                <h3>Internal Management</h3>
                                <p>Real-life coding, ethical-hacking & web-dev schooling and cohesive runs.</p>
                                <button>Explore</button>
                            </li>
                        </ul>
                    </div>
                    </section>
                    <section>
                    <div className="CTA_one">
                        <h3>Script Chats</h3>
                        <p>Get initiated into the world of programmers. <br />A global network of the best computer-minds <br />right at your finger tips.</p>
                        <button>Communicate</button>
                    </div><br />
                    <h3>People Often Wonder:</h3>
                    <div className="FAQs_in" >
                        {
                        questions.map((things, e) => (
                            <div key={things.id} className="query">
                                <div className="question-icon" onClick={() => setActive(e === active ? undefined : e)}>
                                    {e === active ? "×" : "+"}
                                </div>
                                <div className="question">{things.question}</div>
                                {
                                e === active && <p className="answer">{things.answer}</p>
                                }
                            </div>
                        ))
                        }
                    </div><br />
                    <div className="CTA_two">
                        <div id="talk">
                            <h3>Be An Innovator</h3>
                            <p>Around the clock, any queries, complements, complaints, consultations, are welcome.</p>
                        </div><br />
                        <div className="contact_us">
                            <div className="contact_info">
                                <h3>Contact Info</h3>
                                <p>Email: tachweb@gmail.com</p>
                                <p>Phone: +254 (765) 432-100</p>
                                <p>Address: 767 Pahali Street, Place Town, KE 00100</p>
                            </div>
                            <div className="message">
                                <h3>Contact Us</h3>
                                <label for="email">Email:</label><br /><br />
                                <input type="text" className="email" id="email" placeholder="Write Email" /><br /><br />
                                <a href="mailto:tachincursion@gmail.com"><button>Send</button></a>
                            </div>
                        </div>
                        <p>You can expect a response within a day.</p>
                    </div>
                    </section>
            </main>
        </div>
    );
}

export default Card;
