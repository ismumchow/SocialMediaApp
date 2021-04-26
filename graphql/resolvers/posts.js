const Post = require('../../models/Post')

module.exports =  {
     Query: {
        async getPosts(){
            try { 
                posts = await Post.find();
                return posts
            } catch (err) {
                throw new Error(err);
            }
        }
    }
}