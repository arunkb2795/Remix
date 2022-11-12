import { Link, useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import { getPostsListItems } from "~/models/post.server";


export async function loader() {
    const posts = await getPostsListItems();
    return json({ posts })
}

export default function Posts() {
    const { posts } = useLoaderData<typeof loader>();
    return (
        <main><h1>Posts</h1>
            <Link to="admin">Admin</Link>
            <ul>
                {posts.map((post) => (<li key={post.slug}>
                    <Link to={post.slug}>
                        {post.title}
                    </Link>
                </li>
                ))}
            </ul>
        </main>
    )
}
