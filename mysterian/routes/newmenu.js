var express = require('express');
var router = express.Router();

/*var upload = multer({
    storage: storage
});*/

var db = require('../config/db_Connection');
router.get('/addmenu', function(req, res, next) {
    res.render('addfood');
    upload
});


// to store user input detail on post request
router.post('/addmenu', function(req, res, next) {

    inputData = {
        Price: req.body.Price,
        Ingredients: req.body.Ingredients,
        FoodCategory: req.body.FoodCategory,
        FoodName: req.body.FoodName,
        ItemImage: req.body.ItemImage
    };
    // check unique email address
    var sql = 'SELECT * FROM foodmenu WHERE food_name =?';
    db.query(sql, [inputData.FoodName], (err, data, fields) => {

        /*
                var storage = multer.diskStorage({
                    destination: (req, file, callBack) => {
                        callBack(null, './resources/images/') // './public/images/' directory name where save the file
                    },
                    filename: (req, file, callBack) => {
                        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
                    }
                })

                var upload = multer({
                    storage: storage
                });



                //@type   POST
                //route for post data
                app.post("/post", upload.single('image'), (req, res) => {
                    if (!req.file) {
                        console.log("No file upload");
                    } else {
                        console.log(req.file.filename)
                        var imgsrc = 'http://127.0.0.1:3000/images/' + req.file.filename
                        var insertData = "INSERT INTO  	foodmenu i(file_src)VALUES(?)"
                        db.query(insertData, [imgsrc], (err, result) => {
                            if (err) throw err
                            console.log("file uploaded")
                        })
                    }
                });*/
        if (err) throw err
        if (data.length > 1) {
            var msg = inputData.FoodName + "food type already exist";
        } else {

            db.query('INSERT INTO foodmenu SET ?', { food_name: inputData.FoodName, food_category: inputData.FoodCategory, ingredient: inputData.Ingredients, price: inputData.Price }, (error, results) => {
                if (error) {
                    console.log(error);
                }
                var msg = "you have succesfully added a menu";
            });
            res.render('addfood', { alertMsg: msg });
        }

    });

});
module.exports = router;