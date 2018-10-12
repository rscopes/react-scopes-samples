/*
 * Copyright (c)  2018 Wise Wild Web .
 *
 *  MIT License
 *  
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *  
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *  
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *  
 * @author : Nathanael Braun
 * @contact : caipilabs@gmail.com
 */

/**
 * @author Nathanael BRAUN
 *
 * Date: 03/12/2016
 * Time: 09:28
 */
import { Store } from "rescope";

var stubs = require("./_stubs/data");


let status = new ( class  extends Store {
    static context = 'static';
    static state   = {};
    static actions = {
        userEvents( msg ) {
            return { userEvents: msg };
        },
        currentUser( msg ) {
            return { currentUser: msg };
        }
    }
} )()

let MyStoreContext = {
    status,
    appState   : class appState extends Store {
        static state = {
            currentUserId: "MrNice"
        };
        static actions = {
            switchUser( currentUserId ) {
                return { currentUserId };
            }
        }
        // constructor() {
        //     super(...arguments);
        //     browserHistory.listen(( location, action ) => {
        //
        //     });
        // }
        
        // apply( data, newState, changes ) {
        //     // can do some routing here (map on url) (or not)
        //     return newState;
        // }
    },
    currentUser: class currentUser extends Store {
        static use = [ "appState" ];// list of source stores id
        
        apply( data, { appState: { currentUserId: NewUserId } }, changes ) {
            let LastUserId = data && data._id;
            
            console.info("currentUser state updated : ", changes);
            
            if ( NewUserId != LastUserId ) {
                this.wait();// don't propag until released
                setTimeout(
                    () => {
                        // get the user record or whatever...
                        this.push(
                            {
                                _id  : NewUserId,
                                login: NewUserId
                            },
                            () => {
                                status.trigger("currentUser", JSON.stringify(this.data));
                            }
                        );
                        
                        this.release();
                    },
                    500
                );
                status.trigger("currentUser", "user id change ! doing some async...");
                
            }
            
            
            return data;
        }
    },
    userEvents : class userEvents extends Store {
        static use = {
            "!currentUser._id": "myUserId"
        };
        
        apply( data, { myUserId }, changes ) {
            let { cUserId = void 0 } = data || {};
            
            
            if ( myUserId != cUserId ) {
                this.wait();// do some async without pushing
                setTimeout(
                    () => {
                        // get somme user events or whatever...
                        this.push(
                            {
                                userId      : myUserId,
                                count       : stubs[ myUserId ].length,
                                events      : stubs[ myUserId ],
                                eventsByType: stubs[ myUserId ].reduce(
                                    ( res, item ) => {
                                        res[ item.type ] = res[ item.type ] || [ res[ item.type ] ];
                                        res[ item.type ].push(item);
                                        return res;
                                    },
                                    {}
                                )
                            },
                            () => {
                                status.trigger("userEvents", stubs[ myUserId ].length + " events");
                            });
                        this.release();
                    },
                    500
                );
                status.trigger("userEvents", "user data change ! doing some async...");
                
            }
            
            return data;
        }
    }
};


export default { ...MyStoreContext };