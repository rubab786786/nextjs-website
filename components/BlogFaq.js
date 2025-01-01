"use client"
import React, { useState, useEffect, useRef } from "react";

const BlogFaq = () => {
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
   </>
  )
}

export default BlogFaq