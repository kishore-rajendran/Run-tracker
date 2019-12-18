import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        if (!JSON.parse(localStorage.getItem("profile")).logged == true) {
            this.transitionTo("login");
        }
    },
    model() {
        return this.store.findRecord("user-detail", JSON.parse(localStorage.getItem('profile')).id, {
            reload: true,
            include: 'activityTrackers'
        }).then((value) => {
            let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            let day = {};
            let dayIndex = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).getDay();
            for (let i = 0; i < 7; i++) {
                day[days[(dayIndex++) % 7]] = 0;
            }

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
            value.activityTrackers.forEach((record) => {
                let date2 = new Date(record.get('date'));
                let difTime = date2.getTime() - date1.getTime();
                let diffDays = difTime / (1000 * 3600 * 24);
                console.log(diffDays)
                if (diffDays >= -1 && diffDays <= 7) {
                    day[days[new Date(record.get('date')).getDay()]] += +record.get('distance');
                }
            })
            for (let i in day) {
                model.dataSource.data.push({
                    label: i,
                    value: day[i],
                });
            }
            return model;
        });
    }
});
