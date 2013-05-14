/*
 * Copyright 2011-2013 Lukas Vlcek
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview The default implementation of ServiceFactory. It can return Service for two
 * different names: 'xhr' and 'jsonp'.
 * @author Lukas Vlcek (lukas.vlcek@gmail.com)
 */

goog.provide('org.bigdesk.net.DefaultServiceFactory');

goog.require('org.bigdesk.net.ServiceFactory');
goog.require('org.bigdesk.net.XhrService');
goog.require('org.bigdesk.net.JsonpService');

goog.require('goog.Uri');

/**
 * Create a new instance.
 * @constructor
 * @implements {org.bigdesk.net.ServiceFactory}
 */
org.bigdesk.net.DefaultServiceFactory = function () {};

/** @inheritDoc */
org.bigdesk.net.DefaultServiceFactory.prototype.getService = function (name, uri) {

    switch(name)
    {
        case 'xhr':
            return new org.bigdesk.net.XhrService(uri);
            break;

        case 'jsonp':
            return new org.bigdesk.net.JsonpService();
            break;

        default:
            throw new Error("Unsupported name of service implementation ["+name+"]");
    }
};