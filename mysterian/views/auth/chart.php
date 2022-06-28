
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>
    <link rel="stylesheet" type="text/css" href="../css/reportstyle.css"> 
    <link rel="stylesheet" type="text/css" href="../css/AdminStyle.css">

    <title>Report</title>
    <style> .center-block { display: block;margin-left: auto;margin-right: auto; }</style>
</head>
<body>
<header class="header">
        <div class="headerNav" style="margin-left: 5%;">
            <a href="AdminPage.php" >Home</a>
            <a href="../public/home/home.php">Mysteria site</a>
            <a href="../public/import.php">Import</a>
            <a href="adminAddForm.php">Add admin</a>
            <a href="chart.php">Report</a>
            <a href="FoodAddForm.php">Add Menu</a>
            <a href="../shared/logout.php">Log Out </a>
            <form id="srchform" role="search">
                <input type="search" id="query" name="q" placeholder="Search" aria-label="search through site content">
                <button id="srchbtn" type="submit"><img id="srchimg" src="../resources/images/searchwhite.png"></button>
            </form>
        </div>
        <div>
            <label>
            </label>
        </div>
    </header> 
<div class="container">
    <center>
        <div id="container">
        </div>
    </center>
 </div>
<?php
require_once '../db/connectVar.php';
$query = "SELECT * FROM orders o INNER JOIN foodmenu f ON f.food_id = o.food_id GROUP BY o.food_id, food_name "; 
$getData = $connectVariable->query($query);
?>
<script>
    Highcharts.chart('container', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            //textcolor:purple,
            text: 'Order Report' 
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Popularity',
            colorByPoint: true,
            data: [
                <?php
                $data = '';
                if ($getData->num_rows>0){
                    while ($row = $getData->fetch_object()){
                        $data.='{ name:"'.$row->food_name.'",y:'.$row->quantity.'},';
                    }
                }
                echo $data;
                ?>
            ]
        }]
    });
</script>
</body>

<footer class="footer">
    <div id="btm" class="feedback col-3">
        <address>
                call: +251110000101<br> +251967882862
            </address>
        <p style="font-size:16px; text-align:center; ">Copyright &copy; Mysteria 2021/22, all rights reserved </p>
    </div>
</footer>
</html>