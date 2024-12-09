import "./style.css";

const handleClick = (event: MouseEvent): void => {
	console.log(
		`Mouse clicked at (${event.clientX}, ${event.clientY}) coordinates.`
	);
};

// const x: number;

// const greetingsButton = <HTMLButtonElement>document.querySelector(".greeting");

const greetingsButton = document.querySelector(
	".greeting"
) as HTMLButtonElement;

//if (greetingsButton)
//	greetingsButton.addEventListener("click", handleClick as EventListener);

greetingsButton.addEventListener("click", handleClick);

// type assertions as eller <>, vi föredrar as
