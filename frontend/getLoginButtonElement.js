const getLoginButtonElement = (renderPage) => {
	const loginButton = createElement("button", "login-button");
	loginButton.innerText = "Login";
	loginButton.addEventListener("click", () => {
		const loginFormElement = getLoginFormElement(renderPage);
		document.body.innerHTML = "";
		document.body.append(loginFormElement);
		const closeFormButton = getCloseFormButton(renderPage);
		document.body.append(closeFormButton);
	});

	return loginButton;
};
