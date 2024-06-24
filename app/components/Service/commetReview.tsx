import { FC } from "react";

const CommetReview: FC = () => {
    return (
        <div className="w-full bg-white rounded-lg mx-auto py-4">
            <h2 className="font-medium mb-4">Your Comment</h2>
            <form>
                <div className="lg:w-full lg:flex md:w-full md:flex sm:w-full sm:flex items-center justify-center">
                    <div className="mb-4 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full px-2">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                        <input type="text" id="name" name="name" placeholder="Name"
                            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required />
                    </div>
                    <div className="mb-4 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full px-2">
                        <label htmlFor="age" className="block text-gray-700 font-medium mb-2">Your Email</label>
                        <input type="email" id="age" name="age" placeholder="Email"
                            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required />
                    </div>
                </div>
                <div className="mb-4 px-2">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea id="message" name="message"
                        className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" rows={8}></textarea>
                </div>
                <div className="w-full flex items-center py-2 px-4">
                    <div className="flex flex-wrap -mx-2">
                        <label htmlFor="animal-cat" className="block text-gray-700 font-medium mb-2 text-sm">
                            <input type="checkbox" id="animal-cat" name="animal[]" value="cat" className="mr-2" />Save my name, email, and website in this browser for the next time I comment.
                        </label>
                    </div>
                </div>
                <div className="px-2">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit Review</button>
                </div>

            </form>
        </div>
    )
}

export default CommetReview;