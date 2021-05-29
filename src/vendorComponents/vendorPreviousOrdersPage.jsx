import React, { useEffect, useState } from "react";
import { getVendorPastOrders } from "../services/orderService";
import PreviousOrdersDetailCard from "./common/previousOrdersDetailCard";
import SearchBar from "./common/searchBar";
import VendorNavBar from "./vendorNavBar";

const VendorPreviousOrdersPage = () => {
  const [previousOrders, setPreviousOrders] = useState([]);

  useEffect(async () => {
    const { data } = await getVendorPastOrders();
    setPreviousOrders(data);
  }, []);

  return (
    <React.Fragment>
      <VendorNavBar />
      <main className="mb-5 px-2 px-md-5 pb-5 pb-lg-0">
        <h1 className="pt-3 pb-1 text-uppercase fw-bold d-none d-lg-block">
          Previous Orders
        </h1>
        <h1 className="pt-3 pb-1 text-uppercase fw-bold text-center d-lg-none">
          Previous Orders
        </h1>
        <div className="px-2 row g-3">
          <div className="container p-3 rounded">
            <div className="row">
              <div className="col">
                <SearchBar />
                {previousOrders.map((order) => (
                  <div className="row p-3">
                    <PreviousOrdersDetailCard key={order._id} order={order} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default VendorPreviousOrdersPage;
