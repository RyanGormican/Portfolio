import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Papa from "papaparse";
import { slugify } from "../utils/slugify";

export default function PostPage() {
    const { slug } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        Papa.parse("/posts.csv", {
            download: true,
            header: false,
            complete: (results) => {
                const match = results.data.find(r => {
                    if (!r[0] || r[1] !== "Post") return false;

                    const firstSentence = r[0].split(/[.!?]/)[0];
                    return slugify(firstSentence) === slug;
                });

                if (match) setPost(match[0]);
            }
        });
    }, [slug]);

    if (!post) return null;

    return (
        <article>
            <p style={{ whiteSpace: "pre-wrap", color: "white", textAlign: "center" }}>
                {post.replace(/hashtag#/gi, "#")}
            </p>
        </article>
    );
}
