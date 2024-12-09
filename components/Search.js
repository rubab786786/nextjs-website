import React from 'react'
import Navbar from './NavbarSection'
import JoinSection from './JoinSection'
import FooterSection from './FooterSection'
import Link from 'next/link'

const Search = () => {
  return (
    <>
    <Navbar/>
    <section className="section-search-result">
    <div className="w-layout-blockcontainer container-search w-container">
      <h1 className="heading-search-1">Search Result</h1>
      <Link href="#" className="button w-button">
        Home - Find What You Want
      </Link>
    </div>
  </section>
  <section className="section-23">
    <div className="container-30 w-container" >
      <div>
        <div>
        No matching results.
        </div>
      </div>
    </div>
  </section>
  <JoinSection/>
  <FooterSection/>
    </>
  )
}
export default Search