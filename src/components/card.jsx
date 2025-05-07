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
                    <img src="src/assets/cyber1.jpeg" alt="" />
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
                        <a href="https://github.com"><img src="src/assets/gh.jpeg" /></a>
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