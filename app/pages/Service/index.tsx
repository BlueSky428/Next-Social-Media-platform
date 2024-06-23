"use client"
import ServiceHeader from "@/app/components/Service/header"
import { FC, useState } from "react"

const Service: FC = () => {

    return (
        <div className="relative flex min-h-screen flex-col overflow-hidden bg-white sm:py-12">
            <ServiceHeader />
        </div>
    )
}

export default Service;