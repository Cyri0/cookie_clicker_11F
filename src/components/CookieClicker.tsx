import { useEffect, useState } from "react"

type UpgradeType = {
    icon: string,
    price: number,
    cookiePerSec: number
}

function CookieClicker() {
    const [cookieNum, setCookieNum] = useState<number | undefined>()

    const [upgrades] = useState<UpgradeType[]>([
        { icon: "👵", price: 10, cookiePerSec: 1 },
        { icon: "🥧", price: 50, cookiePerSec: 3 },
        { icon: "🏭", price: 100, cookiePerSec: 8 },
        { icon: "🚀", price: 1000, cookiePerSec: 50 },
        { icon: "🪐", price: 10000, cookiePerSec: 200 }
    ])

    const [myUpgrades, setMyUpgrades] = useState<UpgradeType[]>([])

    const increase = () => {
        setCookieNum(prev => prev + 1)
    }

    const buyUpgrade = (upgrade: UpgradeType) => {
        setCookieNum(prev => prev - upgrade.price)
        setMyUpgrades(prev => [...prev, upgrade])
    }

    useEffect(() => {
        if (localStorage.getItem("cookieNum")) {
            setCookieNum(Number(localStorage.getItem("cookieNum")))
        } else {
            setCookieNum(0)
            localStorage.setItem("cookieNum", String(0))
        }
    }, [])

    useEffect(() => {
        if(cookieNum != undefined)
            localStorage.setItem("cookieNum", String(cookieNum))
    }, [cookieNum])

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            myUpgrades.forEach(upgrade => setCookieNum(prev => {
                return prev ? prev + upgrade.cookiePerSec : 0 }))
        },1000)

        return () => clearInterval(intervalId)
    },[myUpgrades])

    return (<div>
        <p>
            {myUpgrades.map(item => <span>{item.icon}</span>)}
        </p>
        <button onClick={increase}>🍪 {cookieNum}</button>
        <div>
            {upgrades.map((upgrade, idx) =>
                <button
                    onClick={() => buyUpgrade(upgrade)}
                    key={idx}
                    disabled={cookieNum < upgrade.price}
                >{upgrade.icon}</button>)}
        </div>
    </div>)
}

export default CookieClicker