"use client"

import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";


// export const metadata = {
//   title: "SunCart - My-Profile",
//   description: "Summer Essentials Store",
// };

const MyProfilePage = () => {

const { data: session } = authClient.useSession()
//console.log(session);
const user = session?.user;
console.log(user);


    return (
        <div>
            
            <Card className="flex flex-col items-center shadow rounded-md p-10 w-96 mx-auto gap-4 my-10 border">
                <Avatar className="w-20 h-20 ">
                <Avatar.Image alt="user img"
                src={user?.image} />
                <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                </Avatar>

                <div>
                    <h2 className="font-bold text-xl">{user?.name}</h2>
                </div>

                <div>
                    <h1 className="text-gray-400">{user?.email}</h1>
                </div>
            </Card>
        </div>
    );
}

export default MyProfilePage;
