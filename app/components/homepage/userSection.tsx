import { FC, useState } from "react";

type Usersection = {
    id: number,
    useravatar: string,
    username: string,
    usercontent: string,
    content: string
}

const UserSection: FC = () => {

    const [userSection, setUserSection] = useState<Usersection[]>(
        [
            { id: 0, useravatar: "https://randomuser.me/api/portraits/women/2.jpg", username: "Ana Rodriguez", usercontent: "Santamaria Shirtmakers", content: "We have built a network of trusted freelancers we can depend on when we need something done." },
            { id: 1, useravatar: "https://randomuser.me/api/portraits/women/2.jpg", username: "Ana Rodriguez", usercontent: "Santamaria Shirtmakers", content: "We have built a network of trusted freelancers we can depend on when we need something done." },
        ]
    )

    return (
        <div className="w-full py-2 bg-white">
            <div className="mx-auto lg:w-full flex justify-center items-center 
                            lg:flex-row md:flex-row sm:flex-col flex-col max-w-screen-xl px-4 w-full justify-center bg-white gap-8">
                {
                    userSection.map((item) => (
                        <div className="lg:w-1/2 p-4 bg-gray-100" key={item.id}>
                            <div className="w-full flex items-center">
                                <div className="flex justify-center items-center">
                                    <img src={item.useravatar} className="w-20 h-20 rounded-full" alt="" />
                                </div>
                                <div className="flex flex-col justify-center px-4">
                                    <span className="font-bold text-base">{item.username}</span>
                                    <span className="text-sm">{item.usercontent}</span>
                                </div>
                            </div>
                            <div className="flex items-center py-4">
                                <span className="text-xl">{item.content}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default UserSection;