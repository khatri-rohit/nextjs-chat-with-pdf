'use client'

import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { PlusCircleIcon } from 'lucide-react'

const PlaceholderDocument = () => {
    const router = useRouter()

    const handleClick = () => {
        router.push('/dashboard/upload')
    }

    return (
        <Button onClick={handleClick} variant='outline' className='flex flex-col items-center justify-center gap-4 p-5 w-52 h-72 rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300'>
            <PlusCircleIcon />
            <p className='text-sm font-medium'>Upload a PDF</p>
        </Button>
    )
}

export default PlaceholderDocument