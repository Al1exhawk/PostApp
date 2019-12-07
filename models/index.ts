export interface PostModel {
  id: number;
  title: string;
  body: string;
}

export interface CommentModel {
  id: number;
  postId: number;
  body: string;
}

export interface ExactPostModel extends PostModel {
  comments: CommentModel[];
}

export interface NewPostModel {
  title: string;
  body: string;
}
