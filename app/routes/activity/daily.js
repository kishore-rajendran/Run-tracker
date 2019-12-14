import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        if (!JSON.parse(localStorage.getItem("profile")).logged == true) {
            this.transitionTo("login");
        }
    },
    model() {
        return this.store.query("activity-tracker", {
            userid: JSON.parse(localStorage.getItem('profile')).id,
        }).then((value) => {
            let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            let test = {};
            test[days[new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).getDay()]] = 0;
            test[days[new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).getDay()]] = 0;
            test[days[new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).getDay()]] = 0;
            test[days[new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).getDay()]] = 0;
            test[days[new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).getDay()]] = 0;
            test[days[new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).getDay()]] = 0;
            test[days[new Date(Date.now()).getDay()]] = 0;
            let date1 = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000);
            let model = {
                title: "DAILY ACTIVITY",
                width: 700,
                height: 400,
                type: "column2d",
                dataFormat: "json",
                dataSource: {
                    chart: {
                        caption: "",
                        subCaption: "",
                        xAxisName: "Period",
                        yAxisName: "Distance",
                        numberSuffix: "Km",
                        theme: "fusion"
                    },
                    data: []
                }
            };
            value.forEach((record) => {
                let date2 = new Date(record.get('date'));
                let difTime = date1.getTime() - date2.getTime();
                let diffDays = difTime / (1000 * 3600 * 24);
                //console.log(record.get('date') + " " + diffDays);
                if (diffDays >= -6 && diffDays <= 0) {
                    //console.log(record.get('date'))
                    test[days[new Date(record.get('date')).getDay()]] += +record.get('distance');
                }
            })
            // test[new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)] = 0;
            // test[new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)] = 0;
            // test[new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)] = 0;
            // test[new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)] = 0;
            // test[new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)] = 0;
            // test[new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)] = 0;
            // test[new Date().toISOString().slice(0, 10)] = 0;
            for (let i in test) {
                model.dataSource.data.push({
                    label: i,
                    value: test[i],
                });
            }
            return model;
        });
    }
});
