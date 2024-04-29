function mincost(arr) {
    // Sort the array of rope lengths in ascending order
    arr.sort((a, b) => a - b);

    // Initialize the total cost to 0
    let totalCost = 0;

    // Repeat until there is only one rope left
    while (arr.length > 1) {
        // Remove the two shortest ropes from the array
        const firstRope = arr.shift();
        const secondRope = arr.shift();

        // Calculate the cost of connecting these two ropes and add it to the total cost
        const cost = firstRope + secondRope;
        totalCost += cost;

        // Insert the new rope with the combined length back into the array
        arr.push(cost);

        // Re-sort the array to maintain the order
        arr.sort((a, b) => a - b);
    }

    // Return the total cost
    return totalCost;
}

module.exports=mincost;
