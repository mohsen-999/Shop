import React from "react";
import { useShoppingCart } from "../context/ShoppingCartProvider";
import storeItems from "../data/items.json";
import { Stack, Button } from "react-bootstrap";
import formatMony from "../utilities/formatMony";

type cartprop = {
  id: number;
  quantity: number;
};

function CartItem({ id, quantity }: cartprop) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) {
    return null;
  }
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
        alt="img prodoct"
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatMony(item.price)}
        </div>
      </div>
      <div> {formatMony(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}

export default CartItem;
