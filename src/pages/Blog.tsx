import React from 'react'
import PageBreadcrumbs from '../components/PageBreadcrumbs/PageBreadcrumbs'
import './css/Blog.css'
import PostsList from '../components/PostsList/PostsList'
import BlogItem from '../components/BlogItem/BlogItem'

const Blog = () => {
    return (
        <>
            <PageBreadcrumbs
                rootPage='Home'
                currentPage='Blog'
            />
            <div className="blog-caption d-f jc-sb">
                <h1 className="blog-title">Surf Blog</h1>
                <div className="blog-tabs d-f">
                    <button className='blog-tabs-btn tabs-btn__active'>All</button>
                    <button className='blog-tabs-btn'>Spots</button>
                    <button className='blog-tabs-btn'>Boards</button>
                    <button className='blog-tabs-btn'>People</button>
                </div>
            </div>
            <div className="blog-content d-f jc-sb">
                {
                    PostsList.map((post) => {
                        return (
                            <BlogItem
                                id={post.id}
                                image={post.image}
                                date={post.date}
                                title={post.title}
                                description={post.description}
                                category={post.category}
                                year={post.year}
                            />
                        )
                    })
                }
            </div>
            <div className="blog-pages d-f alifn-center">
                <button style={{marginRight: "13px"}}>
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="44" height="44" rx="15" fill="url(#paint0_linear_101_9761)" />
                        <path d="M21.4531 27V17.832H19.5971L20.4931 16.328H23.0851V27H21.4531Z" fill="url(#paint1_linear_101_9761)" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4676 22L24.1226 19.345C24.4134 19.0525 24.4134 18.5801 24.1226 18.2875C23.9818 18.1455 23.7901 18.0657 23.5901 18.0657C23.3901 18.0657 23.1984 18.1455 23.0576 18.2875L19.8776 21.4675C19.7356 21.6083 19.6558 21.8 19.6558 22C19.6558 22.2 19.7356 22.3917 19.8776 22.5325L23.0576 25.75C23.1992 25.8904 23.3908 25.9687 23.5901 25.9675C23.7895 25.9687 23.9811 25.8904 24.1226 25.75C24.4134 25.4575 24.4134 24.9851 24.1226 24.6925L21.4676 22Z" fill="white" />
                        <defs>
                            <linearGradient id="paint0_linear_101_9761" x1="-1.14127e-07" y1="22.3099" x2="44" y2="22.3099" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#21A5B5" />
                                <stop offset="1" stop-color="#71B2B4" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_101_9761" x1="-1.14127e-07" y1="22.169" x2="44" y2="22.169" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#21A5B5" />
                                <stop offset="1" stop-color="#71B2B4" />
                            </linearGradient>
                        </defs>
                    </svg>
                </button>
                <button className="blog-pages-btn pages-btn__active">1</button>
                <button className="blog-pages-btn">2</button>
                <button className="blog-pages-btn">3</button>
                <button className="blog-pages-btn">...</button>
                <button className="blog-pages-btn">6</button>
                <button style={{marginLeft: "13px"}}>
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="44" height="44" rx="15" transform="matrix(-1 0 0 1 44 0)" fill="url(#paint0_linear_101_9777)" />
                        <path d="M22.5469 27V17.832H24.4029L23.5069 16.328H20.9149V27H22.5469Z" fill="url(#paint1_linear_101_9777)" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5324 22L19.8774 19.345C19.5866 19.0525 19.5866 18.5801 19.8774 18.2875C20.0182 18.1455 20.2099 18.0657 20.4099 18.0657C20.6099 18.0657 20.8016 18.1455 20.9424 18.2875L24.1224 21.4675C24.2644 21.6083 24.3442 21.8 24.3442 22C24.3442 22.2 24.2644 22.3917 24.1224 22.5325L20.9424 25.75C20.8008 25.8904 20.6092 25.9687 20.4099 25.9675C20.2105 25.9687 20.0189 25.8904 19.8774 25.75C19.5866 25.4575 19.5866 24.9851 19.8774 24.6925L22.5324 22Z" fill="white" />
                        <defs>
                            <linearGradient id="paint0_linear_101_9777" x1="-1.14127e-07" y1="22.3099" x2="44" y2="22.3099" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#21A5B5" />
                                <stop offset="1" stop-color="#71B2B4" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_101_9777" x1="44" y1="22.169" x2="1.14127e-07" y2="22.169" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#21A5B5" />
                                <stop offset="1" stop-color="#71B2B4" />
                            </linearGradient>
                        </defs>
                    </svg>
                </button>
            </div>
        </>
    )
}

export default Blog