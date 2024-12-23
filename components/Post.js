"use client"
import React, { useState, useEffect, useRef } from "react";
import NavbarSection from "./NavbarSection"
import JoinSection from './JoinSection'
import FooterSection from './FooterSection'
import PostCards from "./PostCards"
import Link from 'next/link'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const Post = ({ heading, date }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const sectionRef = useRef(null); // To observe the section

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsLoaded(true); // Trigger animation
                }
            },
            { threshold: 0.2 } // Trigger when 30% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionItems = [
        {
            question: "What is the security endgame for tokenized RWAs?",
            answer:
                "The ultimate goal is establishing an end-to-end trust path between the real world and the blockchain. However, achieving this goal is complex due to the prevalence of commodity computing systems and the inherent challenges in securing interactions with the real world."
        },
        {
            question: "What upcoming technologies will help bridge the RWA trust gap?",
            answer:
                "Trusted Execution Environment (TEE)--based oracles are crucial in minimizing the risk of attackers compromising the oracle service. Additionally, efforts are being made to measure the intrinsic properties of assets or inscribe unmodifiable keys through a micro-3D printing process for authentication. However, these technologies are still in their early stages."
        },
        {
            question: "What is the best interim security and trust solution for RWAs?",
            answer:
                "Until advanced technologies are ready for commercialization, relying on institutional trust is the next best solution. Institutions must be trustworthy, every step of the trust path must be rigorously evaluated, and stakeholders and users must be fully aware of their reliance on institutional trust. In conclusion, Real World Asset tokenization holds immense potential but has significant security challenges. As the industry explores solutions like TEE-based oracles and real-object authentication, the role of institutional trust remains crucial in ensuring a secure and trustworthy ecosystem."
        },
        {
            question: "Do you have a mobile app for iOS or Android?",
            answer: "Yes. The UFUND mobile app is free and available for both iOS and Android users."
        },
        {
            question: "How to start making investments in businesses?",
            answer: "First, visit our website to sign up or download one of the two UFUND apps. Get verified in simple steps to create your investor's portfolio."
        }
    ];
    return (
        <>
            <NavbarSection />
            <section className="section-blog-in">
                <div className="w-layout-blockcontainer container-blog-in w-container">
                    <h1 className="heading-23">Blog archive</h1>
                    <Link href="#" className="button w-button">
                        Home - Ready-for-business-using-blockchain
                    </Link>
                </div>
            </section>
            <section className="section-blog-in1">
                <div className="w-layout-blockcontainer container-blog-in1 w-container">
                    <div
                        id="w-node-_2f837f73-5ac1-5ed8-a1c1-e62f13b076c6-1db18ff8"
                        className="w-layout-layout quick-stack-43 wf-layout-layout"
                    >
                        <div className="w-layout-cell">
                            <div className="div-block-44">
                                <div className="blog-date-copy">
                                    <div className="blog-icon">
                                        <img src="/images/calendar.svg" loading="lazy" alt="" />
                                    </div>
                                    <div className="blog-text">
                                        <div className="blog-in">{date}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-layout-cell cell-64">
                            <h1 className="heading-49">by UFUND</h1>
                        </div>
                    </div>
                    <h1 className="heading-blog-in">{heading}</h1>
                    <img
                        src="/images/post1.png"
                        loading="lazy"
                        alt=""
                    // className="w-dyn-bind-empty"
                    />
                    <p className="paragraph-blog-in">Real World Asset (RWA) tokenization has emerged as a groundbreaking concept in the fast-evolving world of blockchain and digital assets. RWA tokenization involves creating a digital representation of tangible assets on a blockchain, enabling them to be traded seamlessly. However, the journey toward a secure and trustworthy end-to-end RWA ecosystem has its challenges. This article explores the security concerns of Real World Asset tokenization and the industry's efforts to address them.</p>
                    <div className="div-block-45">
                        <div
                            id="w-node-a0bc0a51-4a8b-337d-121e-053bd2d8eb7d-1db18ff8"
                            className="w-layout-layout quick-stack-44 wf-layout-layout"
                        >
                            <div
                                id="w-node-a0bc0a51-4a8b-337d-121e-053bd2d8eb7e-1db18ff8"
                                className="w-layout-cell"
                            >
                                <h1 className="heading-51">
                                    Transform assets, securely trade future
                                </h1>
                            </div>
                            <div
                                id="w-node-a0bc0a51-4a8b-337d-121e-053bd2d8eb7f-1db18ff8"
                                className="w-layout-cell cell-65"
                            >
                                <Link
                                    href="#"
                                    className="spark-button-blog spark-icon-left-button next w-inline-block"
                                >
                                    <p className="paragraph-16-blog">Join us</p>
                                    <div className="html-embed-blog w-embed">
                                        <svg
                                            width="100%"
                                            height="100%"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                                                fill="currentColor"
                                                fillOpacity="0.94"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L17.5858 12L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z"
                                                fill="currentColor"
                                                fillOpacity="0.94"
                                            />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-blog-in2">
                <div className="w-layout-blockcontainer container-blog-in2 w-container">
                    <div
                        id="w-node-_3b1186dc-81c5-44e4-b43c-f00a2b7edcef-1db18ff8"
                        className="w-layout-layout quick-stack-45 wf-layout-layout"
                    >
                        <div
                            id="w-node-_3b1186dc-81c5-44e4-b43c-f00a2b7edcf0-1db18ff8"
                            className="w-layout-cell cell-67"
                        >
                            <div className="rich-text-block w-richtext" >
                                <h3 style={{ marginBottom: "10px" }}>End-to-End Trust Path: The Holy Grail of RWA Tokenization Security</h3>
                                <p>The security of Real World Asset tokenization hinges on establishing an end-to-end trust path between the real world and the blockchain. Ensuring security at every step of the tokenization process, including buying, selling, and trading, is vital to prevent attacks that could devalue the tokens. Yet, achieving this security property is no easy feat, especially when dealing with the complex interaction between computing systems and the real world.</p>
                                <p>Consider the challenge of establishing trust between commodity computing systems and human users. Securing the final step of the trust path requires rare and secure hardware, highlighting the intricacies of achieving end-to-end trust in modern computing systems.</p>
                            </div>
                        </div>
                        <div
                            id="w-node-_3b1186dc-81c5-44e4-b43c-f00a2b7edcf1-1db18ff8"
                            className="w-layout-cell cell-66"
                        >
                            <img
                                src="/images/Rectangle-7242-1-1.png"
                                loading="lazy"
                                alt=""
                            // className="w-dyn-bind-empty"
                            />
                        </div>
                    </div>
                    <div className="rich-text-block-1 w-richtext" >
                        <h3 style={{ marginBottom: "10px" }}>Bridging Trust Gaps in Digital Transactions</h3>
                        <p>Real World Asset tokenization involves multiple parties, including token issuers, custodians of real-world assets, and token users. A trust gap arises between the digital and physical realms at each interaction. The strength of the Real World Asset tokenization process is only as robust as the weakest link among these parties and their interactions.</p>
                    </div>
                </div>
                <div className="w-layout-blockcontainer container-blog-in3 w-container">
                    <h1 className="heading-52">Key Questions:</h1>
                    <div className="blog-list">
                        <div
                            id="w-node-_0d80472c-34a5-39bd-3d9b-2daceded9112-1db18ff8"
                            className="blog-in-list-item"
                        >
                            <div className="blog-in-list-item-image">
                                <img src="/images/Vector-3.svg" loading="lazy" alt="" />
                            </div>
                            <div className="blog-in-list-item-text-wrap">
                                <div className="blog-in-list-item-text" >
                                    How do we assure the integrity of real-world assets through cryptographic primitives in blockchains?
                                </div>
                            </div>
                        </div>
                        <div
                            id="w-node-eae94421-be6f-3e2f-a5a7-7fadcf5fa227-1db18ff8"
                            className="blog-in-list-item"
                        >
                            <div className="blog-in-list-item-image">
                                <img src="/images/Vector-3.svg" loading="lazy" alt="" />
                            </div>
                            <div className="blog-in-list-item-text-wrap">
                                <div className="blog-in-list-item-text" >How can users ensure their purchased RWA token represents an authentic, real-world asset?</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-layout-blockcontainer container-blog-in4 w-container">
                    <div
                        id="w-node-_1b088fb4-15fa-a911-1f10-6ea8bfc7354a-1db18ff8"
                        className="w-layout-layout quick-stack-46 wf-layout-layout"
                    >
                        <div
                            id="w-node-_1b088fb4-15fa-a911-1f10-6ea8bfc7354b-1db18ff8"
                            className="w-layout-cell"
                        >
                            <img
                                src="/images/post2.png"
                                loading="lazy"
                                alt=""
                            // className="w-dyn-bind-empty"
                            />
                        </div>
                        <div
                            id="w-node-_1b088fb4-15fa-a911-1f10-6ea8bfc7354c-1db18ff8"
                            className="w-layout-cell"
                        >
                            <img
                                src="/images/post3.png"
                                loading="lazy"
                                alt=""
                            // className="w-dyn-bind-empty"
                            />
                        </div>
                    </div>
                    <div className="rich-text-block-2 w-richtext" >
                        <h3 style={{ marginBottom: "10px" }}>Technologies to Bridge the Trust Gap</h3>
                        <p>Several technologies aim to bridge the trust gap between the digital and physical worlds in Real World Asset tokenization. The most prominent solution involves using oracles, acting as trusted entities that vouch for the integrity of real-world assets on the blockchain. However, relying solely on oracles introduces vulnerabilities, emphasizing the need for secure solutions.</p>
                        <p>Trusted Execution Environment (TEE) - based oracles emerge as a promising approach. TEE provides a secure execution environment, isolating software from the rest of the computing system. By using hardware-based TEEs, the trust base narrows down to the hardware and the Oracle software, minimizing the potential attack surface.</p>
                        <h3 style={{ marginBottom: "10px" }}>Real-Object Authentication: An Intriguing Approach</h3>
                        <p>Another avenue to bridge the trust gap involves leveraging real-world object authenticity. Two approaches stand out: measuring intrinsic properties of objects for authentication and inscribing unique keys into real-world objects. These methods hold promise but are still in their early stages of development.</p>
                        <h3 style={{ marginBottom: "10px" }}>Institutional Trust: An Interim Solution</h3>
                        <p>In the absence of mature technologies, many Real World Asset tokenization projects rely on institutional trust to bridge the gap between blockchain and the real world. Institutions must be trustworthy throughout the trust path for this interim solution to be effective, and each step must undergo rigorous security evaluations. Stakeholders and users must also be informed of their reliance on institutional trust.</p>
                        <p>Consider the example of the gold-pegged Coin ($GPC) on the Klaytn blockchain. This initiative utilizes the Korea Gold Exchange to back its tokenized gold, which is executed through trustless smart contracts audited by reputable web3 security firms. While institutional trust is a temporary solution, it requires consistent monitoring and upholding of trustworthiness for a secure RWA ecosystem.</p>
                        <h3 style={{ marginBottom: "10px" }}>What If Trust Breaks?</h3>
                        <p>Institutional trust serves as an interim solution, but its failure at any point could lead to a security gap between perception and reality. Traditional institutions aren't the sole trust bridge, as demonstrated by platforms like Elysia, which incorporates a DAO for decentralized governance, adding an extra layer of trust.</p>
                        <h3 style={{ marginBottom: "10px" }}>UFUND: Revolutionizing Funding</h3>
                        <p>As the landscape of Real World Asset tokenization continues to evolve, innovative projects like UFUND are emerging to revolutionize funding. UFUND introduces a fresh perspective to the world of decentralized finance (DeFi) by combining security and innovation. While details about UFUND are beyond the scope of this article, it's worth keeping an eye on projects that aim to reshape traditional funding models through blockchain technology.</p>
                    </div>
                </div>
            </section>
            <section className="section-blog-in3">
                <div className="w-layout-blockcontainer container-blog-in5 w-container">
                    <h1 className="heading-blog-1">FAQ's</h1>
                    <h1 className="heading-blog-2">Frequently Asked Questions</h1>
                    <div className="brix---inner-container-1012px-center-2"
                        ref={sectionRef}
                        style={{
                            width: "100%",
                            opacity: isLoaded ? 1 : 0,
                            transform: isLoaded
                                ? "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                                : "translate3d(0px, 10%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                        }}>
                        <div className="brix---accordion-v3-card-2">
                            <div className="w-layout-grid brix---grid-1-column-gap-row-2">
                                {accordionItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="brix---accordion-item-wrapper-v3-2"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <div className="brix---accordion-right-side-2">
                                            <button className="brix---btn-circle-accordion-btn-2 w-inline-block">
                                                <img
                                                    alt="Accordion toggle"
                                                    src="/images/Frame-43076-1.png"
                                                    className={`brix---accordion-arrow-icon-2 ${activeIndex === index ? "rotate-90" : ""
                                                        }`}
                                                />
                                            </button>
                                        </div>
                                        <div className="brix---accordion-content-wrapper-v2-2">
                                            <div className="brix---accordion-header-2">
                                                <div className="brix---color-neutral-802">
                                                    <h3 className="brix---accordion-title-2">{item.question}</h3>
                                                </div>
                                            </div>

                                            {activeIndex === index && (
                                                <div className="brix---acordion-body-2">
                                                    <div className="brix---accordion-spacer-2" />
                                                    <div className="brix---color-neutral-801">
                                                        <p className="brix---paragraph-default-4">{item.answer}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-blog-in4">
                <div className="w-layout-blockcontainer container-blog-in6 w-container">
                    <h1 className="heading-blog-3">Latest News</h1>
                    <div
                        // data-delay={4000}
                        // data-animation="slide"
                        className="industries_component-2 w-slider"
                    // data-autoplay="false"
                    // data-easing="ease"
                    // data-hide-arrows="false"
                    // data-disable-swipe="false"
                    // data-autoplay-limit={0}
                    // data-nav-spacing={3}
                    // data-duration={500}
                    // data-infinite="true"
                    // role='region'
                    // aria-label='carousel'
                    >
                        {/* <div className="industries_mask new-home news w-slider-mask"> */}
                        <Carousel >
                            <CarouselContent>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                    <PostCards heading="Tokenized securities exchange: a new era in investing" image={"/images/blog1.png"} date="3/18/2024" />
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                    <PostCards heading="The future of finance: blockchain investment explained" image={"/images/blog2.png"} date="3/18/2024" />
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                    <PostCards heading="Capital raising strategies: your guide to financial success" image={"/images/blog3.png"} date="3/18/2024" />
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                    <PostCards heading="Demystifying digital securities: your path to modern investment" image={"/images/blog4.png"} date="3/16/2024" />
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                    <PostCards heading="The game-changer: security token platforms in modern finance" image={"/images/blog5.png"} date="3/18/2024" />
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                    <PostCards heading="Rwa tokenization: navigating the trust path in digital transactions" image={"/images/blog6.png"} date="3/18/2024" />
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>
            </section>
            <JoinSection heading="Start your journey today" />
            <FooterSection />
        </>
    )
}

export default Post