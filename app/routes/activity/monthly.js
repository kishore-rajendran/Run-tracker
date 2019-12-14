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
            let monthsName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            let months = {};
            let thisMonth = (new Date(Date.now() - 6 * 30 * 24 * 60 * 60 * 1000).getMonth());
            console.log(thisMonth)
            for (let i = 0; i < 7; i++) {
                months[monthsName[(thisMonth++) % 12]] = 0;
            }
            let date1 = new Date(Date.now() - 6 * 30 * 24 * 60 * 60 * 1000);
            let model = {
                title: "WEEKLY ACTIVITY",
                width: 700,
                height: 400,
                type: "column2d",
                dataFormat: "json",
                dataSource: {
                    chart: {
                        caption: "Weekly Activity",
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
                if (diffDays >= -(6 * 30) && diffDays <= 0) {
                    months[monthsName[new Date(record.get('date')).getMonth()]] += +record.get('distance');
                }
            })
            for (let i in months) {
                model.dataSource.data.push({
                    label: i,
                    value: months[i],
                });
            }
            return model;
        });
    }
});
