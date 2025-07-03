import Link from 'next/link'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { FileIcon } from 'lucide-react'

import { Button } from './ui/button'

const Header = () => {
    return (
        <header className='w-full p-5 shadow-lg flex items-center justify-between'>
            <h1 className='text-xl font-extrabold mb-3'>Chat with PDF</h1>
            <div className='flex items-center gap-4'>
                <Button asChild variant='link' className='md:flex hidden'>
                    <Link href='/dashboard/pricing'>Pricing</Link>
                </Button>
                <Button asChild variant='outline' className='md:flex hidden'>
                    <Link href='/dashboard/'>My Document</Link>
                </Button>
                <Button asChild variant='outline' className='md:flex hidden'>
                    <Link href='/dashboard/upload'><FileIcon /> </Link>
                </Button>

                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </header>
    )
}

export default Header