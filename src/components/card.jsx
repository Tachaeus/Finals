import { useState } from "react";

export default function Card() {
    const [faqs, setFaqs] = useState([]);
    
    const [inputValue, setInputValue] = useState("");
    
    const addInputValue = (i) => {
      setInputValue(i.target.value);
    }
    
    const addFaq = () => {
      if (inputValue.trim() === "") {
        return;
      }
      setFaqs([...faqs, inputValue]);
      setInputValue("");
    }

    return (
        <div className="main_area">
            <main>
                <div className="start">
                    <div class="in_image_text">
                        <h3>Masterful Coding Solutions <br /> Optimizing Systems</h3>
                        <p>View some of our work; it may be just the answer you've been searching for.</p>
                    </div>
                    <a href=""><button>Take a Look</button></a>
                </div><br /><br />
                <div className="find">
                    <div id="find">
                        <p>There's not much to it.</p>
                        <h3>Highly skilled developers fully-vetted and <br />guaranteed to give you your money's worth.</h3>
                        <p>Only a click of a button away.</p>
                        <button>Find Me One</button>
                    </div>
                    <img src="data:image/jpeg;base64,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" alt="" />
                </div><br />
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
                            <h3>Offsource Tasks</h3>
                            <p>Agreement-based leasing of commercial services complete with work flexibility and disgression per demand.</p>
                            <button>Continue</button>
                        </li>
                    </ul>
                    </div>
                    <div className="testimonials">
                        <ul>
                            <li>
                                <h3>Don't Take Our Word <br />For It</h3>
                                <p>Here are a sample few reviews <br />from some of our loyal clientel.</p>
                            </li>
                            <li>
                                <p>"A project I worked on with a backend developer <br />from Scriptor was such a grand success, <br />I haven't stoped using it since."</p><br />
                                <p>— Cliff D, 27</p>
                            </li>
                            <li>
                                <p>"I was hesitant to try at first, <br />now I only recruit from Scriptor <br />when I need a collaborative team."</p>
                                <p>— Andy F, 38</p>
                            </li>
                            <li>
                                <p>"One word...'Perfection'!"</p>
                                <p>— Imran S, 42</p>
                            </li>
                        </ul>
                    </div><br />
                    <div className="credits">
                        <p>Partnered with</p>
                        <a href="https://github.com"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAeFBMVEUjHyAiHyAjHiAiHiAgHB0UDRAAAAAaFReEgoPBwMDf39/v7++2trb///+xsLBzcnL+/v5qaGmWlZWMiosJAAAMAAUeGRtCP0Chn6BZV1hRT1A2MjPZ2dlfXV08OTpKSEjQz89lY2MXEhR9e3z19fXHxsbn5+cqJifS2g27AAABfElEQVR4AWVRBaLkUAjjGUzdfdz2/jdcoLLyU6PQlBAAwDBgg9nuZousBef47gMqgge7Fvgra53lEtIpipMkjk4BvZO03X7kgk+zAzmFo40xDovsb5QVMscpzWHNCcHxaHDntqfsB4rOqqx+4JdxivZ8Oud8X3pVjGeOLx3OxZXoWtywqzhxR6HSxJ2yBwE9e+/7Zw9PlXcjZmIkxeqpUyueLx2oBXD4Xn8iNTnd1ijhlF+E+Aq7rzJeOHEqAw/9LIE2gN11umSMoRc9jInU6b1ppYp66G/CPAWrTutpQyPFaw++l+CD8AcG72Jw5zj6CnXmcF9iqy3PyGE3bovoVBS124pqGcD/YvN4LfHILgFV+TdTkJd1IvusXkvxuW92bLWJwySLu/GeomhF3Wn2RY6ZCXQtsxGf6MUfVN576Xe/nsM7K7+JyFuLyfUJByh8OIU7M+rIbIM5Pj1OH2YaywI+M3ony1nL1lggRH13iLTayGqMAGA95eb22JjfaOUa5/ipzPYAAAAASUVORK5CYII=" /></a>
                        <a href="https://react.com"><img src="src/assets/react.svg" alt="" /></a>
                        <a href="https://medium.com"><img src="src/assets/med.jpeg" /></a>
                        <a href="https://stackoverflow.com"><img src="src/assets/stack.jpeg" /></a>
                        <a href="https://syncfusion.com"><img src="src/assets/sync.jpeg" /></a>
                    </div><br />
                    <div class="explore">
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
                    <div className="CTA_one">
                        <h3>Script Chats</h3>
                        <p>Get initiated into the world of programmers. <br />A global network of the best computer-minds <br />right at your finger tips.</p>
                        <button>Communicate</button>
                    </div><br />
                    <div className="FAQs">
                        <h3>Ask Us A Question:</h3>
                        <div className="query">
                            <input type="text" value={inputValue} onChange={addInputValue} placeholder="Can I pay with proceeds?" /><button onClick={addFaq}>+</button>
                            <ul>
                                {faqs.map((faq) => (
                                    <li key={faq}>{faq}</li>
                                ))
                                }
                            </ul>
                        </div>
                    </div><br />
                    <div class="CTA_two">
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
            </main>
        </div>
    );
}
