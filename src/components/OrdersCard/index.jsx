

function OrdersCard(props) {
    const { totalPrice, totalProducts } = props

    return (
        <div className="flex justify-between items-center mb-3 border border-black w-80 p-4 rounded-lg ">
            <p className="flex justify-items">
                <span className="font-light">01.02.23</span>
                <span className="font-light">{totalProducts}</span>
                <span className="font-medium text-2xl">{totalPrice}</span>
            </p>
        </div>
    )
}

export default  OrdersCard