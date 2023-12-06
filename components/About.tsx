import styles from './About.module.css'

import Link from 'next/link'

import Snowdrop from './Snowdrop'

export default function About() {
    function linkProjects() {
        return (
            <Link href={'/projects'} className={'text-[#007aff]'}>
                software
            </Link>
        )
    }

    function linkBlog() {
        return (
            <Link href={'/blog'} className={'text-[#007aff]'}>
                blog
            </Link>
        )
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div
                className={`flex flex-col h-full justify-center w-4/6 ${styles.fadeIn}`}
            >
                <Link className="absolute top-[15%]" href="/menu">
                    <Snowdrop />
                </Link>

                <div className="text-3xl">
                    <div className={'pb-4'}>My name is Ivan.</div>

                    <div className={'pb-1'}>
                        I build easy-to-use, aesthetic {linkProjects()}.
                    </div>
                    <div className={'pb-1'}>I {linkBlog()}.</div>
                    <div className={'pb-1'}>I love the Internet.</div>
                </div>
            </div>
        </div>
    )
}
