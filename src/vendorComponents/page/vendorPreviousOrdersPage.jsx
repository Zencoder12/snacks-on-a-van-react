import React, { useEffect, useState } from "react";
import { getVendorPastOrders } from "../../services/orderService";
import PreviousOrdersDetailCard from "../previousOrdersComponents/previousOrdersDetailCard";
import SearchBar from "../previousOrdersComponents/searchBar";
import VendorNavBar from "../common/vendorNavBar";

const VendorPreviousOrdersPage = () => {
  const [previousOrders, setPreviousOrders] = useState([]);
  const [value, setValue] = useState("");

  useEffect(async () => {
    try {
      const { data } = await getVendorPastOrders();
      setPreviousOrders(data);
    } catch (ex) {
      window.location = "/400";
    }
  }, []);

  const handleChange = (e) => {
    const input = e.currentTarget.value;
    setValue(input);
  };

  const handleSearch = () => {
    const searchOrder = previousOrders.filter((order) => order._id === value);
    setPreviousOrders(searchOrder);
  };

  const handleClear = async () => {
    try {
      setValue("");
      const { data } = await getVendorPastOrders();
      setPreviousOrders(data);
    } catch (ex) {
      window.location = "/400";
    }
  };

  return (
    <React.Fragment>
      <VendorNavBar />
      <main className="mb-5 px-2 px-md-5 pb-5 pb-lg-0">
        {/* heading for bigger than lg devices (aligned left) */}
        <h1 className="pt-3 pb-1 text-uppercase fw-bold d-none d-lg-block">
          Previous Orders
        </h1>
        {/* heading for > lg devices */}
        <h1 className="pt-3 pb-1 text-uppercase fw-bold text-center d-lg-none">
          Previous Orders
        </h1>
        <div className="px-2 row g-3">
          <div className="container p-3 rounded">
            <div className="row">
              <div className="col">
                <SearchBar
                  onClear={handleClear}
                  onChange={handleChange}
                  onSearch={handleSearch}
                  value={value}
                />
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
