//your JS code here. If required.
let res = '';

for (let i = 0; i <= 20; i++) {
	if (i%3 == 0 && i%5 == 0) {
		res += 'FizzBuzz\n';
	}else if (i%3 == 0) {
		res += 'Fizz\n';
	}else if (i%5 == 0) {
		res += 'Buzz\n';
	}else {
		res += i+"\n";
	}
}

alert(res);