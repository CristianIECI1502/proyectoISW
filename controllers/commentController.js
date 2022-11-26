const Comment = require('../models/comment');

const createComment = (req, res)=>{
    const{comentario, createdAt, post, user}=req.body;
    //console.log(name)
    const newComment = new Comment({
        comentario,
        createdAt,
        post,
        user
    });
    newComment.save((err,comment)=>{
        if(err){
            return res.status(400).send({message:'Error al crear comentario'})
        }
        return res.status(200).send(comment)
    })
}
const getComments =(req, res)=>{
            Comment.find({}).populate('user','name').populate('post').exec((err, comment)=>{
            if (err){
                return res.status(400).send({message:'no hay anuncios publicados'})
            }
            return res.status(200).send(comment)
    })
}

const updateComment=(req, res) =>{
    const { id } = req.params;
    Comment.findByIdAndUpdate(id, req.body,(err,comments)=>{
        if (err){
            return res.status(400).send({message:"Error al encontrar los comentarios"})
        }
        if(!comments){
            return res.status(404).send({message: "comentarios no disponibles"})
        }
        return res.status(200).send(comments)
    })
}

const deleteComment=(req, res)=>{
    const { id }=req.params;
    Comment.findByIdAndDelete(id, req.body,(err,comments)=>{
        if(err){
            return res.status(400).send({message:"Error al encontrar el comentario"})
        }
        if(!comments){
            return res.status(404).send({message:"comentario no disponible"})
        }
        return res.status(200).send(comments)
    })
}

module.exports ={
    createComment,
    getComments,
    updateComment,
    deleteComment
}