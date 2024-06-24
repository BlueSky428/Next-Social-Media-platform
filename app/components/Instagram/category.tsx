import { FC } from "react";

type cateogoryButton = {
    setContent?: any,
    content?: string
}

type CategorybuttonType = {
    id: number,
    content: string
}

const CategoryButton: FC<cateogoryButton> = ({ setContent, content }) => {

    const categorybuttontype: CategorybuttonType[] = [
        { id: 0, content: "Instagram Profile Picture Viewer" },
        { id: 1, content: "Instagram Video Downloader" },
    ]

    const categorybuttonClick = (id: number) => {
        setContent(categorybuttontype[id].content);
    }

    return (
        <div className="flex lg:w-full md:w-full sm:w-full w-full justify-center items-center lg:mt-14 mt-24 px-2">
            <div className="lg:w-[25%] md:w[25%] sm:w-[50%] flex justify-between itesm-center" >
                {
                    categorybuttontype.map((item) => (
                        <button key={item.id} onClick={() => categorybuttonClick(item.id)} className="w-[47%] hover:shadow-form rounded-md bg-[#581C87] text-center py-3 text-xs text-white outline-none flex justify-center items-center">
                            {item.content}
                        </button>
                    ))
                }
            </div>

        </div>
    )
}

export default CategoryButton;