import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
// import { Image } from 'sanity';

// Define the Blog interface based on your Sanity schema
interface Blog {
  _id: string; // Sanity documents use _id
  Title: string;
  description: string;
  mainImage: typeof Image; // Adjust based on your schema if needed
}

// Fetch blogs from Sanity
const getBlogs = async (): Promise<Blog[]> => {
  return client.fetch(`*[_type == "blog"]{_id, Title, description, mainImage}`);
};

export default async function Page() {
  const blogs = await getBlogs();

  return (
    <main className='p-10'>
      <div className='font-extrabold text-3xl flex justify-center items-center'>
        <h1 className='italic'>Sanity Integration</h1>
      </div>
      <div className='flex gap-5'>
        {blogs.map((blog: Blog) => (
          <div key={blog._id} className='border rounded-md shadow-lg p-5'>
            <h1>{blog.Title}</h1>
            <p>{blog.description}</p>
            {blog.mainImage && (
              <Image 
                src={urlFor(blog.mainImage).url()} // Call urlFor correctly
                width={200} 
                height={200} 
                alt={blog.Title} // Use the blog title as the alt text
              />
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
