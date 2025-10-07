const calculateDays = () => {
    const startDateInput = document.getElementById("startDate").value;
    const endDateInput = document.getElementById("endDate").value;
    const resultDiv = document.getElementById("result");

    // Validate if both dates are selected
    if (!startDateInput || !endDateInput) {
        resultDiv.textContent = "⚠️ Please select both start and end dates.";
        return;
    }

    const startDate = new Date(startDateInput);
    const endDate = new Date(endDateInput);

    // Check if end date is earlier than start date
    if (endDate < startDate) {
        resultDiv.textContent = "❌ End date must be after start date.";
        return;
    }

    // Calculate difference in days
    const timeDiff = endDate - startDate;
    const dayDiff = Math.round(timeDiff / (1000 * 60 * 60 * 24));

    resultDiv.textContent = `✅ Difference: ${dayDiff} days`;
};
