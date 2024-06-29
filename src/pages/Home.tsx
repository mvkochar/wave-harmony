import React from 'react'
import './css/Home.css'
import ProductCard from '../components/ProductCard/ProductCard'
import Review from '../components/Review/Review'
import { Link } from 'react-router-dom'

const Home = () => {
  const [advantage, setAdvantage] = React.useState(false)
  const handleAdvantage = () => {
    setAdvantage((prevState) => {
      return (
        !prevState
      )
    })
  }
  return (
    <>
      <main className='home-main pos-r'>
        <h1 className="home-main-title">Ocean</h1>
        <div className="home-main-desc">with long sleeves</div>
        <button className='home-main-buy'>Buy Ocean</button>
        <div className="advantage-wr">
          <button className='advantage-btn' onClick={handleAdvantage}>{advantage ? "-" : "+"}</button>
        </div>
        <div className={advantage ? "advantage-info" : "d-n"}>Invisible seams, perfect fit into the design</div>
      </main>
      <section className='home-popular'>
        <div className="d-f jc-sb align-center">
          <div>
            <h2 className="home-bl-title">Most popular models</h2>
            <h4 className="home-bl-subtitle">what our wonderful clients choose</h4>
          </div>
          <div className="home-popular-actions d-f align-center">
            <button>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 20L10 14.5L16 9" stroke="url(#paint0_linear_101_11734)" stroke-width="2" />
                <defs>
                  <linearGradient id="paint0_linear_101_11734" x1="13.0423" y1="20" x2="13.0423" y2="9" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#21A5B5" />
                    <stop offset="1" stop-color="#71B2B4" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
            <button>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20L18 14.5L12 9" stroke="url(#paint0_linear_101_11737)" stroke-width="2" />
                <defs>
                  <linearGradient id="paint0_linear_101_11737" x1="14.9577" y1="20" x2="14.9577" y2="9" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#21A5B5" />
                    <stop offset="1" stop-color="#71B2B4" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
            <Link to="/catalog" className="home-popular-catalog">View catalog</Link>
          </div>
        </div>
        <div className="home-popular-box d-f jc-sb">
          <ProductCard
            image='/images/popular/1.png'
            price='67'
            productType='Geometry'
            sizes={['XS', 'S', 'M', 'L', 'by measurements']}
          />
          <ProductCard
            image='/images/popular/2.png'
            price='67'
            productType='Geometry'
            sizes={['XS', 'S', 'M', 'L', 'by measurements']}
          />
          <ProductCard
            image='/images/popular/3.png'
            price='67'
            productType='Geometry'
            sizes={['XS', 'S', 'M', 'L', 'by measurements']}
          />
          <ProductCard
            image='/images/popular/4.png'
            price='67'
            productType='Geometry'
            sizes={['XS', 'S', 'M', 'L', 'by measurements']}
          />
        </div>
      </section>
      <Review />
      <section className='home-about d-f'>
        <div>
          <h2 className="home-bl-title">The best clothes for surfing <br /> and other water sports</h2>
          <div className="home-about-wave"><img src="/images/decore-wave.png" alt="decore-wave" /></div>
          <div className="home-benefits d-f">
            <div>
              <div className="home-benefits-title">Certified product</div>
              <p className="home-benefits-desc">
                All our products are certified and manufactured accordingly
              </p>
            </div>
            <div>
              <div className="home-benefits-title">Worldwide delivery</div>
              <p className="home-benefits-desc">
                All our products are certified and manufactured accordingly
              </p>
            </div>
            <div>
              <div className="home-benefits-title">Unique design</div>
              <p className="home-benefits-desc">
                All our products are certified and manufactured accordingly
              </p>
            </div>
            <div>
              <div className="home-benefits-title">Sun protection SPF 50+</div>
              <p className="home-benefits-desc">
                All our products are certified and manufactured accordingly
              </p>
            </div>
            <div>
              <div className="home-benefits-title">Furnishings from SBS</div>
              <p className="home-benefits-desc">
                All our products are certified and manufactured accordingly
              </p>
            </div>
            <div>
              <div className="home-benefits-title">Tailoring according to your standards</div>
              <p className="home-benefits-desc">
                All our products are certified and manufactured accordingly
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="home-about-quote d-f">
            <div><img src="/images/quote.png" alt="quote" /></div>
            <div>
              <p className="home-benefits-desc">People, like waves, are unique in their nature.</p>
              <p className="home-benefits-desc">
                Our lycra is produced in limited quantities, it helps emphasize your individuality.
              </p>
              <p className="home-benefits-desc">Catch your wave with Wave Harmony swimwear.</p>
            </div>
          </div>
          <div><img src="/images/girl.png" alt="girl" /></div>
        </div>
      </section>
      <section className='home-insta'>
        <div className="d-f jc-sb">
          <div>
            <h2 className="home-bl-title">Do you like bright swimsuits <br /> and inspiring landscapes?</h2>
            <h4 className="home-bl-subtitle">Subscribe to our Instagram, there is everything and even more</h4>
          </div>
          <a href="" className="home-insta-link">Subscribe to Instagram</a>
        </div>
        <div className="home-insta-box d-f" style={{ marginTop: "60px" }}>
          <div><img src="/images/insta/1.png" alt="insta1" /></div>
          <div className='d-f' style={{ flexWrap: 'wrap', columnGap: "29px", rowGap: "30px" }}>
            <div><img src="/images/insta/2.png" alt="insta2" /></div>
            <div><img src="/images/insta/3.png" alt="insta3" /></div>
            <div><img src="/images/insta/4.png" alt="insta4" /></div>
            <div><img src="/images/insta/5.png" alt="insta5" /></div>
          </div>
        </div>
        <div className="home-insta-box d-f" style={{ marginTop: "30px" }}>
          <div><img src="/images/insta/6.png" alt="insta6" /></div>
          <div><img src="/images/insta/7.png" alt="insta7" /></div>
          <div><img src="/images/insta/8.png" alt="insta8" /></div>
          <div><img src="/images/insta/9.png" alt="insta9" /></div>
        </div>
        <div className="home-insta-box d-f" style={{ marginTop: "30px" }}>
          <div className='d-f' style={{ flexWrap: 'wrap', columnGap: "28px", rowGap: "30px" }}>
            <div><img src="/images/insta/10.png" alt="insta10" /></div>
            <div><img src="/images/insta/11.png" alt="insta11" /></div>
            <div><img src="/images/insta/12.png" alt="insta12" /></div>
            <div><img src="/images/insta/13.png" alt="insta13" /></div>
          </div>
          <div><img src="/images/insta/14.png" alt="insta14" /></div>
        </div>
      </section>
    </>
  )
}

export default Home