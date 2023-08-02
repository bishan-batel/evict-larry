import "./ui/common/roundcube.scss";
import "./ui/common/global.scss";
import "./ui/common/header.scss";
import $ from "jquery";

import mailview from "./ui/mailbox/mailview";
import login from "./ui/login/login";

// Adding icon
const iconLink = document.createElement("link")
iconLink.rel = "stylesheet";
iconLink.href = "https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css";
document.head.appendChild(iconLink);

// replacel ogo

$("#logo").each((_, ele) => {
	(ele as HTMLImageElement).src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Roundcube_logo_icon.svg/1200px-Roundcube_logo_icon.svg.png";
})


mailview();
login();