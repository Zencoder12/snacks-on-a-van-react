import React from "react";

const PickUpOrdersCard = ({ onFinishOrder, order }) => {
  const totalQty = order.orderItems.reduce((a, item) => a + item.qty, 0);
  const d = new Date();
  return (
    <div className="col">
      <div className="mb-3 card shadow-sm">
        <div className="card-header border-0 d-flex justify-content-between text-uppercase fw-bold text-secondary py-3">
          <p className="mb-0">{order.invoice}</p>
          <p className="mb-0">{d.getHours() + ":" + d.getMinutes()}</p>
        </div>
        <div className="card-body text-secondary text-uppercase text-center">
          <h5 className="fw-bold py-1">{totalQty} Items</h5>
          <h5 className="fw-bold">Customer: {order.customerName}</h5>
          <button
            className="w-100 btn btn-primary fs-5 fw-bold"
            onClick={() => onFinishOrder(order)}
          >
            Finished
          </button>
        </div>
        {order.isDiscounted && (
          <div className="card-footer border-0">
            <h5 className="py-2 m-0 text-uppercase text-center text-danger fw-bold">
              20% discount applied
            </h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default PickUpOrdersCard;
