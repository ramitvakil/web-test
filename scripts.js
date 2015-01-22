 (function(){
        /* Menu Toggle */
        $('body').on('click touchstart', '#menu-toggle', function(e){
            e.preventDefault();
            $('html').toggleClass('menu-active');
            $('#sidebar').toggleClass('toggled');            
        });
         
        /* Active Menu */
        $('#sidebar .menu-item').hover(function(){
            $(this).closest('.dropdown').addClass('hovered');
        }, function(){
            $(this).closest('.dropdown').removeClass('hovered');
        });

        /* Prevent */
        $('.side-menu .dropdown > a').click(function(e){
            e.preventDefault();
        });
    })();
var sales = [
    [gd(2012, 0, 1), 1652.21], [gd(2012, 1, 1), 1742.14], [gd(2012, 2, 1), 1673.77], [gd(2012, 3, 1), 1649.69],
    [gd(2012, 4, 1), 1591.19], [gd(2012, 5, 1), 1598.76], [gd(2012, 6, 1), 1589.90], [gd(2012, 7, 1), 1630.31],
    [gd(2012, 8, 1), 1744.81], [gd(2012, 9, 1), 1746.58], [gd(2012, 10, 1), 1721.64], [gd(2012, 11, 1), 1684.76]
];

 var dataset = [
            { label: "Sales", data: sales, points: { symbol: "triangle"} }
        ]; 
        var options = {
            series: {
                lines: {
                    show: true
                },
                points: {
                    radius: 3,
                    fill: true,
                    show: true
                }
            },
            xaxis: {
                mode: "time",
                tickSize: [1, "month"],
                tickLength: 0,
                axisLabel: "2012",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 10
            },
            yaxes: {
                axisLabel: "Sales(USD)",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 3
               
            },
            legend: {
                noColumns: 0,
                labelBoxBorderColor: "#000000",
                position: "nw"
            },
            grid: {
                hoverable: true,
                borderWidth: 2,
                borderColor: "#633200",
                backgroundColor: { colors: ["#ffffff", "#EDF5FF"] }
            },
            colors: ["#FF0000", "#0022FF"]
        };
 
        $(document).ready(function () {
            $.plot($("#sales1"), dataset, options);
            $("#sales1").UseTooltip();
        });
        function gd(year, month, day) {
            return new Date(year, month, day).getTime();
        }
 
        var previousPoint = null, previousLabel = null;
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
 
        $.fn.UseTooltip = function () {
            $(this).bind("plothover", function (event, pos, item) {
                if (item) {
                    if ((previousLabel != item.series.label) || (previousPoint != item.dataIndex)) {
                        previousPoint = item.dataIndex;
                        previousLabel = item.series.label;
                        $("#tooltip").remove();
 
                        var x = item.datapoint[0];
                        var y = item.datapoint[1];
 
                        var color = item.series.color;
                        var month = new Date(x).getMonth();
 
                        //console.log(item);
 
                        if (item.seriesIndex == 0) {
                            showTooltip(item.pageX,
                            item.pageY,
                            color,
                            "<strong>" + item.series.label + "</strong><br>" + monthNames[month] + " : <strong>" + y + "</strong>(USD)");
                        } else {
                            showTooltip(item.pageX,
                            item.pageY,
                            color,
                            "<strong>" + item.series.label + "</strong><br>" + monthNames[month] + " : <strong>" + y + "</strong>(%)");
                        }
                    }
                } else {
                    $("#tooltip").remove();
                    previousPoint = null;
                }
            });
        };

 $.fn.UseTooltip = function () {
            $(this).bind("plothover", function (event, pos, item) {
                if (item) {
                    if ((previousLabel != item.series.label) || (previousPoint != item.dataIndex)) {
                        previousPoint = item.dataIndex;
                        previousLabel = item.series.label;
                        $("#tooltip").remove();
 
                        var x = item.datapoint[0];
                        var y = item.datapoint[1];
 
                        var color = item.series.color;
                        var month = new Date(x).getMonth();
 
                        //console.log(item);
 
                        if (item.seriesIndex == 0) {
                            showTooltip(item.pageX,
                            item.pageY,
                            color,
                            "<strong>" + item.series.label + "</strong><br>" + monthNames[month] + " : <strong>" + y + "</strong>(USD)");
                        } else {
                            showTooltip(item.pageX,
                            item.pageY,
                            color,
                            "<strong>" + item.series.label + "</strong><br>" + monthNames[month] + " : <strong>" + y + "</strong>(%)");
                        }
                    }
                } else {
                    $("#tooltip").remove();
                    previousPoint = null;
                }
            });
        };



 function showTooltip(x, y, color, contents) {
            $('<div id="tooltip">' + contents + '</div>').css({
                position: 'absolute',
                display: 'none',
                top: y - 40,
                left: x - 120,
                border: '2px solid ' + color,
                padding: '3px',
                'font-size': '9px',
                'border-radius': '5px',
                'background-color': '#fff',
                'font-family': 'Verdana, Arial, Helvetica, Tahoma, sans-serif',
                opacity: 0.9
            }).appendTo("body").fadeIn(200);
        }
