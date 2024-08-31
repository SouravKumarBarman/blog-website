import { PostForm as AddPostComponent, Container } from "../components/index";

function AddPost() {
  return (
    <div className="py-8">
      <Container>
        <AddPostComponent />
      </Container>
    </div>
  );
}

export default AddPost;
