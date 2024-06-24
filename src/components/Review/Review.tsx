import React from 'react'

type ReviewProps = {
    isMore?: boolean
}

const Review = ({ isMore = true }: ReviewProps) => {
    return (
        <section className='home-review'>
            <div className="d-f jc-sb">
                <h2 className="home-bl-title">They trust us</h2>
                {isMore ? <a href="" className="home-review-more">More about the company</a> : null}
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
    )
}

export default Review
