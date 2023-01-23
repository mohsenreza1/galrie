import * as photo from "../models/Photo.js"

export const getAll = async (req, res, next) =>{
    try {
        const photos = await photo.getAll();

        res.status(200).json(photos)
    } catch{
        next(error)
    }
   
};

export const create = async (req, res, next) =>{
    try{
        const photo = await photo.create(req.body.title, req.body.description, req.body.test);

    res.status(201).json(photo);
    }catch{
        next(error)
    }
    
}

export const replace = async (req, res, next) => {
    try{
        const photo = await photo.replace(req.params.photoId, req.body);
        res.status(201).jason(photo)
    }catch{
        next(error)
    }
}

export const remove = async (req, res, next) =>{
    try{
        const photo = await photo.delete(req.params.photoId);
        res.status(204).send()
    }catch{
        next(error)
    }
}

export const update = (req, res, next) => {
    try{
        photo.update(req.params.photoId, req.body)
        res.status(201).json(photo)
    }catch{
        next(error)
    }
}


