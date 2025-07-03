'use client'

import useUpload from "@/hooks/useUpload"
import { useRouter } from "next/navigation"
import { useCallback, useEffect } from "react"
import { useDropzone } from "react-dropzone"

const FileUploader = () => {
    const { progress, status, fileId, handleUplaod } = useUpload()
    const router = useRouter()
    useEffect(() => {
        if(fileId){
            router.push(`/dashboard/upload/${fileId}`)
        }
    }, [fileId, router])

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        // Do something with the files
        const file = acceptedFiles[0]
        console.log(file)

        if (file) {
            await handleUplaod(file)
            console.log(progress, status, fileId,)
        } else {

        }

    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: {
            'application/pdf': ['.pdf']
        }
    })

    return (
        <div className="flex flex-col items-center gap-4 w-7xl mx-auto pt-10">
            <div
                className="flex flex-col items-center justify-center gap-4 p-5 w-52 h-72 rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p> Drag & lsquo; n&lsquo; drop some files here, or click to select files</p>
                }
            </div>
        </div>
    )
}

export default FileUploader