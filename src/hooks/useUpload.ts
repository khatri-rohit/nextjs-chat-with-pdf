/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useUser } from "@clerk/nextjs"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { db, storage } from "../../firebase"
import { doc, setDoc } from "firebase/firestore"

export enum StatusText {
    UPLOADING = 'Uploading file...',
    UPLOADED = 'File uploaded successfully...',
    SAVING = 'Saving file to database...',
    GENERATING = 'Generating AI Embeddings...',
}


const useUpload = () => {
    const [progress, setProgress] = useState<number | null>(0)
    const [status, setStatus] = useState<string | null>(null)
    const [fileId, setFileId] = useState<string | null>(null)

    const { user } = useUser()
    const router = useRouter()

    const handleUplaod = async (file: File) => {
        if (!user || !file) {
            return
        }

        const fileIdToUploadTo = uuidv4();

        const storageRef = ref(storage, `users/${user.id}/files/${fileIdToUploadTo}`)

        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on("state_changed", (snapshot) => {

            const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            setProgress(percent)
        }, (error) => {
            console.error("Error uploading file", error)
        }, async () => {
            setStatus(StatusText.UPLOADED)

            const downloadUrl = await getDownloadURL(storageRef)
            setStatus(StatusText.SAVING)
            const document = await setDoc(doc(db, 'users', user.id, 'files', fileIdToUploadTo), {
                name: file.name,
                size: file.size,
                type: file.type,
                downloadUrl: downloadUrl,
                ref: uploadTask.snapshot.ref.fullPath,
                createdAt: new Date(),
            })
            setStatus(StatusText.UPLOADING)
            setFileId(fileIdToUploadTo)
            console.log("User id ", user.id, "\nFile id ", fileIdToUploadTo) 
            console.log(document)
        })
    }
    
    return { progress, status, fileId, handleUplaod }
}

export default useUpload