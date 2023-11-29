const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'hip hop',
  },
  {
    tag_name: 'pop',
  },
  {
    tag_name: 'jazz',
  },
  {
    tag_name: 'rock',
  },
  {
    tag_name: 'reggae',
  },
  {
    tag_name: 'bluegrass',
  },
  {
    tag_name: 'country',
  },
  {
    tag_name: 'classical',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;