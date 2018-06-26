const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const _ = require('lodash');


const mongooseUniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  roles: [{type: String}]
});

UserSchema.pre('save', function (next) {
  var user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        next(new Error('error gen salt'));
      } else {
        bcrypt.hash(user.password, salt, (err, hash) => {
          if (err) {
            next(new Error('error gen salt'));
          }
          user.password = hash;
          next();
        });
      }
    });
  } else {
    next();
  }
});

UserSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email','firstName','lastName','roles']);
};

UserSchema.plugin(mongooseUniqueValidator);


const User = mongoose.model('User', UserSchema);

const findUserConfirmPassword = async (email, password) => {
  return new Promise((resolve, reject) => {
    User.findOne({email})
      .then((user) => {
          if (!user) {
            reject('login failed user')
          } else{
            bcrypt.compare(password, user.password, (err, res) => {
              console.log('res', res);
              if (res) {
                resolve(user);
              } else {
                reject('login failed');
              }
            });
          }

        }
      );
  });

}

module.exports.findUserConfirmPassword = findUserConfirmPassword;

module.exports.User = User;
