**ABOUT THIS APP**

This app is a simple simulation of a coffee shop web app which connects customers to coffee vans vendors.  
This web app was built with React, Node, MongoDB and Boostrap. For demo purposes only. 

## APP url

https://secure-badlands-10230.herokuapp.com/

## Node Backend repository

https://github.com/Zencoder12/snacks-on-a-van-node

# How to use this app as a customer

1. Login with the demo user:

email: admin@gmail.com  
password: 1234melbourne

2. Choose a vendor (marked with a black coffee icon). There are a couple of dummy vendors close to the University of Melbourne. Alternatively you can create a new vendor and set a new vendor location following the vendor section instructions.

3. After you select the vendor you can add products to your shopping cart. Choose "VIEW ORDER DETAILS" to check the order summary.

4. Click finalize order to submit the order.

ps. when in the finalized order page, menu is disabled.

# How to use this app as a vendor

1. Login with the vendor user:

van name: Qbcoffehouse  
password: 1234melbourne

2. Set the van location  
ps. the search location functionality might not be retrieving the addresses if the total number of searches provided by googlemaps api exceeded the free account allowed queries. If the geolocation functionality is not working please proceed to explore the orders functionalities by clicking one of the options in the menu bar.

3. If using the customer section in a different tab you set the order to Qbcoffehouse you should see the order in "current orders" menu tab.
 
4. You can simulate orders being set to pick-up and as finished. Finished orders should appear on the previous orders menu. 


