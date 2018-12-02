(function(){
const ctx = document.getElementById("home_away_win").getContext("2d");

const colors = {
    green: {
        fill: '#e0eadf',
        stroke: '#5eb84d',
    },
    lightBlue: {
        stroke: '#6fccdd',
    },
    darkBlue: {
        fill: '#92bed2',
        stroke: '#3282bf',
    },
    purple: {
        fill: '#8fa8c8',
        stroke: '#75539e',
    },
};

const year = [1993,1994,1995,1996,1997,1998,1999,2000,2001,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]
const home = [192,205,186,162,184,169,187,184,165,167,173,192,182,176,173,193,179,171,166,179,172]
const draw = [142,134,98,119,95,115,92,101,101,108,110,77,98,100,97,96,111,93,108,78,93]
const away = [128,123,96,99,101,96,101,95,114,105,97,111,100,104,110,91,90,116,106,123,115]

const myChart = new Chart(ctx, {
type: 'line',
data: {
    labels: year,//xData,
    datasets: [{
    label: "Home Win",//"Unavailable",
    fill: true,
    backgroundColor: colors.purple.fill,
    pointBackgroundColor: colors.purple.stroke,
    borderColor: colors.purple.stroke,
    pointHighlightStroke: colors.purple.stroke,
    borderCapStyle: 'butt',
    data: home,

    }, {
    label: "Draw",
    fill: true,
    backgroundColor: colors.darkBlue.fill,
    pointBackgroundColor: colors.darkBlue.stroke,
    borderColor: colors.darkBlue.stroke,
    pointHighlightStroke: colors.darkBlue.stroke,
    borderCapStyle: 'butt',
    data: draw,
    }, {
    label: "Away Win",
    fill: true,
    backgroundColor: colors.green.fill,
    pointBackgroundColor: colors.lightBlue.stroke,
    borderColor: colors.lightBlue.stroke,
    pointHighlightStroke: colors.lightBlue.stroke,
    borderCapStyle: 'butt',
    data: away,
    }]
},
options: {
    responsive: false,
    // Can't just just `stacked: true` like the docs say
    scales: {
    yAxes: [{
        stacked: true,
    }]
    },
    animation: {
    duration: 750,
    },
}
});
})();