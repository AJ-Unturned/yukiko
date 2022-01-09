/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql';
import axios from 'axios';

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

// data returned from mysql query is going to be 
/*
{
    PlayerID: number,
    PalyerName: string,
    Kills: number,
    Deaths: number,
    Headshots: number,
    Zombies: number,
    MegaZombies: number,
    Resources: number,
    Harvests: number,
    Fish: number,
    LastUpdated: string,
*/

type Data = {
    ok: boolean;
    query?: any;
    username?: string;
    id?: string,
    profilePic?: string,
    stats?: {
        kills: number;
        deaths: number;
        kdr: number;
        lastUpdated: string;
    };
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) =>
{
    const { userid } = req.query;
    const regex: RegExp = new RegExp('(?!^\\d+$)^.+$');

    return new Promise<void>((resolve) =>
    {
        if(!userid || !userid.length)
        {
            res.status(400).json({ ok: false });
            resolve();
            return;
        }

        if(regex.test(userid as any as string))
        {
            res.status(400).json({ ok: false });
            resolve();
            return;
        }

        return db.query(`SELECT * FROM playerstats WHERE PlayerID = '${ userid }'`, async (err, rows) =>
        {
            if(err)
            {
                res.json({ ok: false });
                resolve();
                return;
            }

            if(!rows.length)
            {
                res.json({ ok: false });
                resolve();
                return;
            }

            const { PlayerID, PlayerName, Kills, Deaths, LastUpdated: lastUpdated } = rows[0];

            const pic = await axios({
                url:
                    `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${ process.env.STEAM_KEY }&steamids=${ userid }`,
                method: 'GET',
            });

            if (pic.status !== 200)
            {
                res.json({ ok: false });
                resolve();
                return;
            }


            res.status(200).json({
                ok: true,
                username: PlayerName,
                id: PlayerID.toString(),
                profilePic: pic.data.response.players[0].avatarfull,
                stats: {
                    kills: Kills,
                    deaths: Deaths,
                    kdr: (Kills / Deaths).toFixed(2) as any as number,
                    lastUpdated: lastUpdated
                },
            });

            resolve();
            return;
        });
    });
};