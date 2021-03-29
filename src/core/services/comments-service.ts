import { CommentsCollection } from "#/core/entities/collections/comments-collection";
import { CommentWithReplies } from "#/core/entities/comment-with-replies";
import { HttpClient } from "#/core/http-client/http-client";

export class CommentsService {
  public static async findByEpisodeId(episodeId: string): Promise<CommentsCollection> {
    const response = await HttpClient.getInstance().request({
      path: `/v1/episodes/${episodeId}/comments`,
      method: "get",
    });

    return response.getCollection(CommentWithReplies, CommentsCollection);
  }

  public static async create(
    data: {
      parentCommentId: string | null;
      content: string;
      image: string | null;
    },
    episodeId: string,
  ): Promise<Comment> {
    const response = await HttpClient.getInstance().request({
      path: `/v1/episodes/${episodeId}/comments`,
      method: "post",
      data,
    });

    return response.getData(Comment);
  }

  public static async reply(
    data: {
      content: string;
      image: string | null;
    },
    parentCommentId: string,
    episodeId: string,
  ): Promise<Comment> {
    const response = await HttpClient.getInstance().request({
      path: `/v1/episodes/${episodeId}/comments/${parentCommentId}/reply`,
      method: "post",
      data,
    });

    return response.getData(Comment);
  }
}
