import { FC } from "react";

const ServiceDescription: FC = () => {
    return (
        <main className="py-4 w-full bg-white lg:px-24">
            <div className="lg:w-[65%] md:w-[70%] overflow-hidden rounded-md p-2 sm:p-4">
                <div className="w-full items-center">
                    <h1 className="text-xl font-bold">Service Description</h1>
                </div>
                <div className="w-full items-center py-4 text-gray-500">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet.
                </div>
                <div className="w-full flex justify-center flex-col py-4 text-gray-500">
                    <span>Services I provide:</span>
                    <span>1) Website Design</span>
                    <span>2) Mobile App Design</span>
                    <span>3) Brochure Design</span>
                    <span>4) Business Card Design</span>
                    <span>5) Flyer Design</span>
                </div>
                <div className="w-full items-center py-4 text-gray-500">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                </div>
                <div className="lg:w-full lg:h-48 md:w-full lg:h-48 sm:w-full lg:h-48 h-48 flex items-center py-4">
                    <div className="lg:w-[30%] lg:h-3/4 md:w-1/4 md:h-3/4 sm:h-3/4 sm:w-1/4 w-[30%] h-full flex flex-col">
                        <div className="lg:w-full lg:h-3/5 md:w-full md:h-full sm:w-full w-full h-[30%] sm:h-full flex items-center py-2">App Type</div>
                        <div className="lg:w-full md:w-full md-text-sm flex items-center py-1 text-sm">Business, Food & drink, Graphics & design</div>
                    </div>
                    <div className="lg:w-[30%] lg:h-3/4 md:w-1/4 md:h-3/4 sm:h-3/4 sm:w-1/4 w-[30%] h-full flex flex-col ml-4">
                        <div className="lg:w-full lg:h-3/5 md:w-full md:h-full sm:w-full w-full h-[30%] sm:h-full flex items-center py-2">Design tool</div>
                        <div className="lg:w-full md:w-full md-text-sm flex items-center py-1 text-sm">Adobe XD, Figma, Adobe Photoshop</div>
                    </div>
                    <div className="lg:w-[30%] lg:h-3/4 md:w-1/4 md:h-3/4 sm:h-3/4 sm:w-1/4 w-[30%] h-full flex flex-col ml-4">
                        <div className="lg:w-full lg:h-3/5 md:w-full md:h-full sm:w-full w-full h-[30%] sm:h-full flex items-center py-2">Device</div>
                        <div className="lg:w-full md:w-full md-text-sm flex items-center py-1 text-sm">Mobile, Desktop</div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ServiceDescription;