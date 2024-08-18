import { NextResponse } from "next/server"
import { connectDB } from '@/lib/config/db'
import { BlogModel } from '@/lib/models/BlogModel'
import { writeFile } from "fs/promises";
const fs = require('fs');

const LoadDB = async () => {
    await connectDB();
}

LoadDB();

// API endpoint for getting all blogs
export async function GET(request){

    const blogId = request.nextUrl.searchParams.get("id");
    if (blogId) {
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json(blog)
    } else {
        const blogs = await BlogModel.find({});
        return NextResponse.json({blogs});
    }

    
}

// old API endpoint for adding new blogs
// export async function POST(request){
    
//     const formData = await request.formData();
//     const timestamp = Date.now();

//     const image = formData.get('image');
//     const imageByteData = await image.arrayBuffer();
//     const buffer = Buffer.from(imageByteData);
//     const path = `./public/${timestamp}_${image.name}`
//     await writeFile(path, buffer);
//     const imgUrl = `/${timestamp}_${image.name}`
    
//     const blogData = {
//         title: `${formData.get('title')}`,
//         description: `${formData.get('description')}`,
//         category: `${formData.get('category')}`,
//         author: `${formData.get('author')}`,
//         image: `${imgUrl}`,
//         authorImg: `${formData.get('authorImg')}`
//     }

//     await BlogModel.create(blogData);
//     console.log("Blog Saved")

//     return NextResponse.json({succcess:true, msg: "Blog added"})
// }

export async function POST(request) {
    try {
        const formData = await request.formData();
        const timestamp = Date.now();

        // Handle image upload
        const image = formData.get('image');
        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);
        const path = `./public/${timestamp}_${image.name}`;
        await writeFile(path, buffer);
        const imgUrl = `/${timestamp}_${image.name}`;

        // Construct blog data object
        const blogData = {
            title: formData.get('title'),
            description: formData.get('description'),
            category: formData.get('category'),
            author: formData.get('author'),
            image: imgUrl,
            authorImage: formData.get('authorImg'),
        };

        await BlogModel.create(blogData);
        console.log("Blog Saved");

        return NextResponse.json({ success: true, msg: "Blog added" });
    } catch (error) {
        console.error("Error saving blog:", error);
        return NextResponse.json({ success: false, msg: "Failed to add blog" });
    }
}

// APi endpoint for deleting blog
export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get('id');
    const blog = await BlogModel.findById(id);
    // deleting blog image from public folder
    fs.unlink(`./public${blog.image}`, () => {});
    await BlogModel.findByIdAndDelete(id)
    return NextResponse.json({ success: true, msg: "Blog deleted" });
}