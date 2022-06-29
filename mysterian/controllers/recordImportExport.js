const fs = require('fs')
const path = require('path')
const csvtojson = require('csvtojson');
var Json2csvParser = require('json2csv').Parser;

const dbConn = require("../config/db_Connection")
const { uploadImage, uploadCSVFile } = require('../lib/fileUpload');

// download CSV template
exports.downloadFile = (req, res, next) => {


    const filePath = 'public/csvFiles/csvSampleFormat.csv'
    res.download(filePath, function(err) {
        console.log("downloaded")
        if (err) {
            console.log(err)
            req.flash('error', "File doesn't found")
            return err;
        }
        req.flash('msg', "You download the template. Prepare as per the template and uplaod it here")
    });
}


// Importing new Records from CSV file
exports.importRecord = async(req, res, next) => {

    /* Checking if the CSV file upload or not */
    const CSVFile = uploadCSVFile.single('csvFile')
    CSVFile(req, res, function(err) {
        if (req.file == undefined || err) {
            req.flash("error", "Error: No file/wrong file selected! Please select CSV file!");
            return res.redirect("./importCSV");
        }

        //The file is uploaded and Now read the records.
        filePath = 'public/csvFiles/' + req.file.filename
        csvtojson().fromFile(filePath).then(source => {
            let userId;
            if (req.session.level == 1)
                userId = 0;
            else
                userId = req.session.userID;

            // Fetching the data from each row and inserting to the table "courses"
            for (var i = 0; i < source.length; i++) {
                var name = source[i]["food_name"],
                    category = source[i]["food_category"],
                    imagePath = source[i]["imagePath"],
                    ingredients = source[i]["ingredients"],
                    price = source[i]["price"],
                    date_added = source[i]["date_added"],
                    quantity = source[i]["quantity"]

                var records = [
                    name,
                    category,
                    imagePath,
                    ingredients,
                    price,
                    date_added,
                    quantity
                ];
                //Import the record to Mysql database, courses table
                let query3 = `INSERT INTO food_menu(food_name , 
                                    food_category , 
                                    imagePath , 
                                    ingredient ,
                                    price ,
                                    date_added ,
                                    quantity ) ` + ` VALUES( ? , ? , ? , ? , ? , ? , ? )`;

                dbConn.query(query3, records, (error, results, fields) => {
                    if (error) {
                        console.log(error);
                        fs.unlinkSync(filePath)
                        error = req.flash("error", "Something wrong! Records are not imported")
                        return res.redirect("../pages/importCSV");
                    }
                });
            }
            fs.unlinkSync(filePath)
            return res.render("../views/pages/importCSV", { impMsg: 'Records inserted successfully!!!' });
        });
    });
}

// Export Mysql table "courses" into CSV & download it.
// Export Mysql table "courses" into CSV & download it.
exports.exportMysql2CSV = (req, res, next) => {

    let query = "SELECT * FROM food_menu";
    dbConn.query(query, function(err, results, fields) {
        if (err)
            throw err;

        const jsonMenusRecord = JSON.parse(JSON.stringify(results));

        // -> Convert JSON to CSV data
        const csvFields = ['food_name', 'food_category', 'imagePath', 'ingredients', 'price', 'date_added',
            'quantity'
        ]

        const json2csvParser = new Json2csvParser({ csvFields });
        const csv = json2csvParser.parse(jsonMenusRecord);

        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Content-Disposition", "attachment; filename=menu_Record.csv");
        res.status(200).end(csv);
    });
}