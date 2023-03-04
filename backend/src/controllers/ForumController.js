import db from '../models/index.js';

const forumController = {
    async getAllPost (req, res) {
        try {
            let listOfPost = await db.Post.findAll({
                where: {status: 'accepted'},
                limit: 10,
                order: [['createdAt', 'DESC']],
                include: [
                    {
                        model: db.User,
                    },
                    {
                        model: db.Comment,
                        include: [
                            {model: db.Comment,}
                        ]
                    }
                ]
            });
            return res.status(200).json({
                isError: false,
                listOfPost
            });
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async getMyPost (req, res) {
        try {
            let listOfPost = await db.Post.findAll({
                where: {ID_User: req.user.id},
                limit: 10,
                order: [['createdAt', 'DESC']],
            });

            return res.status(200).json({
                isError: false,
                listOfPost
            });
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async createPost(req, res) {
        try {
            if (!req.body.title || !req.body.content) {
                return res.status(500).json({
                    isError: true,
                    message: 'Missing required field'
                })
            } else {
                let post = await db.Post.create({
                    ID_User: req.user.id,
                    title: req.body.title,
                    content: req.body.content,
                    likes: 0,
                    status: 'pending'
                })

                return res.status(200).json({
                    isError: false,
                    post,
                    message: "Post is waiting for check!"
                })
            }
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async createComment(req, res) {
        try {
            if (!req.body.content || !(req.body.ID_Post ^ req.body.ID_Parent_cmt)) { //content != null, ID_Post/ID_Parent_cmt need exact 1 != null
                return res.status(500).json({
                    isError: true,
                    message: 'Invalid Input'
                })
            } else {
                let comment = await db.Comment.create({
                    ID_User: req.user.id,
                    content: req.body.content,
                    ID_Post: req.body.ID_Post || null,
                    ID_Parent_cmt: req.body.ID_Parent_cmt || null,
                    likes: 0,
                })

                return res.status(200).json({
                    isError: false,
                    comment,
                    message: "Success"
                })
            }
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async updatePost(req, res) {
        try {
            if (!req.body.ID_Post ||!req.body.title || !req.body.content) {
                return res.status(500).json({
                    isError: true,
                    message: 'Missing required field'
                })
            } else {
                let post = await db.Post.findOne({
                    where: {ID_Post: req.body.ID_Post}
                })
                if (req.user.id == post.ID_User) {
                    post = await db.Post.update(
                    {
                        title: req.body.title,
                        content: req.body.content,
                        status: 'pending'
                    },
                    {
                        where: {ID_Post: req.body.ID_Post},
                    })
                }

                return res.status(200).json({
                    isError: false,
                    message: "Post is waiting for check again!"
                })
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({isError:true});
        }
    },

    async updateComment(req, res) {
        try {
            if (!req.body.ID_Comment || !req.body.content) {
                return res.status(500).json({
                    isError: true,
                    message: 'Missing required field'
                })
            } else {
                let comment = await db.Comment.findOne({
                    where: {ID_Comment: req.body.ID_Comment}
                })
                if (req.user.id == comment.ID_User) {
                    comment = await db.Comment.update(
                    {
                        content: req.body.content,
                    },
                    {
                        where: {ID_Comment: req.body.ID_Comment},
                    })
                }

                return res.status(200).json({
                    isError: false,
                    message: "Success"
                })
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({isError:true});
        }
    },

    async deletePost (req, res) {
        try {
            if (!req.body.ID_Post) {
                return res.status(500).json({
                    isError: true,
                    message: 'Missing required field'
                })
            } else {
                let post = await db.Post.findOne({
                    where: {ID_Post: req.body.ID_Post}
                })

                if (req.user.id == post.ID_User) {    
                    await db.Post.destroy({
                        where: {
                            ID_Post: req.body.ID_Post,
                        }
                    })
                }

                return res.status(200).json({
                    isError: false,
                    message: 'Delete Post successfully'
                })
            }
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async deleteComment (req, res) {
        try {
            if (!req.body.ID_Comment) {
                return res.status(500).json({
                    isError: true,
                    message: 'Missing required field'
                })
            } else {
                let post = await db.Comment.findOne({
                    where: {ID_Comment: req.body.ID_Comment}
                })

                if (req.user.id == post.ID_User) {    
                    await db.Comment.destroy({
                        where: {
                            ID_Comment: req.body.ID_Comment,
                        }
                    })
                }

                return res.status(200).json({
                    isError: false,
                    message: 'Delete Comment successfully'
                })
            }
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async getPending(req, res) {
        try {
            let listOfPost = await db.Post.findAll({
                where: {status: 'pending'},
                limit: 10,
                order: [['createdAt', 'DESC']],
                include: [{
                    model: db.User,
                }]
            });
            return res.status(200).json({
                isError: false,
                listOfPost
            });
        } catch (error) {
            return res.status(500).json({isError:true})
        }
    },

    async acceptPost(req, res) {
        try {
            if (!req.body.ID_Post) {
                return res.status(500).json({
                    isError: true,
                    message: 'Missing required field'
                })
            } else {
                await db.Post.update(
                    {
                        status: 'accepted'
                    },
                    {
                        where: {ID_Post: req.body.ID_Post},
                    }
                )

                return res.status(200).json({
                    isError: false,
                    message: 'Post accepted!'
                })
            }
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async adminDeletePost (req, res) {
        try {
            if (!req.body.ID_Post) {
                return res.status(500).json({
                    isError: true,
                    message: 'Missing required field'
                })
            } else {
                await db.Post.destroy({
                    where: {
                        ID_Post: req.body.ID_Post,
                    }
                })

                return res.status(200).json({
                    isError: false,
                    message: 'Delete Post successfully'
                })
            }
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },

    async adminDeleteComment (req, res) {
        try {
            if (!req.body.ID_Comment) {
                return res.status(500).json({
                    isError: true,
                    message: 'Missing required field'
                })
            } else {
                await db.Post.destroy({
                    where: {
                        ID_Comment: req.body.ID_Comment,
                    }
                })

                return res.status(200).json({
                    isError: false,
                    message: 'Delete Comment successfully'
                })
            }
        } catch (error) {
            return res.status(500).json({isError:true});
        }
    },
}

export default forumController