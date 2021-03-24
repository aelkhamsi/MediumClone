
export interface CommentReadDto {
    message: string
}

export interface CommentWriteDto {
    userId: number,
    articleId: number,
    comment: string
}