/* eslint-disable no-unused-vars */
import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';

interface guilds
{
    guilds: {
        id: string;
        name: string;
        icon: string;
        owner: boolean;
        permissions: number;
        features: string[];
        permissions_new: string;
    }[];
}

declare module 'next-auth' {
    interface Session
    {
        user: {
            guilds: guilds;

            name: string;
            email: string;
            id: string;
            image: string;
            discriminator: string;
            access_token: string;

            steam: {
                id: string;
                name: string;
                avatar: string;
            };
        };
    }
}

declare module 'next-auth/jwt' {
    interface JWT
    {
        profile: {
            guilds?: guilds;
        };
        access_token: string;
    }

    interface DefaultProfile
    {
        guilds?: guilds;
    }
}