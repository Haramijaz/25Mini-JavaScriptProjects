function convertToWords() {
  let num = document.getElementById("numberInput").value;

  if (num === "") {
    alert("Enter a number");
    return;
  }

  document.getElementById("output").innerText = numberToWords(num);
}

function numberToWords(num) {
  const ones = ["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
  const teens = ["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"];
  const tens = ["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];
  const thousands = ["","Thousand","Million","Billion"];

  if (num == 0) return "Zero";

  let word = "";
  let i = 0;

  while (num > 0) {
    let chunk = num % 1000;
    if (chunk) {
      word = convertChunk(chunk) + " " + thousands[i] + " " + word;
    }
    num = Math.floor(num / 1000);
    i++;
  }

  return word.trim();
}

function convertChunk(num) {
  const ones = ["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
  const teens = ["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"];
  const tens = ["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];

  let str = "";

  if (num >= 100) {
    str += ones[Math.floor(num / 100)] + " Hundred ";
    num %= 100;
  }

  if (num >= 10 && num < 20) {
    str += teens[num - 10];
  } else {
    str += tens[Math.floor(num / 10)] + " ";
    str += ones[num % 10];
  }

  return str.trim();
}
