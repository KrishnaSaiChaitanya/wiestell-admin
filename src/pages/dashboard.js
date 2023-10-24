import React from "react";

function Dashboard() {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12">
            <div id="cards" className="flex flex-wrap gap-6 py-6 items-stretch">
                <div class="flex flex-wrap flex-col flex-1 gap-3 justify-between p-3 bg-white border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="flex justify-between items-center gap-2">
                        <p class="font-normal text-gray-500 text-sm">
                            Total Revenue
                        </p>
                        <button
                            id="dropdownDefaultButton1"
                            data-dropdown-toggle="dropdown1"
                            class="text-black border border-black bg-white text-sm px-2 py-2 text-center inline-flex items-center "
                            type="button"
                        >
                            This Year{" "}
                            <svg
                                class="w-2.5 h-2.5 ml-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 1 4 4 4-4"
                                />
                            </svg>
                        </button>

                        <div
                            id="dropdown1"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        >
                            <ul
                                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownDefaultButton"
                            >
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Earnings
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Sign out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-start items-center w-full gap-2">
                        <img
                            class="relative inline-block h-12 w-12 rounded-lg object-cover object-center"
                            alt="Image"
                            src="www.freepik.com%2Ffree-photos-vectors%2Favatar&psig=AOvVaw3MOFFN3BKvS5WwdY3eTekR&ust=1697967559992000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPCnv5vshoIDFQAAAAAdAAAAABAE"
                        />

                        <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            27,381
                        </h5>
                    </div>
                </div>
                <div class="flex flex-wrap flex-col flex-1 gap-3 justify-between p-3 bg-white border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="flex justify-between items-center w-full gap-2">
                        <p class="font-normal text-gray-500 text-sm">
                            Total Orders
                        </p>
                        <button
                            id="dropdownDefaultButton1"
                            data-dropdown-toggle="dropdown1"
                            class="text-black border border-black bg-white text-sm px-2 py-2 text-center inline-flex items-center "
                            type="button"
                        >
                            This Year{" "}
                            <svg
                                class="w-2.5 h-2.5 ml-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 1 4 4 4-4"
                                />
                            </svg>
                        </button>

                        <div
                            id="dropdown1"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        >
                            <ul
                                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownDefaultButton"
                            >
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Earnings
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Sign out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-start items-center w-full gap-2">
                        <img
                            class="relative inline-block h-12 w-12 rounded-lg object-cover object-center"
                            alt="Image"
                            src="www.freepik.com%2Ffree-photos-vectors%2Favatar&psig=AOvVaw3MOFFN3BKvS5WwdY3eTekR&ust=1697967559992000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPCnv5vshoIDFQAAAAAdAAAAABAE"
                        />

                        <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            29
                        </h5>
                    </div>
                </div>
                <div class="flex flex-wrap flex-col flex-1 gap-3 justify-between p-3 bg-white border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="flex justify-between items-center w-full gap-2">
                        <p class="font-normal text-gray-500 text-sm">
                            New Customers
                        </p>
                        <button
                            id="dropdownDefaultButton1"
                            data-dropdown-toggle="dropdown1"
                            class="text-black border border-black bg-white text-sm px-2 py-2 text-center inline-flex items-center "
                            type="button"
                        >
                            This Year{" "}
                            <svg
                                class="w-2.5 h-2.5 ml-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 1 4 4 4-4"
                                />
                            </svg>
                        </button>

                        <div
                            id="dropdown1"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        >
                            <ul
                                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownDefaultButton"
                            >
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Earnings
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Sign out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-start items-center w-full gap-2">
                        <img
                            class="relative inline-block h-12 w-12 rounded-lg object-cover object-center"
                            alt="Image"
                            src="www.freepik.com%2Ffree-photos-vectors%2Favatar&psig=AOvVaw3MOFFN3BKvS5WwdY3eTekR&ust=1697967559992000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPCnv5vshoIDFQAAAAAdAAAAABAE"
                        />

                        <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            18
                        </h5>
                    </div>
                </div>
                <div class="flex flex-wrap flex-col flex-1 gap-3 justify-between p-3 bg-white border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="flex flex-wrap justify-between items-center w-full">
                        <p class="font-normal text-gray-500 text-sm">
                            Total Customers
                        </p>
                        {/* <button
                            id="dropdownDefaultButton1"
                            data-dropdown-toggle="dropdown1"
                            class="text-black border border-black bg-white text-sm px-2 py-2 text-center inline-flex items-center "
                            type="button"
                        >
                            This Year{" "}
                            <svg
                                class="w-2.5 h-2.5 ml-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 1 4 4 4-4"
                                />
                            </svg>
                        </button>

                        <div
                            id="dropdown1"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        >
                            <ul
                                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownDefaultButton"
                            >
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Earnings
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Sign out
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                    <div className="flex flex-wrap justify-start items-center w-full gap-2">
                        <img
                            class="relative inline-block h-12 w-12 rounded-lg object-cover object-center"
                            alt="Image"
                            src="www.freepik.com%2Ffree-photos-vectors%2Favatar&psig=AOvVaw3MOFFN3BKvS5WwdY3eTekR&ust=1697967559992000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPCnv5vshoIDFQAAAAAdAAAAABAE"
                        />

                        <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            143
                        </h5>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-4">
                <div class="flex flex-wrap w-72 p-4 grow bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex items-center justify-between w-full">
                        <img
                            class="relative inline-block h-6 w-6 rounded-lg object-cover object-center"
                            alt="Image"
                            src="www.freepik.com%2Ffree-photos-vectors%2Favatar&psig=AOvVaw3MOFFN3BKvS5WwdY3eTekR&ust=1697967559992000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPCnv5vshoIDFQAAAAAdAAAAABAE"
                        />
                        <div className="flex flex-wrap flex-col justify-start items-start gap-2">
                            <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                100
                            </h5>
                            <p class="font-normal text-gray-500 text-sm">
                                Total Revenue
                            </p>
                        </div>
                        <button
                            id="dropdownDefaultButton1"
                            data-dropdown-toggle="dropdown1"
                            class="text-black border border-black bg-white text-sm px-2 py-2 text-center inline-flex items-center "
                            type="button"
                        >
                            This Year{" "}
                            <svg
                                class="w-2.5 h-2.5 ml-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 1 4 4 4-4"
                                />
                            </svg>
                        </button>

                        <div
                            id="dropdown1"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        >
                            <ul
                                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownDefaultButton"
                            >
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Earnings
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Sign out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="flow-root w-full">
                        <ul
                            role="list"
                            class="divide-y divide-gray-200 dark:divide-gray-700 w-full"
                        >
                            <li class="py-3 py-4">
                                <div class="flex items-center space-x-4 justify-between w-full">
                                    <div class="flex-shrink-0">
                                        <img
                                            class="w-8 h-8 rounded-full"
                                            src="/docs/images/people/profile-picture-1.jpg"
                                            alt="Neil image"
                                        />
                                    </div>
                                    <div class="min-w-0">
                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Neil Sims
                                        </p>
                                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        $320
                                    </div>
                                </div>
                            </li>
                            <li class="py-3 py-4">
                                <div class="flex items-center space-x-4 justify-between w-full">
                                    <div class="flex-shrink-0">
                                        <img
                                            class="w-8 h-8 rounded-full"
                                            src="/docs/images/people/profile-picture-1.jpg"
                                            alt="Neil image"
                                        />
                                    </div>
                                    <div class="min-w-0">
                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Neil Sims
                                        </p>
                                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        $320
                                    </div>
                                </div>
                            </li>
                            <li class="py-3 py-4">
                                <div class="flex items-center space-x-4 justify-between w-full">
                                    <div class="flex-shrink-0">
                                        <img
                                            class="w-8 h-8 rounded-full"
                                            src="/docs/images/people/profile-picture-1.jpg"
                                            alt="Neil image"
                                        />
                                    </div>
                                    <div class="min-w-0">
                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Neil Sims
                                        </p>
                                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        $320
                                    </div>
                                </div>
                            </li>
                            <li class="py-3 py-4">
                                <div class="flex items-center space-x-4 justify-between w-full">
                                    <div class="flex-shrink-0">
                                        <img
                                            class="w-8 h-8 rounded-full"
                                            src="/docs/images/people/profile-picture-1.jpg"
                                            alt="Neil image"
                                        />
                                    </div>
                                    <div class="min-w-0">
                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Neil Sims
                                        </p>
                                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        $320
                                    </div>
                                </div>
                            </li>
                            <li class="py-3 py-4">
                                <div class="flex items-center space-x-4 justify-between w-full">
                                    <div class="flex-shrink-0">
                                        <img
                                            class="w-8 h-8 rounded-full"
                                            src="/docs/images/people/profile-picture-1.jpg"
                                            alt="Neil image"
                                        />
                                    </div>
                                    <div class="min-w-0">
                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Neil Sims
                                        </p>
                                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        $320
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-wrap flex-col gap-2 grow">
                    <div className="flex flex-wrap gap-2 w-full items-stretch">
                        <div class="flex flex-wrap grow justify-between h-fit w-52 bg-white border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex flex-wrap flex-col justify-between w-full h-full border-l-4 border-black">
                                <div className="flex flex-wrap justify-between items-center w-full h-fit p-2">
                                    <p class="font-normal text-gray-500 text-xs">
                                        Total Vendors
                                    </p>
                                </div>
                                <div className="flex flex-wrap justify-between content-center w-full h-fit p-2 gap-1">
                                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        32
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap grow justify-between h-fit w-52 bg-white border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex flex-wrap flex-col justify-between w-full h-full border-l-4 border-black">
                                <div className="flex flex-wrap justify-between items-center w-full h-fit p-2">
                                    <p class="font-normal text-gray-500 text-xs">
                                        Total Products
                                    </p>
                                </div>
                                <div className="flex flex-wrap justify-between content-center w-full h-fit p-2 gap-1">
                                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        1309
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap grow justify-between h-fit w-52 bg-white border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex flex-wrap flex-col justify-between w-full h-full border-l-4 border-black">
                                <div className="flex flex-wrap justify-between items-center w-full h-fit p-2">
                                    <p class="font-normal text-gray-500 text-xs">
                                        Average Order Value (AOV)
                                    </p>
                                </div>
                                <div className="flex flex-wrap justify-between items-center w-full h-fit p-2">
                                    <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        977.9
                                    </h5>
                                    <button
                                        id="dropdownDefaultButton1"
                                        data-dropdown-toggle="dropdown1"
                                        class="text-black border border-black bg-white text-sm px-2 py-2 text-center inline-flex items-center "
                                        type="button"
                                    >
                                        This Year{" "}
                                        <svg
                                            class="w-2.5 h-2.5 ml-2.5"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 10 6"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="m1 1 4 4 4-4"
                                            />
                                        </svg>
                                    </button>

                                    <div
                                        id="dropdown1"
                                        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                    >
                                        <ul
                                            class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                            aria-labelledby="dropdownDefaultButton"
                                        >
                                            <li>
                                                <a
                                                    href="#"
                                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Dashboard
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Settings
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Earnings
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Sign out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap grow justify-between h-fit w-52 bg-white border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex flex-wrap flex-col justify-between w-full h-full border-l-4 border-black">
                                <div className="flex flex-wrap justify-between items-center w-full h-fit p-2">
                                    <p class="font-normal text-gray-500 text-xs">
                                        Average Conversion Rate (ACR)
                                    </p>
                                </div>
                                <div className="flex flex-wrap justify-between items-center w-full h-fit p-2">
                                    <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        155.56%
                                    </h5>
                                    <button
                                        id="dropdownDefaultButton1"
                                        data-dropdown-toggle="dropdown1"
                                        class="text-black border border-black bg-white text-sm px-2 py-2 text-center inline-flex items-center "
                                        type="button"
                                    >
                                        This Year{" "}
                                        <svg
                                            class="w-2.5 h-2.5 ml-2.5"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 10 6"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="m1 1 4 4 4-4"
                                            />
                                        </svg>
                                    </button>

                                    <div
                                        id="dropdown1"
                                        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                    >
                                        <ul
                                            class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                            aria-labelledby="dropdownDefaultButton"
                                        >
                                            <li>
                                                <a
                                                    href="#"
                                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Dashboard
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Settings
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Earnings
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Sign out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        
<div class="border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
        <li class="mr-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
        </li>
        <li class="mr-2" role="presentation">
            <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
        </li>
        <li class="mr-2" role="presentation">
            <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
        </li>
        <li role="presentation">
            <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
        </li>
    </ul>
</div>
<div id="myTabContent">
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
</div>
<div className="">
<div class="flex flex-wrap flex-col gap-3 justify-between p-3 bg-white border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="flex justify-between items-center gap-2">
                        <p class="font-normal text-gray-500 text-sm">
                            TRANSACTIONS
                        </p>
                        <button
                            id="dropdownDefaultButton1"
                            data-dropdown-toggle="dropdown1"
                            class="text-black border border-black bg-white text-sm px-2 py-2 text-center inline-flex items-center "
                            type="button"
                        >
                            2023{" "}
                            <svg
                                class="w-2.5 h-2.5 ml-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 1 4 4 4-4"
                                />
                            </svg>
                        </button>

                        <div
                            id="dropdown1"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        >
                            <ul
                                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownDefaultButton"
                            >
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Earnings
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Sign out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
