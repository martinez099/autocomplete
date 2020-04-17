const uuid = require('uuid/v4');

const KEY_NAME = 'auto-complete:' + uuid();

module.exports.add = function(redis, phrase, cb) {

  redis.zadd(KEY_NAME, 0, phrase, function(error, result) {
    if (error) {
      cb(error);
    } else {
      cb(undefined, result);
    }
  })

};

module.exports.suggest = function(redis, phrase, cb) {

  redis.zrevrangebylex(KEY_NAME, '[' + phrase + '{', '[' + phrase, function(error, result) {
    if (error) {
      cb(error);
    } else {
      cb(undefined, result);
    }
  })

};
