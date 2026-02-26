// Static exchange rates (based on USD)
const rates = {
  USD: 1,
  PKR: 278,
  INR: 83,
  EUR: 0.92,
  GBP: 0.78,
  SAR: 3.75,
  AED: 3.67
};

// Currency full names (for words output)
const currencyNames = {
  USD: "US Dollars",
  PKR: "Pakistani Rupees",
  INR: "Indian Rupees",
  EUR: "Euros",
  GBP: "Pounds",
  SAR: "Saudi Riyals",
  AED: "UAE Dirhams"
};

// Dropdown elements
const fromSelect = document.getElementById("fromCurrency");
const toSelect = document.getElementById("toCurrency");

// Fill dropdowns with currency codes
for (let c in rates) {
  fromSelect.add(new Option(c, c));
  toSelect.add(new Option(c, c));
}

// Default values
fromSelect.value = "USD";
toSelect.value = "PKR";

function convert() {
  // Get user input
  const amount = document.getElementById("amount").value;
  const from = fromSelect.value;
  const to = toSelect.value;

  if (amount === "") {
    alert("Enter amount");
    return;
  }

  // Convert from selected currency → USD
  let usdAmount = amount / rates[from];

  // Convert USD → target currency
  let converted = usdAmount * rates[to];

  // Round for words (we don’t want decimals in words)
  let rounded = Math.round(converted);

  // Show numeric result
  document.getElementById("numericResult").innerText =
    `${amount} ${from} = ${converted.toFixed(2)} ${to}`;

  // Show word result with country currency name
  document.getElementById("wordResult").innerText =
    `In words: ${numberToWords(rounded)} ${currencyNames[to]}`;
}

/* =========================
   NUMBER TO WORDS FUNCTION
   ========================= */

function numberToWords(num) {
  const ones = ["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
  const teens = ["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"];
  const tens = ["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];
  const thousands = ["","Thousand","Million","Billion"];

  if (num === 0) return "Zero";

  let word = "";
  let i = 0;

  // Loop through number in chunks of 1000
  while (num > 0) {
    let chunk = num % 1000; // last 3 digits
    if (chunk) {
      word = convertChunk(chunk) + " " + thousands[i] + " " + word;
    }
    num = Math.floor(num / 1000); // remove last 3 digits
    i++;
  }

  return word.trim();
}

// Convert numbers below 1000 into words
function convertChunk(num) {
  const ones = ["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
  const teens = ["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"];
  const tens = ["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];

  let str = "";

  // Handle hundreds
  if (num >= 100) {
    str += ones[Math.floor(num / 100)] + " Hundred ";
    num %= 100;
  }

  // Handle 10–19
  if (num >= 10 && num < 20) {
    str += teens[num - 10];
  } else {
    str += tens[Math.floor(num / 10)] + " ";
    str += ones[num % 10];
  }

  return str.trim();
}
