import React from 'react'
import Link from 'next/link'

const PostCards = ({heading,image,date,link}) => {
    return (
        <div className="industries_slide-2 w-slide"
            aria-label="6 of 6"
            role="group"
            aria-hidden="true"
            // style={{
            //     transition: "all 500ms",
            //     transform: "translateX(0px)",
            //     opacity: 1
            // }}
        >
            <div className="industries_item-2" aria-hidden="true">
                <div className="collection-list-wrapper-3 jetboost-list-wrapper-lxem jetboost-list-wrapper-n37m inner-p w-dyn-list" aria-hidden="true">
                    <div role="list" className="w-dyn-items" aria-hidden="true">
                        <div role="listitem" className="collection-item-4-c w-dyn-item" aria-hidden="true">
                            <div className="div-block-40" aria-hidden="true">
                                <img
                                    src={image}
                                    loading="lazy"
                                    alt=""
                                    className="image-74" aria-hidden="true"
                                />
                                <div className="div-block-43" aria-hidden="true">
                                    <div className="blog-date" aria-hidden="true">
                                        <div className="blog-icon" aria-hidden="true">
                                            <img
                                                src="/images/calendar.svg"
                                                loading="lazy"
                                                alt="" aria-hidden="true"
                                            />
                                        </div>
                                        <div className="blog-text" aria-hidden="true">
                                            <div className="blog-p" aria-hidden="true">{date}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="div-block-42" aria-hidden="true">
                                    <div
                                        id="w-node-a9ee4b10-1869-d0b0-08c0-72f6bfee56b3-1db18ff8"
                                        className="w-layout-layout quick-stack-41 wf-layout-layout" aria-hidden="true"
                                    >
                                        <div className="w-layout-cell cell-62" aria-hidden="true">
                                            <h1 className="heading-47" aria-hidden="true">by UFUND</h1>
                                        </div>
                                        <div className="w-layout-cell cell-61" aria-hidden="true">
                                            <div className="div-block-41" aria-hidden="true" />
                                        </div>
                                    </div>
                                    <h1 className="heading-48" aria-hidden="true">{heading}</h1>
                                    <Link
                                        href="#"
                                        className="new-button-blog spark-icon-left-button next w-inline-block"
                                        aria-hidden="true"
                                        aria-current="page"
                                    >
                                        <p className="spark-button-text-blog"
                                            aria-hidden="true">Learn more</p>
                                        <img
                                            src="/images/Vector-2.svg"
                                            loading="lazy"
                                            alt=""
                                            className="image-blog"
                                            aria-hidden="true"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="w-embed" aria-hidden="true">
                                <input
                                    type="hidden"
                                    className="jetboost-list-item"
                                    defaultValue="the-future-of-finance-blockchain-investment-explained"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCards