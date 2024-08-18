// 'use client'

// import { assets } from '@/Assets/assets'
// import axios from 'axios'
// import Image from 'next/image'
// import { title } from 'process'
// import React, { useState } from 'react'
// import { toast } from 'react-toastify'

// const page = () => {

//     const [image, setImage] = useState(false);
//     const [data, setData] = useState({
//       title: "",
//       description: "",
//       category: "Startup",
//       author: "Alex Bannet",
//       authorImg: "/author_img.png"
//     })

//     const onChangeHandler = (event) => {
//       const name = event.target.name;
//       const value = event.target.value;
//       setData(data => ({...data, [name]: value}));
//       console.log(data);
//     }

//     const onSubmitHandler = async (e) => {
//       e.preventDefault();
//       const formData = new FormData();
//       formData.append('title', data.title);
//       formData.append('description', data.description);
//       formData.append('category', data.category);
//       formData.append('author', data.author);
//       formData.append('authorImg', data.authorImg);
//       formData.append('image', image);
//       const response = await axios.post('/api/blog', formData);

//       if (response.data.success) {
//         toast.success(response.data.msg)
//       } else {
//         toast.error("Error")
//       }
//     }

//   return (
//     <>
//      <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
//         <p className='text-xl'>Upload thumbnail</p>
//         <label htmlFor='image'>
//             <Image className='mt-4' src={!image ? assets.upload_area : URL.createObjectURL(image)} width={140} height={70} alt='' />
//         </label>
//         <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' hidden required/>
//         <p className='text-xl mt-4'>Blog Title</p>
//         <input name='title' onChange={onChangeHandler} value={data.title} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type='text' placeholder='Type here' required />
//         <p className='text-xl mt-4'>Blog Description</p>
//         <textarea name='description' onChange={onChangeHandler} value={data.description} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type='text' rows={6} placeholder='write content here' required />
//         <p className='text-xl mt-4'>Blog Category</p>
//         <select name='category' onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500'>
//           <option value='Startup'>Startup</option>
//           <option value='Technology'>Technology</option>
//           <option value='Lifestyle'>Lifestyle</option>
//         </select>
//         <br />
//         <button type="submit" className='mt-4 w-40 h-12 bg-black text-white'>Add</button>
//      </form>
//     </>
//   )
// }

// export default page

'use client';

import { assets } from '@/Assets/assets';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Page = () => {
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        title: "",
        description: "",
        category: "Startup",
        author: "Alex Bannet",
        authorImg: "/author_img.png",
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const formData = new FormData();
            formData.append('title', data.title);
            formData.append('description', data.description);
            formData.append('category', data.category);
            formData.append('author', data.author);
            formData.append('authorImg', data.authorImg);
            formData.append('image', image);

            const response = await axios.post('/api/blog', formData);

            console.log(response.data);  // Debug: Log the response data

            if (response.data?.success) {
                toast.success(response.data.msg || "Blog added successfully!");
                setImage(null);
                setData({
                    title: "",
                    description: "",
                    category: "Startup",
                    author: "Alex Bannet",
                    authorImg: "/author_img.png",
                });
                
            } else {
                toast.error(response.data.msg || "Failed to add blog. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
                <p className='text-xl'>Upload thumbnail</p>
                <label htmlFor='image'>
                    <Image className='mt-4' src={image ? URL.createObjectURL(image) : assets.upload_area} width={140} height={70} alt='Upload Thumbnail' />
                </label>
                <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' hidden required />
                <p className='text-xl mt-4'>Blog Title</p>
                <input name='title' onChange={onChangeHandler} value={data.title} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type='text' placeholder='Type here' required />
                <p className='text-xl mt-4'>Blog Description</p>
                <textarea name='description' onChange={onChangeHandler} value={data.description} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type='text' rows={6} placeholder='Write content here' required />
                <p className='text-xl mt-4'>Blog Category</p>
                <select name='category' onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500'>
                    <option value='Startup'>Startup</option>
                    <option value='Technology'>Technology</option>
                    <option value='Lifestyle'>Lifestyle</option>
                </select>
                <br />
                <button type="submit" className='mt-4 w-40 h-12 bg-black text-white' disabled={isLoading}>
                    {isLoading ? "Adding..." : "Add"}
                </button>
            </form>
        </>
    );
};

export default Page;
