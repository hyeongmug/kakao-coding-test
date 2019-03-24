// 2. 다트 게임(난이도: 하)


console.log(dartScore("1S2D*3T")); // 37
console.log(dartScore("1D2S#10S")); // 9
console.log(dartScore("1D2S0T")); // 3
console.log(dartScore("1S*2T*3S")); // 23
console.log(dartScore("1D#2S*3S")); // 5
console.log(dartScore("1T2D3D#")); // -4
console.log(dartScore("1D2S3T*")); // 59

function dartScore(dartResult) {

	let dartResultLen = dartResult.length;

	let scoreArray = Array(3);

	let step = -1;

	for (var i = 0; i < dartResultLen; i++) {

		if (Number(dartResult[i]) >= 0) {
			// 0이상의 숫자일때

			step = step + 1;

			if (Number(dartResult[i] + dartResult[i + 1])) {
				// 점수가 2자리일떄 
				scoreArray[step] = Number(dartResult[i] + dartResult[i + 1]);

				i = i + 1;

			} else {

				// 점수가 1자리일때
				scoreArray[step] = Number(dartResult[i]);
			}


		} else {

			if (dartResult[i] == 'S') scoreArray[step] = scoreArray[step] ** 1;

			if (dartResult[i] == 'D') scoreArray[step] = scoreArray[step] ** 2;

			if (dartResult[i] == 'T') scoreArray[step] = scoreArray[step] ** 3;

			if (dartResult[i] == '*') {
				if (step == 0) {
					scoreArray[step] = scoreArray[step] * 2;
				} else {
					scoreArray[step] = scoreArray[step] * 2;
					scoreArray[step - 1] = scoreArray[step - 1] * 2;
				}
			}

			if (dartResult[i] == '#') scoreArray[step] = scoreArray[step] * -1;
		}
	}

	return scoreArray[0] + scoreArray[1] + scoreArray[2]

}