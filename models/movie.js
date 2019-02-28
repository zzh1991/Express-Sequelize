'use strict';
module.exports = (sequelize, DataTypes) => {
  var Movie = sequelize.define('Movie', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIGINT,
    },
    movieId: {
      type: DataTypes.BIGINT,
      field: 'movie_id',
    },
    title: DataTypes.TEXT,
    moveYear: {
      type: DataTypes.INTEGER,
      field: 'movie_year',
    },
    largeImage: {
      type: DataTypes.TEXT,
      field: 'image_large',
    },
    url: DataTypes.TEXT,
    casts: DataTypes.TEXT,
    directors: DataTypes.TEXT,
    summary: DataTypes.TEXT,
    genres: DataTypes.TEXT,
    countries: DataTypes.TEXT,
    viewed: DataTypes.BOOLEAN,
    star: DataTypes.BOOLEAN,
    updateTime: {
      type: DataTypes.DATE,
      field: 'update_time',
      defaultValue: DataTypes.NOW,
    },
    movieType: {
      type: DataTypes.TEXT,
      field: 'movie_type',
      defaultValue: 'NORMAL',
    }
  }, {
    tableName: 'movie_list',
  });

  return Movie;
};
