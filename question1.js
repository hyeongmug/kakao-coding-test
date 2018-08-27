var arr1 = [9, 20, 28, 18, 11];
var arr2 = [30, 1, 21, 17, 28];

var n = 6;

kakao_test1(arr1, arr2, n);


function kakao_test1(arr1, arr2, n) {

	var arr1_sub = gen(arr1);
	var arr2_sub = gen(arr2);

	function gen(arr) {
		return arr.map(function(value) {
			var str = value.toString(2);
			if (str.length < n) {
				var gap = n - str.length;
				var zero_str = '';
				for (var i = 0; i < gap; i++) {
					zero_str += '0';
				}
				return zero_str + str;
			} else {
				return str;
			}
		})
	}


	var result = arr1_sub.map(function(value, index) {
		var str1 = value;
		var str2 = arr2_sub[index];

		var result_str = '';

		for (var i = 0; i < n; i++) {
			result_str += Number(str1[i]) | Number(str2[i]) ? '#' : ' ';
		}

		return result_str;
	});

	return result;

}