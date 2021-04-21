		var numbers = [2, 4, 6, 8, 10];
		sumArray(numbers);
		showArray(numbers);

		function showArray(arr) {
			var str = "<table><tr>";
			for (var i=0; i<arr.length; i++) {
				str += "<td>" + arr[i] + "</td>";
			}
			str += "</tr></table>";
			document.write(str);
		}

		function sumArray(arr) {
			var sum = 0;
			for (let num of arr) {
				sum += num;
			}
			numbers.push(sum);
		}