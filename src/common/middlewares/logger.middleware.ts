export const loggerMiddleware = (req, res, next) => {
  console.log(`Request...${req.path}`);
  next();
};