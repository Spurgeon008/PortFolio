import { GENERAL_INFO } from '@/lib/data';
import { GitFork, Star } from 'lucide-react';

interface RepoStats {
    stargazers_count: number;
    forks_count: number;
}

const Footer = async () => {
    const repoStats = await fetch(
        'https://api.github.com/repos/Spurgeon008/portfolio',
        {
            next: {
                revalidate: 60 * 60, // 1 hour
            },
        },
    );

    let stargazers_count = 0;
    let forks_count = 0;

    try {
        const data = await repoStats.json() as RepoStats;
        stargazers_count = data.stargazers_count || 0;
        forks_count = data.forks_count || 0;
    } catch (error) {
        // If repo doesn't exist or is private, use default values
        console.log('Unable to fetch repo stats, using defaults');
    }

    return (
        <footer className="text-center pb-5" id="footer">
            <div className="container">
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="">
                    <a
                        href="https://github.com/Spurgeon008/"
                        target="_blank"
                        className="leading-none text-muted-foreground hover:underline hover:text-white"
                    >
                        Design & built by JOHNSPURGEON
                        <div className="flex items-center justify-center gap-5 pt-1">
                            <span className="flex items-center gap-2">
                                <Star size={18} /> {stargazers_count}
                            </span>
                            <span className="flex items-center gap-2">
                                <GitFork size={18} /> {forks_count}
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
