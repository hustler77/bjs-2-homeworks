function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;
	if (arr.length === 0) {
		return 0;
	} else {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > max) {
				max = arr[i];
			} else if (arr[i] < min) {
				min = arr[i];
			}
			sum += arr[i];
		}
		let avg = (+(sum / arr.length).toFixed(2));

		return { min: min, max: max, avg: avg };
	}
}

function summElementsWorker(...arr) {
	let sum = 0;
	if (arr.length === 0) {
		return 0;
	} else {
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		return (sum);
	}
}

function differenceMaxMinWorker(...arr) {
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	let difference = max - min;
	return arr.length ? difference : 0;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	if (arr.length === 0) {
		return 0;
	} else {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 == 0) {
				sumEvenElement += arr[i];
			} else {
				sumOddElement += arr[i];
			}
		}
		let difference = sumEvenElement - sumOddElement;
		return (difference);

	}
}

function averageEvenElementsWorker(...arr) {
	sumEvenElement = 0;
	countEvenElement = 0;
	if (arr.length === 0) {
		return 0;
	} else {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 == 0) {
				sumEvenElement += arr[i];
				countEvenElement++;
			}
		}
		let result = sumEvenElement / countEvenElement;
		return countEvenElement === 0 ? 0 : result;
	}
}

function makeWork(arrOfArr, func) {
	maxWorkerResult = func(...arrOfArr[0]);
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;

}
