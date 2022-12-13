import User from "../../modules/User.js"

export const getAllUsers = async(req,res,next)=>{

        try{

            const getUsers = await User.find();
            res.status(200).json(getUsers)

        }catch(err){
            next(err)
        }
}

export const getUsersById = async(req,res,next)=>{
    try{

        const userById = await User.findById(req.params.id)
        res.status(200).json(userById)

    }catch(err){
        next(err)
    }
}

export const editUserById = async(req,res,next)=>{
    try{

        const editUser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },
        {new:true}
        )

        res.status(200).json(editUser)

    }catch(err){
        next(err)
    }
}

export const deleteUserById = async(req,res,next)=>{
    try{

        const deleteUser = await User.findByIdAndDelete(req.params.id)
        res.status(200).send("User has been deleted successfully!!")

    }catch(err){
        next(err)
    }
}