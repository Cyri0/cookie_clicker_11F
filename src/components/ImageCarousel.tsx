import { useState } from 'react'
import product1 from '../assets/image-product-1.jpg'
import product2 from '../assets/image-product-2.jpg'
import product3 from '../assets/image-product-3.jpg'
import product4 from '../assets/image-product-4.jpg'

import styles from './ImageCarousel.module.css'

const ImageCarousel = () => {
    const [images] = useState([product1,product2,product3,product4])
    const [imageIdx, setImageIdx] = useState(0)

    return(<section className={styles.carousel}>
        <img src={images[imageIdx]} alt="Main Image" />
        
        <div>
        {images.map((image, idx) => 
        <img 
            src={image} 
            onClick={() => setImageIdx(idx)} />)}
        </div>
    </section>)
}

export default ImageCarousel