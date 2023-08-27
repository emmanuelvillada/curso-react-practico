function Card ({price, tittle, images, category}) {
    return (
        <div className="bg-white cursor-pointer w-56 h-65">
            <figure className="w-full ">
                <span></span>
                <img src="http://placehold.it/" alt="placeholder"/>
                <div>+</div>
            </figure>
            <p>
                <span></span>
            </p>
        </div>
    )
}
export default Card