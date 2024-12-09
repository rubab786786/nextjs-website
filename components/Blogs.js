import React from 'react'
import NavbarSection from './NavbarSection'
import UuiSection from './UuiSection'
import JoinSection from './JoinSection'
import FooterSection from './FooterSection'
import Link from 'next/link'


const data = [
  {
    blogName: "Tokenized Securities Exchange",
    detailLink: "/post/tokenized-securities-exchange-a-new-era-in-investing",
    blogTitle: "Tokenized securities exchange: a new era in investing",
    imgSrc: "/images/blog1.png",
    date: "3/18/24",
    author: "UFUND",
  },
  {
    blogName: "The Future of Finance",
    detailLink: "/post/the-future-of-finance-blockchain-investment-explained",
    blogTitle: "The future of finance: blockchain investment explained",
    imgSrc: "/images/blog2.png",
    date: "3/18/24",
    author: "UFUND",
  },
  {
    blogName: "Capital Raising Strategies",
    detailLink: "/post/capital-raising-strategies-your-guide-to-financial-success",
    blogTitle: "Capital raising strategies: your guide to financial success",
    imgSrc: "/images/blog3.png",
    date: "3/22/24",
    author: "UFUND",
  },
  {
    blogName: "Demystifying Digital Securities",
    detailLink: "/post/demystifying-digital-securities-your-path-to-modern-investment",
    blogTitle: "Demystifying digital securities: your path to modern investment",
    imgSrc: "/images/blog4.png",
    date: "3/16/24",
    author: "UFUND",
  },
  {
    blogName: "The Game-Changer",
    detailLink: "/post/the-game-changer-security-token-platforms-in-modern-finance",
    blogTitle: "The game-changer: security token platforms in modern finance",
    imgSrc: "/images/blog5.png",
    date: "3/16/24",
    author: "UFUND",
  },
  {
    blogName: "Rwa Tokenization",
    detailLink: "/post/rwa-tokenization-navigating-the-trust-path-in-digital-transactions",
    blogTitle: "Rwa tokenization: navigating the trust path in digital transactions",
    imgSrc: "/images/blog6.png",
    date: "3/18/24",
    author: "UFUND",
  },
];

const Blogs = () => {
  return (
    <>
    
      <NavbarSection />
      <section id="hero" className="section-blog">
        <div className="w-layout-blockcontainer container-blog w-container">
          <h1 className="heading-blog">Blog archive</h1>
          <Link href="#" className="button w-button">
            Home - An insight into some industry topics
          </Link>
        </div>
      </section>
      <section>
        <div className="w-layout-blockcontainer container-29 w-container">
          <div
            id="w-node-e0c5abdf-b6ee-2f05-ae49-c375612923ec-d819f88c"
            className="w-layout-layout quick-stack-42 wf-layout-layout"
          >
            <div
              id="w-node-e0c5abdf-b6ee-2f05-ae49-c375612923ed-d819f88c"
              className="w-layout-cell"
            >
              <div className="brix---top-bar-form-copy w-form">
                <form
                  id="wf-form-BRIX---Top-Bar-Form"
                  name="wf-form-BRIX---Top-Bar-Form"
                  data-name="BRIX - Top Bar Form"
                  method="get"
                  data-wf-page-id="65f5608f4e092775d819f88c"
                  data-wf-element-id="c48c46f1-7155-4bc2-2e7e-3a0a9695a129"
                >
                  <div className="brix---position-relative">
                    <input
                      className="brix---top-bar-input-copy jetboost-list-search-input-lxem w-input"
                      maxLength={256}
                      name="BRIX-Top-Bar-Email-2"
                      data-name="BRIX Top Bar Email 2"
                      placeholder="Filter by Name"
                      type="text"
                      id="BRIX-Top-Bar-Email-2"
                    />
                  </div>
                </form>
                <div className="brix---success-message-white-small w-form-done">
                  <div>Thanks for subscribing!</div>
                </div>
                <div className="brix---error-message w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
            <div
              id="w-node-e0c5abdf-b6ee-2f05-ae49-c375612923ee-d819f88c"
              className="w-layout-cell cell-63"
            >
              <div className="form-block w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  method="get"
                  className="form"
                  data-wf-page-id="65f5608f4e092775d819f88c"
                  data-wf-element-id="b946d6ce-76db-26c7-ebc5-7d6a2385537f"
                >
                  <select
                    id="field"
                    name="field"
                    data-name="Field"
                    className="select-field w-select"
                  >
                    <option value="">Sort</option>
                    <option value="jetboost-sort-asc-n37m">A-Z</option>
                    <option value="jetboost-sort-desc-n37m">Z-A</option>
                  </select>
                </form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="collection-list-wrapper-3 jetboost-list-wrapper-lxem jetboost-list-wrapper-n37m w-dyn-list">
            <div role="list" className="w-dyn-items w-row">
            {data.map((blog, index) => (
              <div
              key={index}
                role="listitem"
                className="collection-item-4 w-dyn-item w-col w-col-4"
              >
                <div className="div-block-40">
                  <Link href={blog.detailLink} className="w-inline-block">
                    <img
                      src={blog.imgSrc}
                      loading="lazy"
                      alt={blog.blogName}
                      className="image-74"
                    />
                  </Link>
                  <div className="div-block-43">
                    <div className="blog-date">
                      <div className="blog-icon">
                        <img src="/images/calendar.svg" loading="lazy" alt="" />
                      </div>
                      <div className="blog-text">
                        <div className="blog-p">{blog.date}</div>
                      </div>
                    </div>
                  </div>
                  <div className="div-block-42">
                    <div
                      id="w-node-d8de2702-69f1-d717-37ff-417a4c89b135-d819f88c"
                      className="w-layout-layout quick-stack-41 wf-layout-layout"
                    >
                      <div className="w-layout-cell cell-62">
                        <h1 className="heading-47">by {blog.author}</h1>
                      </div>
                      <div className="w-layout-cell cell-61">
                        <div className="div-block-41" />
                      </div>
                    </div>
                    <Link href={blog.detailLink} className="link-block-17 w-inline-block">
                      <h1 className="heading-48" >{blog.blogTitle}</h1>
                    </Link>
                    <Link
                     href={blog.detailLink}
                      className="new-button-blog spark-icon-left-button next w-inline-block"
                    >
                      <p className="spark-button-text-blog">Learn more</p>
                      <img
                        src="/images/Vector-2.svg"
                        loading="lazy"
                        alt=""
                        className="image-blog"
                      />
                    </Link>
                  </div>
                </div>
                <div className="w-embed">
                  <input
                    type="hidden"
                    className="jetboost-list-item"
                    defaultValue="tokenized-securities-exchange-a-new-era-in-investing"
                  />
                </div>
              </div>
              ))}
            </div>
          </div>
          <div className="collection-list-wrapper-2 jetboost-list-wrapper-lxem jetboost-list-wrapper-n37m w-dyn-list">
            <div role="list" className="w-dyn-items w-row">
            {data.map((blog, index) => (
              <div
              key={index}
                role="listitem"
                className="collection-item-4 w-dyn-item w-col w-col-6"
              >
                <div className="div-block-40">
                  <Link href={blog.detailLink} className="w-inline-block">
                    <img
                      src={blog.imgSrc}
                      loading="lazy"
                      alt={blog.blogName}
                      className="image-74"
                    />
                  </Link>
                  <div className="div-block-43">
                    <div className="blog-date">
                      <div className="blog-icon">
                        <img src="/images/calendar.svg" loading="lazy" alt="" />
                      </div>
                      <div className="blog-text">
                        <div className="blog-p">{blog.date}</div>
                      </div>
                    </div>
                  </div>
                  <div className="div-block-42">
                    <div
                      id="w-node-d8de2702-69f1-d717-37ff-417a4c89b135-d819f88c"
                      className="w-layout-layout quick-stack-41 wf-layout-layout"
                    >
                      <div className="w-layout-cell cell-62">
                        <h1 className="heading-47">by {blog.author}</h1>
                      </div>
                      <div className="w-layout-cell cell-61">
                        <div className="div-block-41" />
                      </div>
                    </div>
                    <Link href={blog.detailLink} className="link-block-17 w-inline-block">
                      <h1 className="heading-48" >{blog.blogTitle}</h1>
                    </Link>
                    <Link
                     href={blog.detailLink}
                      className="new-button-blog spark-icon-left-button next w-inline-block"
                    >
                      <p className="spark-button-text-blog">Learn more</p>
                      <img
                        src="/images/Vector-2.svg"
                        loading="lazy"
                        alt=""
                        className="image-blog"
                      />
                    </Link>
                  </div>
                </div>
                <div className="w-embed">
                  <input
                    type="hidden"
                    className="jetboost-list-item"
                    defaultValue="tokenized-securities-exchange-a-new-era-in-investing"
                  />
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <UuiSection />
      <JoinSection />
      <FooterSection />
    </>
  )
}

export default Blogs