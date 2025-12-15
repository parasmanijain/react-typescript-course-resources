import { type ReactNode, useEffect, useState } from "react";
import { z } from "zod";
import { BlogPosts, BlogPost } from "./components/BlogPosts.tsx";
import { get } from "./util/http.ts";
import fetchingImg from "./assets/data-fetching.png";

const rawDataBlogPostSchema = z.object({
  id: z.number(),
  userId: z.number(),
  title: z.string(),
  body: z.string(),
});

const expectedResponseDataSchema = z.array(rawDataBlogPostSchema);

export const App = () => {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();

  useEffect(() => {
    async function fetchPosts() {
      const data = await get("https://jsonplaceholder.typicode.com/posts");
      const parsedData = expectedResponseDataSchema.parse(data);

      const blogPosts: BlogPost[] = parsedData.map((rawPost) => {
        return {
          id: rawPost.id,
          title: rawPost.title,
          text: rawPost.body,
        };
      });

      setFetchedPosts(blogPosts);
    }

    fetchPosts();
  }, []);

  let content: ReactNode;

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  return (
    <main>
      <img
        src={fetchingImg}
        alt="An abstract image depicting a data fetching process."
      />
      {content}
    </main>
  );
};
