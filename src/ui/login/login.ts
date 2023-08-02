import "./login.scss"
import {uicon} from "../../utils/element";
import $ from "jquery";

export default () => {
	const prependIcon = (icon: string) => (_, ele) => {
		const txt = ele.innerText;
		ele.innerHTML = "";
		ele.appendChild(uicon(icon))
		ele.append(txt)
	}

	$(".error, .warning").each(prependIcon("triangle-warning"));

	const submit = $("#rcmloginsubmit").get()[0]
	const normalBehaviour = submit.click

	console.log(submit);
	console.log($(".loading"));

	submit.click = () => {
		normalBehaviour();
		requestAnimationFrame(() => {
			console.log("Adding");
		})
		$(".loading").each(prependIcon("loading"));
	}

	const messageObserver = new MutationObserver(() => {
		$(".loading").each(prependIcon("loading"));
	});
}