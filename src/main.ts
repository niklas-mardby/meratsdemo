import "./style.css";

// ====== DEL 1 ===========================================

const handleClick = (event: MouseEvent): void => {
	console.log(
		`Mouse clicked at (${event.clientX}, ${event.clientY}) coordinates.`
	);
};

// const x: number;

// const greetingsButton = <HTMLButtonElement>document.querySelector(".greeting");

const greetingsButton = document.querySelector(
	"#greeting"
) as HTMLButtonElement;

//if (greetingsButton)
//	greetingsButton.addEventListener("click", handleClick as EventListener);

greetingsButton.addEventListener("click", handleClick);

// type assertions as eller <>, vi föredrar as

// ====== DEL 2 ===========================================

// id fruit

type InputEventHandler = (event: InputEvent) => void;

const handleTextInput: InputEventHandler = (event) => {
	const inputField = event.target as HTMLInputElement;
	console.log(`Value from input field: ${inputField.value}`);
};

const textInput = document.querySelector("#fruit") as HTMLInputElement;

textInput.addEventListener("input", handleTextInput as EventListener);

// ====== DEL 3ish ===========================================

const x: number = 12;
console.log(typeof x);

const testElement = document.querySelector("#fruit");
// console.log(testElement instanceof HTMLInputElement);

if (testElement instanceof HTMLInputElement) {
	console.log("ja");
	//narrowing!!
} else {
	console.log("nej");
}
