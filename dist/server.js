'use strict';

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _sqlite = require('sqlite');

var _sqlite2 = _interopRequireDefault(_sqlite);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _bluebird2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _bluebird2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var app = (0, _express2.default)();
var menus = undefined;
var foods = undefined;

app.use('/', _express2.default.static(__dirname + '/'));
app.set('port', process.env.port || 3000);

app.get('/categories', function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res, next) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return _sqlite2.default.all('SELECT name FROM sqlite_master WHERE type=\'table\';');

                    case 2:
                        menus = _context.sent;

                        res.setHeader('Content-Type', 'application/json');
                        res.send(JSON.stringify(menus));

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}());

app.get('/menus', function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(req, res, next) {
        var category;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        category = req.query.category;

                        if (!(category !== undefined)) {
                            _context2.next = 7;
                            break;
                        }

                        _context2.next = 4;
                        return _sqlite2.default.all('SELECT * FROM ' + category);

                    case 4:
                        foods = _context2.sent;

                        res.setHeader('Content-Type', 'application/json');
                        res.send(JSON.stringify(foods));

                    case 7:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function (_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
    };
}());

_bluebird2.default.resolve().then(function () {
    return _sqlite2.default.open('./menu.db', { Promise: _bluebird2.default });
}).catch(function (err) {
    return console.error(err.stack);
}).finally(function () {
    return app.listen(app.get('port'), function () {
        return console.log('App running on port', app.get('port'));
    });
});