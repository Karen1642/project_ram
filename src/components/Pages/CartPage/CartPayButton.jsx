function CartPayButton(props) {
    const {
        handlePayOnClick,
    } = props;

    return (
      <div>
        <button onClick={handlePayOnClick}>
          Pay
        </button>
      </div>
    )
}

export default CartPayButton;