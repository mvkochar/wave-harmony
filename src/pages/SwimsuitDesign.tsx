import React from 'react'
import PageBreadcrumbs from '../components/PageBreadcrumbs/PageBreadcrumbs'
import './css/SwimsuitDesign.css'
import { Link } from 'react-router-dom'

const SwimsuitDesign = () => {
    const [step, setStep] = React.useState(1)
    const incrStep = () => {
        setStep((preVState) => {
            return (
                preVState + 1
            )
        })
    }

    const decrStep = () => {
        setStep((preVState) => {
            return (
                preVState - 1
            )
        })
    }
  
    return (    
        <>
            <PageBreadcrumbs
                rootPage='Home'
                currentPage='Swimsuit Design'
            />
            <div className="swimsuit-content d-f">
                <div><img src="/images/swimsuit-design.png" alt="swimsuit-design" /></div>
                <div className={step === 6 ? 'd-n' : 'd-b'}>
                    <h1 className="swimsuit-title">Create the perfect swimsuit in just 5 minutes</h1>
                    <h4 className="swimsuit-subtitle">
                        In our flexible designer, you can create a unique and inimitable swimsuit to order
                    </h4>
                    <div className="divider"></div>
                    <div className="swimsuit-content-step">
                        <div className={step === 1 ? "step-one" : "d-n"}>
                            <div className="step-title">Which style do you like?</div>
                            <div className="step-box d-f">
                                <div className="step-box-item box-item__active">Separate sleeveless</div>
                                <div className="step-box-item">Separate with sleeves</div>
                                <div className="step-box-item">One-piece sleeveless</div>
                                <div className="step-box-item">One-piece with 3\4 sleeves</div>
                                <div className="step-box-item">One-piece with sleeves</div>
                                <div className="step-box-item">One-piece with shorts and sleeves</div>
                                <div className="step-box-item">Jumpsuit</div>
                                <div className="step-box-item">One-piece with shorts, sleeveless</div>
                                <div className="step-box-item">Longsleeve (T-shirt with sleeves)</div>
                            </div>
                        </div>
                        <div className={step === 2 ? "step-two" : "d-n"}>
                            <div className="step-title">Zipper</div>
                            <div className="step-answers d-f">
                                <div className="step-box-item box-item__active">Swimsuit front zipper</div>
                                <div className="step-box-item">Swimsuit back zipper</div>
                            </div>
                            <div className="step-title" style={{ marginTop: "35px" }}>Collar</div>
                            <div className="step-answers d-f">
                                <div className="step-box-item">I want one with a collar</div>
                                <div className="step-box-item">I want no collar</div>
                            </div>
                        </div>
                        <div className={step === 3 ? "step-three" : "d-n"}>
                            <div className="step-title">Color or print?</div>
                            <div className="step-answers d-f">
                                <div className="step-box-item box-item__active">Plain color</div>
                                <div className="step-box-item">Unique print</div>
                            </div>
                            <div className="colors-box d-f">
                                <div className="colors-box-item"></div>
                                <div className="colors-box-item color-active"></div>
                                <div className="colors-box-item"></div>
                                <div className="colors-box-item"></div>
                                <div className="colors-box-item"></div>
                                <div className="colors-box-item"></div>
                                <div className="colors-box-item"></div>
                                <div className="colors-box-item"></div>
                                <div className="colors-box-item"></div>
                                <div className="colors-box-item"></div>
                                <div className="colors-box-item"></div>
                            </div>
                        </div>
                        <div className={step === 4 ? "step-four" : "d-n"}>
                            <div className="d-f jc-sb align-center">
                                <div className="step-title">Enter your measurements</div>
                                <Link to="/sizes" className="step-link">How to take measurements?</Link>
                            </div>
                            <form action="" className="step-fm d-f">
                                <div>
                                    <input type="text" name='bust' placeholder='Bust*' />
                                </div>
                                <div>
                                    <label htmlFor="waist">Waist circumference</label>
                                    <input type="text" name='waist' id='waist' placeholder='6' />
                                </div>
                                <div>
                                    <label htmlFor="girth">Hip girth</label>
                                    <input type="text" name='girth' id='girth' placeholder='92' />
                                </div>
                                <div>
                                    <input type="text" name='body' placeholder='Body length*' />
                                </div>
                                <div>
                                    <label htmlFor="biceps">Biceps circumference</label>
                                    <input type="text" name='biceps' id='biceps' placeholder='30' />
                                </div>
                                <div>
                                    <label htmlFor="wrist">Wrist circumference</label>
                                    <input type="text" name='wrist' id='wrist' placeholder='22' />
                                </div>
                                <div>
                                    <input type="text" name='arm' placeholder='Arm length from shoulder to wrist*' />
                                </div>
                            </form>
                        </div>
                        <div className={step === 5 ? "step-five" : "d-n"}>
                            <div className="step-title">
                                The last and most important stage is to fill out the feedback <br />
                                form so that our manager will contact you
                            </div>
                            <form action="" className="step-fm d-f">
                                <div>
                                    <input type="text" name='orderName' placeholder='Your name*' />
                                </div>
                                <div>
                                    <label htmlFor="orderEmail">Enter your E-mail</label>
                                    <input type="email" name="orderEmail" id="orderEmail" />
                                </div>
                                <div>
                                    <input type="tel" name="orderPhone" placeholder='Enter your phone number*' />
                                </div>
                                <div>
                                    <textarea name="orderComment" placeholder='Your comment here...'></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="divider"></div>
                    </div>
                    <div className="swimsuit-control d-f jc-sb">
                        <div className='steps-info d-f align-center'>
                            <div>Step</div>
                            <div className="current-step">{step}</div>
                            <div>of</div>
                            <div>5</div>
                        </div>
                        <div className="swimsuit-control-actions d-f">
                            <button className='previous-btn' onClick={decrStep} disabled={step >= 2 ? false : true}>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="-0.5" y="0.5" width="49" height="49" rx="14.5" transform="matrix(-1 0 0 1 49 0)" stroke="#E3E3E3" />
                                    <path d="M27 30.5L21 25L27 19.5" stroke="#E3E3E3" stroke-width="2" />
                                </svg>
                            </button>
                            <button
                                className="next-btn" onClick={incrStep}
                                disabled={step === 6 ? true : false}
                            >
                                {step === 5 ? "Order" : "Next step"}
                            </button>
                        </div>
                    </div>
                </div>
                <div className={step === 6 ? 'd-b' : 'd-n'}>
                    <div className="complete-icon"><img src="/images/complete.svg" alt="complete" /></div>
                    <h1 className="swimsuit-title">Thank you for the order!</h1>
                    <h4 className="swimsuit-subtitle">
                        Our managers will contact you shortly to clarify details
                    </h4>
                    <a href="" className="swimsuit-payment-link">Go to the payment</a>
                </div>
            </div>
        </>
    )
}

export default SwimsuitDesign