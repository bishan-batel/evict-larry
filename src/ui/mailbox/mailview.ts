// import query from "../../utils/$";
import "./left.scss";
import "./right.scss";
import "./header.scss";
import $ from "jquery";
import {uicon} from "../../utils/element";

export default function setup() {
	if ($("#mailview-left").length < 1) return;

	addCustomButtons();
	addIcons();
}

function addCustomButtons() {
	const leftMailview = $("#mailview-left");
	// removed annoying ass inline styling bruutilsh
	leftMailview.removeAttr("style")

	const toolbar = {
		compose: $(".button.compose").get()[0] as HTMLLinkElement,
		refresh: $(".button.checkmail").get()[0] as HTMLLinkElement,
	};


	// add new message button
	const compose = document.createElement("a");
	compose.innerText = "New message";
	compose.href = toolbar.compose.href;
	compose.id = "new-message";
	compose.onclick = toolbar.refresh.onclick;
	leftMailview.append(compose);

	// Refresh buttons
	$(".mailbox a").each((_, ele) => {
		const refresh = $(document.createElement("a"));

		refresh
			.attr({
				href: toolbar.refresh.href,
				onclick: toolbar.refresh.onclick,
			})
			.addClass("mailbox-refresh");

		refresh.append(uicon("refresh"))
		$(ele).append(refresh);
	});

	// remove default buttons
	Object.values(toolbar).forEach(b => b.remove())
}

function addIcons() {
	const namedMailboxes = {
		inbox: "envelope",
		drafts: "edit",
		sent: "paper-plane",
		junk: "hamburger-soda",
		trash: "trash",
	};

	// add folder icon to each mailbox
	$(".mailbox")
		.each((_, ele) => {
				ele.appendChild(uicon("folder"));
			}
		);

	Object
		.entries(namedMailboxes)
		.forEach(([cls, icon]) =>
			$(`.${cls} i`)
				.removeClass("fi-rr-folder")
				.addClass(`fi-rr-${icon}`)
		);

	$(".mailbox i.fi-rr-folder")
		.first()
		.parent()
		.addClass("mailview-left-divider")


	// mail header icons

	const namedHeaderIcons = {
		flagged: "pennant",
		attachment: "clip",
		listmenu: "settings",
		status: "star",
		sortcol: "caret-down"
	};

	Object
		.entries(namedHeaderIcons)
		.forEach(([cls, icon]) => {

			$(`#mailview-top th.${cls}`).each((_, ele) => {
				ele.appendChild(uicon(icon))
			});

		});
}