module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337 || process.env.port),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a3cfe5da026d44df7a568cb6b3012f86'),
    },
  },
});
