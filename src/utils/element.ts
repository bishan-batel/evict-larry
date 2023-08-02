export function uicon(cls: string): HTMLElement {
	const i = document.createElement("i");
	i.classList.add("fi", `fi-rr-${cls}`);

	return i;
}