// initialize elements
const clock = document.querySelector(".clock");
const hourElm = document.querySelector(".hour");
const minElm = document.querySelector(".min");
const secElm = document.querySelector(".sec");
const hourColumn1 = document.querySelector(".hour-column.column-1");
const hourColumn2 = document.querySelector(".hour-column.column-2");
const minColumn1 = document.querySelector(".min-column.column-1");
const minColumn2 = document.querySelector(".min-column.column-2");
const secColumn1 = document.querySelector(".sec-column.column-1");
const secColumn2 = document.querySelector(".sec-column.column-2");

const updateTimeInterval = setInterval(updateTime, 1000);

function updateTime() {
	const date = new Date();

	const hour = date.getHours();
	const min = date.getMinutes();
	const sec = date.getSeconds();

	const binaryHour = fillLength(binary(hour), );
	const binaryMin = fillLength(binary(min), 6);
	const binarySec = fillLength(binary(sec), 6);
	
	const hourLeft = getBinClock(hour).left;
	const hourRight = getBinClock(hour).right;
	const minLeft = getBinClock(min).left;
	const minRight = getBinClock(min).right;
	const secLeft = getBinClock(sec).left;
	const secRight = getBinClock(sec).right;

	console.log(`
	hour: ${hourLeft} ${hourRight}
	min: ${minLeft} ${minRight}
	sec: ${secLeft} ${secRight}
		`);

	for (let i = 0; i < 4; i++) {

		// for hour
		if (hourLeft[i] == 1) hourColumn1.querySelector(`.row-${i + 1}`).classList.add('light-row');
		else hourColumn1.querySelector(`.row-${i + 1}`).classList.remove('light-row');
		if (hourRight[i] == 1) hourColumn2.querySelector(`.row-${i + 1}`).classList.add('light-row');
		else hourColumn2.querySelector(`.row-${i + 1}`).classList.remove('light-row');

		// for minutes
		if (minLeft[i] == 1) minColumn1.querySelector(`.row-${i + 1}`).classList.add('light-row');
		else minColumn1.querySelector(`.row-${i + 1}`).classList.remove('light-row');
		if (minRight[i] == 1) minColumn2.querySelector(`.row-${i + 1}`).classList.add('light-row');
		else minColumn2.querySelector(`.row-${i + 1}`).classList.remove('light-row');
	
		// for secconds
		if (secLeft[i] == 1) secColumn1.querySelector(`.row-${i + 1}`).classList.add('light-row');
		else secColumn1.querySelector(`.row-${i + 1}`).classList.remove('light-row');
		if (secRight[i] == 1) secColumn2.querySelector(`.row-${i + 1}`).classList.add('light-row');
		else secColumn2.querySelector(`.row-${i + 1}`).classList.remove('light-row');
	}
}

function binary(number) {
	let tmp = Math.abs(number);
	let result = "";
	const floor = Math.floor
	while (tmp >= 1) {
		result = tmp%2 + result;
		tmp = floor(tmp / 2);
	}

	return result
}

function fillLength(bin, maxLength, fillWith = "0") {
	let tmpBin = String(bin);
	if (tmpBin.length <= maxLength) {
		for (let i = tmpBin.length; i < maxLength; i++) {
			tmpBin = fillWith + tmpBin;
		}
	}
	
	return tmpBin;
}

function getBinClock(decimalNumber) {
	const tmp = fillLength(decimalNumber, 2, "0")
	const leftNumber = String(tmp).slice(0, 1);
	const rightNumber = String(tmp).slice(1, 2);
	const leftBinaryNumber = fillLength(binary(leftNumber), 4);
	const rightBinaryNumber = fillLength(binary(rightNumber), 4);
	
	return {left: leftBinaryNumber, right: rightBinaryNumber}
}	

