import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        if (!JSON.parse(localStorage.getItem("profile")).logged == true) {
            this.transitionTo("login");
        }
    },
    model() {
        return this.store.findRecord("user-detail", JSON.parse(localStorage.getItem('profile')).id, {
            include: 'activityTrackers'
        }).then((value) => {
            let weeks = {};
            for (let week = 1; week < 8; week++) {
                let date = new Date(Date.now() - 7 * week * 24 * 60 * 60 * 1000);
                weeks[(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate())] = 0;
            }
            let date1 = new Date(Date.now() - 55 * 24 * 60 * 60 * 1000);
            let model = {
                title: "WEEKLY ACTIVITY",
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

            let weekKeys = Object.keys(weeks);
            value.activityTrackers.forEach((record) => {
                let date2 = new Date(record.get('date'));
                let difTime = date1.getTime() - date2.getTime();
                let diffDays = difTime / (1000 * 3600 * 24);
                if (diffDays >= -55 && diffDays <= 0) {
                    for (let week = 0; week < weekKeys.length; week++) {
                        let weekDate = new Date(weekKeys[week]);
                        let difWeekTime = weekDate.getTime() - date2.getTime();
                        let diffWeekDays = difWeekTime / (1000 * 3600 * 24);
                        if (diffWeekDays >= -7 && diffWeekDays <= 0) {
                            weeks[weekKeys[week]] += +record.get('distance');
                        }
                    }
                }
            })

            for (let i in weeks) {
                model.dataSource.data.push({
                    label: i,
                    value: weeks[i],
                });
            }
            return model;
        });
    }
});
