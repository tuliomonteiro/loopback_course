'use strict';

module.exports = function(app) {

    app.dataSources.mongodb.automigrate(['Product','Company','Account'], err => {
        if (err) throw err;
        console.log('Models Synced!');
    })

}