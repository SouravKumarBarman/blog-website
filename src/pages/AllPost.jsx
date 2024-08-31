import { Container, PostCard } from "../components/index";
import AppwriteService from "../appwrite/config";
import { useEffect, useState } from "react";

function AllPost() {
  const [post, setPost] = useState([]);


  useEffect(() => {}, []);


  AppwriteService.getPosts([]).then((posts) => {
    if (posts) {
      setPost(posts.documents);
    }
  });


  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id}>
              <PostCard  post={post} />
            </div>
          ))
          }
            
            

        </div>
      </Container>
    </div>
  );
}

export default AllPost;
