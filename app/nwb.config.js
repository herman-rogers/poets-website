module.exports = {
  type: 'react-app',
  webpack: {
    html: {
      title: 'Doctors',
      favicon: './public/favicon.ico',
      meta: { referrer: 'no-referrer' }
    },
    rules: {
      babel: {
        test: /\.(js|jsx)$/
      }
    },
    extra: {
      resolve: {
        extensions: ['.js', '.jsx']
      }
    }
  }
};
