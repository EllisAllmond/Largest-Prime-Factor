// main javascript file

var main = function(){

}

var calcLargestPrime = function(){
	var $numToPrime = $("#NumberToPrime").val();
	var primeNumberArray = [];
	var primeFactorsArray = [];

	//make an array of possible primes
	for (j = 1; j <= Math.sqrt($numToPrime); j++)
	{
	    if (isPrime(j))
	        primeNumberArray.push(j);
	}

	//iterate through possible prime numbers push all primes that divide into the input number
	for(i = 0; i <= primeNumberArray.length; i++){
		if($numToPrime % primeNumberArray[i] == 0){
			primeFactorsArray.push(primeNumberArray[i]);
		}
	}

	//use last item in working primes array for largest prime factor
	$("#LargestFactor").text(primeFactorsArray[primeFactorsArray.length-1]);
}

var isPrime = function(n){
	if (n < 2) return false;

	var maxIteration = Math.ceil(Math.sqrt(n));
	for (i = 2; i < maxIteration; i++) {
        if(n % i == 0)
            return false;
    }

    return true;
}

$(document).ready(main);