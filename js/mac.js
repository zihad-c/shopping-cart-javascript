// memory update 

function updateMemory(isMemory) {
    let totalMemoryCost = document.getElementById('memory-cost');
    if (isMemory == '8gb') {
        totalMemoryCost.innerText = 0;
    }
    else if (isMemory == '16gb') {
        totalMemoryCost.innerText = 180;
    }
    return totalMemoryCost;
}

// storage update 

function updateStorage(isStorage) {
    let totalStorageCost = document.getElementById('storage-cost');
    if (isStorage == '256gb') {
        totalStorageCost.innerText = 0;
    }
    else if (isStorage == '512gb') {
        totalStorageCost.innerText = 100;
    }
    else if (isStorage == '1tb') {
        totalStorageCost.innerText = 180;
    }
    return totalStorageCost;
}

// update delivery 

function updateDelivery(isDelivery) {
    let totalDeliveryCost = document.getElementById('delivery-cost');
    if (isDelivery == '0') {
        totalDeliveryCost.innerText = 0;
    }
    else if (isDelivery == '20') {
        totalDeliveryCost.innerText = 20;
    }
    return totalDeliveryCost;
}


// total calculation 

// calculate memory 

function calculate(memory, storage, delivery) {
    let memoryCostText = updateMemory(memory).innerText;
    const memoryCost = parseInt(memoryCostText);

    // calculate storage
    let storageCostText = updateStorage(storage).innerText;
    const storageCost = parseInt(storageCostText);

    // calculate delivery
    let deliveryCostText = updateDelivery(delivery).innerText;
    const deliveryCost = parseInt(deliveryCostText);

    let currentBalance = document.getElementById('subtotal').innerText;

    let totalBalance = document.getElementById('total-amount');
    totalBalance.innerText = memoryCost + storageCost + deliveryCost + parseInt(currentBalance);

    // gross total 
    let totalAmount = document.getElementById('gross-total');
    totalAmount.innerText = totalBalance.innerText;

}


// add event listener 

// update memory cost 

document.getElementById('memory-8gb').addEventListener('click', function () {

    updateMemory('8gb');
    calculate('8gb');
});

document.getElementById('memory-16gb').addEventListener('click', function () {

    updateMemory('16gb');
    calculate('16gb');
});
// update sttoage cost

document.getElementById('storage-256gb').addEventListener('click', function () {

    updateStorage('256gb');
    calculate('256gb');
});


document.getElementById('storage-512gb').addEventListener('click', function () {

    updateStorage('512gb');
    calculate('512gb');
});

document.getElementById('storage-1tb').addEventListener('click', function () {

    updateStorage('1tb');
    calculate('1tb');
});


// update delivery cost

document.getElementById('delivery-0').addEventListener('click', function () {

    updateDelivery('0');
    calculate('0');
});

document.getElementById('delivery-20').addEventListener('click', function () {

    updateDelivery('20');
    calculate('20');
});

// update promo code 

const promoInput = document.getElementById('promo');
const applyBtn = document.getElementById('apply');
applyBtn.addEventListener('click', function () {
    const promoCode = promoInput.value;
    const totalBalance = document.getElementById('total-amount');
    // const discoutAmount = totalBalance.innerText;

    const promoError = document.getElementById('promo-error');

    if (promoCode == "stevekaku") {
        // totalBalance.innerText == 1299 - (1299/5);
        const totalBalanceInText = totalBalance.innerText;
        const totalBalanceInNumber = parseFloat(totalBalanceInText);
        // totalBalance.innerText = Math.floor(1299 - (1299 / 5));
        totalBalance.innerText = Math.floor(totalBalanceInNumber - (totalBalanceInNumber / 5));

        // clearing the input field 
        promoInput.value = "";

        // disable applyBtn button
        document.getElementById('apply').disabled = "true";

        // promo-error hidden 
        promoError.style.display = "none";

        // gross total changed
        const totalAmount = document.getElementById('gross-total');
        totalAmount.innerText = totalBalance.innerText;
    }

    else {
        // console.log("invalid promo code applied");
        promoError.style.display = "block";
    }
})