import { Link } from "react-router-dom";
import React from "react";
import './FinancialMastery.css';

function FinancialMastery () {
    return(
        <body>
        <nav>
            <ul>
                <li className="image">
                   <img className="icon" src="resources/icon.jpg"></img>
                </li>
                <li>
                    <Link to="/addgroup" className="link">AddGroup</Link>
                </li>
                <li>
                    <Link to="/schedule" className="link">schedule</Link>
                </li>
                <li>
                    <Link to="/FinancialMastery" className="link">FinancialMastery</Link>
                </li>
                <li>
                    <Link to="/about" className="link">AboutUs</Link>
                </li>
                <li>
                    <Link to="/signup" className="link">Signup</Link>
                </li>
            </ul>
        </nav>
        <div className="masteryContainer">
            <h1 className="moneyHeder">MoneyDetails</h1>
            <div className="dtailsContainer">
                <div className="Onecontainer">
                    <div className="jamaSpending">
                        <div className="jamaheader"><b>deposit</b></div>
                        <div className="jamadetails">
                            <p>1.Withdrawal from Bank</p>
                            <p>2.Money in the Hands of an Associate</p>
                            <p>3.Money from Savings</p>
                            <p>4.Loan Repayment Money</p>
                            <p>5.Money from Service Charges</p>
                            <p>6.Interest</p>
                        </div>
                        <div className="jamatotal"><b>Total</b></div>
                    </div>
                    <div className="rupee">
                    <div className="jamaheader"><b>Rupee</b></div>
                        <div className="data"><input></input></div>
                        <div className="data"><input></input></div>
                        <div className="data"><input></input></div>
                        <div className="data"><input></input></div>
                        <div className="data"><input></input></div>
                        <div className="data"><input></input></div>
                        <div className="data"><input></input></div>
                    </div>
                    <div className="pisa">
                    <div className="jamaheader"><b>Pisa</b></div>
                        <div className="data"><input></input></div>
                        <div className="data"><input></input></div>
                        <div className="data"><input></input></div>
                        <div className="data"><input></input></div>
                        <div className="data"><input></input></div>
                        <div className="data"><input></input></div>
                        <div className="data"><input></input></div>
                    </div>
                    <div className="jamaSpending">
                    <div className="jamaheader"><b>Spending</b></div>
                        <div className="jamadetails">
                            <p>1.Withdrawal from Bank</p>
                            <p>2.Money in the Hands of an Associate</p>
                            <p>3.Money from Savings</p>
                            <p>4.Loan Repayment Money</p>
                            <p>5.Money from Service Charges</p>
                            <p>6.Interest</p>
                        </div>
                        <div className="jamatotal"><b>Total</b></div>
                    </div>
                    <div className="rupee">
                    <div className="jamaheader"><b>Rupee</b></div>
                        <div className="data"><input></input></div>
                        <div className="data"><input></input></div>
                        <div className="data"><input></input></div>
                        <div className="data"><input></input></div>
                        <div className="data"><input></input></div>
                        <div className="data"><input></input></div>
                        <div className="data"><input></input></div>
                    </div>
                    <div className="pisa">
                    <div className="jamaheader width"><b>Pisa</b></div>
                        <div className="data"><input></input></div>
                        <div className="data"><input></input></div>
                        <div className="data"><input></input></div>
                        <div className="data"><input></input></div>
                        <div className="data"><input></input></div>
                        <div className="data"><input></input></div>
                        <div className="data"><input></input></div>
                    </div>
                </div>


                {/* member name details */}
                <div className="secondcontainer">

                    


                </div>


                {/* last part saving */}
                <div className="thirdcontainer"></div>
            </div>
        </div>
        
    </body>   
    )

}
export default FinancialMastery;