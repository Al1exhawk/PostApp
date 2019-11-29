export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  id: number;
  postId: number;
  body: string;
}

export interface exactPost extends Post {
  comments: Comment[];
}
