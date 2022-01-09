import Link from 'next/link';
import
{
    FaShoppingCart,
    FaSignal,
    FaQuestionCircle,
    FaThList,
    FaYoutube,
    FaDiscord,
} from 'react-icons/fa';

const Footer = (): JSX.Element =>
{
    return (
        <footer className='hidden md:flex lg:flex absolute h-64 w-screen bottom-0 text-white'>
            <div className='flex flex-row items-center justify-between h-full w-full space-x-4 bg-gray-900'>
                <div className='flex flex-row h-full w-full items-center'>
                    <p className='ml-28'>
                        Copyright <span className='text-red-500'>© 2021</span>
                        <br />
                        <span className='text-purple'>
                            All rights reserved. All other trademarks, logos and copyrights are the property of their respective owners.
                        </span>
                    </p>

                    <div className='flex flex-row justify-center text-center items-center h-full w-full'>
                        <ul className='flex flex-col space-y-2'>
                            <li className='text-lg text-center'>
                                <p>
                                    Main menu
                                </p>
                            </li>
                            <li className='lowercase text-lg' style={{ 'letterSpacing': '2px' }}>
                                <p className='text-red-500 text-center'>
                                    Navigation
                                </p>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a className='flex flex-row hover:text-white text-purple text-lg duration-500'>
                                        <FaThList className='mt-1 mr-2' /> Forums
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a className='flex flex-row hover:text-white text-purple text-lg duration-500'>
                                        <FaShoppingCart className='mt-1 mr-2' /> Store
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a className='flex flex-row hover:text-white text-purple text-lg duration-500'>
                                        <FaSignal className='mt-1 mr-2' /> Status
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a className='flex flex-row hover:text-white text-purple text-lg duration-500'>
                                        <FaQuestionCircle className='mt-1 mr-2' /> Support
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <ul className='flex flex-col space-y-2 ml-16'>
                            <li className='text-lg'>
                                Social Media
                            </li>
                            <li className='lowercase text-lg' style={{ 'letterSpacing': '1px' }}>
                                <p className='text-red-500'>
                                    Media Links
                                </p>
                            </li>
                            <li>
                                <button className='w-full rounded-lg text-purple duration-500 hover:bg-gray-800 hover:text-white p-3'>
                                    <Link href='/'>
                                        <a className='flex flex-row text-lg'>
                                            <FaYoutube className='mt-1 mr-2' /> Youtube
                                        </a>
                                    </Link>
                                </button>
                            </li>
                            <li>
                                <button className='w-full rounded-lg text-purple duration-500 hover:bg-gray-800 hover:text-white p-3'>
                                    <Link href='/'>
                                        <a className='flex flex-row text-lg'>
                                            <FaDiscord className='mt-1 mr-2' /> Discord
                                        </a>
                                    </Link>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;