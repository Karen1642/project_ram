function CartPayButton(props) {
    const {
        handlePayOnClick,
        disabled
    } = props;

    return (
      <div>
        <button disabled={disabled} onClick={handlePayOnClick}>
          Pay
        </button>
      </div>
    )
}

export default CartPayButton;