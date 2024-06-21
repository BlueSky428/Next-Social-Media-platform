import { FC } from "react";

const FirstComponent: FC = () => {
    return (
        <section className="container space-y-6 bg-white py-8 mx-auto md:py-12 mt-20">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4" >
                <h2 className="font-heading text-2xl leading-[1.1] sm:text-2xl md:text-2xl font-bold text-gray-600">Need something done?</h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">Most viewed and all-time top-selling services</p>
            </div >
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[77rem] md:grid-cols-4">
                <div className="relative overflow-hidden rounded-lg bg-background p-2">
                    <div className="flex h-[180px] flex-col justify-between rounded-md p-6"><svg xmlns="http://www.w3.org/2000/svg"
                        width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-terminal">
                        <polyline points="4 17 10 11 4 5"></polyline>
                        <line x1="12" y1="19" x2="20" y2="19"></line>
                    </svg>
                        <div className="space-y-2">
                            <h3 className="font-bold">Post a job</h3>
                            <p className="text-sm text-muted-foreground">An AI-powered prompt builder to help you create stunning images.</p>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg bg-background p-2">
                    <div className="flex h-[180px] flex-col justify-between rounded-md p-6"><svg xmlns="http://www.w3.org/2000/svg"
                        width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-grid">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="3" y1="15" x2="21" y2="15"></line>
                        <line x1="9" y1="3" x2="9" y2="21"></line>
                        <line x1="15" y1="3" x2="15" y2="21"></line>
                    </svg>
                        <div className="space-y-2">
                            <h3 className="font-bold">Choose freelancers</h3>
                            <p className="text-sm text-muted-foreground">Choose from 16x16, 32x32, 64x64, or 128x128 grids.</p>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg bg-background p-2">
                    <div className="flex h-[180px] flex-col justify-between rounded-md p-6"><svg xmlns="http://www.w3.org/2000/svg"
                        width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sliders-horizontal">
                        <line x1="21" y1="4" x2="14" y2="4"></line>
                        <line x1="10" y1="4" x2="3" y2="4"></line>
                        <line x1="21" y1="12" x2="12" y2="12"></line>
                        <line x1="8" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="20" x2="16" y2="20"></line>
                        <line x1="12" y1="20" x2="3" y2="20"></line>
                        <line x1="14" y1="2" x2="14" y2="6"></line>
                        <line x1="8" y1="10" x2="8" y2="14"></line>
                        <line x1="16" y1="18" x2="16" y2="22"></line>
                    </svg>
                        <div className="space-y-2">
                            <h3 className="font-bold">Pay safely</h3>
                            <p className="text-sm text-muted-foreground">Advanced options for adjusting sampling steps and prompt guidance.</p>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg bg-background p-2">
                    <div className="flex h-[180px] flex-col justify-between rounded-md p-6"><svg xmlns="http://www.w3.org/2000/svg"
                        width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-minus">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="9" y1="15" x2="15" y2="15"></line>
                    </svg>
                        <div className="space-y-2">
                            <h3 className="font-bold">We’re here to help</h3>
                            <p className="text-sm text-muted-foreground">Isolate the subject of your image by removing the background!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FirstComponent;