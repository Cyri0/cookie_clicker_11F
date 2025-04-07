
function CookieClicker(){

    let num : number = 0

    const increase = () => {
        num += 1
        console.log(num)
    }

    return (
    <div>
        <button onClick={increase}>🍪 {num}</button>
    </div>)
}

export default CookieClicker