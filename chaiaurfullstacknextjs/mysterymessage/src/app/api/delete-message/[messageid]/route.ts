import dbConnect from "@/lib/dbConnect"
import { User, getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth]/options"
import UserModel from "@/model/User"

export async function DELETE(request:Request,{params}:{params:{messageid:string}}){
    const messageId=params.messageid
    await dbConnect()
    
    const session=await getServerSession(authOptions)
    const user:User=session?.user as User
    if(!session || !session.user){
        return Response.json(
            { 
                success: false, 
                message: 'Not authenticated' 
            },
            { status: 401 }
          );
    }

    try {
        const updatedResult=await UserModel.updateOne(
            {_id:user._id},
            {$pull:{message:{_id:messageId}}}
        )

        if(updatedResult.modifiedCount===0){
            return Response.json(
                { 
                    success: false, 
                    message: 'Message not found or already deleted' 
                },
                { status: 404 }
              );
        }

        return Response.json(
            { 
                success: true, 
                message: 'Message deleted' 
            },
            { status: 200 }
          );
    } catch (error) {
        console.error('Error deleting message:', error);
        return Response.json(
            { message: 'Error deleting message', success: false },
            { status: 500 }
        )
    }

}