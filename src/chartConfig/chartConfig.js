export const historyOptions = {
    lineHeightAnnotation: {
        always: true,
        hover: false,
        lineweight: 1.5
    },

    animatation: {
        duration: 2000
    },

    maintainAspectRatio: false,
    responsive:true,
    scales: {
        //make x axis time based
        xAxes: [
            {
                type: "time",
                distribution: "linear"
            }
        ]
    }

}