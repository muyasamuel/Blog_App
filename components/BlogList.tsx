import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className="mb-10 border" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-16 px-10 pb-20">
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
          <div key={post._id} className=" flex flex-col group cursor-pointer ">

            <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
              <Image
                className="object-cover object-left lg:object-center"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
              <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-3 flex justify-between">
                <div>
                  <p className="font-bold">{post.title}</p>
                  <p>{
                    new Date(post._createdAt).toLocaleDateString(
                      "en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                      }
                    )}</p>
                </div>

                <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                  {post.categories.map((category) => (
                    <div key={category._id} className="text-black bg-[#F7AB0A] rounded-full px-4 py-1 text-sm font-semibold">
                      <p>{category.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 flex-1">
              <p className="underline font-bold text-lg">{post.title}</p>
              <p className="text-gray-500 line-clamp-3 ">{post.description}</p>
            </div>
            
            <p className="flex items-center group-hover:underline font-bold mt-5">Read Post
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </p>
          </div>
          </ClientSideRoute>
        ))};

        
      </div>
    </div>
  );
}

export default BlogList;
