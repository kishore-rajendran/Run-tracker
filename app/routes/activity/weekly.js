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
                let difTime = date2.getTime() - date1.getTime();
                let diffDays = difTime / (1000 * 3600 * 24);
                if (diffDays >= 0 && diffDays <= 55) {
                    for (let week = 0; week < weekKeys.length; week++) {
                        let weekDate = new Date(weekKeys[week]);
                        let difWeekTime = date2.getTime() - weekDate.getTime();
                        let diffWeekDays = difWeekTime / (1000 * 3600 * 24);
                        if (diffWeekDays >= -1 && diffWeekDays <= 7) {
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
