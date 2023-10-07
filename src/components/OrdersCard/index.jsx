

function OrdersCard(props) {
    const { totalPrice, totalProducts } = props

    return (
        <div className="flex justify-between items-center mb-3 border border-black w-80 p-4 rounded-lg">
            <p>
                <span>01.02.23</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    )
}

export default  OrdersCard