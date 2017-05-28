'use strict';

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.send = function () {
    var url = window.location.href;
    var contact_id = document.cookie;
    if (!contact_id) {
        var randomId = Math.floor(Math.random() * 100000000) + 1;
        document.cookie = "contact_id=" + randomId;
        contact_id = randomId;
    }

    _axios2.default.post('https://rails-contact-tracking.herokuapp.com/accesses', {
        url: url,
        contact_id: contact_id
    });
};