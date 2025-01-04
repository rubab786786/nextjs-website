import React from 'react'
import Link from 'next/link'
import JoinSection from './JoinSection'
import { HowTosData } from "@/data";

const { iconName, title, text } = HowTosData;


const HowTo = () => {
    return (
        <>
            {/* <Navbar /> */}
            <section className="section-blog-in">
                <div className="w-layout-blockcontainer container-blog-in w-container">
                    <h1 className="heading-23">Tutorial</h1>
                    <Link href="#" className="button w-button">
                        Home - Welcome-to-ufund-platform
                    </Link>
                </div>
            </section>
            <section className="section-terms-2 mt-16">
                <div className="w-layout-blockcontainer container-terms-2 w-container">
                    <h1 className="heading-terms1">Step by step guide to buy UFUND token (UFD)</h1>
                    <p className="paragraph-31">✔ In this tutorial we will explain the process of buying UFD token.</p>
                    <p className="paragraph-31">✔  UFUND uses the interface to communicate with smart contracts and blockchain. This communication
                        needs a wallet, to act as a link. </p>

                    <p className="paragraph-31">A. Install Metamask for interacting with our token sale. Metamask has a Google Chrome
                        extension that allows you to easily create a Metamask wallet and connect to our
                        platform via your browser. Download Metamask from <a href="https://metamask.io/" target="_blank">here</a>.
                    </p>

                    <p className="paragraph-31">B. Top up your wallet with MATIC, ETH , BNB you can swap to Matic based on how much
                        you want to invest.</p>

                    <p className="paragraph-31"> -----Now you are ready to purchase UFD tokens Follow steps below -----</p>

                    <p className="paragraph-31">1) Visit : <a href="https://tokensales.ufund.online">https://tokensales.ufund.online</a> website. </p>
                    <p className="paragraph-31">2) Click on the BUY TOKENS TODAY button. </p>
                    <p className="paragraph-31">3) Connect your Metamask wallet and choose from the top dropdown menu Polygon Mainnet. </p>
                    <p className="paragraph-31">4) Input the number of tokens you want to purchase. </p>
                    <p className="paragraph-31">5) From the Metamask wallet, click confirm to confirm the transaction. </p>
                    <p className="paragraph-31">6) Just wait for a moment, and you will receive your first UFD tokens. </p>

                    <p className="paragraph-31">    How to see your UFD tokens in Metamask in your browser Metamask extension (Metamask extension is
                        not compatible with Safari):</p>

                    <p className="paragraph-31"> To see your tokens, click on the Assets tab in the footer window of your wallet. Your tokens should be
                        listed under this tab. Don&apos;t forget to select Polygon Mainnet </p>

                    <p className="paragraph-31">For additional information or help concerning your UFD tokens purchases, and registration process just drop us an email at: support@ufund.online or leave us a message using our phone numbers we will get right back to you. </p>

                    <p className="paragraph-31"> Thank you for your business and interest in UFUND platform. </p>

                    <p className="paragraph-31">UFUND Sales Team </p>
                    <p className="paragraph-30"> sales@ufund.online</p>
                    <p className="paragraph-30"> +1 302 426 5043 </p>
                    <p className="paragraph-30"> 1000 N. W. Street Suite1200. </p>
                    <p className="paragraph-30"> Wilmington, DE 19801.USA. </p>
                    <p className="paragraph-30"> <a href="https://tokensales.ufund.online">https://tokensales.ufund.online</a></p>
                </div>
                <div className="row">
                    <div className="text-center col-lg-10 col-sm-12 offset-lg-1">
                        <div className="testimonial_content"
                            style={{
                                position: "relative",
                                textAlign: "center",
                                padding: "0 65px",
                            }}>
                            <div className="testi_icon"
                                style={{
                                    width: "115px",
                                    height: "115px",
                                    background: "#e62b4a",
                                    textAlign: "center",
                                    display: "inline-block",
                                    fontSize: "64px",
                                    lineHeight: ".8",
                                    color: "#fff",
                                    padding: "25px 0",
                                    margin: "0 0 49px"
                                }}>
                                <i className="fas fa-user" ></i>
                            </div>
                            <h2>{title}</h2>
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
            </section >
            <JoinSection heading="Start your journey today" />
        </>
    )
}

export default HowTo