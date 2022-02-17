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
            document.getElementById('balance').style.color = 'red';
            document.getElementById('expenses').innerText = 'More then your Balance';
            document.getElementById('expenses').style.color = 'red';


        }
    } else {
        document.getElementById('expenses').innerText = 'Give positive integer Number';
        document.getElementById('expenses').style.color = 'red';
        document.getElementById('balance').innerText = 'Give positive integer Number';
        document.getElementById('balance').style.color = 'red';


    }

    // ------------persent and saving , remeningBalance--------
    document.getElementById('save').addEventListener('click', function() {

        const Persent = document.getElementById('persent');
        const persentText = Persent.value;
        const persentNbr = parseFloat(persentText);
        // ------------- persent calculation ---------------
        if (persentNbr > 0) {
            const balancePersent = document.getElementById('income');
            const balanceText = balancePersent.value;
            const balanceNbr = parseFloat(balanceText);

            const totalSavingAmount = balanceNbr * persentNbr / 100;
            // if (totalSavingAmount > totalExpenses) {

            document.getElementById('saving').innerText = totalSavingAmount;
            // } else {
            //     document.getElementById('saving').innerText = 'You need to earn more money';
            // }



            // --------remening Balance calculation -------------- 

            const Remaning = document.getElementById('remaning')



            const balance = document.getElementById('balance');
            const balanceTextFild = balance.innerText;
            const balanceNumber = parseFloat(balanceTextFild);
            if (balanceNumber > totalSavingAmount) {
                const rem = balanceNumber - totalSavingAmount;

                Remaning.innerText = rem;
            } else {
                document.getElementById('saving').innerText = 'Balance not enough to save money';
                document.getElementById('saving').style.color = 'red';
                document.getElementById('remaning').innerText = 'You need to earn more money';
                document.getElementById('remaning').style.color = 'red';
            }

        } else {
            document.getElementById('saving').innerText = 'Give integer Valu ';
            document.getElementById('saving').style.color = "red";
            document.getElementById('remaning').innerText = 'Learn how to positive input Integer valu';
            document.getElementById('remaning').style.color = 'red';

        }




    });

});