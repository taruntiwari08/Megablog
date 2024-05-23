import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../index'

export function Footer() {
    

    return (
        <section className="relative overflow-hidden md:h-[400px] py-10 bg-blue-900 text-gray-100 border border-t-2 border-t-black w-full h-auto ">
    <div className="relative z-10 mx-auto max-w-7xl px-4 mb-0">
        <div className="-m-6 flex flex-wrap">
            <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                <div className="flex h-full flex-col justify-between">
                    <div className="mb-4 inline-flex items-center">
                        <Logo classname='h-[210px] w-[210px] mr-20' />
                    </div>
                    <div>
                        <p className="text-sm mr-14 ">
                            &copy; Copyright 2023. All Rights Reserved by DevUI.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                <div className="h-full">
                    <h3 className="tracking-px mb-9  uppercase text-m font-bold">
                        Company
                    </h3>
                    <ul>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium  hover:text-blue-500"
                                to="/"
                            >
                                Features
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium hover:text-blue-500"
                                to="/"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium hover:text-blue-500"
                                to="/"
                            >
                                Affiliate Program
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=" text-base font-medium hover:text-blue-500"
                                to="/"
                            >
                                Press Kit
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                <div className="h-full">
                    <h3 className="tracking-px mb-9  uppercase text-m font-bold">
                        Support
                    </h3>
                    <ul>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium hover:text-blue-500"
                                to="/"
                            >
                                Account
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium hover:text-blue-500"
                                to="/"
                            >
                                Help
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium hover:text-blue-500"
                                to="/"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=" text-base font-medium hover:text-blue-500"
                                to="/"
                            >
                                Customer Support
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                <div className="h-full">
                    <h3 className="tracking-px mb-9  uppercase  text-m font-bold">
                        Legals
                    </h3>
                    <ul>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium hover:text-blue-500"
                                to="/"
                            >
                                Terms &amp; Conditions
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link
                                className=" text-base font-medium hover:text-blue-500"
                                to="/"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                className=" text-base font-medium hover:text-blue-500"
                                to="/"
                            >
                                Licensing
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

    )
}