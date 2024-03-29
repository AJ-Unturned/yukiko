import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const TOS: NextPage = () =>
{
    return (
        <div>
            <Head>
                <title>Terms of Service</title>
                <meta name='keywords' content='list,of,key,wordse' />
                <meta name='description' content='100 word desc' />
                <meta name='og:title' content='short name' />
                <meta name='og:description' content='short desc' />
                <meta name='og:image' content='url' />
                <meta name='og:image:width' content='width' />
                <meta name='og:image:height' content='height' />
                <meta name='theme-color' content='#ad6edd' />
            </Head>
            <main>
                <div className='flex flex-col h-full w-full items-center justify-center text-center text-white'>
                    <div className='h-screen'>
                        <div className='mr-5 ml-5 flex flex-col items-center justify-center text-center self-center mt-10'>
                            <h1 className='text-5xl font-bold mono'>Terms of Service</h1>
                            <p className='text-2xl font-bold text-gray-400 mono' >
                                Last updated January 05, 2022
                            </p>

                            <div className='flex flex-row justify-center items-center gap-5'>
                                <Link href='/' passHref>
                                    <a className='text-2xl bg-purple p-2 rounded-2xl mt-5  font-bold text-gray-300 hover:text-purple hover:bg-gray-400 duration-500 transition-colors mono'>
                                        Back home
                                    </a>
                                </Link>

                                <Link href='/guidelines' passHref>
                                    <a className='text-2xl bg-purple p-2 rounded-2xl mt-5  font-bold text-gray-300 hover:text-purple hover:bg-gray-400 duration-500 transition-colors mono'>
                                        Guidelines
                                    </a>
                                </Link>
                            </div>

                            <section className='mt-5 pt-1 mb-5' id='agreement'>
                                <h1 className='text-2xl pb-2'>1. AGREEMENT TO TERMS</h1>
                                <hr className='w-1/2 h-1/' />

                                <p>
                                    These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Aze LLC, doing business as Aze (&quot;Aze,&quot; &quot;we,&quot; &quot;us,&quot; or “our”), concerning your access to and use of the __________ website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). We are registered in California, United States and have our registered office at 750 Hearst Castle Rd, San Simeon, CA 93452, __________, CA. You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.

                                    Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use from time to time. We will alert you about any changes by updating the “Last updated” date of these Terms of Use, and you waive any right to receive specific notice of each such change. Please ensure that you check the applicable Terms every time you use our Site so that you understand which Terms apply. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted.

                                    The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.

                                    The Site is not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use this Site. You may not use the Site in a way that would violate the Gramm-Leach-Bliley Act (GLBA).

                                    The Site is intended for users who are at least 13 years of age. All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Site. If you are a minor, you must have your parent or guardian read and agree to these Terms of Use prior to you using the Site.
                                </p>
                            </section>
                            <section className='mb-5'>
                                <h1 className='text-2xl pb-2'>2. INTELLECTUAL PROPERTY RIGHTS</h1>
                                <hr className='w-1/2 h-1/2' />

                                <p>
                                    Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions. The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.

                                    Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.
                                </p>
                            </section>

                            <section className='mb-5'>
                                <h1 className='text-2xl pb-2'>3. USER REPRESENTATIONS</h1>
                                <hr className='w-1/2 h-1/2' />

                                <p>
                                    By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you are not under the age of 13; (5) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Site; (6) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; (7) you will not use the Site for any illegal or unauthorized purpose; and (8) your use of the Site will not violate any applicable law or regulation.

                                    If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).
                                </p>
                            </section>

                            <section className='mb-5'>
                                <h1 className='text-2xl pb-2'>4. USER REGISTRATION</h1>

                                <p>
                                    You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
                                </p>
                            </section>

                            <section className='mb-5'>
                                <h1 className='text-2xl pb-2'>5. PROHIBITED ACTIVITIES</h1>
                                <hr className='w-1/2 h-1/2' />

                                <p>
                                    You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.

                                    As a user of the Site, you agree not to:
                                </p>

                                <ul className='list-decimal ml-5 pl-2 text-left'>
                                    <li>
                                        Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.
                                    </li>
                                    <li>
                                        Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.
                                    </li>
                                    <li>
                                        Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.
                                    </li>
                                    <li>
                                        Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.
                                    </li>
                                    <li>
                                        Use any information obtained from the Site in order to harass, abuse, or harm another person.
                                    </li>
                                    <li>
                                        Make improper use of our support services or submit false reports of abuse or misconduct.
                                    </li>
                                    <li>
                                        Use the Site in a manner inconsistent with any applicable laws or regulations.
                                    </li>
                                    <li>
                                        Engage in unauthorized framing of or linking to the Site.
                                    </li>
                                    <li>
                                        Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.
                                    </li>
                                    <li>
                                        Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.
                                    </li>
                                    <li>
                                        Delete the copyright or other proprietary rights notice from any Content.
                                    </li>
                                    <li>
                                        Attempt to impersonate another user or person or use the username of another user.
                                    </li>
                                    <li>
                                        Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as “spyware” or “passive collection mechanisms” or “pcms”).
                                    </li>
                                    <li>
                                        Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.
                                    </li>
                                    <li>
                                        Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.
                                    </li>
                                    <li>
                                        Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.
                                    </li>
                                    <li>
                                        Copy or adapt the Site&apos;s software, including but not limited to Flash, PHP, HTML, Javascript, or other code.
                                    </li>
                                    <li>
                                        Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.
                                    </li>
                                    <li>
                                        Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software.
                                    </li>
                                    <li>
                                        Use a buying agent or purchasing agent to make purchases on the Site.
                                    </li>
                                    <li>
                                        Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.
                                    </li>
                                    <li>
                                        Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.
                                    </li>
                                    <li>
                                        Use the Site to advertise or offer to sell goods and services.
                                    </li>
                                    <li>
                                        Sell or otherwise transfer your profile.
                                    </li>
                                </ul>
                            </section>

                            <section className='mb-5'>
                                <h1 className='text-2xl pb-2'>6. USER GENERATED CONTRIBUTIONS</h1>
                                <hr className='w-1/2 h-1/2' />

                                <p>
                                    The Site may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, &quot;Contributions&quot;). Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that:
                                </p>

                                <ul className='list-decimal ml-5 pl-2 text-left'>
                                    <li>
                                        The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.
                                    </li>
                                    <li>
                                        You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms of Use.
                                    </li>
                                    <li>
                                        You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Site and these Terms of Use.
                                    </li>
                                    <li>
                                        Your Contributions are not false, inaccurate, or misleading.
                                    </li>
                                    <li>
                                        Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.
                                    </li>
                                    <li>
                                        Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).
                                    </li>
                                    <li>
                                        Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.
                                    </li>
                                    <li>
                                        Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.
                                    </li>
                                    <li>
                                        Your Contributions do not violate any applicable law, regulation, or rule.
                                    </li>
                                    <li>
                                        Your Contributions do not violate the privacy or publicity rights of any third party.
                                    </li>
                                    <li>
                                        Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.
                                    </li>
                                    <li>
                                        Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.
                                    </li>
                                    <li>
                                        Your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms of Use, or any applicable law or regulation.
                                    </li>
                                </ul>
                            </section>

                            <section className='mb-5'>
                                <h1 className='text-2xl pb-2'>7. CONTRIBUTION LICENSE</h1>
                                <hr className='w-1/2 h-1/2' />

                                <p>
                                    By posting your Contributions to any part of the Site or making Contributions accessible to the Site by linking your account from the Site to any of your social networking accounts, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, your image and voice) for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions, and grant and authorize sublicenses of the foregoing. The use and distribution may occur in any media formats and through any media channels.

                                    This license will apply to any form, media, or technology now known or hereafter developed, and includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide. You waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise been asserted in your Contributions.

                                    We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Site. You are solely responsible for your Contributions to the Site and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.

                                    We have the right, in our sole and absolute discretion, (1) to edit, redact, or otherwise change any Contributions; (2) to re-categorize any Contributions to place them in more appropriate locations on the Site; and (3) to pre-screen or delete any Contributions at any time and for any reason, without notice. We have no obligation to monitor your Contributions.
                                </p>
                            </section>

                            <section className='mb-5'>
                                <h1 className='text-2xl pb-2'>8. SOCIAL MEDIA</h1>
                                <hr className='w-1/2 h-1/2' />

                                <p>
                                    As part of the functionality of the Site, you may link your account with online accounts you have with third-party service providers (each such account, a “Third-Party Account”) by either: (1) providing your Third-Party Account login information through the Site; or (2) allowing us to access your Third-Party Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Account. You represent and warrant that you are entitled to disclose your Third-Party Account login information to us and/or grant us access to your Third-Party Account, without breach by you of any of the terms and conditions that govern your use of the applicable Third-Party Account, and without obligating us to pay any fees or making us subject to any usage limitations imposed by the third-party service provider of the Third-Party Account. By granting us access to any Third-Party Accounts, you understand that (1) we may access, make available, and store (if applicable) any content that you have provided to and stored in your Third-Party Account (the “Social Network Content”) so that it is available on and through the Site via your account, including without limitation any friend lists and (2) we may submit to and receive from your Third-Party Account additional information to the extent you are notified when you link your account with the Third-Party Account. Depending on the Third-Party Accounts you choose and subject to the privacy settings that you have set in such Third-Party Accounts, personally identifiable information that you post to your Third-Party Accounts may be available on and through your account on the Site. Please note that if a Third-Party Account or associated service becomes unavailable or our access to such Third Party Account is terminated by the third-party service provider, then Social Network Content may no longer be available on and through the Site. You will have the ability to disable the connection between your account on the Site and your Third-Party Accounts at any time. PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS. We make no effort to review any Social Network Content for any purpose, including but not limited to, for accuracy, legality, or non-infringement, and we are not responsible for any Social Network Content. You acknowledge and agree that we may access your email address book associated with a Third-Party Account and your contacts list stored on your mobile device or tablet computer solely for purposes of identifying and informing you of those contacts who have also registered to use the Site. You can deactivate the connection between the Site and your Third-Party Account by contacting us using the contact information below or through your account settings (if applicable). We will attempt to delete any information stored on our servers that was obtained through such Third-Party Account, except the username and profile picture that become associated with your account.
                                </p>
                            </section>

                            <section className='mb-5'>
                                <h1 className='text-2xl pb-2'>9. SUBMISSIONS</h1>
                                <hr className='w-1/2 h-1/2' />

                                <p>
                                    You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site (&quot;Submissions&quot;) provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.
                                </p>
                            </section>

                            <section className='mb-5'>
                                <h1 className='text-2xl pb-2'>10. THIRD-PARTY WEBSITE AND CONTENT</h1>
                                <hr className='w-1/2 h-1/2' />

                                <p>
                                    The Site may contain (or you may be sent via the Site) links to other websites (&quot;Third-Party Websites&quot;) as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties &quot;Third-Party Content&quot;). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Site or any Third-Party Content posted on, available through, or installed from the Site, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content. Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Site and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Terms of Use no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Site or relating to any applications you use or install from the Site. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us harmless from any harm caused by your purchase of such products or services. Additionally, you shall hold us harmless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.
                                </p>
                            </section>

                            <section className='mb-5'>
                                <h1 className='text-2xl pb-2'>11. ADVERTISERS</h1>
                                <hr className='w-1/2 h-1/2' />

                                <p>
                                    We allow advertisers to display their advertisements and other information in certain areas of the Site, such as sidebar advertisements or banner advertisements. If you are an advertiser, you shall take full responsibility for any advertisements you place on the Site and any services provided on the Site or products sold through those advertisements. Further, as an advertiser, you warrant and represent that you possess all rights and authority to place advertisements on the Site, including, but not limited to, intellectual property rights, publicity rights, and contractual rights. We simply provide the space to place such advertisements, and we have no other relationship with advertisers.
                                </p>
                            </section>

                            <section className='mb-5'>
                                <h1 className='text-2xl pb-2'>12. SITE MANAGEMENT</h1>
                                <hr className='w-1/2 h-1/2' />

                                <p>
                                    We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.
                                </p>
                            </section>

                            <section className="mb-5">
                                <h1 className="text-2xl pb-2">13. COPYRIGHT INFRINGEMENTS</h1>
                                <hr className='w-1/2 h-1/2' />

                                <p>
                                    We respect the intellectual property rights of others. If you believe that any material available on or through the Site infringes upon any copyright you own or control, please immediately notify us using the contact information provided below (a “Notification”). A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification. Please be advised that pursuant to applicable law you may be held liable for damages if you make material misrepresentations in a Notification. Thus, if you are not sure that material located on or linked to by the Site infringes your copyright, you should consider first contacting an attorney.
                                </p>
                            </section>

                            <section className="mb-5">
                                <h1 className="text-2xl pb-2">14. TERM AND TERMINATION</h1>
                                <hr className='w-1/2 h-1/2' />

                                <p>
                                    These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
                                </p>
                                <p>
                                    If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
                                </p>
                            </section>

                            <section className="mb-5">
                                <h1 className="text-2xl pb-2">15. MODIFICATIONS AND INTERRUPTIONS</h1>
                                <hr className="w-1/2 h-1/2" />

                                <p>
                                    We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.
                                </p>

                                <p>
                                    We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Site. Nothing in these Terms of Use will be construed to obligate us to maintain and support the Site or to supply any corrections, updates, or releases in connection therewith.
                                </p>
                            </section>

                            <section className="mb-5">
                                <h1 className="text-2xl pb-2">16. GOVERNING LAW </h1>
                                <hr className="w-1/2 h-1/2" />

                                <p>
                                    These Terms of Use and your use of the Site are governed by and construed in accordance with the laws of the State of California applicable to agreements made and to be entirely performed within the State of California, without regard to its conflict of law principles.
                                </p>
                            </section>

                            <section className="mb-5">
                                <h1 className="text-2xl pb-2">17. DISPUTE RESOLUTION</h1>
                                <hr className='w-1/2 h-1/2' />

                                <h2 className='text-xl font-bold'>Informal Negotiations</h2>
                                <p>
                                    To expedite resolution and control the cost of any dispute, controversy, or claim related to these Terms of Use (each &qout;Dispute&qout; and collectively, the &qout;Disputes&qout;) brought by either you or us (individually, a “Party” and collectively, the “Parties”), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.
                                </p>

                                <h2 className='text-xl font-bold'>Binding Arbitration</h2>
                                <p>
                                    f the Parties are unable to resolve a Dispute through informal negotiations, the Dispute (except those Disputes expressly excluded below) will be finally and exclusively resolved through binding arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association (&quot;AAA&quot;) and, where appropriate, the AAA’s Supplementary Procedures for Consumer Related Disputes (&quot;AAA Consumer Rules&quot;), both of which are available at the AAA website: www.adr.org. Your arbitration fees and your share of arbitrator compensation shall be governed by the AAA Consumer Rules and, where appropriate, limited by the AAA Consumer Rules. If such costs are determined by the arbitrator to be excessive, we will pay all arbitration fees and expenses. The arbitration may be conducted in person, through the submission of documents, by phone, or online. The arbitrator will make a decision in writing, but need not provide a statement of reasons unless requested by either Party. The arbitrator must follow applicable law, and any award may be challenged if the arbitrator fails to do so. Except where otherwise required by the applicable AAA rules or applicable law, the arbitration will take place in California. Except as otherwise provided herein, the Parties may litigate in court to compel arbitration, stay proceedings pending arbitration, or to confirm, modify, vacate, or enter judgment on the award entered by the arbitrator.
                                </p>
                                <p>
                                    If for any reason, a Dispute proceeds in court rather than arbitration, the Dispute shall be commenced or prosecuted in the state and federal courts located in __________, and the Parties hereby consent to, and waive all defenses of lack of personal jurisdiction, and forum non conveniens with respect to venue and jurisdiction in such state and federal courts. Application of the United Nations Convention on Contracts for the International Sale of Goods and the Uniform Computer Information Transaction Act (UCITA) is excluded from these Terms of Use.
                                </p>
                                <p>
                                    In no event shall any Dispute brought by either Party related in any way to the Site be commenced more than one (1) years after the cause of action arose. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable, and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
                                </p>

                                <h2 className='text-xl font-bold'>Restrictions</h2>
                                <p>
                                    The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
                                </p>

                                <h2 className='text-xl font-bold'>Exceptions to Informal Negotiations and Arbitration</h2>
                                <p>
                                    The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations and binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
                                </p>
                            </section>

                            <section className="mb-5">
                                <h1 className="text-2xl pb-2">18. CORRECTIONS</h1>
                                <hr className='w-1/2 h-1/2' />

                                <p>
                                    There may be information on the Site that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.
                                </p>
                            </section>


                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TOS;