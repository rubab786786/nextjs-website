"use client";
import React, { useEffect, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../app/firebaseConfig";
import PostCards from "./PostCards";

const BlogCarousel = () => {
    const [blogs, setBlogs] = useState([]); // Blog data state
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);
                const q = query(collection(db, "posts"), orderBy("publishDate"));
                const postSnap = await getDocs(q);

                const fetchedBlogs = postSnap.docs.map((post) => ({
                    id: post.id,
                    slug: post.get("slug"),
                    title: post.get("title"),
                    imgSrc: post.get("IndexImage"), // Assuming "IndexImage" is the correct field
                    publishDate: post.get("publishDate"),
                    detailLink: `/blogs/${post.get("slug")}`,
                }));

                setBlogs(fetchedBlogs);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching blogs: ", error);
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <>
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
                            {blogs.map((blog) => (
                                <CarouselItem key={blog.id} className="md:basis-1/2 lg:basis-1/3">
                                    <PostCards heading={blog.title} image={blog.imgSrc} date={blog.publishDate} link={blog.detailLink} />
                                </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogCarousel