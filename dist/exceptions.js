"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = exports.WrongCredentials = exports.RessourceNotFound = void 0;
var RessourceNotFound = /** @class */ (function () {
    function RessourceNotFound(uri) {
        this.uri = uri;
    }
    RessourceNotFound.prototype.toString = function () {
        return "There is no ressource in route " + this.uri;
    };
    return RessourceNotFound;
}());
exports.RessourceNotFound = RessourceNotFound;
var WrongCredentials = /** @class */ (function () {
    function WrongCredentials() {
    }
    WrongCredentials.prototype.toString = function () {
        return "The Credentials are wrong";
    };
    return WrongCredentials;
}());
exports.WrongCredentials = WrongCredentials;
var ServerError = /** @class */ (function () {
    function ServerError() {
    }
    ServerError.prototype.toString = function () {
        return "The server ran into some fatal issues...";
    };
    return ServerError;
}());
exports.ServerError = ServerError;
