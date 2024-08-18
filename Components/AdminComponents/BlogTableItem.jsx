import Image from 'next/image'
import React from 'react'
import { assets } from "@/Assets/assets";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const BlogTableItem = ({authorImage, title, author, date, deleteBlog, mongoId}) => {
    const BlogDate = new Date(date);
  return (
    <tr className='bg-white border-b'>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap scrollbar-hide'>
            <Image width={40} height={40} src={authorImage?authorImage:assets.profile_icon} />
            <p>{author ? author : "No author"}</p>
        </th>
        <td className='px-6 py-4'>
            {title?title:"no title"}
        </td>
        <td className='px-6 py-4'>
            {BlogDate.toDateString()}
        </td>
        <td onClick={() => deleteBlog(mongoId)} className='px-6 py-4 cursor-pointer'>
            <FontAwesomeIcon className='pl-4' icon={faTrash} style={{ color: 'red' }} />
        </td>
    </tr>
  )
}

export default BlogTableItem;