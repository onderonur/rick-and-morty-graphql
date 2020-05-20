import proxy from "@/shared/middlewares/proxy";

// Note about CORS:
// https://nextjs.org/docs/api-routes/introduction
// API Routes do not specify CORS headers, meaning they are same-origin only by default.
// You can customize such behavior by wrapping the request handler with the cors middleware.

export const config = {
  api: {
    bodyParser: false,
  },
};

export default proxy({
  target: process.env.NEXT_PUBLIC_API_URL,
  changeOrigin: true,
  pathRewrite: { "^/api": "" },
});
