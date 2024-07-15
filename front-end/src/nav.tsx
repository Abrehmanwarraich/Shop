import { Link, NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

function NAV() {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    // console.log(cartItems);

    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
                    <Link
                        to={"/"}
                        className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                    >
                        <img
                            src="../../images/a.jpg"
                            alt="main pic"
                            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                        />
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>

                        <span className="ml-3 text-xl">SHOP</span>
                    </Link>
                    <ul className="md:mr-auto md:ml-4 md:py-4 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center justify-center">
                        <li className="mx-[14px] curser-pointer   hover:text-cyan-400">
                            <NavLink to={"/"} className="mr-4 hover:text-gray-900">
                                Home
                            </NavLink>
                        </li>
                        <li className="mx-[14px] curser-pointer   hover:text-cyan-400">
                            <NavLink to={"blogs"} className="mr-4 hover:text-gray-900">
                                Blogs
                            </NavLink>
                        </li>
                        <li className="mx-[14px] curser-pointer   hover:text-cyan-400">
                            <NavLink to={"contact"} className="mr-4 hover:text-gray-900">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className="flex ">
                        <div className="mx-5 relative">
                            <NavLink
                                className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                                to={"addtocart"}
                            >
                                <span className="absolute top-1 left-1 flex h-3 w-3 items-center justify-center rounded-full border bg-red-700 text-sm font-medium text-white shadow sm:-top-2 sm:-right-2">
                                    {cartItems.length}
                                </span>
                                <img
                                    src="../../images/bag.jpg"
                                    alt="bag pic"
                                    className="w-8 h-8 mt-4 md:mt-0 text-white "
                                />
                            </NavLink>
                        </div>
                        <div>
                            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                                <NavLink to={"login"}>Login</NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default NAV;