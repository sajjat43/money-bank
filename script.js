document.getElementById('totalCalculate').addEventListener('click', function() {

    // -----income------

    const incomeTotal = document.getElementById("income");
    const getIncomeText = incomeTotal.value;
    // console.log(getIncomeText)
    var getInconeNbr = parseFloat(getIncomeText);


    // -----------expenses-------

    const Food = document.getElementById('food');
    const foodCostText = Food.value;
    const getFoodNbr = parseFloat(foodCostText);

    const Rent = document.getElementById('rent');
    const rentText = Rent.value;
    const getRantNbr = parseFloat(rentText);

    const Clothes = document.getElementById('clothes');
    const clothesText = Clothes.value;
    const getClothesNbr = parseFloat(clothesText);
    // ------total expenses-------

    if (getInconeNbr > 0 && getFoodNbr > 0 && getRantNbr > 0 && getClothesNbr > 0) {

        const totalExpenses = getFoodNbr + getRantNbr + getClothesNbr;
        document.getElementById('expenses').innerText = totalExpenses;

        // ------- remening balance ------------

        if (getInconeNbr > totalExpenses) {
            const remeningBalance = getInconeNbr - totalExpenses;

            document.getElementById('balance').innerText = remeningBalance;

        } else {

            document.getElementById('balance').innerText = 'First earn';
            document.getElementById('expenses').innerText = 'More then your Balance';
        }
    } else {
        document.getElementById('expenses').innerText = 'Give integer Number';
        document.getElementById('balance').innerText = 'Give integer Number';

    }


    document.getElementById('save').addEventListener('click', function() {

        const Persent = document.getElementById('persent');
        const persentText = Persent.value;
        const persentNbr = parseFloat(persentText);
        if (persentNbr > 0) {
            const balancePersent = document.getElementById('balance');
            const balanceText = balancePersent.innerText;
            const balanceNbr = parseFloat(balanceText);

            const totalSavingAmount = balanceNbr * persentNbr / 100;

            document.getElementById('saving').innerText = totalSavingAmount;



            const Remaning = document.getElementById('remaning')

            const rem = balanceNbr - totalSavingAmount;
            Remaning.innerText = rem;
        } else {
            document.getElementById('saving').innerText = 'totalSavingAmount';
            document.getElementById('remaning').innerText = 'rem';
        }




    });

});