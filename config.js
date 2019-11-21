const dotenv = require('dotenv');

dotenv.config();
module.exports = {
  cloudninary_cloud_name: 'dqvtfem2i',
  cloudninary_api_key: '685172683961473',
  cloudninary_api_secret:'1Vfmdoj3h-Cc41fCmqF6yBMgL8w',
  decrypt_me: 'WHO_IS_KING_JIMMY',
  dbConnectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/teamwork_devcdb',
  port: process.env.PORT || 5000,
  imagesLocation: `${__dirname}/images`,
};
