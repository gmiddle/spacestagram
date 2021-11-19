const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const {Post, Comment} = require("../../db/models")

router.get("/",
    asyncHandler(async (req, res) => {
        // const posts = await Post.findAll({
        //     include: [
        //         {
        //             model: User,
        //         },
        //         {
        //             model: Comment,
        //         },
        //     ]
        // });
        // return res.json(posts)
        return <h1>Hello from /posts</h1>
    })
)

router.get("/:id",
    asyncHandler(async (req, res) => {
      const id = req.params.id;
      const post = await Post.findByPk(id, {
        include: 
          {
            model: Comment,
            where: {postId: id}
          },
      });
      return res.json(post);
    })
);


module.exports = router;