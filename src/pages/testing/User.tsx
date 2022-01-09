import { NextPage } from 'next';
import { useSession } from 'next-auth/react';

const User: NextPage = () =>
{
    const { data: session, status } = useSession();

    return (
        <div>
            <main className='h-screen w-screen flex justify-center items-center text-white'>
                <h1 className='text-left overflow-clip'>
                    {status === 'loading' ? 'Loading...' : JSON.stringify(session!.user?.image)}
                </h1>
            </main>
        </div>
    );
};

export default User;