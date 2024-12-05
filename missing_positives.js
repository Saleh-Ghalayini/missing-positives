function first_missing_positive(numbers) {

    positive_numbers = []

    missing_nb = 1

    for (let i = 0; numbers.length; i++) {

        if (numbers[i] > 0) {
            positive_numbers.push(numbers[i])
        }
    }
    
    positive_numbers.sort()

    for (let i = 0; i < positive_numbers.length; i++) {

        if(positive_numbers[i] === missing_nb) {
            missing_nb++
        }

    }
    
    console.log(missing)

}

first_missing_positive([0, 3,2, 5, 7, 4, -1, 1])