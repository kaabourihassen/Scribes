export interface Post{
    id: String,
    profileImagePath: String,
    postOwnerUsername: String,
    text: String,
    likes: Number,
    comments: String[],
}