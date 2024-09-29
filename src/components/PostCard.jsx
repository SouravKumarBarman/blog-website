import appwriteService from "../appwrite/config"
import { Link } from "react-router-dom"

function PostCard({$id, title, featuredImage}){
    return (
        <div>
            <Link to={`/post/${$id}`}>
            <div className="w-72 bg-gray-100 rounded-xl p-4 m-3">
                <div className="flex justify-center mb-4">
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className="h-40 rounded-xl"/>
                </div>
                <h2>{title}</h2>
            </div>
        </Link>
        </div>
        
    )
}

export default PostCard