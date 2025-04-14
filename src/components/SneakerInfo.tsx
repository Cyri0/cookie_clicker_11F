import { useState } from "react"
import styles from "./SneakerInfo.module.css"

const SneakerInfo = () => {
    const [price, setPrice] = useState(250)
    const [discount, setDiscount] = useState(0.5)

    return (
    <section className={styles.sneakerInfo}>
        <h3>Sneaker company</h3>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur asperiores doloribus, exercitationem eos consequatur aspernatur labore similique nostrum ipsa ratione necessitatibus quasi laboriosam eius velit blanditiis minus sapiente obcaecati quidem?</p>
        
        <div>
            <h2>${price * (1 - discount)}</h2>
            { discount > 0 && <span>{discount*100}%</span> }
        </div>

        { discount > 0 && <strong className={styles.oldPrice}>${price}</strong> }

        <ItemCounter/>
    </section>)
}

const ItemCounter = () => {
    const [currentNumber, setCurrentNumber] = useState(0)
    
    return (
    <div className={styles.counterWrapper}>
        <button
        onClick={()=>setCurrentNumber(prev => prev - 1 < 0 ? 0 : prev - 1)}
        >-</button>
        {currentNumber}
        <button onClick={()=>setCurrentNumber(prev => prev + 1)}>+</button>
    </div>)
}

export default SneakerInfo