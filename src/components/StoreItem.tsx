import React from "react";
import { Card, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartProvider";
import formatMony from "../utilities/formatMony";
type proptype = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

function StoreItem(prop: proptype) {
  const { id, name, price, imgUrl } = prop;
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantt = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height={200}
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatMony(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantt === 0 ? (
            <button className="w-100" onClick={() => increaseCartQuantity(id)}>
              +add to card
            </button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantt}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default StoreItem;
