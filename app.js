let humanScore = 0;
let computerScore = 0;
const opcionesValidas = ['piedra', 'papel', 'tijera'];

function getComputerChoice() {
	const choices = ['piedra', 'papel', 'tijera'];
	const randomIndex = Math.floor(Math.random() * choices.length);
	return choices[randomIndex];
}

function getHumanChoice() {
	const HumanChoice = prompt('Elije Piedra, Papel o Tijera').toLowerCase();
	return opcionesValidas.includes(HumanChoice) ? HumanChoice : null;
}

function playRound(humanChoice, computerChoice) {
	const humanSelection = humanChoice();
	const computerSelection = computerChoice();

	if (humanSelection === null) {
		console.log('Entrada no válida. Por favor, elija nuevamente.');
		return playRound(humanChoice, computerChoice);
	}

	if (humanSelection === computerSelection) {
		console.log(`Empate: ambos eligieron ${humanSelection}.`);
	} else if (
		(humanSelection === 'piedra' && computerSelection === 'tijera') ||
		(humanSelection === 'papel' && computerSelection === 'piedra') ||
		(humanSelection === 'tijera' && computerSelection === 'papel')
	) {
		humanScore++;
		console.log(`¡Ganas esta ronda! ${humanSelection} vence a ${computerSelection}.`);
	} else {
		computerScore++;
		console.log(`¡Pierdes esta ronda! ${computerSelection} vence a ${humanSelection}.`);
	}
}

function playGame() {
	while (true) {
		playRound(getHumanChoice, getComputerChoice);
		console.log(`Puntuación - Humano: ${humanScore}, Computadora: ${computerScore}`);

		if (humanScore === 3) {
			console.log('¡Felicidades! Has ganado el juego.');
			break;
		} else if (computerScore === 3) {
			console.log('La computadora ha ganado el juego.');
			break;
		}
	}
}

playGame();
