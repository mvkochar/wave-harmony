import React from 'react'
import PageBreadcrumbs from '../components/PageBreadcrumbs/PageBreadcrumbs'
import './css/SwimsuitDesign.css'

const SwimsuitDesign = () => {
    return (
        <>
            <PageBreadcrumbs
                rootPage='Home'
                currentPage='Swimsuit Design'
            />
            <div className="swimsuit-content d-f">
                <div><img src="/images/swimsuit-design.png" alt="swimsuit-design" /></div>
                <div>
                    <h1 className="swimsuit-title">Create the perfect swimsuit in just 5 minutes</h1>
                    <h4 className="swimsuit-subtitle">
                        In our flexible designer, you can create a unique and inimitable swimsuit to order
                    </h4>
                    <div className="divider"></div>
                    <div className="swimsuit-content-step">
                        <div className="step-one">
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
                        <div className="divider"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SwimsuitDesign