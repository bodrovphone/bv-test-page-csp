 function makeTransaction() {

      $BV.SI.trackTransactionPageView({
        "orderId" : "0001",
        "tax" : "1.44",
        "shipping" : "10.00",
        "total" : "40.84",
        "city" : "Austin",
        "state" : "TX",
        "country" : "USA",
        "currency" : "USD",
        "items" : [
            {
                    "sku" : "2245",
                    "name" : "product name",
                    "category" : "category name",
                    "price" : "13.42",
                    "quantity" : "1",
                    "imageURL" : "http://test.com/1.jpg"
            },
            {
                    "sku" : "2246",
                    "name" : "product name2",
                    "imageURL" : "http://test.com/2.jpg"
            }
        ],
        "email" : "john@example.com",
        "deploymentZone" : "obodrov",
        "locale" : "en_US"
      });
      }

      function makeConversion() {
        $BV.SI.trackConversion({
            "type" : "CSP_conversion",
            "label" : "CSP-test",
            "value" : 78701
        });
      }
      document.querySelector('#transaction').addEventListener('click', makeTransaction);
      document.querySelector('#conversion').addEventListener('click', makeConversion);