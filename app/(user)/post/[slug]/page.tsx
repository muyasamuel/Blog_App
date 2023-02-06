import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";
import {PortableText} from '@portabletext/react';
import { RichTextComponents } from "../../../../components/RichTextComponents";

type Props = {
  params: {
    slug: string;
  };
};
 
export const revalidate = 30 ;


export async function generateStaticParams (){
  const query = groq`*[_type=='post' ]
  {
    slug
  } `;

  const slugs: Post[]  = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current)
  
  return slugRoutes.map(slug => ({
    slug
  }));

}




async function Post({ params: { slug } }: Props) {



  const query = groq`
    *[_type=='post' && slug.current == $slug] [0] 
    {
      ...,
      author->,
      categories[]->
    } 
  `;

  const post: Post = await client.fetch(query, { slug });

  return (
    <article className="pb-28 px-10">
      <section className="space-y-2 border border-red-700 text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>

          <section className="bg-[#F7AB0A] w-full p-5">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold"> {post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Image
                className="rounded-full "
                height={30}
                width={30}
                src="https://images.pexels.com/photos/3767673/pexels-photo-3767673.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="author"
               />

               <div className="w-64">
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                   
               </div>
              </div>
            </div>
            <div>
                <h3 className="italic pt-10">{post.description}</h3>
                <div className="flex justify-end items-center ">
                    {post.categories.map((category) => (
                        <p key={category._id} className="bg-gray-900 text-white rounded-full text-sm px-4 py-1">{category.title}</p>
                    ))}
                </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  );

}

export default Post;
