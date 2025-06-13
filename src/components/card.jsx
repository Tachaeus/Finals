import { useState } from 'react';

function Card() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const addEmail = (e) => {
    setEmail(e.target.value);
    }
    const addMessage = (m) => {
    setMessage(m.target.value);
    }
    const sendMessage = () => {
        if (email.trim() === "" && message.trim() === "") {
            return;
        }
        setEmail("");
        setMessage("");
    }

    const [active, setActive] = useState();

    const questions = [
        {
            question: "What is Scriptor exactly?",
            answer: "Scriptor functions as a round-the-clock workspace and free-to-use hosting platform for all work done on the site by either individuals or organizations. Users are similarly allowed to market their skills and services at a fee."
        },
        {
            question: "What are some of Scriptor's hiring criteria for coders?",
            answer: "Per our professional ethos, the company has a requirement of at least one diploma in a computer field as well as a minimum three years of programming experience for entry-level positions."
        },
        {
            question: "Are contract-based labour agreements subject to charges?",
            answer: "It is completely free to collaborate on the site. But if you are using Scriptor as a recruitment platform, you are liable to charges as stipulated by the 2% deduction rate."
        },
        {
            question: "Do I have to pay extra if I am working with a collab team?",
            answer: "No, the charge is for account-usage per duration, regardless of number of users."
        },
        {
            question: "How many people can use my account at a time?",
            answer: "The maximum number of users allowed per account is twenty-five admins and fifteen workers."
        },
        {
            question: "Do you offer database access privilages as well as hosting services?",
            answer: "We do not provide database facilities, however, you shall have full access to any official offsite server you have access privilages to."
        }
    ];

    return (
        <div className="main_area">
            <main>
                <section className="section_one">
                <span className="start">
                    <img className="desktop_img" src="https://www.shakebugs.com/wp-content/uploads/2022/05/What-is-collaborative-coding.png" />
                    <span className="in_image_text">
                        <p>Masterful Coding Solutions <br /> Optimizing Potential</p>
                        <p>Our work may not be the perfect,<br /> <span>but rest assured,</span><br /> it is what's just right for you!</p>
                        <button>Take a Look</button>
                    </span>
                    <img className="mobile_img" src="https://i.ibb.co/zTPp2fcv/removed-3.png" />
                </span><br /><br />
                <div className="find">
                    <div id="find">
                        <p>There's not much to it.</p>
                        <h3>Highly skilled developers fully-vetted and <br />guaranteed to give you your money's worth.</h3>
                        <p>Only a click of a button away.</p>
                        <button>Find One</button>
                    </div>
                    <img className="find_img" src="https://i.ibb.co/qMC15G57/removed-5.png" />
                </div><br />
                </section>
                <section className="section_two">
                <div className="services">
                    <span>
                        <h3>But What Exactly Is it That We Do?</h3>
                        <h5>We deal with a broad range of services, all revolving around cohesive coding.</h5>
                    </span>
                    <ul>
                    <span className="pair">
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
                    </span>
                    <li className="last">
                        <span>
                            <h3>Offsource Tasks</h3>
                            <p>Agreement-based leasing of commercial services complete with work flexibility and disgression per demand.</p>
                            <button>Continue</button>
                        </span>
                        <img src="https://i.ibb.co/ccHwLNTv/removed-2.png" />
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
                    <section className="section_three">
                    <div className="credits">
                        <p>Partnered with:</p>
                        <span><a href="https://github.com"><img src="https://img.icons8.com/?size=32&id=16318&format=png" /></a></span>
                        <span><a href="https://react.com"><img src="https://img.icons8.com/?size=30&id=122637&format=png" /></a></span>
                        <span><a href="https://medium.com"><img src="https://img.icons8.com/?size=24&id=vfZqSNdtM6Ur&format=png" /></a></span>
                        <span><a href="https://stackoverflow.com"><img src="https://img.icons8.com/?size=24&id=dtYaGsSmXwVm&format=png" /></a></span>
                        <span><a href="https://syncfusion.com"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABW0lEQVQ4jWMW4WFi4GJjJBrvLRRfKSPIzHv12e8LXGyMDMxcbIwMxIIWf4FqD23OHBsVDn9hbqY/+27+OMwirFZwC67i/7+Pv97ua2ATcemHCX39eH/3j5cbs7MdeBPjLXmaYeIwNgsLC5cKkiVv3vziEpNAFdvNwMDAIMnPLIXsmv8MDD+7D3BtZyLW+TUbP7R27PiY/J+B4ScDAwND546PWR8/PjvHQqwBDAwMDFMPfJ6/6JL8q3LbJwZTD3yez8DAwMCoKKfnjazo88eHp3n55U1hfKa/755//PL5CYpJfz+/gjFZuCT8NiNJvfn0a085l4TLXJjAx7dXp2+OOS6iL8vmBxPT7pIP+fzuylYGBgYGor3AyMDAjk2c6EDEBSg2gKhAZGBgYPjHLCSJrAYWkEQFIgMDAwO/sHYmQtkmX1ggDnwYsDAwMLyBcf78+fYBynyDRS02MQYAsAyDuQyF0HsAAAAASUVORK5CYII=" /></a></span>
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
                    <section className="section_four">
                    <div className="CTA_one">
                        <h3>ScriptTalk</h3>
                        <p>Get initiated into the world of programmers. <br />A global network of the best computer-minds <br />right at your finger tips.</p>
                        <button>Communicate</button>
                    </div><br />
                    <div><h3>Frequently Asked Questions:</h3></div>
                    <div className="FAQs">
                    <span className="FAQs_out">
                        <p>Have questions? You are not alone. Here are just a few pertaining to the business aspect of Scriptor...</p>
                        <span className="FAQs_out_img_area">
                            <img src="https://i.ibb.co/Q3wbLN0G/removed2.png" />
                        </span>
                    </span>
                    <span className="FAQs_in">
                        {
                        questions.map((things, e) => (
                            <span key={things.id} className="query" onClick={() => setActive(e === active ? undefined : e)}>
                                
                                <span className="question">{things.question}
                                <span className="question-icon">
                                    {e === active ? "×" : "+"}
                                </span>
                                </span>
                                {
                                e === active && <p className="answer">{things.answer}</p>
                                }
                            </span>
                        ))
                        }
                    </span>
                    </div><br />
                    <div className="CTA_two">
                        <div id="talk">
                            <h3>Safe And Efficient | For You</h3>
                            <p>Around the clock, any queries, complements, complaints, consultations, are welcome.</p>
                        </div><br />
                        <div className="contact">
                            <span className="contact_info">
                                <h3>Contact Info</h3>
                                <p>Email: techweb@gmail.com</p>
                                <p>Phone: +254 (765) 432-100</p>
                                <p>Address: 767 Pahali Street, Place Town, KE</p>
                            </span>
                            <span className="message">
                                <h3>Contact Us</h3>
                                <label for="email">Email:</label><br /><br />
                                <input type="email" className="email" id="email" value={email} onChange={addEmail} placeholder="example@email.com" /><br /><br />
                                <label for="email">Write To Us:</label><br /><br />
                                <input type="text" className="email" id="email" value={message} onChange={addMessage} placeholder="Write a message" /><br /><br />
                                <button onClick={sendMessage}>Send</button>
                            </span>
                        </div>
                        <p>You can expect a response within a day.</p>
                    </div>
                    </section>
            </main>
        </div>
    );
}

export default Card;