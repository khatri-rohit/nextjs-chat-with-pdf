import Header from '@/components/Header';
import React from 'react'

const DashBoardLayout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='flex flex-col font-[family-name:var(--font-geist-sans)]'>
            <Header />
            {children}
        </div>
    )
}

export default DashBoardLayout