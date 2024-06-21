import React from 'react'
import './css/Home.css'
import ProductCard from '../components/ProductCard/ProductCard'

const Home = () => {
  return (
    <>
      <main className='home-main'>
        <h1 className="home-main-title">Ocean</h1>
        <div className="home-main-desc">with long sleeves</div>
        <button className='home-main-buy'>Buy Ocean</button>
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
            <a href="" className="home-popular-catalog">View catalog</a>
          </div>
        </div>
        <div className="home-popular-box d-f jc-sb">
          <ProductCard
            image='/images/popular/1.png'
            price='67'
            prodeuctType='Geometry'
            sizes={['XS', 'S', 'M', 'L', 'by measurements']}
          />
          <ProductCard
            image='/images/popular/2.png'
            price='67'
            prodeuctType='Geometry'
            sizes={['XS', 'S', 'M', 'L', 'by measurements']}
          />
          <ProductCard
            image='/images/popular/3.png'
            price='67'
            prodeuctType='Geometry'
            sizes={['XS', 'S', 'M', 'L', 'by measurements']}
          />
          <ProductCard
            image='/images/popular/4.png'
            price='67'
            prodeuctType='Geometry'
            sizes={['XS', 'S', 'M', 'L', 'by measurements']}
          />
        </div>
      </section>
      <section className='home-review'>
        <div className="d-f jc-sb">
          <h2 className="home-bl-title">They trust us</h2>
          <a href="" className="home-review-more">More about the company</a>
        </div>
        <div className="home-review-box d-f">
          <div className='home-review-other'>
            <div><img src="/images/other-person1.png" alt="other-person1" /></div>
            <div><img src="/images/other-person2.png" alt="other-person2" /></div>
            <div><img src="/images/other-person3.png" alt="other-person3" /></div>
            <div><img src="/images/other-person4.png" alt="other-person1" /></div>
          </div>
          <div><img src="/images/focus-person.png" alt="focus-person" /></div>
          <div className="home-review-about">
            <div className="review-author-name">Regina Todorenko</div>
            <div className="review-author-info d-f align-center">
              <div className="review-author-social">@reginatodorenko</div>
              <div className="review-author-stats">8.5 million followers</div>
            </div>
            <p className="review-author-desc">
              Blogger, TV presenter, singer, host of the program “Heads and Tails,”
              a young mother and just a super-charismatic person, catching the wave with Wave Harmony
            </p>
            <div className="review-author-links d-f">
              <a href="">Read review</a>
              <a href="">Regina's video</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home