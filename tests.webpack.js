var context = require.context('./MapStore2/web/client/utils', true, /-test\.jsx?$/);
context.keys().forEach(context);
module.exports = context;
