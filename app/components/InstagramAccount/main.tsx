import { FC } from "react";
import InstagramHeader from "./header";

const InstagramAccountMain: FC = () => {
    return (
        <div className="w-full h-screen bg-white bg-no-repeat bg-cover" style={{ backgroundImage: `url("/image/img/background.png")` }}>
            <InstagramHeader />
        </div>
    )
}

export default InstagramAccountMain;