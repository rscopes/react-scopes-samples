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
 * Date: 25/01/2017
 * Time: 11:08
 */
import Rescope from "rescope";
import StoreContext from "./StoresContext";

function NewsListComp( target = document.createElement('div') ) {
    
    this.setState = ( state ) => {
        console.log("redraw")
        target.innerHTML =
            (
                state.userEvents &&
                state.userEvents.events &&
                state.userEvents.events
                     .map(
                         ( evt ) => `
                                    <div style="border: solid 1px lightgrey;border-radius: 3px">
                                        <b><u><center>Event type : ${evt.type}</center></u></b>
                                        <p>${evt.text}</p>
                                    </div>`
                     ).join()
                || "<b><u><center>Loading...</center></u></b>"
            );
    };
    this.node = target;
}

window.Rescope = Rescope;
window.StoreContext = StoreContext;
window.NewsListComp = NewsListComp;

export default NewsListComp;