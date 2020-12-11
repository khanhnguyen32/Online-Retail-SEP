let controller = {};
let models = require('../models')
let Review = models.Review;
let Sequelize = require('sequelize');
let Op = Sequelize.Op;

controller.add = (review) => {
    return new Promise((resolve, reject) => {
        Review
            .findOne({
                where:{
                    userId: review.userId,
                    productId: review.productId
                }
            })
            .then(data =>{
                if(data){
                    return Review.update(review, {
                        where: {
                            userId: review.userId,
                            productId: review.productId
                         }
                     })
                }
                else{
                    return Review.create(review);
                }
            })

            .then(() =>  { 
                models.Product
                    .findOne({
                        where : { id: review.productId },
                        include: [{ model: models.Review }]
                    
                    })
                    .then(product => {
                        let overallReview = 0;
                        for (let i=0; i<product.Reviews.length; i++){
                            overallReview +=product.Reviews[i].rating;
                        }
                        overallReview = overallReview / product.Reviews.length;
                        return models.Product.update({
                            overallReview: overallReview,
                            reviewCount: product.Reviews.length
                        },{
                            where: { id: product.id }
                        })
                    });  
            })
            
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};
module.exports = controller;