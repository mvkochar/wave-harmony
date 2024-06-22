import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-newsletter d-f jc-sb align-center">
        <div className="footer-newsletter-caption d-f align-center">
          <div><img src="/images/letter.png" alt="letter" /></div>
          <div className="footer-newsletter-title">
            Get up-to-date information about all discounts, sales and new, trending collections
          </div>

        </div>
        <form action="" className="footer-newsletter-fm">
          <input type="email" name="newsletterEmail" placeholder='Enter your E-mail' />
          <button type="button">
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 12.5L7 7L0.999999 1.5" stroke="white" stroke-width="2" />
            </svg>
          </button>
        </form>
      </div>
      <div className="footer-bar d-f jc-sb">
        <div>
          <div className="footer-bl-title">Useful links</div>
          <ul className="footer-bl-list">
            <li><a href="">Catalog</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Calculator</a></li>
            <li><a href="">Sizes</a></li>
            <li className='shipping'><a href="">Shipping and payment</a></li>
            <li><a href="">Contacts</a></li>
            <li className='gift'><a href="">Gift certificates</a></li>
            <li className='sale'><a href="">Sale up to -40%</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-bl-title">Product categories</div>
          <div className="d-f" style={{ gap: "30px" }}>
            <ul className="footer-bl-list">
              <li>New collection 2021</li>
              <li>Sale of swimwear</li>
              <li>Swimwear for surfing</li>
              <li>Lycra for surfing</li>
              <li>One-piece swimsuits</li>
              <li>Separate swimwear</li>
              <li>Swimwear with sleeves</li>
              <li>Swimwear without sleeves</li>
              <li>Swimwear with cups</li>
            </ul>
            <ul className="footer-bl-list">
              <li>New collection 2021</li>
              <li>Sale of swimwear</li>
              <li>Swimwear for surfing</li>
              <li>Lycra for surfing</li>
              <li>One-piece swimsuits</li>
              <li>Separate swimwear</li>
              <li>Swimwear with sleeves</li>
              <li>Swimwear without sleeves</li>
              <li>Swimwear with cups</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="footer-bl-title">Often searched</div>
          <div className="footer-bl-list">
            <li>Black swimsuits with sleeves</li>
            <li>One-piece swimsuits with sleeves</li>
            <li>Swimwear with mesh</li>
            <li>Sports swimwear for the pool</li>
            <li>Printed swimsuits</li>
            <li>Swimsuits with closed shoulders</li>
          </div>
        </div>
        <div>
          <div className="footer-bl-title">Contact details</div>
          <div className="footer-email">zakaz@waveharmony.com</div>
          <div className='footer-phone'>1 (078) 511-36-39</div>
          <div className="footer-social d-f">
            <div>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20ZM1 20C1 30.4934 9.50659 39 20 39C30.4934 39 39 30.4934 39 20C39 9.50659 30.4934 1 20 1C9.50659 1 1 9.50659 1 20Z" fill="#F1F1F1" />
                <path d="M27.1939 12.8061C25.3844 10.9965 22.9785 10 20.4194 10C17.8604 10 15.4544 10.9965 13.6448 12.8061C11.8353 14.6157 10.8388 17.0215 10.8388 19.5806C10.8388 21.2016 11.2491 22.7946 12.028 24.2057L10 30L15.7943 27.972C17.2054 28.7508 18.7983 29.1612 20.4194 29.1612C22.9784 29.1612 25.3844 28.1646 27.1939 26.3551C29.0034 24.5456 30 22.1397 30 19.5806C30 17.0215 29.0034 14.6156 27.1939 12.8061ZM25.1557 23.1396L24.0496 24.2457C23.1334 25.162 20.5336 24.0478 18.2429 21.7571C15.9522 19.4664 14.838 16.8667 15.7543 15.9504L16.8603 14.8444C17.0894 14.6153 17.4608 14.6153 17.6898 14.8444L19.0724 16.2269C19.3014 16.456 19.3014 16.8274 19.0724 17.0564L18.2429 17.886C19.0475 19.5847 20.4153 20.9525 22.114 21.7571L22.9436 20.9276C23.1726 20.6985 23.544 20.6985 23.7731 20.9276L25.1556 22.3101C25.3847 22.5392 25.3847 22.9106 25.1557 23.1396Z" fill="#43D854" />
              </svg>
            </div>
            <div>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20ZM1 20C1 30.4934 9.50659 39 20 39C30.4934 39 39 30.4934 39 20C39 9.50659 30.4934 1 20 1C9.50659 1 1 9.50659 1 20Z" fill="#F1F1F1" />
                <path d="M23.3313 13.3208H25.1571V10.1408C24.8421 10.0975 23.7588 10 22.4971 10C19.8646 10 18.0613 11.6558 18.0613 14.6992V17.5H15.1562V21.055H18.0613V30H21.6229V21.0558H24.4104L24.8529 17.5008H21.6221V15.0517C21.6229 14.0242 21.8996 13.3208 23.3313 13.3208Z" fill="#3B5998" />
              </svg>
            </div>
            <div>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20ZM1 20C1 30.4934 9.50659 39 20 39C30.4934 39 39 30.4934 39 20C39 9.50659 30.4934 1 20 1C9.50659 1 1 9.50659 1 20Z" fill="#F1F1F1" />
                <path d="M11.2498 11.3606C9.67809 12.9931 9.99976 14.7273 9.99976 19.9956C9.99976 24.3706 9.23643 28.7564 13.2314 29.7889C14.4789 30.1098 25.5323 30.1098 26.7781 29.7873C28.4414 29.3581 29.7948 28.0089 29.9798 25.6564C30.0056 25.3281 30.0056 14.6689 29.9789 14.3339C29.7823 11.8281 28.2398 10.3839 26.2073 10.0914C25.7414 10.0239 25.6481 10.0039 23.2581 9.99975C14.7806 10.0039 12.9223 9.62642 11.2498 11.3606Z" fill="url(#paint0_linear_101_11511)" />
                <path d="M19.9979 12.616C16.972 12.616 14.0987 12.3468 13.0012 15.1635C12.5479 16.3268 12.6137 17.8377 12.6137 20.001C12.6137 21.8993 12.5529 23.6835 13.0012 24.8377C14.0962 27.656 16.9929 27.386 19.9962 27.386C22.8937 27.386 25.8812 27.6877 26.992 24.8377C27.4462 23.6627 27.3795 22.1743 27.3795 20.001C27.3795 17.116 27.5387 15.2535 26.1395 13.8552C24.7229 12.4385 22.807 12.616 19.9945 12.616H19.9979ZM19.3362 13.9468C25.6479 13.9368 26.4512 13.2352 26.0079 22.9827C25.8504 26.4302 23.2254 26.0518 19.9987 26.0518C14.1154 26.0518 13.9462 25.8835 13.9462 19.9977C13.9462 14.0435 14.4129 13.9502 19.3362 13.9452V13.9468ZM23.9395 15.1727C23.4504 15.1727 23.0537 15.5693 23.0537 16.0585C23.0537 16.5477 23.4504 16.9443 23.9395 16.9443C24.4287 16.9443 24.8254 16.5477 24.8254 16.0585C24.8254 15.5693 24.4287 15.1727 23.9395 15.1727ZM19.9979 16.2085C17.9037 16.2085 16.2062 17.9068 16.2062 20.001C16.2062 22.0952 17.9037 23.7927 19.9979 23.7927C22.092 23.7927 23.7887 22.0952 23.7887 20.001C23.7887 17.9068 22.092 16.2085 19.9979 16.2085ZM19.9979 17.5393C23.252 17.5393 23.2562 22.4627 19.9979 22.4627C16.7445 22.4627 16.7395 17.5393 19.9979 17.5393Z" fill="white" />
                <defs>
                  <linearGradient id="paint0_linear_101_11511" x1="11.2881" y1="28.7223" x2="29.876" y2="12.6347" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFDD55" />
                    <stop offset="0.5" stop-color="#FF543E" />
                    <stop offset="1" stop-color="#C837AB" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="footer-info d-f">
            <p>Buyer Information</p>
            <p>
              Wave Harmony - women's clothing for surfing and any other water sports.
            </p>
            <p>All rights reserved. 2021</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer