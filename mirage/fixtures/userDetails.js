export default [
    {
        "data": [{
            "id": "1",
            "type": "user-details",
            "attributes": {
                "name": "Anfanie Farmeo",
                "gender": "Male",
                "location": "Chennai",
                "email": "anfanie@gmail.com",
            },
            "relationships": {
                "friendList": {
                    "data": [{
                        "id": "1",
                        "type": "userDetails"
                    }, {
                        "id": "2",
                        "type": "userDetails"
                    }, {
                        "id": "3",
                        "type": "userDetails"
                    }]
                },
                "runData": {
                    "data": [{
                        "id": "2",
                        "type": "runData"
                    }, {
                        "id": "4",
                        "type": "runData"
                    }, {
                        "id": "5",
                        "type": "runData"
                    },]
                }
            }
        }],
        "included": [{
            "id": "1",
            "type": "userDetails",
            "attributes": {
                "name": "Kishore",
                "gender": "Male",
                "location": "Chennai",
                "email": "Kishore@gmail.com",
            }
        }, {
            "id": "2",
            "type": "userDetails",
            "attributes": {
                "name": "Surendar",
                "gender": "Male",
                "location": "Chennai",
                "email": "sura@gmail.com",
            }
        }, {
            "id": "3",
            "type": "userDetails",
            "attributes": {
                "name": "Sachin",
                "gender": "Male",
                "location": "Chennai",
                "email": "sachin@gmail.com",
            }
        }, {
            "id": "2",
            "type": "runData",
            "attribute": {
                "currentLocation": "chennai",
                "distance": "5",
                "date": "11-12-2019",
                "timeRun": "120",
            }
        }, {
            "id": "4",
            "type": "runData",
            "attribute": {
                "currentLocation": "chennai",
                "distance": "7",
                "date": "11-12-2019",
                "timeRun": "50",
            }
        }, {
            "id": "5",
            "type": "runData",
            "attribute": {
                "currentLocation": "chennai",
                "distance": "9",
                "date": "12-12-2019",
                "timeRun": "10",
            }
        }
        ]
    }
];