"use client"
import React, { useState, useEffect } from "react";
import { db } from "../app/firebaseConfig"; // Correct Firebase config path
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "next/navigation"; // Use useParams to get the slug in the app directory
import Image from "next/image"; // For image rendering
import Navbar from "./NavbarSection";
import Link from "next/link";
import BlogCarousel from "./BlogCarousel";
import BlogFaq from "./BlogFaq";
import JoinSection from "./JoinSection";
import FooterSection from "./FooterSection";

const PostContentPage = () => {
    const [postContent, setPostContent] = useState(null); // State for storing post content
    const [post, setPost] = useState(null); // State for storing post details (slug, title, etc.)
    const [error, setError] = useState(null); // State for error handling
    const { slug } = useParams(); // Extract slug directly using useParams in app directory

    // Function to fetch the post from 'posts' collection based on the slug
    const getPostBySlug = async (slug) => {
        const snapshot = await getDoc(doc(db, "posts", slug));
        return snapshot.exists() ? snapshot.data() : null; // Return post data
    };

    // Function to fetch the post content from 'post_contents' collection based on the slug
    const getPostContentBySlug = async (slug) => {
        const snapshot = await getDoc(doc(db, "post_contents", slug));
        return snapshot.exists() ? snapshot.data() : null; // Return post content data
    };

    useEffect(() => {
        if (!slug) return;

        const fetchContent = async () => {
            try {
                // Fetch the post details from 'posts' collection using slug
                const post = await getPostBySlug(slug);
                if (!post) {
                    setError("Post not found.");
                    return;
                }

                // Set the post details in the state
                setPost(post);

                // Fetch the content data from 'post_contents' collection using the same slug
                const content = await getPostContentBySlug(slug);
                if (!content) {
                    setError("Post content not found.");
                    return;
                }

                // Set the content data in the state
                setPostContent(content);
            } catch (err) {
                console.error("Error fetching content:", err);
                setError("An error occurred while fetching the data.");
            }
        };

        fetchContent(); // Call the function to fetch the data
    }, [slug]); // Dependency on slug to fetch content when the slug changes

    if (error) {
        return <div className="error-message">Error: {error}</div>; // Display error message if something goes wrong
    }

    if (!postContent) {
        return <div className="loading-message">Loading...</div>; // Display loading message while fetching data
    }

    return (
        <>
            <Navbar />
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
                                        <div className="blog-in">{post?.publishDate}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-layout-cell cell-64">
                            <h1 className="heading-49">by UFUND</h1>
                        </div>
                    </div>
                    <h1 className="heading-blog-in">{post ? post.title : "Loading..."}</h1>
                    <img
                        src={post.coverImage}
                        loading="lazy"
                        alt={post.coverImageAlt}
                        style={{borderRadius:"24px"}}
                    // className="w-dyn-bind-empty"
                    />
                    <p className="paragraph-blog-in" dangerouslySetInnerHTML={{ __html: postContent?.content }}/>
                    {/* <div className="blog-details"  /> */}
                </div>
            </section>
            <BlogFaq/>
            <BlogCarousel/>
            <JoinSection heading="Start your journey today"/>
            <FooterSection/>
        </>
    );
};

export default PostContentPage;
