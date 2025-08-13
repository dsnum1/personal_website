import React, { useEffect, useState } from 'react'
import './Blog.css'
import BlogEntry from './BlogEntry.js'

const importAll = (r) => {
  console.log(r)
  return r.keys().map(r);
};


function Blog(){
  return(
    <>
      <Title></Title>
      <BlogSection></BlogSection>
      {/* <FeedBack></FeedBack> */}
    </>
  )
}


function Title(){
  return (
    <header 
        className='blog-title-space'
        style={{
                border:"solid 2px black",
                minHeight:'100vh',
                display:'flex',
                alignContent:'center',
                justifyContent:'center',
                alignItems:'center'
          }}>

      <div className='blog-title-wallpaper'>
        <h1 className="blog-title"style={{textAlign:'center'}}>
          A Day Well Spent
        </h1>
      </div>
    </header>
  )
}


function BlogSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const context = require.context('./blogs', true, /\.json$/);
      const blogFiles = importAll(context);
      console.log('Blog files:', blogFiles); // Debugging log

      const blogPosts = blogFiles.map((file, index) => {
        console.log('File:', file);
        return { ...file };
      });

      console.log('Blog posts:', blogPosts); // Debugging log
      blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
      setPosts(blogPosts);
    };
    fetchPosts();
  }, []);

  console.log("posts", posts);

  return (
    <>
      {posts?.map((post) => (
        <BlogEntry
          key={post.date} // Ensure each entry has a unique key
          Title={post.title}
          Content={post.content}
          Tags={post.tags}
          Date={post.date}
        />
      ))}
    </>
  );
}



function FeedBack(){
  return(
    <>

    </>
  )
}



class ContentSection2 extends React.Component{
  render(){
      return(
        <>
            <BlogEntry
            Title="Hello Hello"
            
            
            ></BlogEntry>
            <BlogEntry></BlogEntry>
        </>
      );
  }
}



export default Blog