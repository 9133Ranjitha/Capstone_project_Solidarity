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
                <button>Join</button> 
            </div>
            <div className='solidarityImg'>
                <img className='hqimg' src='resources/solidarityhq.png'></img>
            </div>
            <div className='container'>
                <img className='exclusive' src='resources/exclusive.webp'></img>
                <div className='text-overlay'>
                    <p className='exclusive-text'>Unlock Exclusive Rewards and Empowering Opportunities with our Self-Help Group.</p>
                    <p className='manage'>Imagine a world where every day, your savings can transform lives and open new doors of opportunity for you and others. Welcome to our groundbreaking platform that revolutionizes the way you manage your finances.</p>
                    <button className='Unlock'>Unlock</button>
                </div>
            </div>
            <div className='securityDepart'>
                <img className='security' src='resources/security.jpg'></img>
                <div className='securityoverlay'>
                    <p className='securitytext'>we take your money matters seriously.so that you don’t have to.never miss a due date with reminders to help you pay your saving amount  on time, instant settlements mean you never wait for your payments return back analysis lets you know where your money goes, always.</p>
                    <button className='securitybtn'>Join</button>
                </div>
            </div>
            <div className='trust'>
                <img className='blueimg' src='resources/Blue.jpg' alt=''></img>
                <div className='trustoverlay'>
                    <h1 className='story'>Story of Solidarity</h1>
                    <p className='storytext'>We believe that trust is the bedrock of any meaningful relationship. That's why we've built a community where trust is at the heart of everything we do. Together, we create a powerful force that paves the way for a brighter future.
With us, you can trust that your aspirations will be supported. Our platform brings together individuals like you who believe in the power of collective action. We stand united, bound by the belief that when we trust each other, we can accomplish great things.</p>
                </div>
            </div>
            <div className='loginDepart'>
                <div><p className='quote'><b>Today's saving tomorrow's income</b></p></div>
                <div><img className='euro' src='resources/euro.png'></img></div>
                <div><button className='logingbtn'>Login</button></div>
            </div>
            <footer>
                <div className='box imges'>
                    <img className='footerimg' src='resources/icon.webp'></img>
                    <h3>Embrace Solidarity, Shape Your Future</h3>
                </div>
                <div class=" boxsocial-icons">
                    <img src="https://www.bing.com/th?id=OIP.RSuOODQhBUfjxScQRapaPAHaHa&w=176&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" href=""></img>

                </div>
            </footer>

        </div>
    )
}
export default LadingPage;