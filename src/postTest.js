url = "https://dreamdesign.rkhomeappliances.co.in/wp-json/wc/v2/orders?&consumer_key=ck_fab24b83126c02ccdf3ffa5e39b45e92ea984d74&consumer_secret=cs_5cf3ca533a10e52f781250b06e821d909819fbb1";
        headers = {'Authorization': 'No Auth'};
        fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
  body: JSON.stringify({"id":301,"parent_id":0,"number":"301","order_key":"wc_order_5b44a34dccc96","created_via":"rest-api","version":"3.4.3","status":"completed","currency":"INR","date_created":"2018-07-10T12:15:09","date_created_gmt":"2018-07-10T12:15:09","date_modified":"2018-07-10T12:15:09","date_modified_gmt":"2018-07-10T12:15:09","discount_total":"0.00","discount_tax":"0.00","shipping_total":"1500.00","shipping_tax":"0.00","cart_tax":"0.00","total":"7500.00","total_tax":"0.00","prices_include_tax":false,"customer_id":0,"customer_ip_address":"","customer_user_agent":"","customer_note":"","billing":{"first_name":"Ramesh","last_name":"Kr","company":"","address_1":"969 Market","address_2":"","city":"Salem","state":"TN","postcode":"36009","country":"IN","email":"john.doe@example.com","phone":"(555) 555-5555"},"shipping":{"first_name":"Ramesh","last_name":"Kr","company":"","address_1":"969 Market","address_2":"","city":"Salem","state":"TN","postcode":"36009","country":"IN"},"payment_method":"cod","payment_method_title":"Cash on delivery","transaction_id":"","date_paid":"2018-07-10T12:15:09","date_paid_gmt":"2018-07-10T12:15:09","date_completed":"2018-07-10T12:15:09","date_completed_gmt":"2018-07-10T12:15:09","cart_hash":"","meta_data":[],"line_items":[{"id":11,"name":"Patiala Salwar","product_id":231,"variation_id":0,"quantity":2,"tax_class":"","subtotal":"3000.00","subtotal_tax":"0.00","total":"3000.00","total_tax":"0.00","taxes":[],"meta_data":[{"id":132,"key":"_WCPA_order_meta_data","value":""}],"sku":"","price":1500},{"id":12,"name":"Patiala Salwar","product_id":231,"variation_id":0,"quantity":2,"tax_class":"","subtotal":"3000.00","subtotal_tax":"0.00","total":"3000.00","total_tax":"0.00","taxes":[],"meta_data":[{"id":133,"key":"_WCPA_order_meta_data","value":""}],"sku":"","price":1500}],"tax_lines":[],"shipping_lines":[{"id":13,"method_title":"Free shipping","method_id":"free_shipping","instance_id":"","total":"1500.00","total_tax":"0.00","taxes":[],"meta_data":[{"id":134,"key":"_WCPA_order_meta_data","value":""}]}],"fee_lines":[],"coupon_lines":[],"refunds":[],"_links":{"self":[{"href":"https:\/\/dreamdesign.rkhomeappliances.co.in\/wp-json\/wc\/v2\/orders\/301"}],"collection":[{"href":"https:\/\/dreamdesign.rkhomeappliances.co.in\/wp-json\/wc\/v2\/orders"}]}}),
});
"set_paid": true,
    "billing": {
      "first_name": "Ramesh",
      "last_name": "Kr",
      "address_1": "969 Market",
      "address_2": "",
      "city": "Salem",
      "state": "TN",
      "postcode": "36009",
      "country": "IN",
      "email": "john.doe@example.com",
      "phone": "(555) 555-5555"
    },
    "shipping": {
      "first_name": "Ramesh",
      "last_name": "Kr",
      "address_1": "969 Market",
      "address_2": "",
      "city": "Salem",
      "state": "TN",
      "postcode": "36009",
      "country": "IN"
    },
    "line_items": [
      {
        "product_id": 231,
        "quantity": 1
      }
    ],
    "shipping_lines": [
      {
        "method_id": "free_shipping",
        "method_title": "Free shipping",
        "total": "0.00"
      }
    ]