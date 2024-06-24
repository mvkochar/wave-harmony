import React from 'react'
import PageBreadcrumbs from '../components/PageBreadcrumbs/PageBreadcrumbs'
import './css/Certificates.css'

const Certificates = () => {
    return (
        <>
            <PageBreadcrumbs
                rootPage='Home'
                currentPage='Certificates'
            />

            <main className='certificates-main d-f jc-sb'>
                <div><img src="/images/certificate.png" alt="certificate" width={510} /></div>
                <div>
                    <h1 className="certificates-main-title">Electronic gift certificate</h1>
                    <p className="sertificates-main-desc">
                        You can create an <span>electronic</span> gift certificate for purchasing products
                        in our online store, enter the desired gift amount (from $50) and indicate
                        the details of the lucky recipient
                    </p>
                    <form action="" className='certificates-main-fm'>
                        <div className="input-bl">
                            <label htmlFor="denomination">Denomination</label>
                            <input type="text" className='input-denom' name='denomination' id='denomination' placeholder='500' />
                        </div>
                        <div className="input-bl">
                            <input type="email" name="paymentEmail" id="paymentEmail" placeholder='Email for payment*' />
                        </div>
                        <div className="input-bl">
                            <label htmlFor="certificateEmail">Email to receive a certificate</label>
                            <input type="email" name="certificateEmail" id="certificateEmail" placeholder='stassy98@gmail.com' />
                        </div>
                        <div className="input-bl">
                            <input type="tel" className='sertificate-email' name="certificateEmail" placeholder="Recipient's phone*" />
                        </div>
                        <div className="input-bl">
                            <label htmlFor="">Sent date</label>
                            <input type="text" name='sentDate' id='sentDate' placeholder='Immediately after payment' />
                        </div>
                        <div className="input-bl">
                            <textarea name="congratulation" placeholder='Enter the text of the congratulation that the recipient will see'></textarea>
                        </div>
                        <a>Go to the payment</a>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Certificates