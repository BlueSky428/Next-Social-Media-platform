type Category = {
    id: number
    category: string
}

type Follower = {
    id: number
    content: string
}

export const categoryData: Category[] = [
    { id: 0, category: "Art & Gaming" },
    { id: 1, category: "Cars & Bikes" },
    { id: 2, category: "Cinema & Celebrities" },
    { id: 3, category: "Dance & Music" },
    { id: 4, category: "DIY & Tutorials" },
    { id: 5, category: "Fitness & Sports" },
    { id: 6, category: "Food & Nutrition" },
    { id: 7, category: "Fashion & Style" },
    { id: 8, category: "Humour & Memes" },
    { id: 9, category: "Lusury & Motivation" },
    { id: 10, category: "Makeup & Beauty" },
    { id: 11, category: "Models & Hot Girls" },
    { id: 12, category: "Photography & Travel" },
    { id: 13, category: "Pets & Animals" },
    { id: 14, category: "Quotes & Texts" },
    { id: 15, category: "Realestate & Interior" },
    { id: 16, category: "Tech & Science" },
    { id: 17, category: "Tattoo" },
    { id: 18, category: "Vape & Smoke" },
    { id: 19, category: "TikTok Accounts" },
    { id: 20, category: "Other" },
]

export const followerData: Follower[] = [
    { id: 0, content: "2k-5k-accounts" },
    { id: 1, content: "5k-20k-accounts" },
    { id: 2, content: "20k-50k-accounts" },
    { id: 3, content: "50k-100k-accounts" },
    { id: 4, content: "above-100k-accounts" },
    { id: 5, content: "Custom Order" },
]