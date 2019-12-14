export default [
    // {
    //     "data": [{
    //         "id": "1",
    //         "type": "user-details",
    //         "attributes": {
    //             "name": "Anfanie Farmeo",
    //             "gender": "Male",
    //             "location": "Chennai",
    //             "email": "anfanie@gmail.com",
    //         },
    //         "relationships": {
    //             "friendList": {
    //                 "data": [{
    //                     "id": "1",
    //                     "type": "userDetails"
    //                 }, {
    //                     "id": "2",
    //                     "type": "userDetails"
    //                 }, {
    //                     "id": "3",
    //                     "type": "userDetails"
    //                 }]
    //             },
    //             "runData": {
    //                 "data": [{
    //                     "id": "2",
    //                     "type": "runData"
    //                 }, {
    //                     "id": "4",
    //                     "type": "runData"
    //                 }, {
    //                     "id": "5",
    //                     "type": "runData"
    //                 },]
    //             }
    //         }
    //     }],
    //     "included": [{
    //         "id": "1",
    //         "type": "userDetails",
    //         "attributes": {
    //             "name": "Kishore",
    //             "gender": "Male",
    //             "location": "Chennai",
    //             "email": "Kishore@gmail.com",
    //         }
    //     }, {
    //         "id": "2",
    //         "type": "userDetails",
    //         "attributes": {
    //             "name": "Surendar",
    //             "gender": "Male",
    //             "location": "Chennai",
    //             "email": "sura@gmail.com",
    //         }
    //     }, {
    //         "id": "3",
    //         "type": "userDetails",
    //         "attributes": {
    //             "name": "Sachin",
    //             "gender": "Male",
    //             "location": "Chennai",
    //             "email": "sachin@gmail.com",
    //         }
    //     }, {
    //         "id": "2",
    //         "type": "runData",
    //         "attribute": {
    //             "currentLocation": "chennai",
    //             "distance": "5",
    //             "date": "11-12-2019",
    //             "timeRun": "120",
    //         }
    //     }, {
    //         "id": "4",
    //         "type": "runData",
    //         "attribute": {
    //             "currentLocation": "chennai",
    //             "distance": "7",
    //             "date": "11-12-2019",
    //             "timeRun": "50",
    //         }
    //     }, {
    //         "id": "5",
    //         "type": "runData",
    //         "attribute": {
    //             "currentLocation": "chennai",
    //             "distance": "9",
    //             "date": "12-12-2019",
    //             "timeRun": "10",
    //         }
    //     }
    //     ]
    // }
    { id: "1", 'username': 'kishore', 'name': 'Kishore', 'location': 'coimbatore', 'gender': 'male', 'email': 'kishore@zoomrx.com', "password": "123456789", 'friends': '[2,3,4]', postIds: [1, 2, 4, 5, 6], activityTrackerIds: [1, 2, 3, 4, 5], friendListIds: [2, 3, 4] },
    { id: "2", 'username': 'sachin', 'name': 'Sachin', 'location': 'chennai', 'gender': 'male', 'email': 'sachin@zoomrx.com', "password": "123456789", 'friends': '[1,3,4,6]', postIds: [3, 4, 5, 7], activityTrackerIds: [6], friendListIds: [1, 3, 4, 6] },
    { id: "3", 'username': 'surendar', 'name': 'Surendar', 'location': 'Madhurai', 'gender': 'male', 'email': 'surendar@zoomrx.com', "password": "123456789", 'friends': '[1,2,4]', postIds: [1, 5, 7], activityTrackerIds: [7], friendListIds: [1, 2, 4] },
    { id: "4", 'username': 'ram', 'name': 'Ram', 'location': 'Theni', 'gender': 'male', 'email': 'ram@zoomrx.com', "password": "123456789", 'friends': '[1,2,3]', postIds: [1, 2, 3], activityTrackerIds: [8], friendListIds: [1, 2, 3] },
    { id: "5", 'username': 'vijay', 'name': 'Vijay', 'location': 'Salem', 'gender': 'male', 'email': 'vijay@zoomrx.com', "password": "123456789", 'friends': '[6]', postIds: [4, 5, 6], activityTrackerIds: [9], friendListIds: [6] },
    { id: "6", 'username': 'tamil', 'name': 'Tamil', 'location': 'tirupur', 'gender': 'male', 'email': 'tamil@zoomrx.com', "password": "123456789", 'friends': '[2,5]', postIds: [1, 2, 3, 5, 7], activityTrackerIds: [10], friendListIds: [2, 5] },
];