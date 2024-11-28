import { html, render } from "lit";
import PageBase from "./pageBase.js";

export default class Error404Page extends PageBase {
	title = "404: File Not Found";

    constructor() {
        super();
    }

    render(parent:HTMLElement) {
        return render(html`
            <h1>Wrapper: Offline</h1>
			<h2 id="404-file-not-found">404: File Not Found</h2>

			<p>You got a four o’ four<br/>
				You got a four o’ four<br/>
				When the path looks rough ahead<br/>
				And you’re miles and miles<br/>
				From your asset bed<br/>
				You just remember what this error said<br/>
				Boy, you got a four o’ four<br/>
				Yeah, you got a four o’ four</p>
        `, parent);
    }
};