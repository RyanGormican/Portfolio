import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { Link } from "react-router-dom";
import { slugify } from "../utils/slugify";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        Papa.parse("/posts.csv", {
            download: true,
            header: false,
            complete: (results) => {
                const parsed = results.data
                    .filter(r => r[0] && r[1] === "Post")
                    .map(r => {
                        const firstSentence = r[0].split(/[.!?]/)[0];
                        return {
                            content: r[0],
                            slug: slugify(firstSentence),
                            title: firstSentence
                        };
                    }).reverse();

                setPosts(parsed);
            }
        });
    }, []);

    return (
        <div>
            {posts.map(p => (
                <article key={p.slug}>
                    <Link to={`/posts/${p.slug}`}>
                        <h2>{p.title}</h2>
                    </Link>
                </article>
            ))}
        </div>
    );
}
