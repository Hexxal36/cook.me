import React, {useState, useEffect} from 'react'
import styles from './index.module.css'

import Button from '../button'

const ImageUpload = ({src, onUpload}) => {
    const [imgUrl, setImgUrl] = useState('')

    const openWidget = (e) => {
        e.preventDefault()

        const widget = window.cloudinary.createUploadWidget({
            cloudName: "dkgtiffxo",
            uploadPreset: "cookme",
        },
        (err, res) => {
            if (res.event === 'success') {
                setImgUrl(res.info.url)
                onUpload(res.info.url)
            }
        })

        widget.open()
    }

    useEffect(() => {
        setImgUrl(src)
    }, [src])

    return (
        <div className={styles["img-upload"]}>
            {imgUrl ? <img alt="" src={imgUrl} /> : null}
            <Button value="Upload an image" onClick={e => openWidget(e)}/>
        </div>
    )
}

export default ImageUpload