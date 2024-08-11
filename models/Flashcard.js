import { DataTypes } from 'sequelize';

const FlashCard = (sequelize) => {

    const FlashCardModel = sequelize.define("flashcard", {

        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        answer: {
            type: DataTypes.TEXT,
        },
        description: {
            type: DataTypes.TEXT
        },

    });

    return ProductModel;
};

export default Product;
