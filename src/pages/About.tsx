import React from 'react'
import PageBreadcrumbs from '../components/PageBreadcrumbs/PageBreadcrumbs'
import "./css/About.css"
import Review from '../components/Review/Review'

const About = () => {
    return (
        <>
            <PageBreadcrumbs
                rootPage='Home'
                currentPage='About'
            />
            <div className="about-caption d-f jc-sb">
                <div>
                    <h1 className="about-title">About the brand</h1>
                    <div><img src="/images/decore-wave.png" alt="decore-wave" width={239} /></div>
                </div>
                <p className="about-desc">
                    WAVE HARMONY is an international company created in 2014. Today, our main specialization
                    is the production of clothing for surfing and other water sports. We surf ourselves and
                    know firsthand how important comfortable and practical clothing is, so we offer you:
                </p>
            </div>
            <div className="about-benefits d-f jc-sb">
                <div className="about-benefits-item">
                    <div className="benefits-item-num">01</div>
                    <div className="benefits-item-title">European quality</div>
                    <p className="benefits-item-desc">
                        For your comfort and maximum safety, we use European fabrics with a density of 1.1 - 1.3 g/cm
                    </p>
                </div>
                <div className="about-benefits-item">
                    <div className="benefits-item-num">02</div>
                    <div className="benefits-item-title">Accessories from SBS</div>
                    <p className="benefits-item-desc">
                        SBS is the global market leader in innovative connection technologies and
                        guarantees more than 20 thousand zipper opening and closing cycles
                    </p>
                </div>
                <div className="about-benefits-item">
                    <div className="benefits-item-num">03</div>
                    <div className="benefits-item-title">Perfect in everything</div>
                    <p className="benefits-item-desc">
                        Swimsuits are not afraid of salt and bleach, are elastic, resistant to damage,
                        fit perfectly and do not lose their original beauty
                    </p>
                </div>
                <div className="about-benefits-item">
                    <div className="benefits-item-num">01</div>
                    <div className="benefits-item-title">European quality</div>
                    <p className="benefits-item-desc">
                        For your comfort and maximum safety, we use European fabrics with a density of 1.1 - 1.3 g/cm
                    </p>
                </div>
                <div className="about-benefits-item">
                    <div className="benefits-item-num">02</div>
                    <div className="benefits-item-title">Accessories from SBS</div>
                    <p className="benefits-item-desc">
                        SBS is the global market leader in innovative connection technologies and
                        guarantees more than 20 thousand zipper opening and closing cycles
                    </p>
                </div>
                <div className="about-benefits-item">
                    <div className="benefits-item-num">03</div>
                    <div className="benefits-item-title">Perfect in everything</div>
                    <p className="benefits-item-desc">
                        Swimsuits are not afraid of salt and bleach, are elastic, resistant to damage,
                        fit perfectly and do not lose their original beauty
                    </p>
                </div>
            </div>
            <Review isMore = {false} />
            <div style={{marginBottom: "120px"}}></div>
        </>
    )
}

export default About