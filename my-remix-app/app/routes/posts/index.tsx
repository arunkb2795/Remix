import { Link } from '@remix-run/react';

const data = {
    posts: [
        {
            slug: "my-first-post",
            title: "My First Post"
        },
        {
            slug: "90s-mixtape",
            title: "A Mixtape I Made Just For You"
        }
    ],
}


export default function Posts() {
    return (
        <main><h1>Posts</h1>
            <ul>
                {data.posts.map((post) => (<li key={post.slug}>
                    <Link to={post.slug}>
                        {post.title}
                    </Link>
                </li>
                ))}
            </ul>
        </main>
    )
}
