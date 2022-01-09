import axios from 'axios';
import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

export default NextAuth({
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            authorization: { params: { scope: 'identify email guilds guilds.join connections' } },

        })
    ],
    callbacks: {
        async jwt({ token, account, profile }) 
        {
            // @ts-ignore
            if(profile) token.profile = profile;

            if(account?.access_token)
                token.access_token = account.access_token;

            const guilds = await axios({
                url: 'https://discord.com/api/users/@me/guilds',
                method: 'GET',
                headers: { Authorization: `Bearer ${ token.access_token }` }
            });

            // @ts-ignore
            token.profile.guilds = guilds.data;

            for(let i: number = 0; i < guilds.data.length; i++)
            {
                
                if(guilds.data[i].id == process.env.DISCORD_GUILD_ID)
                {
                    console.log('Guild found; returning.');
                    break;
                }

                if(i == guilds.data.length - 1)
                {
                    console.log('Guild not found; Joining.');
                    const guildJoin = await axios({
                        // @ts-ignore
                        url: `https://discord.com/api/guilds/${ process.env.DISCORD_GUILD_ID }/members/${ profile.id }`,
                        method: 'PUT',
                        data: {
                            access_token: `Bearer ${ token.access_token }`,
                        },
                        
                        headers: { Authorization: `Bot ${ process.env.BOT_TOKEN }`, 'Content-Type': 'application/json' }
                    });

                    console.log(guildJoin.data);
                    console.log(guildJoin.headers);
                }

                break;
            }

            return token;
        },

        // eslint-disable-next-line no-unused-vars
        async session({ session, token, user }) 
        {

            // @ts-ignore
            session.user?.guilds = token.profile.guilds;
            session.user!.access_token = token.access_token;

            return session;
        },
    },
    jwt: {
        secret: process.env.JWT_SECRET,
    },
    secret: process.env.SECRET,
});