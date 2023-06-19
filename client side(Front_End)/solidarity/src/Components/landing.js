import React from 'react';
import './landing.css';

function LadingPage() {
    return(
        <div>
            <nav>
                <div><img className='icon' src='resources/icon.jpg'></img></div>
                <div className='ConductBook'><span className='Book'><b>Solidarity</b></span></div>
                <div className='SelfHelf'><span className='helf'><b>Login</b></span></div>
            </nav>
            <div className='userFocus'>
                <p>
                <span className='line'>Empowering Families and Building</span>
                <span className='line position'> Financial Resilience</span>
                </p>
                <p className='join'> Join our Self-Help Groups for Life-Changing Support</p>
                <button className='joinbtn'>Join</button> 
            </div>
            <div className='solidarityImg'>
                <img className='hqimg' src='resources/unitypic.jpg'></img>
                <div className='imglay'>
                    <div className='hqoverlay'>
                        <p className='headerOne'> The bond of sisterhood in a <br/>self-help group is unbreakable</p>
                        <p className='subHeader'>Solidarity is not a matter of sentiment<br /> but a fact, cold and impassive as the granite<br /> foundations of a skyscraper</p>
                        <button className='Unlockbtn'>Unlock</button>
                    </div>
                </div>
            </div>
            <div className='container'>
                <img className='exclusive' src='resources/fit.jpg'></img>
                <div className='text-overlay'>
                    <p className='headerOne'>When women unite, they <br/>become an unstoppable<br/> force of change</p>
                    <p className='subHeader'>Strength, resilience, and unity define<br /> the women of a self-help<br /> group community.</p>
                    <button className='lock'>GetStart</button>
                </div>
            </div>
            <div className='securityDepart'>
                <img className='security' src='resources/security.jpg'></img>
                <div className='securityoverlay'>
                    <p className='headerOne'>Behind every successful woman is<br /> a tribe of other successful women</p>
                    <p className='subHeader'>we take your money matters seriously.<br />so that you don’t have to.<br />never miss a due date with reminders to help you pay<br /> your saving amount  on time, instant settlements<br /> mean you never wait for your payments return<br /> back analysis lets you know<br /> where your money goes, always.</p>
                    <button className='securitybtn'>Join</button>
                </div>
            </div>
            <div className='trust'>
                <img className='blueimg' src='resources/Blue.jpg' alt=''></img>
                <div className='trustoverlay'>
                    <p className='story'>Story of Solidarity</p>
                    <p className='storytext'>We believe that trust is the bedrock of any meaningful relationship. That's why we've built a community where trust is at the heart of everything we do. Together, we create a powerful force that paves the way for a brighter future.
With us, you can trust that your aspirations will be supported. Our platform brings together individuals like you who believe in the power of collective action. We stand united, bound by the belief that when we trust each other, we can accomplish great things.</p>
                </div>
            </div>
            <div className='loginDepart'>
                <div><p className='quote'><b>Today's saving tomorrow's income</b></p></div>
                <div><img className='euro' src='resources/euro.png'></img></div>
                <div><button className='logingbtn'>Login</button></div>
            </div>
            <footer className='footerContainer'>
                <img  className="footerimg" src='resources/footer.jpg'></img>
                <div className='overlay'>
                    <div className='Footerdepart'>
                        <div className=' box footerleft'><img className='footerlogo' src='resources/icon.jpg'></img>
                        <p className='headerOne place'>About Us</p>
                        <p className='subHeader'></p>
                        
                        </div>
                        <div className=' box footermiddle'><h1>rama</h1></div>
                        <div className=' box footerright'><h1>rama</h1></div>
                       
                    </div>
                </div>
                
                
                
                
            </footer>

        </div>
    )
}
export default LadingPage;