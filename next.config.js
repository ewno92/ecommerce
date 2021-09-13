module.exports = {
  reactStrictMode: true,
  env: {
    MONGO_URL: process.env.MONGODB_URL,
    BASE_URL: process.env.BASE_URL,
  },
};
